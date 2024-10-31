import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/scss/master.scss';
import '@/styles/extra.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		// Khởi tạo dataLayer nếu chưa tồn tại
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		window.gtag = gtag;

		// Cấu hình Google Analytics
		gtag('js', new Date());
		gtag('config', process.env.NEXT_PUBLIC_GA_ID);

		// Hàm xử lý sự kiện thay đổi route
		const handleRouteChange = (url) => {
			window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
				page_path: url,
			});
		};

		// Lắng nghe sự kiện thay đổi route
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return <Component {...pageProps} />;
}

export default App;
