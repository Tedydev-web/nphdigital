import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import Portfilio11 from '../../../public/assets/imgs/portfolio/1/1.webp';
import Portfilio12 from '../../../public/assets/imgs/portfolio/1/2.webp';
import Portfilio13 from '../../../public/assets/imgs/portfolio/1/3.webp';
import Portfilio14 from '../../../public/assets/imgs/portfolio/1/4.webp';
import Portfilio15 from '../../../public/assets/imgs/portfolio/1/5.webp';
import Portfilio16 from '../../../public/assets/imgs/portfolio/1/6.webp';
import Portfolio17 from '../../../public/assets/imgs/portfolio/1/7.webp';
import Portfilio18 from '../../../public/assets/imgs/portfolio/1/8.webp';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyPortfolio = () => {
	const { t } = useTranslation('home');
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				if (device_width > 767) {
					let portfolioline = gsap.timeline({
						scrollTrigger: {
							trigger: '.portfolio__area',
							start: 'top center-=200',
							pin: '.portfolio__text',
							end: 'bottom bottom+=80',
							markers: false,
							pinSpacing: false,
							scrub: 1,
						},
					});

					portfolioline.to('.portfolio__text', {
						scale: 3,
						duration: 1,
					});
					portfolioline.to('.portfolio__text', {
						scale: 3,
						duration: 1,
					});
					portfolioline.to(
						'.portfolio__text',
						{
							scale: 1,
							duration: 1,
						},
						'+=2'
					);
				}

				let portfolio_lists = gsap.utils.toArray('.portfolio__item');
				portfolio_lists.forEach((portfolio, i) => {
					gsap.set(portfolio, { opacity: 0.7 });
					let t1 = gsap.timeline();

					t1.set(portfolio, {
						position: 'relative',
					});
					t1.to(portfolio, {
						scrollTrigger: {
							trigger: portfolio,
							scrub: 2,
							duration: 1.5,
							start: 'top bottom+=100',
							end: 'bottom center',
							markers: false,
						},
						scale: 1,
						opacity: 1,
						rotateX: 0,
					});
				});
			});

			// Smooth scroll to the 'portfolio' section
			const scrollToPortfolio = () => {
				const targetElement = document.getElementById('portfolio');
				if (targetElement) {
					window.scrollTo({
						top: targetElement.offsetTop,
						behavior: 'smooth',
					});
				}
			};

			const portfolioLink = document.querySelector('a[href="#portfolio"]');
			if (portfolioLink) {
				portfolioLink.addEventListener('click', (e) => {
					e.preventDefault();
					scrollToPortfolio();
				});
			}

			return () => {
				tHero.revert();
				if (portfolioLink) {
					portfolioLink.removeEventListener('click', scrollToPortfolio);
				}
			};
		}
	}, []);
	return (
		<>
			<section
				className="portfolio__area pb-140"
				id="portfolio">
				<div className="container">
					<div className="row top_row">
						<h2 className="portfolio__text">{t('DigitalAgencyPortfolio.secTitle')}</h2>
						<div className="portfolio__list-1">
							<div className="portfolio__item">
								<Link href="#">
									<Image
										priority
										style={{ width: '100%', height: 'auto' }}
										className="mover"
										src={Portfilio11}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title1')}</h3>
									<p>{t('DigitalAgencyPortfolio.description1')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto' }}
										src={Portfilio12}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title2')}</h3>
									<p>{t('DigitalAgencyPortfolio.description2')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto' }}
										src={Portfilio13}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title3')}</h3>
									<p>{t('DigitalAgencyPortfolio.description3')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto', paddingTop: '25px' }}
										src={Portfilio14}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title4')}</h3>
									<p>{t('DigitalAgencyPortfolio.description4')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto' }}
										src={Portfilio15}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title5')}</h3>
									<p>{t('DigitalAgencyPortfolio.description5')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto', paddingTop: '25px' }}
										src={Portfilio16}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title6')}</h3>
									<p>{t('DigitalAgencyPortfolio.description6')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto', paddingTop: '25px' }}
										src={Portfolio17}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title7')}</h3>
									<p>{t('DigitalAgencyPortfolio.description7')}</p>
								</div>
							</div>
							<div className="portfolio__item">
								<Link href="/#">
									<Image
										priority
										style={{ width: '100%', height: 'auto', paddingTop: '25px' }}
										src={Portfilio18}
										alt="Portfolio Image"
									/>
								</Link>
								<div className="portfolio__info">
									<h3 className="portfolio__title">{t('DigitalAgencyPortfolio.title8')}</h3>
									<p>{t('DigitalAgencyPortfolio.description8')}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row row_bottom">
						<div className="col-xxl-12">
							<div
								className="portfolio__btn btn_wrapper"
								data-speed="1"
								data-lag="0.2">
								<Link
									className="wc-btn-secondary btn-hover btn-item"
									href="#portfolio"
									scroll={false}>
									{t('DigitalAgencyPortfolio.button.line1')} <br />
									{t('DigitalAgencyPortfolio.button.line2')}
									<i className="fa-solid fa-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyPortfolio;
