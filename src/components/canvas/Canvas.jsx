import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import logoWhite2 from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import Shape11 from '../../../public/assets/imgs/shape/11.png';
import Shape12 from '../../../public/assets/imgs/shape/12.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguageManager } from '@/hooks/useLanguageManager';
import SwitcherLang from '@/components/common/SwitcherLang';
const Canvas = ({ bladeMode = '', ofCanvasArea }) => {
	const [accordion, setAccordion] = useState(0);
	const [subAccordion, setSubAccordion] = useState(0);
	const menu = useRef();
	const { t } = useTranslation('common');
	const { currentLanguage } = useLanguageManager();

	useEffect(() => {
		const updateMenuText = () => {
			if (typeof window !== 'undefined' && menu.current) {
				let rootParent = menu.current.children;
				for (let i = 0; i < rootParent.length; i++) {
					let firstParent = rootParent[i].children;
					for (let j = 0; j < firstParent.length; j++) {
						if (firstParent[j].className.includes('header_title')) {
							let link = firstParent[j].querySelector('a');
							if (link) {
								let translatedText = link.textContent;
								let arr = translatedText.split('');
								let spanData = '';
								for (let k = 0; k < arr.length; k++) {
									if (arr[k] == ' ') {
										spanData += `<span style='width:1vw;'>${arr[k]}</span>`;
									} else {
										spanData += `<span>${arr[k]}</span>`;
									}
								}
								let result = '<div class="menu-text">' + spanData + '</div>';
								link.innerHTML = result;
							}
						}
					}
				}
			}
		};

		const timer = setTimeout(updateMenuText, 100);
		return () => clearTimeout(timer);
	}, [currentLanguage, t]);

	const openData = (data) => {
		setAccordion(data);
	};

	const openSubData = (data) => {
		setSubAccordion(data);
	};

	const closeCanvas = () => {
		ofCanvasArea.current.style.opacity = '0';
		ofCanvasArea.current.style.visibility = 'hidden';
		if (bladeMode) {
			let header_bg = bladeMode;
			header_bg.style.setProperty('mix-blend-mode', 'exclusion');
		}
	};

	return (
		<>
			<div
				className="offcanvas__area"
				ref={ofCanvasArea}>
				<div className="offcanvas__body">
					<div className="offcanvas__left">
						<div className="offcanvas__logo">
							<Link href="https://nphdigital.com/">
								<Image
									priority
									style={{ width: '200px', height: 'auto' }}
									src={logoWhite2}
									alt="Offcanvas Logo"
								/>
							</Link>
						</div>
						<div className="offcanvas__social">
							<h3 className="social-title">{t('canvas.title')}</h3>
							<ul>
								<li>
									<a href="https://zalo.me/2599746016148700210?src=qr&f=1">{t('canvas.social.zalo')}</a>
								</li>
								<li>
									<a href="https://www.facebook.com/nphdigital838">{t('canvas.social.facebook')}</a>
								</li>
								<li>
									<a href="https://t.me/Nphdigital">{t('canvas.social.telegram')}</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="offcanvas__mid">
						<div className="offcanvas__menu-wrapper">
							<nav className="offcanvas__menu">
								<ul
									className="menu-anim title"
									ref={menu}>
									<li>
										<div className="header_title">
											<Link href={'https://nphdigital.com/'}>{t('canvas.menu.home')}</Link>
										</div>
									</li>
									<li>
										<div className="header_title">
											<Link href={'/gioi-thieu'}>{t('canvas.menu.about')}</Link>
										</div>
									</li>
									<li>
										<div className="header_title d-flex">
											<Link href={'/dich-vu'}>{t('canvas.menu.service')}</Link>
										</div>
									</li>
									<li>
										<div className="header_title">
											<Link href={'/bai-viet'}>{t('canvas.menu.blog')}</Link>
										</div>
									</li>
									<li>
										<div className="header_title">
											<Link href={'/lien-he'}>{t('canvas.menu.contact')}</Link>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="offcanvas__right">
						<div className="offcanvas__search">
							<SwitcherLang />
						</div>
						<div className="offcanvas__contact">
							<h3>{t('canvas.contact.title')}</h3>
							<ul>
								<li>
									<a href="tel:02094980547">+(84) - 0777 018 333</a>
								</li>
								<li>
									<a href="mailto:info@extradesign.com">hi@nphdigital.com</a>
								</li>
								<li>{t('canvas.contact.address')}</li>
							</ul>
						</div>
						<Image
							priority
							style={{ width: 'auto', height: 'auto' }}
							src={Shape11}
							alt="shape"
							className="shape-1"
						/>
						<Image
							priority
							style={{ width: 'auto', height: 'auto' }}
							src={Shape12}
							alt="shape"
							className="shape-2"
						/>
					</div>
					<div className="offcanvas__close">
						<button
							type="button"
							onClick={closeCanvas}>
							<FontAwesomeIcon icon={faXmark} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Canvas;
