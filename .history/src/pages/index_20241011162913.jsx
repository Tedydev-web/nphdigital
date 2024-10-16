import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import RootLayout from '@/components/common/layout/RootLayout';
import DigitalAgencyHero from '@/components/hero/DigitalAgencyHero';
import DigitalAgencyRoll from '@/components/roll/DigitalAgencyRoll';
import DigitalAgencyAbout from '@/components/about/DigitalAgencyAbout';
import ServiceElementV4 from '@/components/service/ServiceElementV4';
import DigitalAgencyCounter from '@/components/counter/DigitalAgencyCounter';
import DigitalAgencyWorkflow from '@/components/workflow/DigitalAgencyWorkflow';
import DigitalAgencyPortfolio from '@/components/portfolio/DigitalAgencyPortfolio';
import DigitalAgencyBrand from '@/components/brand/DigitalAgencyBrand';
import DigitalMarketingTestimonial from '@/components/testimonial/DigitalMarketingTestimonial';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';
import gsap from 'gsap';
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });
const DigitalAgency = () => {
	const timelineRef = useRef(null);
	const dotsRef = useRef([]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			playCursor();
			setupTimeline();
			setupScrollDots();
		}
	}, []);

	function playCursor() {
		try {
			let client_cursor = document.getElementById('client_cursor');
			document.addEventListener('mousemove', (e) => {
				const target = e.target;
				let tHero = gsap.context(() => {
					let tl = gsap.timeline({
						defaults: {
							x: e.clientX,
							y: e.clientY,
						},
					});
					let t2 = gsap.timeline({
						defaults: {
							x: e.clientX,
							y: e.clientY,
						},
					});

					// Home Page Client Cursor
					if (target.closest('.testimonial__img')) {
						tl.to(
							client_cursor,
							{
								opacity: 1,
								ease: 'power4.out',
							},
							'-=0.3'
						);
					} else {
						t2.to(
							client_cursor,
							{
								opacity: 0,
								ease: 'power4.out',
							},
							'-=0.3'
						);
					}
				});
				return () => tHero.revert();
			});
		} catch (err) {
			console.log(err);
		}
	}

	function setupScrollDots() {
		const dots = dotsRef.current;
		const sections = document.querySelectorAll('section');
		const totalSections = sections.length;

		window.addEventListener('scroll', () => {
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
		});
	}

	function setupTimeline() {
		const timeline = timelineRef.current;
		const sections = document.querySelectorAll('section');
		const totalSections = sections.length;

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
	}

	function highlightDot(index) {
		if (dotsRef.current[index]) {
			dotsRef.current[index].classList.add('active');
		}
	}

	function unhighlightDot(index) {
		if (dotsRef.current[index]) {
			dotsRef.current[index].classList.remove('active');
		}
	}

	return (
		<div>

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
