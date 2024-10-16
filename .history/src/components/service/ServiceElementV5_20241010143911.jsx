import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV5 = () => {
	const sectionRef = useRef(null);
	const firstRowRef = useRef(null);
	const secondRowRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;
		const firstRow = firstRowRef.current;
		const secondRow = secondRowRef.current;

		gsap.set(firstRow, { y: 57, opacity: 0 });
		gsap.set(secondRow, { y: -57, opacity: 0 });

		ScrollTrigger.create({
			trigger: section,
			start: 'top 80%',
			onEnter: () => {
				gsap.to(firstRow, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
				gsap.to(secondRow, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
			},
		});
	}, []);

	const services = [
		{
			title: 'Phát triển ứng dụng di động',
			items: ['Thiết kế UI/UX chuyên nghiệp', 'Phát triển đa nền tảng', 'Tối ưu hiệu suất'],
			href: '/mobile-app', // Đường dẫn chi tiết dịch vụ
		},
		{
			title: 'Thiết kế & Phát triển website',
			items: ['Giao diện responsive', 'Tối ưu SEO', 'Tích hợp CMS'],
			href: '/thiet-ke-website',
		},
		{
			title: 'Hệ thống CRM, ERP, HRM',
			items: ['Tùy chỉnh theo yêu cầu', 'Tích hợp dữ liệu', 'Báo cáo thông minh'],
			href: '/crm-erp-hrm',
		},
		{
			title: 'Digital Marketing',
			items: ['Chiến lược marketing tổng thể', 'Quảng cáo trực tuyến', 'Phân tích dữ liệu'],
			href: '/quang-cao-so',
		},
		{
			title: 'Lập Trình AI Tự Động Hóa',
			items: ['Xử lý ngôn ngữ tự nhiên', 'Học máy', 'Tự động hóa quy trình'],
			href: '/lap-trinh-ai',
		},
		{
			title: 'Tương tác số',
			items: ['Trải nghiệm người dùng', 'Tương tác đa phương tiện', 'Phân tích hành vi'],
			href: '/tuong-tac-so',
		},
		{
			title: 'Chăm sóc Fanpage',
			items: ['Lên kế hoạch nội dung', 'Thiết kế hình ảnh và video', 'Tương tác với khách hàng'],
			href: '/cham-soc-fanpage',
		},
		// {
		// 	title: 'Setup sàn \nthương mại điện tử',
		// 	items: ['Thiết kế giao diện', 'Quản lý sản phẩm', 'Tích hợp thanh toán'],
		// 	href: '/e-commerce-setup',
		// },
		{
			title: 'Cho thuê phòng IT ngoài',
			items: ['Nhân sự chuyên nghiệp', 'Trang thiết bị đầy đủ', 'Hỗ trợ kỹ thuật 24/7'],
			href: '/thue-phong-it-ngoai',
		},
		{
			title: 'Thiết kế UX/UI',
			items: ['Nghiên cứu người dùng', 'Thiết kế giao diện', 'Tối ưu trải nghiệm'],
			href: '/thiet-ke-ux-ui',
		},
	];

	const firstRowServices = services.slice(0, 5);
	const secondRowServices = services.slice(5);

	const swiperCommonProps = {
		modules: [FreeMode, Autoplay],
		spaceBetween: 30,
		slidesPerView: 3,
		freeMode: true,
		loop: true,
		allowTouchMove: false,
		speed: 5000,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
		},
		breakpoints: {
			// width >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			// width >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// width >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	};

	return (
		<section
			className="portfolio__service service-v5 pt-140 pb-140"
			ref={sectionRef}>
			<div className="container">
				<div className="row">
					<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
						<h2 className="sec-title">Tiêu chí các dịch vụ của NPH Digital</h2>
					</div>
					<div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
						<div className="sec-text">
							<p>Với sự hiểu biết sâu rộng và kinh nghiệm đa dạng, chúng tôi cam kết đem lại sự ấn tượng, chuyên nghiệp và hiệu quả để tạo ra các giải pháp phần mềm vượt trội cho dự án của bạn. Sau đây là các tiêu chí về dịch vụ của NPH Digital</p>
						</div>
					</div>
				</div>
				<div className="portfolio__service-list">
					<div ref={firstRowRef}>
						<Swiper
							{...swiperCommonProps}
							className="service__slider">
							{firstRowServices.concat(firstRowServices).map((service, index) => (
								<SwiperSlide key={index}>
									<div
										className="portfolio__service-item"
										style={{ height: '250px', overflow: 'hidden' }}>
										<Link href={service.href}>
											<h3 className="ps-title">{service.title}</h3>
											<ul>
												{service.items.map((item, itemIndex) => (
													<li key={itemIndex}>+ {item}</li>
												))}
											</ul>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div ref={secondRowRef}>
						<Swiper
							{...swiperCommonProps}
							className="service__slider"
							dir="rtl">
							{secondRowServices.concat(secondRowServices).map((service, index) => (
								<SwiperSlide key={index}>
									<div
										className="portfolio__service-item"
										style={{ height: '250px', overflow: 'hidden' }}>
										<Link href={service.href}>
											<h3 className="ps-title">{service.title}</h3>
											<ul>
												{service.items.map((item, itemIndex) => (
													<li key={itemIndex}>+ {item}</li>
												))}
											</ul>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceElementV5;
