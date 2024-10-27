import { useEffect } from 'react';
import { gsap } from 'gsap';

const CursorAnimation = ({ cursor1, cursor2, isVisible }) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				function mousemoveHandler(e) {
					try {
						let tl = gsap.timeline({
							defaults: {
								x: e.clientX,
								y: e.clientY,
							},
						});

						tl.to('.cursor1', {
							ease: 'power2.out',
						}).to(
							'.cursor2',
							{
								ease: 'power2.out',
							},
							'-=0.4'
						);
					} catch (error) {
						console.log(error);
					}
				}
				document.addEventListener('mousemove', mousemoveHandler);
			});
			return () => tHero.revert();
		}
	}, []);
	if (!isVisible) return null;

	return (
		<>
			<div
				className="cursor1"
				ref={cursor1}></div>
			<div
				className="cursor2"
				ref={cursor2}></div>
		</>
	);
};

export default CursorAnimation;
