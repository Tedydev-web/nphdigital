import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Portfilio1 from '../../../public/assets/imgs/service/5/service1.webp'; //Mobile App
import Portfilio2 from '../../../public/assets/imgs/service/5/service2.webp'; //Thiết kê website
import Portfilio3 from '../../../public/assets/imgs/service/5/service3.webp'; //Quảng cáo số
import Portfilio4 from '../../../public/assets/imgs/service/5/service4.webp'; //THiết kế UI/UX
import Portfilio6 from '../../../public/assets/imgs/service/5/service6.webp'; //Tương tác số
import Portfilio7 from '../../../public/assets/imgs/service/5/service7.webp'; //Chăm sóc fanpage
import Portfilio8 from '../../../public/assets/imgs/service/5/service8.webp'; //CRM, ERP, HRM
import Portfilio9 from '../../../public/assets/imgs/service/5/service9.webp'; //Lập trình AI
import Portfilio10 from '../../../public/assets/imgs/service/5/service10.webp'; //Thuê phòng IT ngoài
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

const PortfolioElementV4 = () => {
	const { t } = useTranslation('home');
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
									<span>{t('ServiceElementV4.title')}</span> <br />
									NPH Digital
								</h2>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
							<div className="blog__text">
								<p>{t('ServiceElementV4.blogText')}</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-sub-title title-anim">{t('ServiceElementV4.secSubTitle')}</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xxl-12 portfolio__slider-3">
							<Swiper
								modules={[Navigation, Pagination, Autoplay, EffectFade]}
								effect="fade"
								loop={true}
								speed={1500}
								autoplay={{
									delay: 2000, // 2 giây
									disableOnInteraction: false,
								}}
								navigation={{
									prevEl: '.pp-prev',
									nextEl: '.pp-next',
								}}
								pagination={{ el: '.swiper-pagination', type: 'fraction' }}>
								<div className="swiper-wrapper">
									{/* Slide: Mobile App */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/mobile-app">
												<h3
													className="portfolio__title-3"
													id="mobileApp">
													{t('ServiceElementV4.mobileApp.line1')} <span>{t('ServiceElementV4.mobileApp.line2')}</span>
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

									{/* Slide: Thiết kế UI/UX */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="thiet-ke-ui-ux">
												<h3
													className="portfolio__title-3"
													id="uiux">
													{t('ServiceElementV4.uiUx.line1')} <span>{t('ServiceElementV4.uiUx.line2')}</span>
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

									{/* Slide: CRM, ERP, HRM */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/crm-erp-hrm">
												<h3
													className="portfolio__title-3"
													id="system">
													{t('ServiceElementV4.crmErpHrm')}
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

									{/* Slide: Thuê phòng IT ngoài */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/thue-phong-it-ngoai">
												<h3
													className="portfolio__title-3"
													id="it">
													{t('ServiceElementV4.it.line1')} <span>{t('ServiceElementV4.it.line2')}</span>
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

									{/* Slide: Chăm sóc fanpage */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/cham-soc-fanpage">
												<h3
													className="portfolio__title-3"
													id="fanpage">
													{t('ServiceElementV4.fanpage.line1')} <span>{t('ServiceElementV4.fanpage.line2')}</span>
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

									{/* Slide: Thiết kế Website */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/thiet-ke-website">
												<h3
													className="portfolio__title-3"
													id="website">
													{t('ServiceElementV4.web.line1')} <span>{t('ServiceElementV4.web.line2')}</span>
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

									{/* Slide: Quảng cáo số */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/quang-cao-so">
												<h3
													className="portfolio__title-3"
													id="marketing">
													{t('ServiceElementV4.ads.line1')} <span>{t('ServiceElementV4.ads.line2')}</span>
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

									{/* Slide: Lập trình AI */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/lap-trinh-ai">
												<h3
													className="portfolio__title-3"
													id="ai">
													{t('ServiceElementV4.ai')}
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

									{/* Slide: tương tác số */}
									<SwiperSlide>
										<div className="portfolio__slide-3">
											<Link href="/tuong-tac-so">
												<h3
													className="portfolio__title-3"
													id="tuongTacSo">
													{t('ServiceElementV4.interaction.line1')} <span>{t('ServiceElementV4.interaction.line2')}</span>
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
								</div>

								<div className="swiper-pagination"></div>

								<div className="swiper-btn">
									<div
										style={{ cursor: 'pointer' }}
										className="pp-prev">
										<FontAwesomeIcon icon={faArrowLeft} />
									</div>
									<div
										style={{ cursor: 'pointer' }}
										className="pp-next">
										<FontAwesomeIcon icon={faArrowRight} />
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
							font-size: 40px;
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
