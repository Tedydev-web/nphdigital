import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import Blog1 from '../../../public/assets/imgs/blog/1.jpg';
import Blog2 from '../../../public/assets/imgs/blog/2.jpg';
import Blog3 from '../../../public/assets/imgs/blog/3.jpg';
import Blog4 from '../../../public/assets/imgs/blog/4.jpg';
import Blog5 from '../../../public/assets/imgs/blog/5.jpg';
import Blog6 from '../../../public/assets/imgs/blog/6.jpg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

gsap.registerPlugin(ScrollTrigger);

const Category1 = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				gsap.set('.blog__animation .blog__item', { x: 50, opacity: 0 });

				if (device_width < 1023) {
					const blogList = gsap.utils.toArray('.blog__animation .blog__item');
					blogList.forEach((item, i) => {
						let blogTl = gsap.timeline({
							scrollTrigger: {
								trigger: item,
								start: 'top center+=200',
							},
						});
						blogTl.to(item, {
							x: 0,
							opacity: 1,
							ease: 'power2.out',
							duration: 1.5,
						});
					});
				} else {
					gsap.to('.blog__animation .blog__item', {
						scrollTrigger: {
							trigger: '.blog__animation .blog__item',
							start: 'top center+=300',
							markers: false,
						},
						x: 0,
						opacity: 1,
						ease: 'power2.out',
						duration: 2,
						stagger: {
							each: 0.3,
						},
					});
				}
			});
			return () => tHero.revert();
		}
	}, []);
	return (
		<>
			<section className="blog__area-6 blog__animation">
				<div className="container g-0 line pt-110 pb-110">
					<span className="line-3"></span>
					<div className="row pb-130">
						<div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title-2 animation__char_come"
									ref={charAnim}>
									Interior <br />
									Design
								</h2>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
							<div className="blog__text">
								<p>Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs. </p>
							</div>
						</div>
					</div>

					<div className="row reset-grid">
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog1}
												alt="Blog Thumbnail"
											/>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog1}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/bai-viet">UI Design</Link> . 15 March 2019
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										Ways of lying to yourself about your new relationship.
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>

						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog2}
												alt="Blog Thumbnail"
											/>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog2}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/category">UI Design</Link> . 02 May 2019
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										How to manage a talented and successful de sign team
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>

						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog3}
												alt="Blog Thumbnail"
											/>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog3}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/category">UI Design</Link> . 02 May 2022
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										How to bring fold to your startup company with Axtra
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>

						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												className="image-box__item"
												src={Blog4}
												alt="Blog Thumbnail"
											/>
											<Image
												className="image-box__item"
												src={Blog4}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/category">UI Design</Link> . 22 Dec 2018
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										Ways of lying to yourself about your new relationship.
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>

						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog5}
												alt="Blog Thumbnail"
											/>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog5}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/category">UI Design</Link> . 02 May 2019
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										How to manage a talented and successful de sign team
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>

						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<article className="blog__item">
								<div className="blog__img-wrapper">
									<Link href="/chi-tiet-bai-viet">
										<div className="img-box">
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog6}
												alt="Blog Thumbnail"
											/>
											<Image
												priority
												style={{ width: 'auto', height: 'auto' }}
												className="image-box__item"
												src={Blog6}
												alt="Blog Thumbnail"
											/>
										</div>
									</Link>
								</div>
								<h4 className="blog__meta">
									<Link href="/category">UI Design</Link> . 02 May 2019
								</h4>
								<h5>
									<Link
										href="/chi-tiet-bai-viet"
										className="blog__title">
										How to bring fold to your startup company with Axtra
									</Link>
								</h5>
								<Link
									href="/chi-tiet-bai-viet"
									className="blog__btn">
									{t('blogRelated.readMore')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Category1;
