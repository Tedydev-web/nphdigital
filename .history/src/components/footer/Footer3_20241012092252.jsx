import Link from 'next/link';
import ThumbFooter from '../../../public/assets/imgs/thumb/footer.png';
import FooterLogoWhite from '../../../public/assets/imgs/logo/site-logo-white-2.png';
import Image from 'next/image';
import { FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { useEffect, useRef, useMemo, useState } from 'react';
import { tsParticles } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function Footer3() {
	const [init, setInit] = useState(false);
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
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};
	const [particleValue, setParticleValue] = useState(70);

	useEffect(() => {
		const updateParticleValue = () => {
			if (window.innerWidth <= 768) {
				setParticleValue(80); // Mobile
			} else {
				setParticleValue(60); // Desktop
			}
		};

		updateParticleValue();
		window.addEventListener('resize', updateParticleValue);

		return () => {
			window.removeEventListener('resize', updateParticleValue);
		};
	}, []);
	const options = useMemo(
		() => ({
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'push',
					},
					onHover: {
						enable: false,
						mode: 'repulse',
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#ffffff',
				},
				links: {
					color: '#ffffff',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enable: false,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 500,
					},
					value: particleValue,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
			detectRetina: false,
			background: {
				color: 'transparent',
			},
			polygon: {
				draw: {
					enable: true,
					lineColor: 'rgba(255,255,255,0.2)',
					lineWidth: 0.5,
				},
				move: {
					radius: 10,
				},
				scale: 1,
				type: 'inline',
				url: '',
			},
		}),
		[particleValue]
	);

	return (
		<footer
			className="footer__area"
			style={{ position: 'relative', overflow: 'hidden' }}>
			{init && (
				<div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}>
					<Particles
						id="tsparticles"
						particlesLoaded={particlesLoaded}
						options={options}
					/>
				</div>
			)}
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
					{/* <Link
							href="/contact"
							className="link">
							Bấm vào đây
						</Link> */}
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
												class="Btn zalo"
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
														d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path>
													<path
														fill="#2962ff"
														d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path>
													<path
														fill="#2962ff"
														d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path>
													<path
														fill="#2962ff"
														d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path>
													<path
														fill="#2962ff"
														d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
												</svg>
												<span class="text">Zalo</span>
											</button>
										</a>

										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer">
											<button class="Btn wechat">
												<svg
													class="svgIcon"
													viewBox="0 0 50 50"
													height="2em"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M 19 6 C 9.746094 6 2 12.359375 2 20.5 C 2 24.894531 4.292969 28.679688 7.835938 31.324219 L 5.179688 39.304688 L 13.472656 34.167969 C 15.1875 34.707031 17.082031 35 19 35 C 19.746094 35 20.472656 34.945313 21.195313 34.863281 C 23.378906 39.105469 28.328125 42 34 42 C 35.722656 42 37.316406 41.675781 38.796875 41.234375 L 45.644531 45.066406 L 43.734375 38.515625 C 46.3125 36.375 48 33.394531 48 30 C 48 23.789063 42.597656 18.835938 35.75 18.105469 C 34.398438 11.125 27.324219 6 19 6 Z M 19 8 C 26.308594 8 32.328125 12.351563 33.703125 18.011719 C 26.183594 18.148438 20 23.355469 20 30 C 20 31.019531 20.160156 32.003906 20.4375 32.941406 C 19.964844 32.980469 19.484375 33 19 33 C 17.101563 33 15.199219 32.710938 13.632813 32.15625 L 13.183594 32 L 8.820313 34.699219 L 10.1875 30.59375 L 9.5625 30.171875 C 6.082031 27.820313 4 24.445313 4 20.5 C 4 13.640625 10.65625 8 19 8 Z M 13 14 C 11.898438 14 11 14.898438 11 16 C 11 17.101563 11.898438 18 13 18 C 14.101563 18 15 17.101563 15 16 C 15 14.898438 14.101563 14 13 14 Z M 25 14 C 23.898438 14 23 14.898438 23 16 C 23 17.101563 23.898438 18 25 18 C 26.101563 18 27 17.101563 27 16 C 27 14.898438 26.101563 14 25 14 Z M 34 20 C 40.746094 20 46 24.535156 46 30 C 46 32.957031 44.492188 35.550781 42.003906 37.394531 L 41.445313 37.8125 L 42.355469 40.933594 L 39.105469 39.109375 L 38.683594 39.25 C 37.285156 39.71875 35.6875 40 34 40 C 27.253906 40 22 35.464844 22 30 C 22 24.535156 27.253906 20 34 20 Z M 29.5 26 C 28.699219 26 28 26.699219 28 27.5 C 28 28.300781 28.699219 29 29.5 29 C 30.300781 29 31 28.300781 31 27.5 C 31 26.699219 30.300781 26 29.5 26 Z M 38.5 26 C 37.699219 26 37 26.699219 37 27.5 C 37 28.300781 37.699219 29 38.5 29 C 39.300781 29 40 28.300781 40 27.5 C 40 26.699219 39.300781 26 38.5 26 Z"></path>{' '}
												</svg>
												<span class="text">WeChat</span>
											</button>
										</a>

										<a
											href="https://www.facebook.com/nphdigital838"
											target="_blank"
											rel="noopener noreferrer">
											<button class="Btn facebook">
												<svg
													class="svgIcon"
													viewBox="0 0 50 50"
													height="2em"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>{' '}
												</svg>
												<span class="text">Facebook</span>
											</button>
										</a>

										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer">
											<button class="Btn tiktok">
												<svg
													className="svgTiktok"
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="48"
													height="48"
													viewBox="0 0 48 48">
													<path
														fill="#212121"
														fill-rule="evenodd"
														d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
														clip-rule="evenodd"></path>
													<path
														fill="#ec407a"
														fill-rule="evenodd"
														d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
														clip-rule="evenodd"></path>
													<path
														fill="#fff"
														fill-rule="evenodd"
														d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
														clip-rule="evenodd"></path>
													<path
														fill="#81d4fa"
														fill-rule="evenodd"
														d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
														clip-rule="evenodd"></path>
												</svg>
												<span class="text">TikTok</span>
											</button>
										</a>

										<a
											href="https://t.me/Nphdigital"
											target="_blank"
											rel="noopener noreferrer">
											<button class="Btn telegram">
												<svg
													class="svgIcon"
													viewBox="0 0 100 100"
													height="1.5em"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"></path>{' '}
												</svg>
												<span class="text">Telegram</span>
											</button>
										</a>
									</div>
								</div>

								<div className="footer__widget-2">
									<h2 className="footer__widget-title">Thông tin</h2>
									<ul className="footer__link">
										<li>
											<Link href="/gioi-thieu">Giới thiệu</Link>
										</li>
										<li>
											<Link href="/dich-vu">Dịch vụ</Link>
										</li>
										<li>
											<Link href="/bai-viet">Bài Viết</Link>
										</li>
										<li>
											<Link href="/lien-he">Liên Hệ</Link>
										</li>
									</ul>
								</div>

								<div className="footer__widget-3">
									<h2 className="footer__widget-title">Liên hệ</h2>
									<ul className="footer__contact">
										<li>Số 838, Ấp Vĩnh Bình, Xã An Vĩnh Ngãi, Tp Tân An, T Long An</li>
										<li>
											<a
												href="tel:02574328301"
												className="phone">
												(+84) 777 018 333{' '}
											</a>
										</li>
										<li>
											<a href="mailto:hi@nphdigital.com">hi@nphdigital.com</a>
										</li>
									</ul>
								</div>

								<div className="footer__widget-4">
									<h2 className="project-title">Bạn đang ấp ủ một ý tưởng tiềm năng?</h2>
									<div className="btn_wrapper">
										<Link
											href="/lien-he"
											className="wc-btn-primary btn-hover btn-item">
											<span></span> Liên hệ <br />
											Chúng tôi ngay <i className="fa-solid fa-arrow-right"></i>
										</Link>
									</div>
									<h3 className="contact-time">08 : 00 AM - 10 : 00 PM</h3>
									<h4 className="contact-day">tất cả các ngày trong tuần</h4>
								</div>

								<div className="footer__copyright">
									<p>
										© Copyright NPH Digital. <br /> All Rights Reserved
									</p>
								</div>

								<div className="footer__subscribe">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Nhập email của bạn"
										/>
										<button
											type="submit"
											className="subs-btn">
											<span className="visually-hidden">Send</span>
											<i className="fa-solid fa-paper-plane"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
