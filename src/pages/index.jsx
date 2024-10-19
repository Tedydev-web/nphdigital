import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useRef, useCallback } from 'react';
import RootLayout from '@/components/common/layout/RootLayout';
import DigitalAgencyHero from '@/components/hero/DigitalAgencyHero';
import DigitalAgencyRoll from '@/components/roll/DigitalAgencyRoll';
import DigitalAgencyAbout from '@/components/about/DigitalAgencyAbout';
import ServiceElementV4 from '@/components/service/ServiceElementV4';
import DigitalAgencyCounter from '@/components/counter/DigitalAgencyCounter';
import DigitalAgencyWorkflow from '@/components/workflow/DigitalAgencyWorkflow';
import DigitalAgencyPortfolio from '@/components/portfolio/DigitalAgencyPortfolio';
import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import DigitalMarketingTestimonial from '@/components/testimonial/DigitalMarketingTestimonial';

import gsap from 'gsap';
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });

const DigitalAgency = () => {
	const timelineRef = useRef(null);
	const dotsRef = useRef([]);

	const setupScrollDots = useCallback(() => {
		const dots = dotsRef.current;
		const sections = document.querySelectorAll('section');

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			sections.forEach((section, index) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					highlightDot(index);
				} else {
					unhighlightDot(index);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const setupTimeline = useCallback(() => {
		const timeline = timelineRef.current;

		gsap.to(timeline, {
			scrollTrigger: {
				trigger: document.body,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				onUpdate: (self) => {
					const progress = self.progress * 100;
					timeline.style.height = `${progress}%`;
				},
			},
		});
	}, []);

	const playCursor = useCallback(() => {
		let client_cursor = document.getElementById('client_cursor');

		const handleMouseMove = (e) => {
			const target = e.target;
			let tHero = gsap.context(() => {
				let tl = gsap.timeline({
					defaults: { x: e.clientX, y: e.clientY },
				});

				let t2 = gsap.timeline({
					defaults: { x: e.clientX, y: e.clientY },
				});

				if (target.closest('.testimonial__img')) {
					tl.to(client_cursor, {
						opacity: 1,
						ease: 'power4.out',
					});
				} else {
					t2.to(client_cursor, {
						opacity: 0,
						ease: 'power4.out',
					});
				}
			});

			return () => tHero.revert();
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			playCursor();
			setupTimeline();
			setupScrollDots();
		}
	}, [playCursor, setupTimeline, setupScrollDots]);

	const highlightDot = (index) => {
		if (dotsRef.current[index]) {
			dotsRef.current[index].classList.add('active');
		}
	};

	const unhighlightDot = (index) => {
		if (dotsRef.current[index]) {
			dotsRef.current[index].classList.remove('active');
		}
	};

	return (
		<div>
			<Head>
				<title>NPH Digital | Giải Pháp kỹ thuật số toàn diện</title>
				<meta
					name="description"
					content="NPH Digital - Giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
				/>
				<meta
					name="keywords"
					content="Giải pháp kỹ thuật số, Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, Thuê ngoài IT, NPH Digital"
				/>
				<meta
					name="author"
					content="NPH Digital"
				/>

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="NPH Digital | Giải Pháp kỹ thuật số toàn diện"
				/>
				<meta
					property="og:description"
					content="NPH Digital - Giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://nphdigital.com/"
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>
				<meta
					property="og:image:alt"
					content="Hình ảnh đại diện cho NPH Digital"
				/>
				<meta
					property="og:locale"
					content="vi_VN"
				/>
				<meta
					property="og:site_name"
					content="NPH Digital"
				/>
				<meta
					property="og:region"
					content="VN"
				/>
				<meta
					property="og:country-name"
					content="Vietnam"
				/>
				<meta
					property="og:video"
					content="https://res.cloudinary.com/tedydev/video/upload/v1729066298/nphdigital/video.mp4"
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="NPH Digital | Giải Pháp kỹ thuật số toàn diện"
				/>
				<meta
					name="twitter:description"
					content="NPH Digital - Giải pháp kỹ thuật số toàn diện: Phát triển ứng dụng di động, Thiết kế website, UX/UI, Marketing số, CRM, ERP, AI, và thuê ngoài IT."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>
				<meta
					name="twitter:image:alt"
					content="Hình ảnh đại diện cho NPH Digital"
				/>
				<meta
					name="twitter:site"
					content="@NPHDigital"
				/>
				<meta
					name="twitter:creator"
					content="@NPHDigital"
				/>

				<meta
					http-equiv="Cache-Control"
					content="no-cache, no-store, must-revalidate"
				/>
				<meta
					http-equiv="Pragma"
					content="no-cache"
				/>
				<meta
					http-equiv="Expires"
					content="0"
				/>

				{/* Viewport and Mobile Optimization */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://nphdigital.com/"
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
					href="https://res.cloudinary.com/tedydev/image/upload/nphdigital/cover.png"
				/>

				{/* Other Meta Tags */}
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					http-equiv="Content-Type"
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

			<div
				className="timeline"
				ref={timelineRef}>
				{['', '', 'Về chúng tôi', 'Dịch vụ của chúng tôi', 'Thành tích', 'Quy trình làm việc', 'Dự án đã thực hiện', 'Đối tác công nghệ', 'Châm ngôn làm việc', 'Liên hệ với chúng tôi'].map((label, index) => (
					<span
						key={index}
						className="dot"
						ref={(el) => (dotsRef.current[index] = el)}>
						<span className="dot-label">{label}</span>
					</span>
				))}
			</div>
			<main>
				<div
					className="cursor"
					id="client_cursor">
					Play
				</div>
				<RootLayout
					header="header3"
					footer="footer3"
					defaultMode="dark">
					<DigitalAgencyHero />
					<DigitalAgencyRoll />
					<DigitalAgencyAbout />
					<ServiceElementV4 />
					<DigitalAgencyCounter />
					<DigitalAgencyWorkflow />
					<DigitalAgencyPortfolio />
					<DigitalAgencyBrand />
					<DigitalMarketingTestimonial />
					<DigitalAgencyCTA />
				</RootLayout>
			</main>
			<style jsx>{`
				.timeline {
					position: fixed;
					right: 0;
					top: 30%;
					width: 5px;
					height: 100%;
					background-color: #0d1117;
					z-index: 1000;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
				}
				.dot {
					position: relative;
					width: 10px;
					height: 10px;
					background-color: #0d1117;
					border-radius: 50%;
					opacity: 0.5;
					transition: opacity 0.3s, background-color 0.3s, transform 0.3s;
				}
				.dot-label {
					position: absolute;
					right: 20px;
					top: 30%;
					transform: translateY(-50%) scale(0.8);
					background-color: #1b1b1b;
					color: #c3c3c3;
					padding: 2px 5px;
					border-radius: 3px;
					opacity: 0;
					transition: opacity 0.3s, transform 0.3s;
					white-space: nowrap;
				}
				.dot.active {
					opacity: 1;
					background-color: #99ba21;
					transform: scale(1.2);
				}
				.dot.active .dot-label {
					opacity: 1;
					transform: translateY(-50%) scale(1);
				}
				.cursor {
					position: fixed;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background-color: red;
					pointer-events: none;
					z-index: 1001;
				}
			`}</style>
		</div>
	);
};

export default DigitalAgency;
