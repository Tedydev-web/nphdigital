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
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
		this.setState({
			errorInfo: errorInfo
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ 
					padding: '20px', 
					textAlign: 'center',
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '90%',
					maxWidth: '400px',
					background: '#fff',
					boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
					borderRadius: '8px'
				}}>
					<h2 style={{ marginBottom: '15px', color: '#333' }}>Đã có lỗi xảy ra</h2>
					<p style={{ marginBottom: '20px', color: '#666' }}>Vui lòng tải lại trang hoặc thử lại sau.</p>
					{process.env.NODE_ENV === 'development' && this.state.error && (
						<details style={{ 
							marginBottom: '20px', 
							textAlign: 'left',
							padding: '10px',
							background: '#f5f5f5',
							borderRadius: '4px'
						}}>
							<summary style={{ cursor: 'pointer', color: '#007bff' }}>Chi tiết lỗi</summary>
							<pre style={{ 
								marginTop: '10px',
								whiteSpace: 'pre-wrap',
								fontSize: '12px',
								color: '#666'
							}}>
								{this.state.error.toString()}
								{this.state.errorInfo && this.state.errorInfo.componentStack}
							</pre>
						</details>
					)}
					<button 
						onClick={() => window.location.reload()}
						style={{
							padding: '12px 24px',
							border: 'none',
							borderRadius: '5px',
							background: '#007bff',
							color: 'white',
							cursor: 'pointer',
							fontSize: '16px',
							fontWeight: '500',
							boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
		// Handle mobile viewport height
		const setVH = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		setVH();
		window.addEventListener('resize', setVH);
		setMounted(true);

		return () => window.removeEventListener('resize', setVH);
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
			if ('requestIdleCallback' in window) {
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
			} else {
				// Fallback for browsers that don't support requestIdleCallback
				setTimeout(() => {
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
				}, 1);
			}
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
