import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState, Suspense } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link.js';
import ArrowDownBig from '../../../public/assets/imgs/icon/arrow-down-big.png';
import Hero1bg from '../../../public/assets/imgs/hero/1/1-bg.png';
import Image from 'next/image.js';
import { FaArrowRight } from 'react-icons/fa'; // Sử dụng react-icons

const imageBreakpoints = {
	mobile: 640,
	tablet: 1024,
	desktop: 1920,
};

const DigitalAgencyHero = () => {
	const { t } = useTranslation('home');
	const heroTitle = useRef();
	const heroSubTitle = useRef();
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setIsImageLoaded(true);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('gsap').then(({ gsap }) => {
				import('@/plugins').then(({ SplitText }) => {
					let tHero = gsap.context(() => {
						gsap.set('.experience', {
							y: 50,
							opacity: 0,
						});
						let split_hero__title = new SplitText(heroTitle.current, {
							type: 'chars',
						});
						let split_hero__subtitle = new SplitText(heroSubTitle.current, {
							type: 'chars words',
						});

						gsap.from(split_hero__title.chars, {
							duration: 1,
							x: 70,
							autoAlpha: 0,
							stagger: 0.1,
						});
						gsap.from(split_hero__subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, '-=1');

						gsap.to(
							'.experience',
							{
								y: 0,
								opacity: 1,
								duration: 2,
								ease: 'power2.out',
							},
							'-=1.5'
						);
					});
					return () => tHero.revert();
				});
			});
		}
	}, []);

	return (
		<>
			<section className={`hero__area ${isImageLoaded ? 'loaded' : ''}`}>
				{/* Fallback background */}
				<div
					className="hero__background-fallback"
					style={{
						position: 'absolute',
						inset: 0,
						background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
						opacity: isImageLoaded ? 0 : 1,
						transition: 'opacity 0.3s ease-in-out',
					}}
				/>

				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="hero__content animation__hero_one">
								<Link href="/dich-vu">
									{t('DigitalAgencyHero.link')}{' '}
									<span>
										<FaArrowRight />
									</span>
								</Link>
								<div className="hero__title-wrapper">
									<h1
										className="hero__title"
										ref={heroTitle}>
										<span>{t('DigitalAgencyHero.title.line1')}</span> <br />
										<span>{t('DigitalAgencyHero.title.line2')}</span> <br />
										<span>{t('DigitalAgencyHero.title.line3')}</span>
									</h1>
									<p
										className="hero__sub-title"
										ref={heroSubTitle}>
										{t('DigitalAgencyHero.subtitle')}
									</p>
								</div>
								<Image
									priority
									width={170}
									height={170} // Thêm chiều cao
									src={ArrowDownBig}
									alt="Arrow Down Icon"
									layout="fixed" // Hoặc 'responsive'
								/>
								<div className="experience">
									<h2 className="title">{t('DigitalAgencyHero.experience.title')}</h2>
									<p>{t('DigitalAgencyHero.experience.description')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Image
					priority
					quality={75}
					placeholder="blur"
					blurDataURL={Hero1bg.blurDataURL}
					src={Hero1bg}
					alt="NPH Digital Hero Background"
					className="hero1_bg"
					sizes={`
            (max-width: ${imageBreakpoints.mobile}px) 100vw,
            (max-width: ${imageBreakpoints.tablet}px) 100vw,
            100vw
          `}
					onLoad={handleImageLoad}
					style={{
						width: '100%',
						height: 'auto',
						objectFit: 'cover',
						objectPosition: 'center',
						opacity: isImageLoaded ? 1 : 0,
						transition: 'opacity 0.3s ease-in-out',
						willChange: 'transform',
						transform: 'translateZ(0)',
						backfaceVisibility: 'hidden',
						WebkitFontSmoothing: 'subpixel-antialiased',
					}}
				/>
			</section>
			<style jsx>{`
				.hero__area {
					position: relative;
				}

				.hero1_bg {
					will-change: transform;
					transform: translateZ(0);
					backface-visibility: hidden;
					-webkit-font-smoothing: subpixel-antialiased;
				}

				@media (max-width: 640px) {
					.hero1_bg {
						height: 100vh;
						object-position: center;
					}
				}
			`}</style>
		</>
	);
};

export default DigitalAgencyHero;
