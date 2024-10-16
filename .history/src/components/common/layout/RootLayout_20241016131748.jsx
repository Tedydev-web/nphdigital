import { useEffect, useRef, useState } from 'react';
import { loadFull } from 'tsparticles'; // Import tsparticles loader
import { tsParticles } from 'tsparticles-engine'; // Core engine
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

// Header content component
const HeaderContent = ({ header, navData }) => {
	switch (header) {
		case 'header1':
			return <Header1 navData={navData} />;
		case 'header2':
			return <Header2 navData={navData} />;
		case 'header3':
			return <Header3 />;
		case 'header4':
			return <Header4 navData={navData} />;
		case 'header5':
			return <Header5 />;
		case 'none':
			return '';
		default:
			return <Header3 />;
	}
};

// Footer content component
const FooterContent = ({ footer }) => {
	switch (footer) {
		case 'footer3':
			return <Footer3 />;
		case 'none':
			return '';
		default:
			return <Footer3 />;
	}
};

export default function RootLayout({ children, header = '', footer = '', defaultMode = 'dark' }) {
	const [mode, setMode] = useState(defaultMode);
	const [navData, setNavData] = useState({});
	const cursor1 = useRef();
	const cursor2 = useRef();
	const particlesContainer = useRef(); // Ref for particles container

	// Initialize tsParticles
	useEffect(() => {
		setNavData(allNavData);
		if (typeof window !== 'undefined') {
			// Dark mode setup
			document.body.classList.toggle('dark', mode === 'dark');
		}

		// Load tsParticles configuration
		const initParticles = async () => {
			await loadFull(tsParticles); // Load all features of tsParticles
			tsParticles.load(particlesContainer.current, {
				fpsLimit: 60,
				particles: {
					number: { value: 50, density: { enable: true, value_area: 800 } },
					color: { value: '#5468A9' }, // Primary tone from your design
					shape: { type: 'circle' },
					opacity: { value: 0.5 },
					size: { value: 3 },
					move: {
						enable: true,
						speed: 1,
						direction: 'none',
						random: false,
						straight: false,
						outModes: { default: 'out' },
					},
				},
				interactivity: {
					events: {
						onHover: { enable: true, mode: 'repulse' },
						onClick: { enable: true, mode: 'push' },
					},
					modes: {
						repulse: { distance: 100, duration: 0.4 },
						push: { quantity: 4 },
					},
				},
				detectRetina: true,
			});
		};

		initParticles(); // Call the function to initialize particles
	}, [mode]);

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
				<ScrollTop />

				{/* Header */}
				<HeaderContent
					header={header}
					navData={navData}
				/>

				{/* Main content and footer */}
				<div id="smooth-wrapper">
					<div id="smooth-content">
						{children}
						<FooterContent footer={footer} />
					</div>
				</div>

				{/* tsParticles container in the footer */}
				<div
					ref={particlesContainer}
					className="particles-container"
				/>
			</CommonAnimation>
		</>
	);
}
