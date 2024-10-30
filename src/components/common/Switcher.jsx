// src/components/common/Switcher.jsx
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import SwitcherLang from './SwitcherLang';
import CursorAnimation from './CursorAnimation';
import { useLanguageManager } from '../../hooks/useLanguageManager';

const Switcher = ({ setMode, mode, cursor1, cursor2 }) => {
	const switcherIcon = useRef();
	const switcherItems = useRef();
	const switcherOpen = useRef();
	const switcherClose = useRef();
	const cursorStyle = useRef();
	const idleTimeout = useRef(null); // Khởi tạo ref cho timeout
	const [isCursorVisible, setIsCursorVisible] = useState(true);
	const { t } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);

	// Sử dụng hook useLanguageManager
	const { currentLanguage } = useLanguageManager();

	const closeSwitcher = useCallback(() => {
		setIsOpen(false);
		if (switcherClose.current) switcherClose.current.style.display = 'none';
		if (switcherOpen.current) switcherOpen.current.style.display = 'flex';
		if (switcherIcon.current) switcherIcon.current.style.right = '0';
		if (switcherItems.current) switcherItems.current.style.right = '-280px';
		if (switcherItems.current) switcherItems.current.classList.remove('closing');
		clearTimeout(idleTimeout.current);
		idleTimeout.current = null;
	}, []);

	const triggerCloseWithDelay = useCallback(() => {
		if (switcherItems.current) {
			switcherItems.current.classList.add('closing');
		}
		idleTimeout.current = setTimeout(() => {
			closeSwitcher();
		}, 5000);
	}, [closeSwitcher]);

	const handleCloseClick = useCallback(() => {
		if (idleTimeout.current) {
			clearTimeout(idleTimeout.current);
			idleTimeout.current = null;
		}
		closeSwitcher();
	}, [closeSwitcher]);

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
		if (switcherOpen.current) switcherOpen.current.style.display = 'none';
		if (switcherClose.current) switcherClose.current.style.display = 'flex';
		if (switcherIcon.current) switcherIcon.current.style.right = '280px';
		if (switcherItems.current) switcherItems.current.style.right = '0';
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 5000);
	}, [triggerCloseWithDelay]);

	const cursor = useCallback(() => {
		const cursor_val = cursorStyle.current.value;
		setIsCursorVisible(cursor_val === '2');
		triggerCloseWithDelay();
	}, [triggerCloseWithDelay]);

	const modeChange = useCallback(
		(data) => {
			setMode?.(data === 'dark' ? 'dark' : 'light');
			triggerCloseWithDelay();
		},
		[setMode, triggerCloseWithDelay]
	);

	const startIdleTimeout = useCallback(() => {
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 5000);
	}, [triggerCloseWithDelay]);

	const languages = useMemo(
		() => [
			{ code: 'vi', name: t('common.languageSwitcher.vietnamese'), flag: '🇻🇳' },
			{ code: 'en', name: t('common.languageSwitcher.english'), flag: '🇺🇸' },
			{ code: 'zh', name: t('common.languageSwitcher.chinese'), flag: '🇨🇳' },
			{ code: 'hi', name: t('common.languageSwitcher.hindi'), flag: '🇮🇳' },
		],
		[t]
	);

	const handleLanguageChange = useCallback(
		(event) => {
			const langCode = event.target.value;
			triggerCloseWithDelay();
		},
		[triggerCloseWithDelay]
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
						onClick={openSwitcher}>
						<FontAwesomeIcon icon={faGear} />
					</button>
					<button
						id="switcher_close"
						ref={switcherClose}
						onClick={handleCloseClick}>
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
							<h2 className="switcher__title">{t('common.languageSwitcher.lang')}</h2>
						</div>
						<div className="switcher__btn mode-type wc-col-2">
							<SwitcherLang />
						</div>
					</div>
					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">{t('common.switcher.cursor')}</h2>
						</div>
						<div className="switcher__btn">
							<select
								defaultValue={2}
								name="cursor-style"
								id="cursor_style"
								ref={cursorStyle}
								onChange={cursor}>
								<option value="1">{t('common.switcher.default')}</option>
								<option value="2">{t('common.switcher.animated')}</option>
							</select>
						</div>
					</div>

					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">{t('common.mode.modeScreen')}</h2>
						</div>
						<div className="switcher__btn mode-type wc-col-2">
							<button
								onClick={() => modeChange('light')}
								className={mode === 'dark' ? '' : 'active'}>
								{t('common.mode.light')}
							</button>
							<button
								onClick={() => modeChange('dark')}
								className={mode === 'dark' ? 'active' : ''}>
								{t('common.mode.dark')}
							</button>
						</div>
					</div>
				</div>
			</div>
			<CursorAnimation isVisible={isCursorVisible} />
		</>
	);
};

export default Switcher;
