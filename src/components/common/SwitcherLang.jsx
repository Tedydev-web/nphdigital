// src/components/common/SwitcherLang.jsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageManager } from '@/hooks/useLanguageManager';

const SwitcherLang = () => {
	const switcherIcon = useRef(null);
	const switcherItems = useRef(null);
	const switcherOpen = useRef(null);
	const switcherClose = useRef(null);
	const idleTimeout = useRef(null);
	const timeoutRef = useRef(null); // Thêm ref cho setTimeout
	const { t } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);
	const [isLanguageChanging, setIsLanguageChanging] = useState(false);
	const { currentLanguage, changeLanguage } = useLanguageManager();

	// Cleanup function để xóa các timeout
	useEffect(() => {
		return () => {
			if (idleTimeout.current) clearTimeout(idleTimeout.current);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	// Định nghĩa triggerCloseWithDelay
	const triggerCloseWithDelay = useCallback(() => {
		if (switcherItems.current) {
			switcherItems.current.classList.add('closing');

			// Lưu các giá trị hiện tại của refs
			const currentSwitcherClose = switcherClose.current;
			const currentSwitcherOpen = switcherOpen.current;
			const currentSwitcherIcon = switcherIcon.current;
			const currentSwitcherItems = switcherItems.current;

			timeoutRef.current = setTimeout(() => {
				setIsOpen(false);

				// Kiểm tra từng ref trước khi sử dụng
				if (currentSwitcherClose) {
					currentSwitcherClose.style.display = 'none';
				}
				if (currentSwitcherOpen) {
					currentSwitcherOpen.style.display = 'flex';
				}
				if (currentSwitcherIcon) {
					currentSwitcherIcon.style.right = '0';
				}
				if (currentSwitcherItems) {
					currentSwitcherItems.style.right = '-280px';
					currentSwitcherItems.classList.remove('closing');
				}

				if (idleTimeout.current) {
					clearTimeout(idleTimeout.current);
				}
			}, 2000);
		}
	}, []);

	// Sau đó định nghĩa openSwitcher
	const openSwitcher = useCallback(() => {
		if (switcherItems.current && switcherClose.current && switcherOpen.current && switcherIcon.current) {
			setIsOpen(true);
			switcherOpen.current.style.display = 'none';
			switcherClose.current.style.display = 'flex';
			switcherIcon.current.style.right = '280px';
			switcherItems.current.style.right = '0';

			if (idleTimeout.current) {
				clearTimeout(idleTimeout.current);
			}
			idleTimeout.current = setTimeout(triggerCloseWithDelay, 5000);
		}
	}, [triggerCloseWithDelay]);

	// Định nghĩa startIdleTimeout
	const startIdleTimeout = useCallback(() => {
		if (idleTimeout.current) {
			clearTimeout(idleTimeout.current);
		}
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 3000);
	}, [triggerCloseWithDelay]);

	// Xử lý click bên ngoài để đóng switcher
	const handleOutsideClick = useCallback(
		(e) => {
			if (switcherItems.current && !switcherItems.current.contains(e.target) && switcherIcon.current && !switcherIcon.current.contains(e.target)) {
				triggerCloseWithDelay();
			}
		},
		[triggerCloseWithDelay]
	);

	// Thêm useEffect để xử lý click bên ngoài
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (switcherIcon.current) {
				switcherIcon.current.style.zIndex = '1000';
			}
			if (switcherItems.current) {
				switcherItems.current.style.zIndex = '1000';
			}
			document.addEventListener('click', handleOutsideClick);
			return () => {
				document.removeEventListener('click', handleOutsideClick);
			};
		}
	}, [handleOutsideClick]);

	// Định nghĩa handleLanguageChange
	const handleLanguageChange = useCallback(
		(language) => {
			setIsLanguageChanging(true);
			changeLanguage(language.code);
			setTimeout(() => {
				setIsLanguageChanging(false);
			}, 3000);
			triggerCloseWithDelay();
		},
		[changeLanguage, triggerCloseWithDelay]
	);

	return (
		<>
			<div className="switcher__area">
				<div
					className="switcher__icon"
					ref={switcherIcon}>
					<button
						id="switcher_open"
						ref={switcherOpen}
						onClick={openSwitcher}
						aria-label="Mở switcher ngôn ngữ">
						<FontAwesomeIcon icon={faGear} />
					</button>
					<button
						id="switcher_close"
						ref={switcherClose}
						onClick={triggerCloseWithDelay}
						aria-label="Đóng switcher ngôn ngữ"
						style={{ display: 'none' }}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>

				<div
					className="switcher__items"
					ref={switcherItems}
					onMouseEnter={() => {
						if (idleTimeout.current) clearTimeout(idleTimeout.current);
					}}
					onMouseLeave={startIdleTimeout}
					style={{ right: '-280px' }}>
					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">{t('common.languageSwitcher.lang')}</h2>
						</div>
						<div className="switcher__btn">
							<LanguageSwitcher onLanguageChange={handleLanguageChange} />
						</div>
					</div>
				</div>
			</div>
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
			</AnimatePresence>
		</>
	);
};

export default SwitcherLang;
