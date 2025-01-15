import { useEffect, useState, Suspense } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { useResourcePreload } from '@/hooks/usePerformance';
import dynamic from 'next/dynamic';
import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/scss/master.scss';
import '@/styles/extra.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: '20px', textAlign: 'center' }}>
					<h2>Đã có lỗi xảy ra</h2>
					<p>Vui lòng tải lại trang hoặc thử lại sau.</p>
					<button 
						onClick={() => window.location.reload()}
						style={{
							padding: '10px 20px',
							border: 'none',
							borderRadius: '5px',
							background: '#007bff',
							color: 'white',
							cursor: 'pointer'
						}}
					>
						Tải lại trang
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

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
		<ErrorBoundary>
			<Suspense fallback={<Preloader />}>
				{!isRouteChanging && <FontAwesomeConfig />}
				<Component {...pageProps} />
			</Suspense>
		</ErrorBoundary>
	);
}

export default appWithTranslation(App);
