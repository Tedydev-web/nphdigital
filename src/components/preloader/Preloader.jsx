import { useEffect, useRef } from 'react';

const Preloader = () => {
	const preloaderSection = useRef();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const hidePreloader = () => {
				const preloader = preloaderSection.current;
				if (preloader) {
					preloader.style.opacity = 0;
					setTimeout(() => {
						preloader.style.display = 'none';
					}, 3100);
				}
			};
			setTimeout(() => {
				requestAnimationFrame(hidePreloader);
			}, 3000);
		}
	}, []);

	return (
		<div
			className="preloader"
			ref={preloaderSection}>
			<div className="loading">
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
					<source
						src="assets/video/loading.mp4"
						type="video/mp4"
					/>
					Trình duyệt của bạn không hỗ trợ video.
				</video>
			</div>
		</div>
	);
};

export default Preloader;
