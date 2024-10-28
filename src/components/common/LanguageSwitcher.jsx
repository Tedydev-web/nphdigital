'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageManager } from '@/hooks/useLanguageManager';

function LanguageSwitcher({ onLanguageChange, currentLanguage }) {
	const { t } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
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
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	const handleSelection = (language) => {
		onLanguageChange(language);
		setIsOpen(false);
	};

	// Không render gì cho đến khi component được mount
	if (!mounted) {
		return null;
	}

	const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages.find((lang) => lang.code === 'en');

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
					{currentLang.flag}
				</motion.span>
				<span style={{ fontWeight: '500', fontSize: '16px' }}>{currentLang.name}</span>
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
								onClick={() => handleSelection(language)}
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
									backgroundColor: language.code === currentLanguage ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
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
		</div>
	);
}

export default LanguageSwitcher;
