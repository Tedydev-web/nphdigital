import Link from 'next/link';
import { useState } from 'react';
import { Navigation, Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Portfolio1 from '../../../public/assets/imgs/portfolio/1.png';
import Shape16 from '../../../public/assets/imgs/shape/16.png';
import Brand1 from '../../../public/assets/imgs/brand/1.webp';
import Brand2 from '../../../public/assets/imgs/brand/2.webp';
import Brand3 from '../../../public/assets/imgs/brand/3.webp';
import Brand4 from '../../../public/assets/imgs/brand/4.webp';
import Portfolio11 from '../../../public/assets/imgs/portfolio/1/1.jpg';
import Portfolio12 from '../../../public/assets/imgs/portfolio/1/2.jpg';
import Portfolio13 from '../../../public/assets/imgs/portfolio/1/3.jpg';
import Portfolio14 from '../../../public/assets/imgs/portfolio/1/4.jpg';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const PortfolioSwiperMobile = ({ portfolioSection, portfolioHeroImg }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<>
			<div className="swiper portfolio__main-slider">
				<div className="swiper-wrapper portfolio__main-wrapper">
					<div className="swiper-slide">
						<section
							className="portfolio__hero-area portfolio-section"
							ref={portfolioSection}>
							<div className="container">
								<div className="row">
									<div className="col-xxl-12">
										<div className="portfolio__hero">
											<h1 className="title shape-circle">Full stack</h1>
											<h2 className="title text-stroke">Web & Mobile</h2>
											<h2 className="title">developer</h2>
											<div className="btn-wrapper">
												<Link
													href="/portfolio"
													className="wc-btn-dark">
													View all work
												</Link>
											</div>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												src={Portfolio1}
												alt="Personal Portfolio"
												className="pp-thumb"
												ref={portfolioHeroImg}
											/>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div className="swiper-slide">
						<section className="portfolio-section portfolio__about pt-140 pb-150">
							<div className="container">
								<div className="row">
									<div className="col-xxl-8 col-xxl-8 col-lg-8">
										<div className="portfolio__about-left">
											<h2 className="sec-title">
												I craft wonderful <span>digital experiences</span> for brands
											</h2>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												src={Shape16}
												alt="Shape"
											/>
										</div>
									</div>
									<div className="col-xxl-4 col-xl-4 col-lg-4">
										<div className="sec-text">
											<p>Based in Washington, DC, I work with experts from the Center for Strategic and International Studies (CSIS) to help them communicate their research more effectively on the web. Together we make websites, data visualizations, and long-forms that strengthen their networks and engage new audiences with thoughtful content and design strategies.</p>
											<Link
												href="/gioi-thieu"
												className="wc-btn-dark">
												Explore Me
											</Link>
										</div>
									</div>
								</div>

								<div className="about-row">
									<div className="row">
										<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
											<div className="brand-title-wrap">
												<h3 className="brand-title">worked with global largest brands</h3>
											</div>
										</div>
										<div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
											<div className="brand-list">
												<div className="brand-logo">
													<Image
														priority
														width={97}
														height={67}
														src={Brand1}
														alt="Brand Logo"
													/>
												</div>
												<div className="brand-logo">
													<Image
														priority
														width={85}
														height={67}
														src={Brand2}
														alt="Brand Logo"
													/>
												</div>
												<div className="brand-logo">
													<Image
														priority
														width={114}
														height={64}
														src={Brand3}
														alt="Brand Logo"
													/>
												</div>
												<div className="brand-logo">
													<Image
														priority
														width={82}
														height={70}
														src={Brand4}
														alt="Brand Logo"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div className="swiper-slide">
						<section className="portfolio-section portfolio__project">
							<div className="container">
								<div className="row">
									<div className="col-xxl-12">
										<div className="pp-title-wrap">
											<h2 className="pp-title">
												Selected <br /> Work
											</h2>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
										<div className="pp-slider-wrapper">
											<Swiper
												modules={[Navigation, Thumbs]}
												spaceBetween={10}
												loop={true}
												navigation={{
													nextEl: '.pp-next',
													prevEl: '.pp-prev',
												}}
												thumbs={{
													swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
												}}>
												<div className="swiper-wrapper">
													<SwiperSlide>
														<div className="pp-slide">
															<div className="pp-slide-img">
																<Link href="/portfolio-details">
																	<Image
																		priority
																		style={{ width: 'auto', height: 'auto' }}
																		src={Portfolio11}
																		alt="Portfolio Thumbnail"
																	/>
																</Link>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="pp-slide">
															<div className="pp-slide-img">
																<Link href="/portfolio-details">
																	<Image
																		priority
																		style={{ width: 'auto', height: 'auto' }}
																		src={Portfolio12}
																		alt="Portfolio Thumbnail"
																	/>
																</Link>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="pp-slide">
															<div className="pp-slide-img">
																<Link href="/portfolio-details">
																	<Image
																		priority
																		style={{ width: 'auto', height: 'auto' }}
																		src={Portfolio13}
																		alt="Portfolio Thumbnail"
																	/>
																</Link>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
														<div className="pp-slide">
															<div className="pp-slide-img">
																<Link href="/portfolio-details">
																	<Image
																		priority
																		style={{ width: 'auto', height: 'auto' }}
																		src={Portfolio14}
																		alt="Portfolio Thumbnail"
																	/>
																</Link>
															</div>
														</div>
													</SwiperSlide>
												</div>
											</Swiper>

											<div
												style={{ cursor: 'pointer' }}
												className="pp-next swipper-btn">
												prev
											</div>
											<div
												style={{ cursor: 'pointer' }}
												className="pp-prev swipper-btn">
												Next
											</div>
										</div>
									</div>

									<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
										<div className="portfolio__project-thumbs">
											<Swiper
												// modules={[Thumbs, FreeMode]}
												spaceBetween={10}
												// loop={true}
												slidespreview={1}
												// freeMode={true}
												// watchSlidesProgress
												allowTouchMove={false}
												onSwiper={setThumbsSwiper}>
												<SwiperSlide>
													<div className="pp-slide-thumb">
														<h3 className="pp-slide-title">Apple book cover</h3>
														<p>March 2021</p>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="pp-slide-thumb">
														<h3 className="pp-slide-title">Apple book cover</h3>
														<p>March 2021</p>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="pp-slide-thumb">
														<h3 className="pp-slide-title">Apple book cover</h3>
														<p>March 2021</p>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="pp-slide-thumb">
														<h3 className="pp-slide-title">Apple book cover</h3>
														<p>March 2021</p>
													</div>
												</SwiperSlide>
											</Swiper>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div className="swiper-slide">
						<section className="portfolio-section portfolio__service pt-140 pb-140">
							<div className="container">
								<div className="row">
									<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
										<h2 className="sec-title"> I MAKE THE Service BETTER.</h2>
									</div>
									<div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
										<div className="sec-text">
											<p>Static and dynamic secure code review can prevent a 0day before your product is even released. We can integrate with your dev environment</p>
										</div>
									</div>
								</div>
								<div className="portfolio__service-list">
									<div className="row">
										<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
											<div className="portfolio__service-item">
												<Link href="/service-details">
													<h3 className="ps-title">
														Frontend <br /> Developemnt
													</h3>
													<ul>
														<li>+ WordPress</li>
														<li>+ Python</li>
														<li>+ PHP & Laravel</li>
													</ul>
												</Link>
											</div>
										</div>
										<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
											<div className="portfolio__service-item">
												<Link href="/service-details">
													<h3 className="ps-title">
														Backend
														<br /> Developemnt
													</h3>
													<ul>
														<li>+ WordPress</li>
														<li>+ Python</li>
														<li>+ PHP & Laravel</li>
													</ul>
												</Link>
											</div>
										</div>
										<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
											<div className="portfolio__service-item">
												<Link href="/service-details">
													<h3 className="ps-title">
														Android
														<br /> Developemnt
													</h3>
													<ul>
														<li>+ WordPress</li>
														<li>+ Python</li>
														<li>+ PHP & Laravel</li>
													</ul>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xxl-12">
										<div className="ps-btn">
											<Link href="/contact">
												Call me to get more extra service <strong>call now</strong>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div className="swiper-slide">
						<section className="portfolio-section portfolio__footer-area  pt-130">
							{/* Contact area start  */}
							<div className="">
								<div className="container">
									<div className="row">
										<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
											<div className="sec-title-wrapper">
												<h2 className="pf-title">Let’s get in touch 🤟</h2>
											</div>
										</div>
										<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
											<div className="contact__text">
												<p>{"Great! We're excited to hear from you and let's start something special togerter. call us for any inquery."}</p>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
											<div className="pf-contact">
												<h3>
													{"Don't be afraid man !"} <br />
													say hello
												</h3>
												<ul>
													<li>
														<a href="tel:+(2)578365379">(+84) 777 018 333</a>
													</li>
													<li>
														<a href="mailto:hi@nphdigital.com">hi@nphdigital.com</a>
													</li>
												</ul>
											</div>
											<div className="pf-social">
												<h3>follow </h3>
												<ul>
													<li>
														<a href="#">Behance</a>
													</li>
													<li>
														<a href="#">Dribble</a>
													</li>
													<li>
														<a href="#">Meduim</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
											<div className="contact__form">
												<form action="#">
													<div className="row g-3">
														<div className="col-xxl-6 col-xl-6 col-12">
															<input
																type="text"
																name="name"
																placeholder="Name *"
															/>
														</div>
														<div className="col-xxl-6 col-xl-6 col-12">
															<input
																type="email"
																name="email"
																placeholder="Email *"
															/>
														</div>
													</div>
													<div className="row g-3">
														<div className="col-xxl-6 col-xl-6 col-12">
															<input
																type="tel"
																name="phone"
																placeholder="Phone"
															/>
														</div>
														<div className="col-xxl-6 col-xl-6 col-12">
															<input
																type="text"
																name="subject"
																placeholder="Subject *"
															/>
														</div>
													</div>
													<div className="row g-3">
														<div className="col-12">
															<textarea
																name="message"
																placeholder="Messages *"></textarea>
														</div>
													</div>
													<div className="row g-3">
														<div className="col-12">
															<div className="pc-btn">
																<button className="wc-btn-dark">Send Me Quotes</button>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Contact area end  */}

							{/* Footer area start  */}
							<footer className="portfolio__footer">
								<div className="container">
									<div className="pf-btm">
										<div className="row">
											<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
												<div className="footer__copyright-2">
													<p>
														© 2022 - 2025 | Alrights reserved by{' '}
														<a
															href="https://wealcoder.com/"
															target="_blank">
															Wealcoder
														</a>
													</p>
												</div>
											</div>
											<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
												<div className="footer__nav">
													<ul className="footer-menu menu-anim">
														<li>
															<Link href="/gioi-thieu">about us</Link>
														</li>
														<li>
															<Link href="/contact">contact</Link>
														</li>
														<li>
															<Link href="/career">Career</Link>
														</li>
														<li>
															<Link href="/faq">FAQs</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</footer>
							{/* Footer area end */}
						</section>
					</div>
				</div>
				<div className="swiper-pagination circle-pagination-2"></div>
			</div>
		</>
	);
};

export default PortfolioSwiperMobile;
