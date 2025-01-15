import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import RootLayout from '@/components/common/layout/RootLayout';
import AboutCounter from '@/components/counter/AboutCounter';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import ModernAgencySingleImage from '@/components/hero/ModernAgencySingleImage';
import CreativeAgencyAbout from '@/components/story/CreativeAgencyAbout';
// import AboutTeam from '@/components/team/AboutTeam';
import AboutTestimonial from '@/components/testimonial/AboutTestimonial';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';

const About = () => {
	const creativeAgencyAboutRef = useRef(null);

	const notify = () => {
		const toastId = toast.info('Nhấn vào đây để bật âm thanh video!', {
			onClick: () => {
				if (creativeAgencyAboutRef.current) {
					creativeAgencyAboutRef.current.unmuteVideo();
					
					toast.update(toastId, {
						render: 'Video đã được bật tiếng!',
						type: 'success',
						autoClose: 3000,
						isLoading: false,
					});
				}
			},
			autoClose: false,
			closeOnClick: false,
			closeButton: true,
		});
	};

	useEffect(() => {
		notify();
	}, []);

	return (
		<div className="dark-theme">
			<Head>
				<title>Giới thiệu | NPH Digital</title>
				{/* Thêm meta robots và sitemap */}
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<link
					rel="sitemap"
					type="application/xml"
					href="/sitemap.xml"
				/>

				<meta
					name="description"
					content="Tìm hiểu về NPH Digital - Giải pháp chuyển đổi số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					name="keywords"
					content="Giới thiệu NPH Digital, Giải pháp chuyển đổi số, Đội ngũ chuyên nghiệp, Kinh nghiệm ngành"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Giới thiệu"
				/>
				<meta
					property="og:description"
					content="Tìm hiểu về NPH Digital - Giải pháp chuyển đổi số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.com/gioi-thieu"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					property="og:image:alt"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>
				<meta
					property="og:site_name"
					content="NPH Digital"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					name="twitter:title"
					content="NPH Digital | Giới thiệu"
				/>
				<meta
					name="twitter:description"
					content="Tìm hiểu về NPH Digital - Giải pháp chuyển đổi số toàn diện với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					name="twitter:image:alt"
					content="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>
				<meta
					name="twitter:site"
					content="@NPHDigital"
				/>
				<meta
					name="twitter:creator"
					content="@NPHDigital"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://nphdigital.com/gioi-thieu"
				/>

				{/* Favicon */}
				<link
					rel="icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon.ico"
					sizes="16x16"
					type="image/x-icon"
				/>
				<link
					rel="apple-touch-icon"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/favicon-16x16.png"
					sizes="16x16"
				/>

				{/* Preload important resources */}
				<link
					rel="preload"
					as="image"
					href="https://res.cloudinary.com/tedydev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/nphdigital/cover.png"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=UTF-8"
				/>
				<meta
					name="application-name"
					content="NPH Digital"
				/>
				<meta
					name="theme-color"
					content="#121212"
				/>
				<meta
					name="copyright"
					content="NPH Digital"
				/>

				{/* Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'http://schema.org',
							'@type': 'Organization',
							name: 'NPH Digital',
							url: 'https://nphdigital.com',
							logo: 'https://res.cloudinary.com/tedydev/image/upload/nphdigital/logo.png',
							sameAs: ['https://www.facebook.com/nphdigital838', 'https://twitter.com/NPHDigital'],
						}),
					}}
				/>
			</Head>

			<main>
				<RootLayout
					header="header3"
					footer="footer3">
					<ModernAgencySingleImage />
					<CreativeAgencyAbout ref={creativeAgencyAboutRef} />
					<AboutCounter />
					{/* <AboutTeam /> */}
					<DigitalAgencyBrand />
					<AboutTestimonial />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<style
				jsx
				global>{`
				/* Tùy chỉnh container toast */
				.Toastify__toast-container {
					padding: 0;
					width: auto !important;
					max-width: 90vw;
					z-index: 9999;
				}

				/* Màn hình lớn (desktop) */
				@media (min-width: 1024px) {
					.Toastify__toast-container {
						max-width: 480px;
						min-width: 380px;
					}

					.Toastify__toast {
						font-size: 0.95rem;
						padding: 0.75rem 1rem;
						margin-bottom: 1rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				/* Tablet */
				@media (max-width: 1023px) and (min-width: 768px) {
					.Toastify__toast-container {
						max-width: 420px;
						min-width: 340px;
					}

					.Toastify__toast {
						font-size: 0.9rem;
						padding: 0.75rem;
						margin-bottom: 0.875rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				/* Mobile */
				@media (max-width: 767px) {
					.Toastify__toast-container {
						max-width: 92vw;
						min-width: 280px;
						padding: 0 8px;
						left: 50% !important;
						transform: translateX(-50%);
						bottom: 16px !important;
					}

					.Toastify__toast {
						font-size: 0.85rem;
						padding: 0.625rem 0.75rem;
						margin-bottom: 0.75rem;
						min-height: auto;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					/* Ẩn nút đóng trên mobile để tiết kiệm không gian */
					.Toastify__close-button {
						display: none;
					}
				}

				/* CSS chung cho toast */
				.Toastify__toast {
					background: rgba(18, 18, 18, 0.8);
					backdrop-filter: blur(12px);
					-webkit-backdrop-filter: blur(12px);
					border-radius: 12px;
					cursor: pointer;
					transition: all 0.3s ease;
					position: relative;
					padding: 2px;
					border: 1px solid rgba(255, 255, 255, 0.1);
					box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2);
					display: flex;
					align-items: center;
				}

				.Toastify__toast-body {
					flex: 1;
					padding: 4px 8px;
					min-width: 0; /* Cho phép text-overflow hoạt động */
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				/* Tùy chỉnh nội dung toast */
				.Toastify__toast-body {
					font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
					color: rgba(255, 255, 255, 0.95);
					line-height: 1.4;
					margin: 0;
					text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
				}

				/* Tùy chỉnh thanh progress */
				.Toastify__progress-bar {
					background: linear-gradient(to right, #3b82f6, #10b981);
					height: 2px;
					opacity: 0.8;
				}

				/* Hiệu ứng khi toast xuất hiện */
				@keyframes toastSlideUp {
					from {
						transform: translateY(100%);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}

				.Toastify__toast--entering {
					animation: toastSlideUp 0.3s ease forwards;
				}

				/* Tối ưu hiệu năng */
				.Toastify__toast {
					will-change: transform;
					backface-visibility: hidden;
					-webkit-font-smoothing: antialiased;
				}
			`}</style>
			<style jsx>{`
				.dark-theme {
					background-color: #1b1b1b; /* Màu nền */
					color: white; /* Màu chữ */
					min-height: 100vh; /* Đảm bảo chiều cao tối thiểu */
				}
			`}</style>
		</div>
	);
};

export default About;
