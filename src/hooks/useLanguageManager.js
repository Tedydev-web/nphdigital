// src/hooks/useLanguageManager.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageManager = () => {
	const { i18n } = useTranslation();

	// Thêm event listener để xóa localStorage khi đóng tab/trình duyệt
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleUnload = () => {
				localStorage.removeItem('userLanguage');
			};

			window.addEventListener('beforeunload', handleUnload);
			return () => window.removeEventListener('beforeunload', handleUnload);
		}
	}, []);

	const [currentLanguage, setCurrentLanguage] = useState(() => {
		if (typeof window !== 'undefined') {
			// Kiểm tra localStorage trước
			const savedLanguage = localStorage.getItem('userLanguage');
			if (savedLanguage) {
				return savedLanguage;
			}

			// Nếu không có trong localStorage, sử dụng navigator.language
			const browserLang = navigator.language.split('-')[0];
			const supportedLang = ['en', 'vi', 'zh', 'hi'].includes(browserLang) ? browserLang : 'en';
			return supportedLang;
		}
		return 'en'; // Fallback cho SSR
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Luôn kiểm tra localStorage trước
			const savedLanguage = localStorage.getItem('userLanguage');
			if (savedLanguage) {
				setCurrentLanguage(savedLanguage);
				i18n.changeLanguage(savedLanguage);
				document.documentElement.lang = savedLanguage;
			} else {
				// Nếu không có trong localStorage, sử dụng navigator.language
				const browserLang = navigator.language.split('-')[0];
				const supportedLang = ['en', 'vi', 'zh', 'hi'].includes(browserLang) ? browserLang : 'en';
				setCurrentLanguage(supportedLang);
				i18n.changeLanguage(supportedLang);
				document.documentElement.lang = supportedLang;
			}
		}
	}, [i18n]);

	const changeLanguage = (lang) => {
		if (typeof window !== 'undefined') {
			setCurrentLanguage(lang);
			i18n.changeLanguage(lang);
			localStorage.setItem('userLanguage', lang);
			document.documentElement.lang = lang;
		}
	};

	return { currentLanguage, changeLanguage };
};
