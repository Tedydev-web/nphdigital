import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
	const serviceList = useRef();
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		imageAnimation(serviceList.current.children);
	// 		let tHero = gsap.context(() => {
	// 			let service__items_3 = gsap.utils.toArray('.service_animation');
	// 			let service__items_heading = gsap.utils.toArray('.service_animation h3');
	// 			let service__items_content = gsap.utils.toArray('.service_animation .service__content-3');

	// 			service__items_3.forEach((service_item, i) => {
	// 				gsap.set([service__items_heading[i], service__items_content[i]], {
	// 					x: -30,
	// 					opacity: 0,
	// 				});

	// 				let service3_timeline = gsap.timeline({
	// 					scrollTrigger: {
	// 						trigger: service_item,
	// 						start: 'top center+=200',
	// 						markers: false,
	// 					},
	// 				});

	// 				service3_timeline.to(service__items_heading[i], {
	// 					x: 0,
	// 					opacity: 1,
	// 					ease: 'power2.out',
	// 					duration: 1.5,
	// 					stagger: {
	// 						each: 0.2,
	// 					},
	// 				});
	// 				service3_timeline.to(
	// 					service__items_content[i],
	// 					{
	// 						x: 0,
	// 						opacity: 1,
	// 						ease: 'power2.out',
	// 						duration: 1.5,
	// 						stagger: {
	// 							each: 0.2,
	// 						},
	// 					},
	// 					'-=1'
	// 				);
	// 			});
	// 		});
	// 		return () => tHero.revert();
	// 	}
	// }, []);

	// const imageAnimation = (data) => {
	// 	function followImageCursor(event, serviceImgItem) {
	// 		const contentBox = serviceImgItem.getBoundingClientRect();
	// 		const dx = event.clientX - contentBox.x;
	// 		const dy = event.clientY - contentBox.y;
	// 		serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
	// 	}

	// 	for (let i = 0; i < data.length; i++) {
	// 		data[i].addEventListener('mousemove', (event) => {
	// 			setInterval(followImageCursor(event, data[i]), 1000);
	// 		});
	// 	}
	// };

	return (
		<>
			<section className="service__area-3 pb-150">
				<div className="container">
					{/* <div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper pt-130 text-anim">
								<h2 className="sec-sub-title title-anim">Dịch vụ</h2>
								<h3 className="sec-title title-anim">
									Dịch vụ của <br /> Chúng tôi
								</h3>
								<p>Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers say they use Google to research products before buying.</p>
							</div>
						</div>
					</div> */}

					<div className="row">
						<div className="col-xx-12">
							<div
								className="service__list-3"
								ref={serviceList}>
								<div className="service__item-3 service_animation">
									<h3>
										<Link
											href="/mobile-app"
											className="service__title-3">
											Phát triển <br />
											Ứng dụng di động
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Chúng tôi cung cấp giải pháp phát triển ứng dụng di động tiên tiến, giúp doanh nghiệp tiếp cận khách hàng mọi lúc, mọi nơi với hiệu năng và trải nghiệm tối ưu.</p>
										<ul className="">
											<li>+ Thiết kế UI/UX chuyên nghiệp</li>
											<li>+ Phát triển đa nền tảng</li>
											<li>+ Tối ưu hiệu suất</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/mobile-app"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service1.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3>
										<Link
											href="/thiet-ke-website"
											className="service__title-3 ">
											Thiết kế & <br />
											Phát triển website
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Thiết kế website hiện đại và thân thiện với người dùng, tích hợp các giải pháp tối ưu SEO và CMS giúp nâng cao hiệu quả hoạt động của doanh nghiệp trên môi trường số.</p>
										<ul className="">
											<li>+ Giao diện responsive</li>
											<li>+ Tối ưu SEO</li>
											<li>+ Tích hợp CMS</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/thiet-ke-website"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service2.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/crm-erp-hrm"
											className="service__title-3">
											Hệ thống
											<br />
											CRM. ERP, HRM
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Triển khai hệ thống CRM, ERP và HRM tuỳ chỉnh theo yêu cầu, tích hợp dữ liệu toàn diện và cung cấp báo cáo thông minh nhằm tối ưu hoá quy trình quản trị.</p>
										<ul className="">
											<li>+ Tuỳ chỉnh theo yêu cầu</li>
											<li>+ Tích hợp dữ liệu</li>
											<li>+ Báo cáo thông minh</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/crm-erp-hrm"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service8.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/quang-cao-so"
											className="service__title-3">
											Quảng cáo số
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Xây dựng chiến lược marketing toàn diện, triển khai quảng cáo trực tuyến hiệu quả và phân tích dữ liệu chi tiết giúp gia tăng hiệu suất kinh doanh.</p>
										<ul className="">
											<li>+ Chiến lược marketing tổng thể</li>
											<li>+ Quảng cáo trực tuyến</li>
											<li>+ Phân tích dữ liệu</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/quang-cao-so"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service3.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/lap-trinh-ai"
											className="service__title-3">
											Lập trình AI <br />
											Tự động hoá
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Xây dựng chiến lược marketing toàn diện, triển khai quảng cáo trực tuyến hiệu quả và phân tích dữ liệu chi tiết giúp gia tăng hiệu suất kinh doanh.</p>
										<ul className="">
											<li>+ Xử lý ngôn ngữ tự nhiên</li>
											<li>+ Học máy</li>
											<li>+ Tự động hóa quy trình</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/lap-trinh-ai"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service9.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/tuong-tac-so"
											className="service__title-3">
											Tương tác số
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Phát triển các trải nghiệm tương tác đa phương tiện sáng tạo, giúp doanh nghiệp gắn kết mạnh mẽ với khách hàng thông qua phân tích hành vi người dùng.</p>
										<ul className="">
											<li>+ Trải nghiệm người dùng</li>
											<li>+ Tương tác đa phương tiện</li>
											<li>+ Phân tích hành vi</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/tuong-tac-so"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service6.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/cham-soc-fanpage"
											className="service__title-3">
											Chăm sóc Fanpage
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Cung cấp dịch vụ chăm sóc Fanpage chuyên nghiệp, từ lập kế hoạch nội dung đến thiết kế hình ảnh và video, nhằm tối đa hoá tương tác với khách hàng.</p>
										<ul className="">
											<li>+ Lên kế hoạch nội dung</li>
											<li>+ Thiết kế hình ảnh và video</li>
											<li>+ Tương tác với khách hàng</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/cham-soc-fanpage"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service7.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/thue-phong-it-ngoai"
											className="service__title-3">
											Cho thuê <br />
											Phòng IT ngoài
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Cho thuê đội ngũ IT chuyên nghiệp với đầy đủ trang thiết bị, hỗ trợ kỹ thuật 24/7 nhằm đảm bảo hoạt động liên tục và hiệu quả cho doanh nghiệp.</p>
										<ul className="">
											<li>+ Nhân sự chuyên nghiệp</li>
											<li>+ Trang thiết bị đầy đủ</li>
											<li>+ Hỗ trợ kỹ thuật 24/7</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/thue-phong-it-ngoai"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service10.jpeg)',
										}}></div> */}
								</div>

								<div className="service__item-3 service_animation">
									<h3 className="">
										<Link
											href="/thiet-ke-ui-ux"
											className="service__title-3">
											Thiết kế UX/UI
										</Link>
									</h3>
									<div className="service__content-3">
										<p>Cho thuê đội ngũ IT chuyên nghiệp với đầy đủ trang thiết bị, hỗ trợ kỹ thuật 24/7 nhằm đảm bảo hoạt động liên tục và hiệu quả cho doanh nghiệp.</p>
										<ul className="">
											<li>+ Nghiên cứu người dùng</li>
											<li>+ Thiết kế giao diện</li>
											<li>+ Tối ưu trải nghiệm</li>
										</ul>
									</div>
									<div className="service__btn-3">
										<div className="btn_wrapper">
											<Link
												href="/thiet-ke-ui-ux"
												className="wc-btn-black btn-hover btn-item">
												<span></span> Chi tiết
												<i className="fa-solid fa-arrow-right"></i>
											</Link>
										</div>
									</div>

									{/* <div
										className="service__hover-3"
										style={{
											backgroundImage: 'url(assets/imgs/service/3/service4.jpeg)',
										}}></div> */}
								</div>

								<div className="service3__img-wrap">
									<div className="service3__img"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalMarketingService;
