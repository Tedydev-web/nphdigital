import { useEffect } from 'react';
import { gsap } from 'gsap';

const CursorAnimation = ({ cursor1, cursor2 }) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const mousemoveHandler = (e) => {
				gsap.to(cursor1.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.01,
					ease: 'power2.out',
				});
				gsap.to(cursor2.current, {
					x: e.clientX,
					y: e.clientY,
					duration: 0.01,
					ease: 'power2.out',
				});
			};

			document.addEventListener('mousemove', mousemoveHandler);

			return () => {
				document.removeEventListener('mousemove', mousemoveHandler);
			};
		}
	}, [cursor1, cursor2]);

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
