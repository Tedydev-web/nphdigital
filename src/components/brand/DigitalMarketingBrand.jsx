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

const DigitalMarketingBrand = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			setTimeout(() => {
				let tHero = gsap.context(() => {
					gsap.set('.fade_bottom', { y: 30, opacity: 0 });

					if (device_width < 1023) {
						const fadeArray = gsap.utils.toArray('.fade_bottom');
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
						gsap.to('.fade_bottom', {
							scrollTrigger: {
								trigger: '.fade_bottom',
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
			}, 100);
		}
	}, []);
	return (
		<>
			<section className="brand__area">
				<div className="container pt-140 pb-140">
					<div className="row">
						<div className="col-xxl-12">
							<h2 className="brand__title-3 title-anim">We worked with global largest brands</h2>
							<div className="brand__list-3">
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={97}
										height={67}
										src={Brand1}
										alt="Brand Logo"
									/>
								</div>
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={85}
										height={67}
										src={Brand2}
										alt="Brand Logo"
									/>
								</div>
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={114}
										height={64}
										src={Brand3}
										alt="Brand Logo"
									/>
								</div>
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={82}
										height={70}
										src={Brand4}
										alt="Brand Logo"
									/>
								</div>
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={115}
										height={67}
										src={Brand5}
										alt="Brand Logo"
									/>
								</div>
								<div className="brand__item-2 fade_bottom">
									<Image
										priority
										width={121}
										height={63}
										src={Brand6}
										alt="Brand Logo"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalMarketingBrand;
