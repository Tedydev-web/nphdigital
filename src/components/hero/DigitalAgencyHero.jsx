import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from '@/plugins';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link.js';
import ArrowDownBig from '../../../public/assets/imgs/icon/arrow-down-big.png';
import Hero1bg from '../../../public/assets/imgs/hero/1/1-bg.png';
import Image from 'next/image.js';

const DigitalAgencyHero = () => {
	const heroTitle = useRef();
	const heroSubTitle = useRef();
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
				gsap.set('.experience', {
					y: 50,
					opacity: 0,
				});
				let split_hero__title = new SplitText(heroTitle.current, {
					type: 'chars',
				});
				let split_hero__subtitle = new SplitText(heroSubTitle.current, {
					type: 'chars words',
				});

				gsap.from(split_hero__title.chars, {
					duration: 1,
					x: 70,
					autoAlpha: 0,
					stagger: 0.1,
				});
				gsap.from(split_hero__subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, '-=1');

				gsap.to(
					'.experience',
					{
						y: 0,
						opacity: 1,
						duration: 2,
						ease: 'power2.out',
					},
					'-=1.5'
				);
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section className="hero__area ">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="hero__content animation__hero_one">
								<Link href="/dich-vu">
									Tư vấn, thiết kế, giải pháp <br /> công nghệ chuyển đổi số{' '}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
								<div className="hero__title-wrapper">
									<h1
										className="hero__title"
										ref={heroTitle}>
										NPH Digital <br className="responsive-br" />
										Transformation <br className="responsive-br" />
										Solutions
									</h1>
									<p
										className="hero__sub-title"
										ref={heroSubTitle}>
										Với mục tiêu trở thành đối tác công nghệ thông tin hàng đầu trong khu vực. Chúng tôi luôn phát huy tính sáng tạo và chuyên nghiệp trong công việc để làm hài lòng mọi yêu cầu của khách hàng một cách tốt nhất.{' '}
									</p>
								</div>
								<Image
									priority
									width={170}
									style={{ height: 'auto' }}
									src={ArrowDownBig}
									alt="Arrow Down Icon"
								/>
								<div className="experience">
									<h2 className="title">1000+</h2>
									<p>
										Dự án đã hoàn thành <br />
										xuất sắc{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Image
					priority
					style={{ width: 'auto', height: 'auto' }}
					src={Hero1bg}
					alt="image"
					className="hero1_bg"
				/>
			</section>
		</>
	);
};

export default DigitalAgencyHero;
