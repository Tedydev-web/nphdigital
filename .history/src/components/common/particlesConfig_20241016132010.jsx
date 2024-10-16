import { useMemo } from 'react';

const useParticlesConfig = (particleValue) =>
	useMemo(
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

export default useParticlesConfig;
