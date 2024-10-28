// src/hooks/useLanguageManager.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageManager = () => {
	const { i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(() => {
		if (typeof window !== 'undefined') {
			// Kiểm tra sessionStorage trước
			const savedLanguage = sessionStorage.getItem('userLanguage');
			if (savedLanguage) {
				return savedLanguage;
			}

			// Nếu không có trong sessionStorage, sử dụng navigator.language
			const browserLang = navigator.language.split('-')[0];
			const supportedLang = ['en', 'vi', 'zh', 'hi'].includes(browserLang) ? browserLang : 'en';

			// Lưu ngôn ngữ từ navigator vào sessionStorage
			sessionStorage.setItem('userLanguage', supportedLang);
			return supportedLang;
		}
		return 'en'; // Fallback cho SSR
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Luôn kiểm tra sessionStorage trước
			const savedLanguage = sessionStorage.getItem('userLanguage');
			if (savedLanguage) {
				setCurrentLanguage(savedLanguage);
				i18n.changeLanguage(savedLanguage);
				document.documentElement.lang = savedLanguage;
			} else {
				const browserLang = navigator.language.split('-')[0];
				const supportedLang = ['en', 'vi', 'zh', 'hi'].includes(browserLang) ? browserLang : 'en';
				setCurrentLanguage(supportedLang);
				i18n.changeLanguage(supportedLang);
				sessionStorage.setItem('userLanguage', supportedLang);
				document.documentElement.lang = supportedLang;
			}
		}
	}, [i18n]);

	const changeLanguage = (lang) => {
		if (typeof window !== 'undefined') {
			setCurrentLanguage(lang);
			i18n.changeLanguage(lang);
			sessionStorage.setItem('userLanguage', lang);
			document.documentElement.lang = lang;
		}
	};

	return { currentLanguage, changeLanguage };
};
