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
	const { t } = useTranslation();
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

			ScrollTrigger.create({
				trigger: '.workflow__area',
				start: 'top center',
				onEnter: () => {
					if (swiperRef.current) {
						swiperRef.current.slideTo(0);
					}
				},
			});

			return () => {
				tHero.revert();
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
								<h2 className="sec-sub-title title-anim">{t('pages.home.workflow.secSubTitle')}</h2>
								<h3 className="sec-title title-anim">{t('pages.home.workflow.secTitle')}</h3>
							</div>
						</div>

						<div
							className="col-xxl-12 workflow__slider"
							style={{ paddingBottom: '30px' }}>
							<Swiper
								modules={[Scrollbar, Autoplay]}
								spaceBetween={30}
								slidesPerView={3}
								slidesPerGroup={3} // Thêm thuộc tính này
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
										slidesPerGroup: 1, // Điều chỉnh cho màn hình nhỏ
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2,
										slidesPerGroup: 2, // Điều chỉnh cho màn hình trung bình
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 3,
										slidesPerGroup: 3, // Giữ nguyên cho màn hình lớn
										spaceBetween: 30,
									},
								}}>
								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step1')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number1')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title1')}</h6>
										<p>{t('pages.home.workflow.description1')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step2')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number2')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title2')}</h6>
										<p>{t('pages.home.workflow.description2')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step3')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number3')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title3')}</h6>
										<p>{t('pages.home.workflow.description3')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step4')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number4')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title4')}</h6>
										<p>{t('pages.home.workflow.description4')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step5')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number5')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title5')}</h6>
										<p>{t('pages.home.workflow.description5')}</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">{t('pages.home.workflow.step6')}</h4>
										<h5 className="workflow__number">{t('pages.home.workflow.number6')}</h5>
										<h6 className="workflow__title">{t('pages.home.workflow.title6')}</h6>
										<p>{t('pages.home.workflow.description6')}</p>
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
