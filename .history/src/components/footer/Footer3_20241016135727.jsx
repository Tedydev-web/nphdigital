// Footer3.jsx

import Link from 'next/link';
import ThumbFooter from '../../../public/assets/imgs/thumb/footer.png';
import FooterLogoWhite from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import Image from 'next/image';
import { FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { useEffect, useRef } from 'react';

export default function Footer3() {
	const menuAnim = useRef();
	const menuAnim2 = useRef();
	useEffect(() => {
		if (menuAnim.current) {
			menuAnimation(menuAnim);
		}
		if (menuAnim2.current) {
			menuAnimation(menuAnim2);
		}
	}, []);

	const menuAnimation = (data) => {
		let rootParent = data.current.children;
		for (let i = 0; i < rootParent.length; i++) {
			let firstParent = rootParent[i].children;
			let arr = firstParent[0].textContent.split('');
			let spanData = '';
			for (let j = 0; j < arr.length; j++) {
				if (arr[j] == ' ') {
					spanData += `<span style='width:6px;'>${arr[j]}</span>`;
				} else {
					spanData += `<span>${arr[j]}</span>`;
				}
			}
			let result = '<div class="menu-text">' + spanData + '</div>';
			firstParent[0].innerHTML = result;
		}
	};

	return (
		<footer
			className="footer__area"
			style={{ position: 'relative', overflow: 'hidden' }}>
			<div
				className="footer__top-2 text-anim"
				style={{ position: 'relative', zIndex: 1 }}>
				<div className="contact_wrap">
					<div className="roll__slider">
						<Swiper
							modules={[FreeMode, Autoplay]}
							spaceBetween={60}
							slidesPerView={1}
							freeMode={true}
							loop={true}
							centeredSlides={true}
							allowTouchMove={false}
							speed={10000}
							autoplay={{
								delay: 1,
								disableOnInteraction: true,
							}}>
							<div className="swiper-wrapper">
								<SwiperSlide>
									<h2 className="rollslide_title-1">
										{'liên hệ'} <span>chúng tôi </span>
									</h2>
								</SwiperSlide>
								<SwiperSlide>
									<h2 className="rollslide_title-1">
										{'liên hệ'} <span>chúng tôi </span>
									</h2>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
			<div className="footer__top">
				<div className="container footer-line"></div>
				<Image
					priority
					width={1160}
					style={{ height: 'auto' }}
					src={ThumbFooter}
					alt="Footer Image"
					data-speed="0.75"
				/>
			</div>
			<div className="footer__btm">
				<div className="container">
					<div className="row footer__row">
						<div className="col-xxl-12">
							<div className="footer__inner">
								<div className="footer__widget">
									<Image
										priority
										style={{ width: '300px', height: 'auto' }}
										className="footer__logo"
										src={FooterLogoWhite}
										alt="Footer Logo"
									/>
									<p>Chúng tôi luôn phát huy tính sáng tạo và chuyên nghiệp trong công việc để làm hài lòng mọi yêu cầu của khách hàng một cách tốt nhất.</p>
									<div className="footer__social">
										<a
											href="https://zalo.me/2599746016148700210?src=qr&f=1"
											target="_blank"
											rel="noopener noreferrer">
											<button
												className="Btn zalo"
												style={{ marginLeft: '0' }}>
												<svg
													className="svgZalo"
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="40"
													height="40"
													viewBox="0 0 48 48">
													<path
														fill="#2962ff"
														d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path>
													<path
														fill="#eee"
														d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,2.365c-1.094,0-2.556-0.388-4.305-1.053C6.706,35.152,8,37.52,8,39c0,4.227,3.575,6.904,8.5,6.904h14c4.943,0,9-3.156,9-8.104c0-2.888-1.286-6.445-5.688-6.445c-0.913,0-1.843,0.098-2.724,0.29C28.079,31.682,29,28.905,29,26V12.489c0-3.733-2.128-5.489-5-5.489C21.968,7,29,7,29,5z"
														opacity=".3"></path>
													<path
														fill="#2962ff"
														d="M19,7c-4.024,0-7.651,0.937-10.658,2.635C8.979,9.801,10.649,12,11,12h13V7z"></path>
												</svg>
												Zalo
											</button>
										</a>
										<Link
											href="/contact"
											passHref>
											<button className="Btn btn-primary">Liên hệ</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
