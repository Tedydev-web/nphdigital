import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Boss from '../../../public/assets/imgs/about/yuri.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const AboutTestimonial = () => {
	return (
		<>
			<section className="testimonial__area-2">
				<div className="container g-0 line pb-140">
					<span className="line-3"></span>

					<div className="row g-0">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="testimonial__video">
								<Image
									priority
									className="w-100"
									width={587}
									height={783}
									style={{ color: 'transparent', height: '100%', objectFit: 'cover', borderRadius: '50px' }}
									src={Boss}
									alt="Boss Image"
								/>
							</div>
						</div>

						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="testimonial__slider-wrapper-2">
								<div className="testimonial__slider">
									<Swiper
										modules={[FreeMode, Navigation]}
										spaceBetween={0}
										slidesPerView={1}
										freeMode={true}
										loop={true}
										speed={2000}
										navigation={{
											nextEl: '.next-button',
											prevEl: '.prev-button',
										}}>
										<SwiperSlide>
											<div className="testimonial__slide">
												<div className="testimonial__inner-2">
													<h2 className="testimonial__title-2">
														NPH Digital <br /> Đối Tác Công Nghệ Thông Tin Tuyệt Vời
													</h2>
													<p class="testimonial__text-2">Tại NPH Digital, chất lượng và hiệu suất không chỉ là mục tiêu, mà còn là sự cam kết. Chúng tôi luôn tập trung vào tối ưu hóa hiệu suất và đảm bảo chất lượng tối ưu cho mọi dự án, để bạn không phải lo lắng về sự hoàn hảo bị gián đoạn.</p>
													<h3 className="testimonial__author">Mr. YURI KC </h3>
													<h4 className="testimonial__role">CEO NPH Digital</h4>
												</div>
											</div>
										</SwiperSlide>

										<SwiperSlide className="swiper-slide ">
											<div className="testimonial__slide">
												<div className="testimonial__inner-2">
													<h2 className="testimonial__title-2">Amazing digital service</h2>
													<p className="testimonial__text-2">We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.</p>
													<h3 className="testimonial__author">Adam Syndera</h3>
													<h4 className="testimonial__role">CEO, Agency</h4>
												</div>
											</div>
										</SwiperSlide>

										<SwiperSlide>
											<div className="testimonial__slide">
												<div className="testimonial__inner-2">
													<h2 className="testimonial__title-2">Amazing digital service</h2>
													<p className="testimonial__text-2">We were there right at the beginning just when the concept for search engine optimisation taking office and the full of internet. So wewe’ve grown to employ than 50 talented specialists with diverse experiences and broad skill sets of huge markers.</p>
													<h3 className="testimonial__author">Adam Syndera</h3>
													<h4 className="testimonial__role">CEO, Agency</h4>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>

								{/* <div className="testimonial__pagination">
									<div
										style={{ cursor: 'pointer' }}
										className="prev-button">
										<i className="fa-solid fa-arrow-right"></i>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="next-button">
										<i className="fa-solid fa-arrow-left"></i>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutTestimonial;
