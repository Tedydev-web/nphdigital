import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Portfilio1 from '../../../public/assets/imgs/service/5/service1.webp';
import Portfilio2 from '../../../public/assets/imgs/service/5/service2.webp';
import Portfilio3 from '../../../public/assets/imgs/service/5/service3.webp';
import Portfilio4 from '../../../public/assets/imgs/service/5/service4.webp';
import Portfilio5 from '../../../public/assets/imgs/service/5/service5.webp';
import Portfilio6 from '../../../public/assets/imgs/service/5/service6.webp';
import Portfilio7 from '../../../public/assets/imgs/service/5/service7.webp';
import Portfilio8 from '../../../public/assets/imgs/service/5/service8.webp';
import Portfilio9 from '../../../public/assets/imgs/service/5/service9.webp';
import Portfilio10 from '../../../public/assets/imgs/service/5/service10.webp';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import animationCharCome from '@/lib/utils/animationCharCome';
import { jsx } from 'react/jsx-runtime';
import { Color } from 'public/assets/gsap-plugins/chroma.min';

const PortfolioElementV4 = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);
	return (
		<>
			<section className="portfolio__area-3 portfolio-v4">
				<div className="container pt-100 pb-150">
					<div className="row pb-150">
						<div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title-2 animation__char_come"
									ref={charAnim}
									style={{ lineHeight: '1.2' }}>
									Dịch vụ của <br />
									NPH Digital
								</h2>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
							<div className="blog__text">
								<p>Chúng tôi hiểu rằng mỗi dự án độc đáo đều đòi hỏi sự sáng tạo. Vì thế, NPH Digital không ngừng nỗ lực lắng nghe, học hỏi nhằm mang đến những giá trị tốt nhất dành cho bạn.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-sub-title title-anim">
									Dịch vụ
									<br />
									của chúng tôi
								</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xxl-12 portfolio__slider-3">
							<Swiper
								modules={[Navigation, Pagination, Autoplay, EffectFade]}
								effectfade="true"
								loop={true}
								speed={1500}
								autoplay={{
									delay: 500000,
									disableOnInteraction: false,
								}}
								navigation={{
									prevEl: '.pp-prev',
									nextEl: '.pp-next',
								}}
								pagination={{ el: '.swiper-pagination', type: 'fraction' }}>
								<div className="swiper-wrapper">
									{/* Phát triển ứng dụng di động */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/mobile-app">
												<h3
													className="portfolio__title-3"
													id="mobileApp">
													Mobile App
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio1}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thiết kế & Phát triển Website */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/thiet-ke-website">
												<h3
													className="portfolio__title-3"
													id="website">
													Thiết kế <span>website</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio2}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Digital Marketing */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/quang-cao-so">
												<h3
													className="portfolio__title-3"
													id="marketing">
													Quảng cáo số
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio3}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thiết kế UI/UX */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="thiet-ke-ui-ux">
												<h3
													className="portfolio__title-3"
													id="uiux">
													Thiết kế <span>UI/UX</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio4}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Chăm sóc Fanpage */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/cham-soc-fanpage">
												<h3
													className="portfolio__title-3"
													id="fanpage">
													Chăm sóc <span>Fanpage</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio7}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Tương tác số */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/tuong-tac-so">
												<h3
													className="portfolio__title-3"
													id="tuongTacSo">
													Tương tác số
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio6}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Setup sàn thương mại điện tử */}
									{/* <SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/service-details">
												<h3 className="portfolio__title-3">
													Setup sàn<span>thương mại</span>điện tử
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio7}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide> */}

									{/* Phát triển hệ thống CRM, ERP, HRM */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/crm-erp-hrm">
												<h3
													className="portfolio__title-3"
													id="system">
													CRM, ERP, HRM
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio8}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Lập trình AI tự động hoá */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/lap-trinh-ai">
												<h3
													className="portfolio__title-3"
													id="ai">
													Lập trình AI
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio9}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>

									{/* Thuê Phòng IT ngoài */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/thue-phong-it-ngoai">
												<h3
													className="portfolio__title-3"
													id="it">
													Thuê Phòng <span>IT ngoài</span>
												</h3>
												<Image
													priority
													width={550}
													style={{ height: 'auto', borderRadius: '50px' }}
													src={Portfilio10}
													alt="Portfolio Image"
												/>
											</Link>
										</div>
									</SwiperSlide>
								</div>

								<div className="swiper-pagination"></div>

								<div className="swiper-btn">
									<div
										style={{ cursor: 'pointer' }}
										className="pp-prev">
										<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="pp-next">
										<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
									</div>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
				<style jsx>{`
					@media (max-width: 576px) {
						#mobileApp {
							font-size: 60px;
							margin: 0 15px;
						}

						#website {
							bottom: 0;
							font-size: 50px;
							margin: 0 15px;
							color: #fff;
							margin: 0 15px;
						}

						#marketing {
							bottom: 5%;
							font-size: 40px;
							color: #fff;
							margin: 0 15px;
						}

						#fanpage {
							bottom: 0;
							color: #fff;
							font-size: 50px;
							margin: 0 15px;
						}

						#uiux {
							margin: 0 15px;
						}

						#tuongTacSo {
							bottom: 10%;
							color: #fff;
							font-size: 45px;
							margin: 0 15px;
						}

						#system {
							font-size: 50px;
							margin: 0 15px;
						}

						#ai {
							margin: 0 15px;
							font-size: 50px;
							bottom: 5%;
							color: #fff;
						}

						#it {
							font-size: 40px;
							margin: 0 15px;
							color: #fff;
						}
					}
				`}</style>
			</section>
		</>
	);
};

export default PortfolioElementV4;
