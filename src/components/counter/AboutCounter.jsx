import { useEffect } from 'react';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);
const AboutCounter = () => {
	const { t } = useTranslation('about');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				gsap.set('.counter_animation .counter__anim', { y: -100, opacity: 0 });
				if (device_width < 1023) {
					const counterArray = gsap.utils.toArray('.counter_animation .counter__anim');
					counterArray.forEach((item, i) => {
						let counterTl = gsap.timeline({
							scrollTrigger: {
								trigger: item,
								start: 'top center+=200',
							},
						});
						counterTl.to(item, {
							y: 0,
							opacity: 1,
							ease: 'bounce',
							duration: 1.5,
						});
					});
				} else {
					gsap.to('.counter_animation .counter__anim', {
						scrollTrigger: {
							trigger: '.counter_animation',
							start: 'top center+=300',
						},
						y: 0,
						opacity: 1,
						ease: 'bounce',
						duration: 1.5,
						stagger: {
							each: 0.3,
						},
					});
				}
				for (let i = 1; i < 5; i++) {
					gsap.from(gsap.utils.toArray(`.count${i}`), {
						textContent: 0,
						duration: 1,
						delay: 0.2,
						ease: Power1.easeIn,
						snap: { textContent: 1 },
						stagger: 1,
						scrollTrigger: {
							trigger: `.counter__number`,
						},
					});
				}
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section
				className="counter__area"
				style={{ backgroundColor: '#121212' }}>
				<div className="container g-0 line pb-140 pt-140">
					<span className="line-3"></span>

					<div className="row">
						<div className="col-xxl-12">
							<div className="counter__wrapper-2 counter_animation">
								<div className="counter__item-2 counter__anim">
									<h2 className="counter__number count1">1000</h2>
									<p>
										{t('counter.count1.line1')}
										<br />
										{t('counter.count1.line2')}
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2 counter__anim">
									<h2 className="counter__number count2">963</h2>
									<p>
										{t('counter.count2.line1')} <br />
										{t('counter.count2.line2')}
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2 counter__anim">
									<h2 className="counter__number count3">6</h2>
									<p>
										{t('counter.count3.line1')} <br />
										{t('counter.count3.line2')}
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2 counter__anim">
									<h2 className="counter__number count4">38</h2>
									<p>
										{t('counter.count4.line1')}
										<br />
										{t('counter.count4.line2')}
									</p>
									<span className="counter__border"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutCounter;
