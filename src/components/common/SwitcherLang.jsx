import { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher, { useLanguageChanging } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

const SwitcherLang = () => {
	const switcherIcon = useRef();
	const switcherItems = useRef();
	const switcherOpen = useRef();
	const switcherClose = useRef();
	const idleTimeout = useRef();
	const { t } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);
	const isLanguageChanging = useLanguageChanging(); // Sử dụng hook để lấy trạng thái isChanging

	const triggerCloseWithDelay = useCallback(() => {
		switcherItems.current.classList.add('closing');
		setTimeout(() => {
			setIsOpen(false);
			switcherClose.current.style.display = 'none';
			switcherOpen.current.style.display = 'flex';
			switcherIcon.current.style.right = '0';
			switcherItems.current.style.right = '-280px';
			switcherItems.current.classList.remove('closing');
			clearTimeout(idleTimeout.current);
		}, 2000);
	}, []);

	const handleOutsideClick = useCallback(
		(e) => {
			if (switcherItems.current && !switcherItems.current.contains(e.target) && !switcherIcon.current.contains(e.target)) {
				triggerCloseWithDelay();
			}
		},
		[triggerCloseWithDelay]
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			switcherIcon.current.style.zIndex = '1000';
			switcherItems.current.style.zIndex = '1000';
			document.addEventListener('click', handleOutsideClick);
			return () => document.removeEventListener('click', handleOutsideClick);
		}
	}, [handleOutsideClick]);

	const openSwitcher = useCallback(() => {
		setIsOpen(true);
		switcherOpen.current.style.display = 'none';
		switcherClose.current.style.display = 'flex';
		switcherIcon.current.style.right = '280px';
		switcherItems.current.style.right = '0';
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 3000);
	}, [triggerCloseWithDelay]);

	const startIdleTimeout = useCallback(() => {
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 3000);
	}, [triggerCloseWithDelay]);

	return (
		<>
			<div className="switcher__area">
				<div
					className="switcher__icon"
					ref={switcherIcon}>
					<button
						id="switcher_open"
						ref={switcherOpen}
						onClick={openSwitcher}>
						<FontAwesomeIcon icon={faGear} />
					</button>
					<button
						id="switcher_close"
						ref={switcherClose}
						onClick={triggerCloseWithDelay}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>

				<div
					className="switcher__items"
					ref={switcherItems}
					onMouseEnter={() => clearTimeout(idleTimeout.current)}
					onMouseLeave={startIdleTimeout}>
					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">{t('language')}</h2>
						</div>
						<div className="switcher__btn">
							<LanguageSwitcher />
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
