'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SwitcherLang() {
	const { t, i18n } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);
	const [isLanguageChanging, setIsLanguageChanging] = useState(false);

	const languages = [
		{ code: 'vi', name: t('common.languageSwitcher.vietnamese'), flag: '🇻🇳' },
		{ code: 'en', name: t('common.languageSwitcher.english'), flag: '🇬🇧' },
		{ code: 'zh', name: t('common.languageSwitcher.chinese'), flag: '🇨🇳' },
		{ code: 'hi', name: t('common.languageSwitcher.hindi'), flag: '🇮🇳' },
	];

	const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

	const handleLanguageChange = useCallback(
		(languageCode) => {
			setIsLanguageChanging(true);
			setIsOpen(false);

			i18n.changeLanguage(languageCode);
			localStorage.setItem('userLanguage', languageCode);
			document.documentElement.lang = languageCode;

			setTimeout(() => {
				setIsLanguageChanging(false);
			}, 1500);
		},
		[i18n]
	);

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const modalVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: { scale: 1, opacity: 1 },
	};

	useEffect(() => {
		let timer;

		const resetTimer = () => {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				setIsOpen(false);
			}, 7000);
		};

		const handleUserActivity = () => {
			resetTimer();
		};

		if (isOpen) {
			resetTimer();
			document.addEventListener('mousemove', handleUserActivity);
			document.addEventListener('click', handleUserActivity);
			document.addEventListener('touchstart', handleUserActivity);
		}

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
			document.removeEventListener('mousemove', handleUserActivity);
			document.removeEventListener('click', handleUserActivity);
			document.removeEventListener('touchstart', handleUserActivity);
		};
	}, [isOpen]);

	return (
		<>
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				className="language-switcher-button"
				whileHover={{ scale: 1.05 }}
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '200px',
					padding: '0',
					border: 'none',
					borderRadius: '12px',
					background: 'transparent',
					backdropFilter: 'blur(8px)',
					cursor: 'pointer',
					color: 'white',
					transition: 'all 0.3s ease',
					left: '0',
					position: 'relative',
					margin: '0 0 10px 0',
				}}>
				<motion.span
					animate={isOpen ? { x: [0, 2, -2, 2, 0] } : {}}
					transition={{ repeat: Infinity, duration: 1.5 }}
					style={{ marginRight: '10px', fontSize: '20px' }}>
					{currentLang.flag}
				</motion.span>
				<span style={{ fontWeight: '500', fontSize: '16px' }}>{currentLang.name}</span>
				<motion.span
					style={{
						marginLeft: 'auto',
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.2s',
					}}>
					▼
				</motion.span>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="language-overlay"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						onClick={() => setIsOpen(false)}
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							backdropFilter: 'blur(4px)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: 1000,
							borderTopLeftRadius: '20px',
							borderBottomLeftRadius: '20px',
						}}>
						<motion.div
							className="language-modal"
							variants={modalVariants}
							onClick={(e) => e.stopPropagation()}
							style={{
								background: 'rgba(255, 255, 255, 0.95)',
								borderRadius: '16px',
								padding: '24px',
								width: '90%',
								maxWidth: '400px',
								boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
								backdropFilter: 'blur(10px)',
							}}>
							<h3
								style={{
									textAlign: 'center',
									marginBottom: '20px',
									fontSize: '24px',
									color: '#333',
								}}>
								{t('common.languageSwitcher.lang')}
							</h3>
							<div className="language-list">
								{languages.map((language, index) => (
									<motion.div
										key={language.code}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										onClick={() => handleLanguageChange(language.code)}
										style={{
											padding: '16px',
											margin: '8px 0',
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
											borderRadius: '12px',
											backgroundColor: language.code === i18n.language ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
											transition: 'all 0.3s ease',
										}}
										whileHover={{
											backgroundColor: 'rgba(0, 0, 0, 0.1)',
											scale: 1.02,
										}}>
										<motion.span
											style={{
												marginRight: '16px',
												fontSize: '24px',
											}}>
											{language.flag}
										</motion.span>
										<span
											style={{
												fontSize: '18px',
												fontWeight: language.code === i18n.language ? '600' : '400',
												color: '#333',
											}}>
											{language.name}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isLanguageChanging && (
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
							zIndex: 1001,
							borderTopLeftRadius: '20px',
							borderBottomLeftRadius: '20px',
						}}>
						<motion.div
							style={{ textAlign: 'center', color: 'white' }}
							animate={{ scale: [1, 1.1, 1] }}
							transition={{ repeat: Infinity, duration: 1.5 }}>
							<div style={{ fontSize: '24px', fontWeight: 'bold' }}>{t('common.languageSwitcher.changing')}</div>
							<div style={{ fontSize: '18px', marginTop: '8px' }}>{t('common.languageSwitcher.pleaseWait')}</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
