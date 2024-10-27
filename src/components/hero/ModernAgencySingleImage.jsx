import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VideoFrame from '../../../public/assets/imgs/essential-img/video-frame.png';
import SvgStar from '../../../public/assets/imgs/essential-img/svgstar.png';
import Shape24 from '../../../public/assets/imgs/shape/24.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const ModernAgencySingleImage = () => {
	const { t } = useTranslation('about');
	const hoverImage = useRef();
	const hoverImage2 = useRef();
	const hoverWrap = useRef();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const hover_8_wrap = hoverWrap.current.children;
			const h8_wrap_len = hover_8_wrap.length;

			if (h8_wrap_len == 1) {
				function showCase8Func(event, hover_8_wrap) {
					const contentBox = hover_8_wrap[0].getBoundingClientRect();
					const dx = event.pageX;
					const dy = event.clientY - contentBox.y;
					hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
				}
				hover_8_wrap[0].addEventListener('mousemove', (event) => {
					setInterval(showCase8Func(event, hover_8_wrap), 1000);
					hoverImage.current.classList.add('active');
				});
				hover_8_wrap[0].addEventListener('mouseout', (event) => {
					hoverImage.current.classList.remove('active');
				});
			}

			if (h8_wrap_len == 2) {
				function showCase8Func(event, hover_8_wrap) {
					const contentBox = hover_8_wrap[0].getBoundingClientRect();
					const dx = event.pageX;
					const dy = event.clientY - contentBox.y;
					hoverImage.current.style.transform = `translate(${dx}px, ${dy}px)`;
				}
				hover_8_wrap[0].addEventListener('mousemove', (event) => {
					setInterval(showCase8Func(event, hover_8_wrap), 1000);
					hoverImage.current.classList.add('active');
				});
				hover_8_wrap[0].addEventListener('mouseout', (event) => {
					hoverImage.current.classList.remove('active');
				});

				function showCase8Func2(event, hover_8_wrap) {
					const contentBox = hover_8_wrap[1].getBoundingClientRect();
					const dx = event.pageX;
					const dy = event.clientY - contentBox.y;
					hoverImage2.current.style.transform = `translate(${dx}px, ${dy}px)`;
				}
				hover_8_wrap[1].addEventListener('mousemove', (event) => {
					setInterval(showCase8Func2(event, hover_8_wrap), 1000);
					hoverImage2.current.classList.add('active');
				});
				hover_8_wrap[1].addEventListener('mouseout', (event) => {
					hoverImage2.current.classList.remove('active');
				});
			}
		}
	}, []);
	return (
		<>
			<div
				className="single__image-8 pt-130 pb-200 text-center sp-x"
				style={{ backgroundColor: '#1B1E20' }}>
				<div className="col-lg-10 text-center m-auto">
					<div className="singlecontent">
						<div className="hover_8_wrap">
							<h2
								className="tech_title fade_bottom_4"
								ref={hoverWrap}
								style={{ paddingTop: '50px' }}>
								{t('hero.title')}
							</h2>

							<div
								className="hover_8_img"
								style={{
									backgroundImage: 'url(assets/imgs/portfolio/detail/7.jpg)',
								}}
								ref={hoverImage}></div>
							<div
								className="hover_8_img_2"
								style={{
									backgroundImage: 'url(assets/imgs/portfolio/detail/6.jpg)',
								}}
								ref={hoverImage2}></div>
						</div>
						<p className="single_dis pb-110 fade_bottom_4">{t('hero.description')}</p>
						<div className="single__thumb">
							<video
								loop
								muted
								autoPlay
								playsInline
								style={{ width: '99%', height: '100%' }}>
								<source
									src="/assets/video/intro-01.mp4"
									type="video/mp4"
								/>
							</video>
							<Image
								priority
								style={{ width: '100%', height: '100%' }}
								src={VideoFrame}
								alt="image"
								className="video-frame"
							/>
							<Image
								priority
								width={113}
								style={{ height: 'auto' }}
								className="svgstar"
								src={SvgStar}
								alt="shape"
							/>
							<Image
								priority
								width={77}
								style={{ height: 'auto' }}
								src={Shape24}
								alt="shape"
								className="shape-2"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModernAgencySingleImage;
