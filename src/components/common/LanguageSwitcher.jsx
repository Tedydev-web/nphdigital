'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

function LanguageSwitcher() {
	const { t, i18n } = useTranslation('common');
	const [selectedLanguage, setSelectedLanguage] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isChanging, setIsChanging] = useState(false);
	const dropdownRef = useRef(null);

	const languages = useMemo(
		() => [
			{ code: 'vi', name: t('common.languageSwitcher.vietnamese'), flag: '🇻🇳' },
			{ code: 'en', name: t('common.languageSwitcher.english'), flag: '🇬🇧' },
			{ code: 'zh', name: t('common.languageSwitcher.chinese'), flag: '🇨🇳' },
			{ code: 'hi', name: t('common.languageSwitcher.hindi'), flag: '🇮🇳' },
		],
		[t]
	);

	useEffect(() => {
		const currentLanguage = languages.find((lang) => lang.code === i18n.language);
		setSelectedLanguage(currentLanguage);
	}, [i18n.language, languages]);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	const handleLanguageChange = (language) => {
		setIsChanging(true);
		i18n.changeLanguage(language.code);
		setIsOpen(false);

		setTimeout(() => setIsChanging(false), 800);
	};

	return (
		<div
			style={{ position: 'relative', zIndex: 1000 }}
			aria-label="Language Switcher"
			ref={dropdownRef}>
			<motion.div
				onClick={() => setIsOpen(!isOpen)}
				className="language-switcher-button"
				whileHover={{ scale: 1.05 }}
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '200px',
					padding: '12px',
					borderRadius: '12px',
					background: 'rgba(255, 255, 255, 0.15)',
					backdropFilter: 'blur(8px)',
					cursor: 'pointer',
					boxShadow: isOpen ? '0 8px 20px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.15)',
					color: 'white',
					transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
				}}>
				<motion.span
					animate={isOpen ? { x: [0, 2, -2, 2, 0] } : {}}
					transition={{
						repeat: Infinity,
						duration: 1.5,
						ease: 'easeInOut',
					}}
					style={{ marginRight: '10px' }}>
					{selectedLanguage?.flag}
				</motion.span>
				<span style={{ fontWeight: '500', fontSize: '16px' }}>{selectedLanguage?.name}</span>
				<span
					style={{
						marginLeft: 'auto',
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.2s',
					}}>
					▼
				</span>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="dropdown-container"
						style={{
							position: 'absolute',
							top: '60px',
							right: '0',
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.75)',
							backdropFilter: 'blur(10px)',
							borderRadius: '12px',
							boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
							zIndex: 1000,
						}}>
						{languages.map((language, index) => (
							<motion.div
								key={language.code}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.05 }}
								onClick={() => handleLanguageChange(language)}
								style={{
									padding: '14px 20px',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									borderBottom: index < languages.length - 1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
									transition: 'background-color 0.3s ease',
									borderTopLeftRadius: index === 0 ? '12px' : '0px',
									borderTopRightRadius: index === 0 ? '12px' : '0px',
									borderBottomLeftRadius: index === languages.length - 1 ? '12px' : '0px',
									borderBottomRightRadius: index === languages.length - 1 ? '12px' : '0px',
								}}
								whileHover={{ backgroundColor: '#f0f0f0' }}>
								<motion.span
									animate={{ rotate: [0, 10, -10, 10, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2,
										ease: 'easeInOut',
									}}
									style={{ marginRight: '10px' }}>
									{language.flag}
								</motion.span>
								<span style={{ fontSize: '16px' }}>{language.name}</span>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Comment phần overlay */}
			{/* <AnimatePresence>
				{isChanging && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						style={{
							position: 'fixed',
							inset: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(0, 0, 0, 0.6)',
							backdropFilter: 'blur(8px)',
							zIndex: 999,
						}}>
						<motion.div
							style={{ textAlign: 'center', color: 'white' }}
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ repeat: Infinity, duration: 1.5 }}>
							<div style={{ fontSize: '24px', fontWeight: 'bold' }}>{t('common.languageSwitcher.changing')}</div>
							<div style={{ fontSize: '18px' }}>{t('common.languageSwitcher.pleaseWait')}</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence> */}
		</div>
	);
}

export function useLanguageChanging() {
	const [isChanging, setIsChanging] = useState(false);
	const { i18n } = useTranslation();

	useEffect(() => {
		const handleLanguageChange = () => {
			setIsChanging(true);
			setTimeout(() => setIsChanging(false), 800);
		};

		i18n.on('languageChanged', handleLanguageChange);

		return () => {
			i18n.off('languageChanged', handleLanguageChange);
		};
	}, [i18n]);

	return isChanging;
}

export default LanguageSwitcher;
