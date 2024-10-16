import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import Service11 from '../../../public/assets/imgs/service/service-01.png';
import Service12 from '../../../public/assets/imgs/service/1/7.1.png';
import Service13 from '../../../public/assets/imgs/service/1/3.png';
import Service14 from '../../../public/assets/imgs/service/1/4.png';
import Service15 from '../../../public/assets/imgs/service/1/5.png';
import Service16 from '../../../public/assets/imgs/service/1/6.png';
import Service17 from '../../../public/assets/imgs/service/1/7.1.png';
import Service18 from '../../../public/assets/imgs/service/1/8.png';
import Service19 from '../../../public/assets/imgs/service/1/9.png';
import Service20 from '../../../public/assets/imgs/service/1/10.png';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
	const [activeList, setActiveList] = useState(1);
	const [activeImg, setActiveImg] = useState(1);
	const [activeShape, setActiveShape] = useState(1);
	const [activeService, setActiveService] = useState(1);

	const serviceList = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let listItem = serviceList.current.children;
			console.log(listItem);
			for (let i = 0; i < listItem.length; i++) {
				listItem[i].addEventListener('mousemove', function (e) {
					var service_id = this.getAttribute('data-service');
					setActiveImg(parseInt(service_id));
					setActiveShape(parseInt(service_id));
					setActiveService(parseInt(service_id));

					if (service_id != 1) {
						setActiveList(0);
					}
				});

				listItem[i].addEventListener('mouseout', function (e) {
					var service_id = this.getAttribute('data-service');
					setActiveList(parseInt(service_id));
				});
			}

			let tHero = gsap.context(() => {
				let home1_services = gsap.utils.toArray('.animation_home1_service');
				let service__number = gsap.utils.toArray('.animation_home1_service .service__number span');
				let service__title = gsap.utils.toArray('.animation_home1_service .service__title');
				let service__text = gsap.utils.toArray('.animation_home1_service .service__text p');
				let service__link = gsap.utils.toArray('.animation_home1_service .service__link p');

				home1_services.forEach((service, i) => {
					gsap.set([service__number[i], service__title[i], service__text[i], service__link[i]], { opacity: 0, x: -50 });

					let home1ServiceTl = gsap.timeline({
						scrollTrigger: {
							trigger: service,
							start: 'top center+=300',
							end: 'bottom bottom',
							markers: false,
						},
					});

					home1ServiceTl.to(service__number[i], {
						x: 0,
						opacity: 1,
						duration: 1.2,
					});
					home1ServiceTl.to(
						service__title[i],
						{
							x: 0,
							opacity: 1,
							duration: 1.2,
						},
						'-=1'
					);
					home1ServiceTl.to(
						service__text[i],
						{
							x: 0,
							opacity: 1,
							duration: 1.2,
						},
						'-=1'
					);
					home1ServiceTl.to(
						service__link[i],
						{
							x: 0,
							opacity: 1,
							duration: 1.2,
						},
						'-=1'
					);
				});
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section
				className="service__area pt-110 pb-150"
				style={{ position: 'relative', overflow: 'hidden' }}>
				{/* <video
					autoPlay
					loop
					muted
					playsInline
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0',
						left: '0',
						objectFit: 'cover',
						zIndex: '1',
					}}>
					<source
						src="/assets/video/Video-01.mp4"
						type="video/mp4"
					/>
				</video> */}
				<div
					className="container"
					style={{ zIndex: '2' }}>
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="sec-title-wrapper wrap">
								<h2 className="sec-sub-title title-anim">dịch vụ</h2>
								<h3 className="sec-title title-anim">
									Các dịch vụ của <br />
									NPH Digital
								</h3>
							</div>
						</div>
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="service__top-text text-anim">
								<p>Chúng tôi hiểu rằng mỗi dự án độc đáo đều đòi hỏi sự sáng tạo. Vì thế, NPH Digital không ngừng nỗ lực lắng nghe, học hỏi nhằm mang đến những giá trị tốt nhất dành cho bạn.</p>
							</div>
						</div>
						<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2">
							<div className="service__top-btn">
								<div className="btn_wrapper">
									<Link
										href="/dich-vu"
										className="btn-item wc-btn-secondary btn-hover">
										<span></span> Xem
										<br />
										các dịch vụ <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="service__list-wrapper">
						<div className="row">
							<div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
								<div className="service__img-wrapper">
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service12}
										alt="Service Image"
										className={activeImg == 1 ? 'service__img img-1 active' : 'service__img img-1'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service12}
										alt="Service Image"
										className={activeImg == 2 ? 'service__img img-2 active' : 'service__img img-2'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service13}
										alt="Service Image"
										className={activeImg == 3 ? 'service__img img-3 active' : 'service__img img-3'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service14}
										alt="Service Image"
										className={activeImg == 4 ? 'service__img img-4 active' : 'service__img img-4'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service15}
										alt="Service Image"
										className={activeImg == 5 ? 'service__img img-5 active' : 'service__img img-5'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service16}
										alt="Service Image"
										className={activeImg == 6 ? 'service__img img-6 active' : 'service__img img-6'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service17}
										alt="Service Image"
										className={activeImg == 7 ? 'service__img img-7 active' : 'service__img img-7'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service18}
										alt="Service Image"
										className={activeImg == 8 ? 'service__img img-8 active' : 'service__img img-8'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service19}
										alt="Service Image"
										className={activeImg == 9 ? 'service__img img-9 active' : 'service__img img-9'}
									/>
									<Image
										priority
										width={280}
										style={{ height: 'auto' }}
										src={Service20}
										alt="Service Image"
										className={activeImg == 10 ? 'service__img img-10 active' : 'service__img img-10'}
									/>

									<span className={activeShape == 1 ? 'shapes shape-box-1 current' : 'shapes shape-box-1'}></span>
									<span className={activeShape == 2 ? 'shapes shape-box-2 current' : 'shapes shape-box-2'}></span>
									<span className={activeShape == 3 ? 'shapes shape-box-3 current' : 'shapes shape-box-3'}></span>
									<span className={activeShape == 4 ? 'shapes shape-box-4 current' : 'shapes shape-box-4'}></span>
									<span className={activeShape == 5 ? 'shapes shape-box-4 current' : 'shapes shape-box-5'}></span>
									<span className={activeShape == 6 ? 'shapes shape-box-4 current' : 'shapes shape-box-6'}></span>
									<span className={activeShape == 7 ? 'shapes shape-box-7 current' : 'shapes shape-box-7'}></span>
									<span className={activeShape == 8 ? 'shapes shape-box-8 current' : 'shapes shape-box-8'}></span>
									<span className={activeShape == 9 ? 'shapes shape-box-9 current' : 'shapes shape-box-9'}></span>
									<span className={activeShape == 10 ? 'shapes shape-box-10 current' : 'shapes shape-box-10'}></span>
								</div>
							</div>
							<div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
								<div
									className="service__list"
									ref={serviceList}>
									{/* Thiết kế và phát triển website */}
									<Link
										href="/mobile-app"
										className={activeList == 1 ? 'active' : ''}
										data-service="1">
										<div className="service__item animation_home1_service">
											<div className="service__number">
												<span>01</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">
													Phát triển
													<br />
													ứng dụng di động
												</h4>
											</div>
											<div className="service__text">
												<p>Chúng tôi chuyên phát triển ứng dụng di động chất lượng cao, đáp ứng mọi nhu cầu của bạn một cách hiệu quả và sáng tạo.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Thiết kế ứng dụng di động */}
									<Link
										href="/thiet-ke-website"
										className={activeList == 2 ? 'active' : ''}
										data-service="2">
										<div className="service__item  animation_home1_service">
											<div className="service__number">
												<span>02</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">
													Thiết kế &<br /> Phát triển website
												</h4>
											</div>
											<div className="service__text">
												<p>Thiết Kế website chuyên nghiệp, hiện đại với giao diện UI/UX đẹp mắt. chúng tôi tạo ra các trang ưeb ấn tượng, thân thiện với người dùng.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Hệ thống CRM, ERP, HRM */}
									<Link
										href="/crm-erp-hrm"
										className={activeList == 3 ? 'active' : ''}
										data-service="3">
										<div className="service__item  animation_home1_service">
											<div className="service__number">
												<span>03</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">
													Hệ thống
													<br />
													CRM, ERP, HRM
												</h4>
											</div>
											<div className="service__text">
												<p>Chúng tôi cung cấp hệ thống CRM, ERP và HRM đầy đủ tính năng, giúp tối ưu hóa quản lý và tăng cường hiệu quả công việc của bạn.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Digital Marketing */}
									<Link
										href="/quang-cao-so"
										className={activeList == 4 ? 'active' : ''}
										data-service="4">
										<div className="service__item  animation_home1_service">
											<div className="service__number">
												<span>04</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">Digital Marketing</h4>
											</div>
											<div className="service__text">
												<p>Marketing là nền tảng chiến lược để nghiên cứu, phát triển và triển khai các hoạt động nhằm tối ưu hóa tương tác với khách hàng, từ đó đảm bảo thành công kinh doanh và xây dựng thương hiệu bền vững.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Lập trình AI tự động hoá */}
									<Link
										href="/lap-trinh-ai"
										className={activeList == 5 ? 'active' : ''}
										data-service="5">
										<div className="service__item  animation_home1_service">
											<div className="service__number">
												<span>05</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">
													Lập Trình AI <br />
													Tự Động Hóa
												</h4>
											</div>
											<div className="service__text">
												<p>Lập trình AI tự động hóa là nền tảng quan trọng để phát triển các hệ thống thông minh có khả năng tự động hoá, từ đó nâng cao hiệu quả và tối ưu hóa các quy trình trong tổ chức.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Tương tác số */}
									<Link
										href="/tuong-tac-so"
										className={activeList == 6 ? 'active' : ''}
										data-service="6">
										<div className="service__item  animation_home1_service">
											<div className="service__number">
												<span>06</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">Tương tác số</h4>
											</div>
											<div className="service__text">
												<p>Tương tác số là sự kết nối thông minh giữa con người và công nghệ số, mang lại trải nghiệm tương tác sinh động và hiệu quả.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Chăm sóc Fanpage */}
									<Link
										href="/cham-soc-fanpage"
										className={activeList == 7 ? 'active' : ''}
										data-service="7">
										<div className="service__item animation_home1_service">
											<div className="service__number">
												<span>07</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">Chăm sóc Fanpage</h4>
											</div>
											<div className="service__text">
												<p>Lên kế hoạch nội dung chuyên nghiệp, thiết kế hình ảnh và video thu hút.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Setup sàn thương mại điện tử */}
									<Link
										href="/"
										className={activeList == 8 ? 'active' : ''}
										data-service="8">
										<div className="service__item animation_home1_service">
											<div className="service__number">
												<span>08</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">
													Setup sàn <br /> thương mại điện tử
												</h4>
											</div>
											<div className="service__text">
												<p>Chúng tôi cung cấp dịch vụ thiết lập và tối ưu hóa sàn thương mại điện tử, giúp doanh nghiệp của bạn dễ dàng tiếp cận khách hàng trực tuyến, quản lý sản phẩm, đơn hàng và thanh toán một cách hiệu quả.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Phòng IT Ngoài */}
									<Link
										href="/thue-phong-it-ngoai"
										className={activeList == 9 ? 'active' : ''}
										data-service="9">
										<div className="service__item animation_home1_service">
											<div className="service__number">
												<span>09</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">Cho thuê phòng IT ngoài</h4>
											</div>
											<div className="service__text">
												<p>Cho thuê nhân sự IT chuyên nghiệp, trang bị đầy đủ thiết bị máy tính, internet tốc độ cao và các công cụ cần thiết để xử lý các vấn đề IT của khách hàng.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>

									{/* Thiết kế UX/UI */}
									<Link
										href="/thiet-ket-ux-ui"
										className={activeList == 10 ? 'active' : ''}
										data-service="10">
										<div className="service__item animation_home1_service">
											<div className="service__number">
												<span>10</span>
											</div>
											<div className="service__title-wrapper">
												<h4 className="service__title">Thiết kế UX/UI</h4>
											</div>
											<div className="service__text">
												<p>Thiết kế web chuẩn UX/Ul, tối ưu tốc độ tải nhanh, bảo mật và nâng cao trải nghiệm khách hàng.</p>
											</div>
											<div className="service__link">
												<p>
													<i className="fa-solid fa-arrow-right"></i>
												</p>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyService;
