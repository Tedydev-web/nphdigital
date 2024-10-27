import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTestimonial = () => {
	const testimonialArea = useRef();
	const { t } = useTranslation('home');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.animation_image_zoom img', { opacity: 0, scale: 0.5 });

				gsap.to('.animation_image_zoom img', {
					scrollTrigger: {
						trigger: '.testimonial__area-3',
						start: 'top center+=200',
						markers: false,
					},
					opacity: 1,
					scale: 1,
					x: 20,
					ease: 'power2.out',
					duration: 2.5,
					stagger: {
						each: 0.3,
					},
				});
				function imageMoving(wrapper, image_list) {
					let container = wrapper;
					try {
						if (container) {
							container.addEventListener('mousemove', (e) => {
								var x = e.clientX;
								var y = e.clientY;
								let viewportWidth = window.innerWidth;
								let viewportHeight = window.innerHeight;
								let center = viewportWidth / 2;
								let centerHeight = innerHeight / 2;

								if (x > center) {
									gsap.to(image_list, {
										x: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(image_list, {
										x: -15,
										duration: 5,
										ease: 'power4.out',
									});
								}
								if (y > centerHeight) {
									gsap.to(image_list, {
										y: 15,
										duration: 5,
										ease: 'power4.out',
									});
								} else {
									gsap.to(image_list, {
										y: -15,
										duration: 5,
										ease: 'power4.out',
									});
								}
							});
						}
					} catch (err) {
						console.log(err);
					}
				}
				imageMoving(testimonialArea.current, '.testimonial__area-3 img');
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section
				className="testimonial__area-3"
				ref={testimonialArea}>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div>
								<Swiper
									modules={[Navigation, FreeMode]}
									spaceBetween={0}
									slidesPerView={1}
									freeMode={true}
									loop={true}
									speed={2000}
									navigation={{
										prevEl: '.prev-button',
										nextEl: '.next-button',
									}}
									className="testimonial__slider-3">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="testimonial__slide-3">
												<p>{t('DigitalMarketingTestimonial.slide')}</p>
												<h2 className="client__name-3">{t('DigitalMarketingTestimonial.name')}</h2>
												<h3 className="client__role-3">{t('DigitalMarketingTestimonial.role')}</h3>
											</div>
										</SwiperSlide>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="next-button swipper-btn">
										<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="prev-button swipper-btn">
										<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonial__images-3 animation_image_zoom">
					<video
						autoPlay={true}
						playsInline={true}
						loop={true}
						muted={true}
						className="testimonial3__img-2">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoPlay={true}
						playsInline={true}
						loop={true}
						muted={true}
						className="testimonial3__img-3">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoPlay={true}
						playsInline={true}
						loop={true}
						muted={true}
						className="testimonial3__img-4">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoPlay={true}
						playsInline={true}
						loop={true}
						muted={true}
						className="testimonial3__img-5">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
					<video
						autoPlay={true}
						playsInline={true}
						loop={true}
						muted={true}
						className="testimonial3__img-6">
						<source
							data-src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
							type="video/mp4"
							src="https://cdn.cuberto.com/cb/hello/brandreel/1.mp4"
						/>
					</video>
				</div>
			</section>
		</>
	);
};

export default DigitalMarketingTestimonial;
