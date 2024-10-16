import { useEffect, useRef, useState } from 'react';
import allNavData from '../../../data/navData.json';
import Preloader from '@/components/preloader/Preloader';
import CommonAnimation from '../CommonAnimation';
import ScrollSmootherComponents from '../ScrollSmootherComponents';
import CursorAnimation from '../CursorAnimation';
// import Switcher from '../Switcher';
import ScrollTop from '../ScrollTop';
import Header1 from '@/components/header/Header1';
import Header2 from '@/components/header/Header2';
import Header3 from '@/components/header/Header3';
import Header4 from '@/components/header/Header4';
import Header5 from '@/components/header/Header5';
import Footer3 from '@/components/footer/Footer3';
import { tsParticles } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const HeaderContent = ({ header, navData }) => {
	if (header == 'header1') {
		return <Header1 navData={navData} />;
	} else if (header == 'header2') {
		return <Header2 navData={navData} />;
	} else if (header == 'header3') {
		return <Header3 />;
	} else if (header == 'header4') {
		return <Header4 navData={navData} />;
	} else if (header == 'header5') {
		return <Header5 />;
	} else if (header == 'none') {
		return '';
	} else {
		return <Header3 />;
	}
};
const FooterContent = ({ footer }) => {
	if (footer == 'footer3') {
		return <Footer3 />;
	} else if (footer == 'none') {
		return '';
	} else {
		return <Footer3 />;
	}
};

export default function RootLayout({ children, header = '', footer = '', defaultMode = 'dark' }) {
	const [mode, setMode] = useState(defaultMode);
	const [navData, setNavData] = useState({});

	const cursor1 = useRef();
	const cursor2 = useRef();
	useEffect(() => {
		setNavData(allNavData);
		if (typeof window !== 'undefined') {
			if (mode == 'dark') {
				document.querySelector('body').classList.add('dark');
			} else {
				document.querySelector('body').classList.remove('dark');
			}
		}
	}, [mode]);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};
	const [particleValue, setParticleValue] = useState(70);

	useEffect(() => {
		const updateParticleValue = () => {
			if (window.innerWidth <= 768) {
				setParticleValue(80); // Mobile
			} else {
				setParticleValue(60); // Desktop
			}
		};

		updateParticleValue();
		window.addEventListener('resize', updateParticleValue);

		return () => {
			window.removeEventListener('resize', updateParticleValue);
		};
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
						enable: false,
						mode: 'repulse',
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#ffffff',
				},
				links: {
					color: '#ffffff',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: false,
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
					type: 'circle',
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
		<>
			<CommonAnimation>
				<div
					className="has-smooth"
					id="has_smooth"></div>
				<ScrollSmootherComponents />
				<div
					className="cursor"
					id="team_cursor">
					Drag
				</div>
				<Preloader />
				<CursorAnimation
					cursor1={cursor1}
					cursor2={cursor2}
				/>
				{/* <Switcher
                    setMode={setMode}
                    mode={mode}
                    cursor1={cursor1}
                    cursor2={cursor2}
                /> */}
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
			</CommonAnimation>
		</>
	);
}
