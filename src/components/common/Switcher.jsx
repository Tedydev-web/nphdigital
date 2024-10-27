import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import CursorAnimation from './CursorAnimation';

const Switcher = ({ setMode, mode, cursor1, cursor2 }) => {
	const switcherIcon = useRef();
	const switcherItems = useRef();
	const switcherOpen = useRef();
	const switcherClose = useRef();
	const cursorStyle = useRef();
	const idleTimeout = useRef();
	const [isCursorVisible, setIsCursorVisible] = useState(true);
	const { t, i18n } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);

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

	const cursor = useCallback(() => {
		const cursor_val = cursorStyle.current.value;
		setIsCursorVisible(cursor_val === '2');
		triggerCloseWithDelay();
	}, [triggerCloseWithDelay]);

	const modeChange = useCallback(
		(data) => {
			setMode?.(data === 'dark' ? 'dark' : '');
			triggerCloseWithDelay();
		},
		[setMode, triggerCloseWithDelay]
	);

	const startIdleTimeout = useCallback(() => {
		clearTimeout(idleTimeout.current);
		idleTimeout.current = setTimeout(triggerCloseWithDelay, 3000);
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
			i18n.changeLanguage(langCode);
			triggerCloseWithDelay();
		},
		[i18n, triggerCloseWithDelay]
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
							<h2 className="switcher__title">Cursor</h2>
						</div>
						<div className="switcher__btn">
							<select
								defaultValue={2}
								name="cursor-style"
								id="cursor_style"
								ref={cursorStyle}
								onChange={cursor}>
								<option value="1">default</option>
								<option value="2">animated</option>
							</select>
						</div>
					</div>

					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">{t('language')}</h2>
						</div>
						<div className="switcher__btn">
							<select
								value={i18n.language}
								name="language"
								id="language"
								onChange={handleLanguageChange}>
								{languages.map((lang) => (
									<option
										key={lang.code}
										value={lang.code}>
										{lang.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="switcher__item">
						<div className="switch__title-wrap">
							<h2 className="switcher__title">Mode</h2>
						</div>
						<div className="switcher__btn mode-type wc-col-2">
							<button
								onClick={() => modeChange('light')}
								className={mode === 'dark' ? '' : 'active'}>
								Light
							</button>
							<button
								onClick={() => modeChange('dark')}
								className={mode === 'dark' ? 'active' : ''}>
								Dark
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
