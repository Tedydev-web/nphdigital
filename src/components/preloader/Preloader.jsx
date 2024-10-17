import { useEffect, useRef } from 'react';

const Preloader = () => {
	const preloaderSection = useRef();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setTimeout(() => {
				const preloader = preloaderSection.current;
				preloader.style.display = 'none';
			}, 3100);
		}
	}, []);

	return (
		<div
			className="preloader"
			ref={preloaderSection}
			style={{ zIndex: '9999' }}>
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
