import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from '@/plugins';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link.js';
import ArrowDownBig from '../../../public/assets/imgs/icon/arrow-down-big.png';
import Hero1bg from '../../../public/assets/imgs/hero/1/1-bg.png';
import Image from 'next/image.js';

const DigitalAgencyHero = () => {
	const { t } = useTranslation('home');
	const heroTitle = useRef();
	const heroSubTitle = useRef();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				// Thiết lập timeline để kiểm soát timing tốt hơn
				const tl = gsap.timeline();

				// Thiết lập ban đầu cho experience
				gsap.set('.experience', {
					y: 30,
					opacity: 0,
				});

				let split_hero__title = new SplitText(heroTitle.current, {
					type: 'chars',
				});
				let split_hero__subtitle = new SplitText(heroSubTitle.current, {
					type: 'chars words',
				});

				// Animation cho experience - chạy đầu tiên
				tl.to(
					'.experience',
					{
						y: 0,
						opacity: 1,
						duration: 2,
						ease: 'power2.out',
						delay: 0.8,
					},
					0
				);

				// Animation cho title
				tl.from(
					split_hero__title.chars,
					{
						duration: 1,
						x: 70,
						autoAlpha: 0,
						stagger: 0.1,
					},
					0.3
				);

				// Animation cho subtitle
				tl.from(
					split_hero__subtitle.words,
					{
						duration: 1,
						x: 50,
						autoAlpha: 0,
						stagger: 0.05,
					},
					'-=0.7'
				);
			});
			return () => tHero.revert();
		}
	}, []);

	return (
		<>
			<section className="hero__area">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="hero__content animation__hero_one">
								<Link href="/dich-vu">
									{t('DigitalAgencyHero.link')}{' '}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
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
									style={{ height: 'auto' }}
									src={ArrowDownBig}
									alt="Arrow Down Icon"
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
					style={{ width: 'auto', height: 'auto' }}
					src={Hero1bg}
					alt="image"
					className="hero1_bg"
				/>
			</section>
		</>
	);
};

export default DigitalAgencyHero;
