import { useEffect } from 'react';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const DigitalAgencyWorkflow = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.fade_left', { x: -30, opacity: 0 });
				gsap.to('.fade_left', {
					scrollTrigger: {
						trigger: '.fade_left',
						start: 'top center+=200', // Adjust start position
					},
					x: 0,
					opacity: 1,
					ease: 'power2.out',
					duration: 1.2, // Adjust duration
					stagger: {
						each: 0.3, // Adjust stagger timing
					},
				});
			});
			return () => tHero.revert();
		}
	}, []);

	return (
		<>
			<section className="workflow__area">
				<div className="container g-0 line pt-120 pb-120">
					{' '}
					{/* Adjust padding */}
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-sub-title title-anim">quy trình</h2>
								<h3 className="sec-title title-anim">Quy trình làm việc</h3>
							</div>
						</div>

						<div
							className="col-xxl-12 workflow__slider"
							style={{ paddingBottom: '30px' }}>
							<Swiper
								modules={[Scrollbar, Autoplay]}
								spaceBetween={20} // Adjust space between slides
								slidesPerView={1}
								freeMode={false} // Disable freeMode
								loop={false} // Disable loop
								speed={800} // Adjust speed
								autoplay={{
									delay: 2000, // Adjust delay
									disableOnInteraction: false,
								}}
								scrollbar={{ draggable: true }}
								initialSlide={0}
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 20, // Adjust space for smaller screens
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									1200: {
										slidesPerView: 4,
										spaceBetween: 50,
									},
								}}>
								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 01</h4>
										<h5 className="workflow__number">01</h5>
										<h6 className="workflow__title">Ý tưởng</h6>
										<p>Bộ phận phân tích nghiệp vụ sẽ thảo luận và lấy yêu cầu thiết kế chi tiết từ khách hàng.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 02</h4>
										<h5 className="workflow__number">02</h5>
										<h6 className="workflow__title">phác thảo</h6>
										<p>Dựa vào thông tin cung cấp, chúng tôi sẽ phân tích và phác thảo kiến trúc hệ thống cho sản phẩm.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 03</h4>
										<h5 className="workflow__number">03</h5>
										<h6 className="workflow__title">Thiết kế</h6>
										<p>Sau khi tiếp nhận mô tả chức năng, đội ngũ thiết kế sẽ tiến hành xây dựng giao diện cho hệ thống.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 04</h4>
										<h5 className="workflow__number">04</h5>
										<h6 className="workflow__title">Phát triển</h6>
										<p>Đội ngũ phát triển sẽ tiến hành phân tích, lựa chọn giải pháp và công nghệ phù hợp để xây dựng sản phẩm dựa theo bản thiết kế.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 05</h4>
										<h5 className="workflow__number">05</h5>
										<h6 className="workflow__title">Kiểm thử</h6>
										<p>Bộ phận kiểm thử sẽ luôn làm việc song song với bộ phận phát triển để đưa ra phản hồi nhằm đảm bảo chất lượng sản phẩm ở mọi giai đoạn.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="workflow__slide fade_left">
										<h4 className="workflow__step">bước 06</h4>
										<h5 className="workflow__number">06</h5>
										<h6 className="workflow__title">Triển khai</h6>
										<p>Đội ngũ phát triển sẽ tiến hành triển khai - vận hành hệ thống để đảm bảo hệ thống hoạt động ổn định và tối ưu chi phí tốt nhất.</p>
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
