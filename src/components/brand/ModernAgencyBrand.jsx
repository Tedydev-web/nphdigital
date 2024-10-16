import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Brand1 from '../../../public/assets/imgs/brand/1.webp';
import Brand2 from '../../../public/assets/imgs/brand/2.webp';
import Brand3 from '../../../public/assets/imgs/brand/3.webp';
import Brand4 from '../../../public/assets/imgs/brand/4.webp';
import Brand5 from '../../../public/assets/imgs/brand/5.webp';
import Brand6 from '../../../public/assets/imgs/brand/6.webp';
import Brand7 from '../../../public/assets/imgs/brand/7.webp';
import Brand8 from '../../../public/assets/imgs/brand/8.webp';
import Brand9 from '../../../public/assets/imgs/brand/9.webp';
import Brand10 from '../../../public/assets/imgs/brand/10.webp';
import Brand11 from '../../../public/assets/imgs/brand/11.webp';
import Brand12 from '../../../public/assets/imgs/brand/12.webp';

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyBrand = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				gsap.set('.fade_bottom_5', { y: 30, opacity: 0 });

				if (device_width < 1023) {
					const fadeArray = gsap.utils.toArray('.fade_bottom_5');
					fadeArray.forEach((item, i) => {
						let fadeTl = gsap.timeline({
							scrollTrigger: {
								trigger: item,
								start: 'top center+=200',
							},
						});
						fadeTl.to(item, {
							y: 0,
							opacity: 1,
							ease: 'power2.out',
							duration: 1.5,
						});
					});
				} else {
					gsap.to('.fade_bottom_5', {
						scrollTrigger: {
							trigger: '.fade_bottom_5',
							start: 'top center+=300',
							markers: false,
						},
						y: 0,
						opacity: 1,
						ease: 'power2.out',
						duration: 1,
						stagger: {
							each: 0.2,
						},
					});
				}
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<div className="client__area-8 sp-x">
				<h6 className="text-end about-sub-right">Our client</h6>
				<div className="section_wrapper">
					<h4 className="react_border">
						<span>05</span>
					</h4>
				</div>
				<div className="client__section">
					<h2 className="client__section__title fade_bottom_5">
						Our <span>global</span> <br />
						clients
					</h2>
					<p className="client__section__dis fade_bottom_5">{"We're passionate about doing the best digital innovation and we achieve results we're proud of."}</p>
				</div>
				<div className="client__logo">
					<Image
						priority
						width={97}
						height={67}
						src={Brand1}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={85}
						height={67}
						src={Brand2}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={114}
						height={64}
						src={Brand3}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={82}
						height={70}
						src={Brand4}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={115}
						height={67}
						src={Brand5}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={121}
						height={63}
						src={Brand6}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={97}
						height={67}
						src={Brand1}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={97}
						height={67}
						src={Brand1}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={85}
						height={67}
						src={Brand2}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={114}
						height={64}
						src={Brand3}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={82}
						height={70}
						src={Brand4}
						alt="company logo"
						className="fade_bottom_5"
					/>
					<Image
						priority
						width={115}
						height={67}
						src={Brand5}
						alt="company logo"
						className="fade_bottom_5"
					/>
				</div>
			</div>
		</>
	);
};

export default ModernAgencyBrand;
