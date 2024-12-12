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
import { useEffect } from 'react';

const About = () => {
	const notify = () => {
		const toastId = toast.info('Nhấn vào đây để bật âm thanh video!', {
			onClick: () => {
				// Gọi hàm unmuteVideo từ CreativeAgencyAbout
				const videoElement = document.querySelector('.video__area video');
				if (videoElement) {
					videoElement.muted = false; // Bỏ muted
					videoElement.play(); // Bắt đầu chạy video

					// Cập nhật thông báo toast.info thành toast.success
					toast.update(toastId, {
						render: 'Video đã được bật tiếng!',
						type: 'success',
						autoClose: 3000, // Tự động ẩn sau 3 giây
						isLoading: false,
					});
				}
			},
			autoClose: false, // Không tự động ẩn
		});
	};

	useEffect(() => {
		notify(); // Hiển thị thông báo khi người dùng truy cập
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
					<CreativeAgencyAbout />
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
				}

				/* Màn hình lớn (desktop) */
				@media (min-width: 1024px) {
					.Toastify__toast-container {
						max-width: 420px;
					}

					.Toastify__toast {
						font-size: 0.95rem;
						padding: 1rem;
						margin-bottom: 1rem;
					}
				}

				/* Tablet */
				@media (max-width: 1023px) and (min-width: 768px) {
					.Toastify__toast-container {
						max-width: 360px;
					}

					.Toastify__toast {
						font-size: 0.9rem;
						padding: 0.875rem;
						margin-bottom: 0.875rem;
					}
				}

				/* Mobile */
				@media (max-width: 767px) {
					.Toastify__toast-container {
						max-width: calc(100vw - 32px);
						padding: 0 16px;
						left: 50% !important;
						transform: translateX(-50%);
						bottom: 16px !important;
					}

					.Toastify__toast {
						font-size: 0.85rem;
						padding: 0.75rem;
						margin-bottom: 0.75rem;
						min-height: auto;
					}

					/* Ẩn nút đóng trên mobile để tiết kiệm không gian */
					.Toastify__close-button {
						display: none;
					}
				}

				/* CSS chung cho toast */
				.Toastify__toast {
					background: rgba(18, 18, 18, 0.6);
					backdrop-filter: blur(12px);
					-webkit-backdrop-filter: blur(12px);
					border-radius: 16px;
					cursor: pointer;
					transition: all 0.3s ease;
					position: relative;
					padding: 2px;
					border: 1px solid rgba(255, 255, 255, 0.1);
					box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.05), 0 0 40px rgba(0, 255, 255, 0.03), 0 0 60px rgba(0, 255, 255, 0.01);
				}

				/* Tạo background gradient cho toast */
				.Toastify__toast::before {
					content: '';
					position: absolute;
					inset: -1px;
					background: linear-gradient(90deg, #3b82f6, #10b981, #6366f1, #8b5cf6, #ec4899);
					border-radius: 16px;
					z-index: -1;
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				/* Tạo inner background để che phần gradient ở giữa */
				.Toastify__toast::after {
					content: '';
					position: absolute;
					inset: 1px;
					background: rgba(18, 18, 18, 0.9);
					border-radius: 15px;
					z-index: -1;
					box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05);
				}

				/* Animation khi hover */
				.Toastify__toast:hover {
					transform: translateY(-2px);
					border-color: transparent;
					box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 255, 0.07), 0 0 50px rgba(0, 255, 255, 0.05);
				}

				.Toastify__toast:hover::before {
					opacity: 1;
					animation: borderAnimation 3s linear infinite;
				}

				@keyframes borderAnimation {
					0% {
						background-position: 0% 50%;
					}
					100% {
						background-position: 130% 50%;
					}
				}

				/* Tùy chỉnh nội dung toast */
				.Toastify__toast-body {
					font-family: 'SF Pro Display', sans-serif;
					color: rgba(255, 255, 255, 0.95);
					line-height: 1.5;
					padding: 8px;
					margin: 0;
					text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
				}

				/* Tùy chỉnh thanh progress */
				.Toastify__progress-bar {
					background: linear-gradient(to right, rgba(59, 130, 246, 0.7), rgba(16, 185, 129, 0.7));
					height: 3px;
					backdrop-filter: blur(8px);
				}

				/* Hiệu ứng pulse nhẹ cho toast mới */
				@keyframes softPulse {
					0% {
						box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
					}
					70% {
						box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
					}
					100% {
						box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
					}
				}

				.Toastify__toast--entering {
					animation: toastSlideIn 0.3s ease forwards, softPulse 2s infinite;
				}

				/* Tối ưu hiệu năng */
				.Toastify__toast {
					will-change: transform;
					backface-visibility: hidden;
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
