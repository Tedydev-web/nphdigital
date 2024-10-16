import { useEffect } from 'react';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';

gsap.registerPlugin(ScrollTrigger);

const TeamCounter = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let tHero = gsap.context(() => {
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
			<section className="counter__area">
				<div className="container g-0 line pb-140 pt-140">
					<span className="line-3"></span>

					<div className="row">
						<div className="col-xxl-12">
							<div className="counter__wrapper-2">
								<div className="counter__item-2">
									<h2 className="counter__number count1">1000</h2>
									<p>
										Project <br />
										completed
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2">
									<h2 className="counter__number count2">963</h2>
									<p>
										Khách hàng <br />
										hài lòng
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2">
									<h2 className="counter__number count3">6</h2>
									<p>
										Năm kinh nghiệm
										<br />
										trong lĩnh vực
									</p>
									<span className="counter__border"></span>
								</div>
								<div className="counter__item-2">
									<h2 className="counter__number count4">38</h2>
									<p>Thành viên</p>
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

export default TeamCounter;
