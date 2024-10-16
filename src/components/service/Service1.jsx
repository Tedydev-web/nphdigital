import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import Service11 from '../../../public/assets/imgs/service/1/service1.webp';
import Service12 from '../../../public/assets/imgs/service/1/service2.webp';
import Service13 from '../../../public/assets/imgs/service/1/service3.webp';
import Service14 from '../../../public/assets/imgs/service/1/service4.webp';
import Service15 from '../../../public/assets/imgs/service/1/service5.webp';
import Service16 from '../../../public/assets/imgs/service/1/service6.webp';
import Service17 from '../../../public/assets/imgs/service/1/service7.webp';
import Service18 from '../../../public/assets/imgs/service/1/service8.webp';
import Service19 from '../../../public/assets/imgs/service/1/service9.webp';
import Service20 from '../../../public/assets/imgs/service/1/service10.webp';

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				if (device_width > 1200) {
					gsap.to('.service__list-6', {
						scrollTrigger: {
							trigger: '.service__area-6',
							pin: '.service__list-6',
							pinSpacing: true,
							start: 'top top',
							end: 'bottom bottom',
						},
					});

					gsap.to('.service__image-wrap', {
						scrollTrigger: {
							trigger: '.service__area-6',
							pin: '.mid-content',
							pinSpacing: true,
							start: 'top top',
							end: 'bottom bottom',
							markers: false,
						},
					});

					let service_images = gsap.utils.toArray('.service__image');
					let service_imagess = gsap.utils.toArray('.service__image img');
					let service_items = gsap.utils.toArray('.service__item-6');

					if (service_items) {
						service_items.forEach((image, i) => {
							let tl = gsap.timeline({
								scrollTrigger: {
									trigger: image,
									scrub: 1,
									start: 'top top-=600',
									markers: false,
								},
							});
							tl.to(service_images[i], {
								zIndex: '1',
							});
							tl.to(
								service_imagess[i],
								{
									opacity: 0,
									duration: 1,
									scale: 1.2,
									ease: 'power4.out',
								},
								'-=1'
							);
						});
					}

					let navItems = gsap.utils.toArray('.service__list-6 li a');
					if (navItems) {
						navItems.forEach((nav) => {
							nav.addEventListener('click', (e) => {
								e.preventDefault();
								const ids = nav.getAttribute('href');
								gsap.to(window, {
									duration: 0.5,
									scrollTo: ids,
									ease: 'power4.out',
								});
							});
						});
					}
				}
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section
				className="service__area-6"
				style={{ position: 'relative', overflow: 'hidden' }}>
				<div
					className="container"
					style={{ position: 'relative', zIndex: '2' }}>
					<div className="row inherit-row">
						<div className="col-xxl-12">
							<div className="content-wrapper">
								<div className="left-content">
									<ul className="service__list-6">
										<li>
											<a href="#service_1">
												Thiết kế & <br />
												phát triển website
											</a>
										</li>

										<li>
											<a href="#service_2">
												Digital <br /> Maketing
											</a>
										</li>

										<li>
											<a href="#service_3">
												Thiết kế <br />
												UX/UI
											</a>
										</li>

										<li>
											<a href="#service_4">
												Hệ Thống <br />
												CRM, ERP, HRM
											</a>
										</li>

										<li>
											<a href="#service_8">
												Phát Triển <br />
												Ứng Dụng Di Động
											</a>
										</li>

										<li>
											<a href="#service_5">
												Lập Trình AI <br />
												Tự Động Hóa
											</a>
										</li>

										<li>
											<a href="#service_6">Tương Tác Số</a>
										</li>

										<li>
											<a href="#service_7">
												Chăm sóc <br />
												Fanpage
											</a>
										</li>

										<li>
											<a href="#service_9">
												Thuê phòng <br />
												IT ngoài
											</a>
										</li>

										<li>
											<a href="#service_10">
												Setup sàn <br />
												TMDT
											</a>
										</li>
									</ul>
								</div>

								<div className="mid-content">
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service11}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service12}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service13}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service14}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service15}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service16}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service17}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service18}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service19}
											alt="Service Image"
										/>
									</div>
									<div className="service__image">
										<Image
											priority
											style={{ width: 'auto', height: 'auto' }}
											src={Service20}
											alt="Service Image"
										/>
									</div>
								</div>

								<div className="right-content">
									<div className="service__items-6">
										<div
											className="service__item-6 has__service_animation"
											id="service_1"
											data-secid="1">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service11}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">User paths or user flows functional models</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_2"
											data-secid="2">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service12}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">Web & Mobile Development</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_3"
											data-secid="3">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service13}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">UMotion & Branding Design</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_4"
											data-secid="4">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service14}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">User paths or user flows functional models</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_5"
											data-secid="5">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service15}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">User paths or user flows functional models</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_6"
											data-secid="6">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service14}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">Illustrations & Prototype</h2>
												<p>This is the second workshop of the UX design methodology. Given all the conclusions drawn in the personae workshop, we will project ourselves towards the production of ideal user journeys. In other words: how each persona can achieve their goal.</p>
												<ul>
													<li>+ API Development</li>
													<li>+ WordPress</li>
													<li>+ Cloud Migration</li>
													<li>+ Front End Development</li>
													<li>+ JavaScript</li>
													<li>+ Fluter Framework</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Get free
														<br />
														qoutes <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>

										<div
											className="service__item-6"
											id="service_7"
											data-secid="7">
											<div className="image-tab">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													src={Service11}
													alt="Service Image"
												/>
											</div>

											<div className="animation__service_page">
												<h2 className="service__title-6">Chăm sóc Fanpage</h2>
												<p>Chúng tôi cung cấp dịch vụ chăm sóc Fanpage chuyên nghiệp, giúp doanh nghiệp của bạn tăng tương tác và xây dựng cộng đồng trực tuyến mạnh mẽ.</p>
												<ul>
													<li>+ Quản lý nội dung</li>
													<li>+ Tương tác với khách hàng</li>
													<li>+ Phân tích và báo cáo</li>
													<li>+ Chiến lược phát triển Fanpage</li>
												</ul>
												<div className="btn_wrapper">
													<Link
														href="/service-details"
														className="wc-btn-secondary btn-item btn-hover">
														<span></span>Nhận báo giá
														<br />
														miễn phí <i className="fa-solid fa-arrow-right"></i>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Service1;
