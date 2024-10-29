// src/components/common/layout/RootLayout.jsx
import '../../../i18n.js';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState, useMemo } from 'react';
import allNavData from '../../../data/navData.json';
import Preloader from '@/components/preloader/Preloader';
import CommonAnimation from '../CommonAnimation';
import ScrollSmootherComponents from '../ScrollSmootherComponents';
import CursorAnimation from '../CursorAnimation';
import ScrollTop from '../ScrollTop';
import Header1 from '@/components/header/Header1';
import Header2 from '@/components/header/Header2';
import Header3 from '@/components/header/Header3';
import Header4 from '@/components/header/Header4';
import Header5 from '@/components/header/Header5';
import Footer3 from '@/components/footer/Footer3';
import { tsParticles } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useLanguageManager } from '@/hooks/useLanguageManager';

const HeaderContent = ({ header, navData }) => {
	const headers = {
		header1: <Header1 navData={navData} />,
		header2: <Header2 navData={navData} />,
		header3: <Header3 />,
		header4: <Header4 navData={navData} />,
		header5: <Header5 />,
		none: null,
	};
	return headers[header] || <Header3 />;
};

const FooterContent = ({ footer }) => {
	return footer === 'footer3' ? <Footer3 /> : null;
};

export default function RootLayout({ children, header = '', footer = '', defaultMode = 'dark' }) {
	const [mode, setMode] = useState(defaultMode);
	const [navData, setNavData] = useState({});
	const [particleValue, setParticleValue] = useState(70);
	const cursor1 = useRef();
	const cursor2 = useRef();
	const { t, i18n } = useTranslation('common');
	const { currentLanguage } = useLanguageManager();

	useEffect(() => {
		setNavData(allNavData);
		document.querySelector('body').classList.toggle('dark', mode === 'dark');
	}, [mode]);

	useEffect(() => {
		(async () => {
			await loadSlim(tsParticles);
			setParticleValue(70);
		})();
	}, []);

	const options = useMemo(
		() => ({
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'grab', // Các mode có sẵn: grab, push, repulse
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 8,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					grab: {
						distance: 150,
						line_linked: {
							opacity: 10,
						},
					},
				},
			},
			particles: {
				color: {
					value: '#ffffff',
				},
				links: {
					color: '#ffffff',
					distance: 180,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: particleValue,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'polygon',
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
			detectRetina: false,
			background: {
				color: 'transparent',
			},
			polygon: {
				draw: {
					enable: true,
					lineColor: 'rgba(255,255,255,0.2)',
					lineWidth: 0.5,
				},
				move: {
					radius: 10,
				},
				scale: 1,
				type: 'inline',
				url: '',
			},
		}),
		[particleValue]
	);

	return (
		<CommonAnimation>
			<div
				className="has-smooth"
				id="has_smooth"></div>
			<ScrollSmootherComponents />
			<Preloader />
			<CursorAnimation
				cursor1={cursor1}
				cursor2={cursor2}
			/>
			<ScrollTop />
			<HeaderContent
				header={header}
				navData={navData}
			/>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					{children}
					<FooterContent footer={footer} />
				</div>
			</div>
			<Particles options={options} />
		</CommonAnimation>
	);
}
