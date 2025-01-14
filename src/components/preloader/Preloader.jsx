import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const Preloader = () => {
	const preloaderRef = useRef();
	const videoRef = useRef();
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (typeof window === 'undefined') return;

		let timeoutId;
		let maxLoadTime;

		const hidePreloader = () => {
			if (preloaderRef.current) {
				preloaderRef.current.style.opacity = '0';
				setTimeout(() => {
					if (preloaderRef.current) {
						preloaderRef.current.style.display = 'none';
					}
				}, 300);
			}
			if (videoRef.current) {
				videoRef.current.pause();
			}
			setIsLoading(false);
		};

		const handleLoad = () => {
			// Đảm bảo preloader hiển thị tối thiểu 1s để tránh nhấp nháy
			setTimeout(hidePreloader, 1000);
			clearTimeout(maxLoadTime);
		};

		// Xử lý khi route thay đổi
		router.events.on('routeChangeComplete', hidePreloader);
		router.events.on('routeChangeError', hidePreloader);

		// Lắng nghe sự kiện load của window
		window.addEventListener('load', handleLoad);

		// Đặt thời gian tối đa cho preloader (3 giây)
		maxLoadTime = setTimeout(hidePreloader, 3000);

		return () => {
			clearTimeout(timeoutId);
			clearTimeout(maxLoadTime);
			window.removeEventListener('load', handleLoad);
			router.events.off('routeChangeComplete', hidePreloader);
			router.events.off('routeChangeError', hidePreloader);
		};
	}, [router]);

	return (
		<div
			className="preloader"
			ref={preloaderRef}
			style={{
				zIndex: '9999',
				opacity: '1',
				transition: 'opacity 0.3s ease-out'
			}}>
			<div className="loading">
				{isLoading && (
					<video
						ref={videoRef}
						autoPlay
						muted
						playsInline
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover'
						}}>
						<source
							src="assets/video/loading.mp4"
							type="video/mp4"
						/>
						<div className="fallback-loading">Loading...</div>
					</video>
				)}
			</div>
		</div>
	);
};

export default Preloader;
