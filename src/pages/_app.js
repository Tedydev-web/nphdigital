import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { useResourcePreload } from '@/hooks/usePerformance';
import dynamic from 'next/dynamic';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/scss/master.scss';
import '@/styles/extra.css';

// Dynamic imports with loading optimization
const FontAwesomeConfig = dynamic(() => import('@/components/FontAwesomeConfig'), {
	ssr: false,
	loading: () => null
});

const Preloader = dynamic(() => import('@/components/preloader/Preloader'), {
	ssr: false,
	loading: () => null
});

function App({ Component, pageProps }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [isRouteChanging, setIsRouteChanging] = useState(false);
	
	// Preload critical resources
	useResourcePreload();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		// Route change optimization
		const handleStart = () => setIsRouteChanging(true);
		const handleComplete = () => setIsRouteChanging(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		// Lazy load Google Analytics
		const loadGA = () => {
			window.requestIdleCallback(() => {
				const script = document.createElement('script');
				script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
				script.async = true;
				document.head.appendChild(script);

				script.onload = () => {
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						window.dataLayer.push(arguments);
					}
					window.gtag = gtag;
					gtag('js', new Date());
					gtag('config', process.env.NEXT_PUBLIC_GA_ID);
				};
			});
		};

		if (process.env.NODE_ENV === 'production') {
			loadGA();
		}

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	if (!mounted) {
		return <Preloader />;
	}

	return (
		<Suspense fallback={<Preloader />}>
			{!isRouteChanging && <FontAwesomeConfig />}
			<Component {...pageProps} />
		</Suspense>
	);
}

export default appWithTranslation(App);
