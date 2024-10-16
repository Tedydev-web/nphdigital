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
				if (arr[j] === ' ') {
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
									<div className="footer__social">{/* Social buttons here */}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
