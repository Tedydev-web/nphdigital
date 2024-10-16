import { FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const DigitalAgencyRoll = () => {
	return (
		<>
			<section className="roll__area">
				<div className="roll__slider">
					<Swiper
						modules={[FreeMode, Autoplay]}
						spaceBetween={0}
						slidesPerView={1}
						freeMode={true}
						loop={true}
						centeredSlides={true}
						allowTouchMove={false}
						speed={2000}
						autoplay={{
							delay: 1,
							disableOnInteraction: true,
						}}
						breakpoints={{
							640: {
								slidesPerView: 3,
							},
							800: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 4,
							},
							1300: {
								slidesPerView: 5,
							},
							1900: {
								slidesPerView: 8,
							},
						}}>
						<SwiperSlide>
							<div className="roll__slide">
								<h2>Chuyên nghiệp</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tinh tế</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Hiệu quả</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Đổi mới</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tương thích</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Đột phá</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tinh gọn</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Đáp ứng</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Toàn diện</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Sáng tạo</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tích hợp</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Chiến lược</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tối ưu</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Tự động</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Thông minh</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Đáng tin cậy</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Chính xác</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Đơn giản</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="roll__slide">
								<h2>Độc quyền</h2>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyRoll;
