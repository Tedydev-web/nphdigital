import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import Brand1 from '../../../public/assets/imgs/brand/1.webp';
import Brand2 from '../../../public/assets/imgs/brand/2.webp';
import Brand3 from '../../../public/assets/imgs/brand/3.webp';
import Brand4 from '../../../public/assets/imgs/brand/4.webp';
import Brand5 from '../../../public/assets/imgs/brand/5.webp';
import Brand6 from '../../../public/assets/imgs/brand/6.webp';
import Brand7 from '../../../public/assets/imgs/brand/7.webp';
import Brand8 from '../../../public/assets/imgs/brand/8.webp';
import Brand9 from '../../../public/assets/imgs/brand/9.webp';
import Brand10 from '../../../public/assets/imgs/brand/10.webp';
import Brand11 from '../../../public/assets/imgs/brand/11.webp';
import Brand12 from '../../../public/assets/imgs/brand/12.webp';

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBrand = () => {
	const sectionRef = useRef(null);
	const firstRowRef = useRef(null);
	const secondRowRef = useRef(null);
	const { t } = useTranslation('home');

	useEffect(() => {
		const section = sectionRef.current;
		const firstRow = firstRowRef.current;
		const secondRow = secondRowRef.current;

		gsap.set(firstRow, { y: 50, opacity: 0 });
		gsap.set(secondRow, { y: -50, opacity: 0 });

		ScrollTrigger.create({
			trigger: section,
			start: 'top 80%',
			onEnter: () => {
				gsap.to(firstRow, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
				gsap.to(secondRow, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
			},
		});
	}, []);

	const brandImages = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10, Brand11, Brand12];
	const firstRowBrands = brandImages.slice(0, 6);
	const secondRowBrands = brandImages.slice(6);

	const swiperCommonProps = {
		modules: [FreeMode, Autoplay],
		spaceBetween: 30,
		freeMode: true,
		loop: true,
		allowTouchMove: false,
		speed: 6000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	};

	return (
		<section
			className="brand__area"
			ref={sectionRef}>
			<div className="container g-0 line pt-140 pb-130">
				<span className="line-3"></span>
				<div className="row">
					<div className="col-xxl-12">
						<div className="sec-title-wrapper">
							<h2 className="sec-sub-title title-anim">{t('DigitalAgencyBrand.secSubTitle')}</h2>
							<h3 className="sec-title title-anim">{t('DigitalAgencyBrand.secTitle')}</h3>
						</div>
					</div>

					<div
						className="col-xxl-12"
						style={{ pointerEvents: 'none' }}>
						<div ref={firstRowRef}>
							<Swiper
								{...swiperCommonProps}
								className="brand__slider">
								{firstRowBrands.concat(firstRowBrands).map((brand, index) => (
									<SwiperSlide key={index}>
										<div className="brand__item">
											<Image
												priority
												width={100}
												height={70}
												src={brand}
												alt={`Brand Logo ${index + 1}`}
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div ref={secondRowRef}>
							<Swiper
								{...swiperCommonProps}
								className="brand__slider"
								dir="rtl">
								{secondRowBrands.concat(secondRowBrands).map((brand, index) => (
									<SwiperSlide key={index}>
										<div className="brand__item">
											<Image
												priority
												width={100}
												height={70}
												src={brand}
												alt={`Brand Logo ${index + 7}`}
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DigitalAgencyBrand;
