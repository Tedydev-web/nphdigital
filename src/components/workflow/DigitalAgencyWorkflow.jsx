import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyWorkflow = () => {
	const swiperRef = useRef(null);
	const { t } = useTranslation('home');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.fade_left', { x: -30, opacity: 0 });
				gsap.to('.fade_left', {
					scrollTrigger: {
						trigger: '.fade_left',
						start: 'top center+=200',
					},
					x: 0,
					opacity: 1,
					ease: 'power2.out',
					duration: 1.2,
					stagger: {
						each: 0.3,
					},
				});
			});

			const scrollTrigger = ScrollTrigger.create({
				trigger: '.workflow__area',
				start: 'top center',
				onEnter: () => {
					if (swiperRef.current && swiperRef.current.swiper) {
						swiperRef.current.swiper.slideTo(0);
					}
				},
			});

			return () => {
				tHero.revert();
				scrollTrigger.kill();
			};
		}
	}, []);

	return (
		<>
			<section className="workflow__area">
				<div className="container g-0 line pt-120 pb-120">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-sub-title title-anim">{t('DigitalAgencyWorkflow.secSubTitle')}</h2>
								<h3 className="sec-title title-anim">{t('DigitalAgencyWorkflow.secTitle')}</h3>
							</div>
						</div>

						<div
							className="col-xxl-12 workflow__slider"
							style={{ paddingBottom: '30px' }}>
							<Swiper
								modules={[Scrollbar, Autoplay]}
								spaceBetween={30}
								slidesPerView={3}
								slidesPerGroup={3}
								loop={false}
								speed={800}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								scrollbar={{ draggable: true }}
								initialSlide={0}
								onSwiper={(swiper) => {
									swiperRef.current = swiper;
								}}
								breakpoints={{
									320: {
										slidesPerView: 1,
										slidesPerGroup: 1,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2,
										slidesPerGroup: 2,
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 3,
										slidesPerGroup: 3,
										spaceBetween: 30,
									},
								}}>
								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step1')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number1')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title1')}</h6>
										<p>{t('DigitalAgencyWorkflow.description1')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step2')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number2')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title2')}</h6>
										<p>{t('DigitalAgencyWorkflow.description2')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step3')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number3')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title3')}</h6>
										<p>{t('DigitalAgencyWorkflow.description3')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step4')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number4')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title4')}</h6>
										<p>{t('DigitalAgencyWorkflow.description4')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step5')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number5')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title5')}</h6>
										<p>{t('DigitalAgencyWorkflow.description5')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('DigitalAgencyWorkflow.step6')}</h4>
										<h5 className="workflow__number">{t('DigitalAgencyWorkflow.number6')}</h5>
										<h6 className="workflow__title">{t('DigitalAgencyWorkflow.title6')}</h6>
										<p>{t('DigitalAgencyWorkflow.description6')}</p>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyWorkflow;
