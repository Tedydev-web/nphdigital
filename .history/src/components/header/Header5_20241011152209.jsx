import { useEffect, useRef, useState } from 'react';
import Canvas from '../canvas/Canvas';
import Link from 'next/link';
import LogoBlack from '../../../public/assets/imgs/logo/logo-black.png';
import LogoWhite2 from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import MenuBlack from '../../../public/assets/imgs/icon/menu-black.png';
import Image from 'next/image';

export default function Header5() {
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
		let header_bg_2 = headerArea.current;
		if (header_bg_2) {
			if (topScroll > 20) {
				header_bg_2.style.background = '#121212';
				header_bg_2.classList.add('sticky-2');
			} else {
				header_bg_2.style.background = 'transparent';
				header_bg_2.classList.remove('sticky-2');
			}
		}
	}
	const openCanvas = () => {
		ofCanvasArea.current.style.opacity = '1';
		ofCanvasArea.current.style.visibility = 'visible';
	};
	return (
		<>
			<header
				className="header__area-2"
				ref={headerArea}>
				<div className="header__inner-5">
					<div className="header__logo-5">
						<Link
							href="/index"
							className="logo-dark">
							<Image
								priority
								width={136}
								height={45}
								src={LogoBlack}
								alt="Site Logo"
							/>
						</Link>
						<Link
							href="/index"
							className="logo-light">
							<Image
								priority
								width={100}
								height={33}
								src={LogoWhite2}
								alt="Site Logo"
							/>
						</Link>
					</div>
					<div className="header__nav-icon-5">
						<button
							onClick={openCanvas}
							id="open_offcanvas">
							<span className="menu-text-pp">Menu</span>
							<Image
								priority
								width={21}
								height={15}
								src={MenuBlack}
								alt="Menubar Icon"
							/>
						</button>
					</div>
				</div>
			</header>
			<Canvas ofCanvasArea={ofCanvasArea} />
		</>
	);
}
