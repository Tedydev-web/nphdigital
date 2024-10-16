import { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas/Canvas';
import Link from 'next/link';
import LogoWhite from '../../../public/assets/imgs/logo/site-logo-white.png';
import LogoWhite2 from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import MenuWhite from '../../../public/assets/imgs/icon/menu-white.png';
import Image from 'next/image';

export default function Header3() {
	const [topScroll, setTopScroll] = useState(0);

	const ofCanvasArea = useRef();
	const headerArea = useRef();

	const handleTopScroll = () => {
		const position = window.pageYOffset;
		setTopScroll(position);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleTopScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleTopScroll);
		};
	}, []);
	if (typeof window !== 'undefined') {
		let device_width = window.innerWidth;
		if (device_width < 1365) {
			let header_bg = headerArea.current;
			if (header_bg) {
				if (topScroll > 20) {
					header_bg.style.background = '#121212';
					header_bg.style.setProperty('mix-blend-mode', 'unset');
				} else {
					header_bg.style.background = 'transparent';
					header_bg.style.setProperty('mix-blend-mode', 'exclusion');
				}
			}
		}
	}
	const openCanvas = () => {
		ofCanvasArea.current.style.opacity = '1';
		ofCanvasArea.current.style.visibility = 'visible';
		let header_bg = headerArea.current;
		header_bg.style.setProperty('mix-blend-mode', 'unset');
	};
	return (
		<>
			<header
				className="header__area"
				ref={headerArea}>
				<div className="header__inner">
					<div className="header__logo">
						<Link href="/index">
							<Image
								priority
								width={50}
								height="auto"
								className="logo-primary"
								src={LogoWhite}
								alt="Site Logo"
							/>
							<Image
								priority
								width={150}
								height={53}
								className="logo-secondary"
								src={LogoWhite2}
								alt="Moibile Logo"
							/>
						</Link>
					</div>
					<div className="header__nav-icon">
						<button
							onClick={openCanvas}
							id="open_offcanvas">
							<Image
								priority
								width={22}
								height={22}
								src={MenuWhite}
								alt="Menubar Icon"
							/>
						</button>
					</div>
					<div className="header__support">
						<p>
							Trung tâm hỗ trợ <a href="tel:0777018333">0777 018 333</a>
						</p>
					</div>
				</div>
				<Canvas
					bladeMode={headerArea.current}
					ofCanvasArea={ofCanvasArea}
				/>
			</header>
		</>
	);
}
