import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import Image from 'next/image';
import Blog1 from '../../../../public/assets/imgs/blog/3/13.jpg';
import Blog2 from '../../../../public/assets/imgs/blog/3/14.jpg';
import Blog3 from '../../../../public/assets/imgs/blog/3/15.jpg';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const BlogRelated4 = () => {
	const { t } = useTranslation(['blogRelated', 'blog']);
	const blogs = [
		{
			src: Blog1,
			href: '/chi-tiet-bai-viet-11',
			category: t('StartupAgencyBlog.blogs.blog8.category', { ns: 'blog' }),
			date: t('StartupAgencyBlog.blogs.blog8.date', { ns: 'blog' }),
			title: t('StartupAgencyBlog.blogs.blog8.title', { ns: 'blog' }),
			excerpt: t('StartupAgencyBlog.blogs.blog8.excerpt', { ns: 'blog' }),
		},
		{
			src: Blog2,
			href: '/chi-tiet-bai-viet-12',
			category: t('StartupAgencyBlog.blogs.blog7.category', { ns: 'blog' }),
			date: t('StartupAgencyBlog.blogs.blog7.date', { ns: 'blog' }),
			title: t('StartupAgencyBlog.blogs.blog7.title', { ns: 'blog' }),
			excerpt: t('StartupAgencyBlog.blogs.blog7.excerpt', { ns: 'blog' }),
		},
		{
			src: Blog3,
			href: '/chi-tiet-bai-viet-13',
			category: t('StartupAgencyBlog.blogs.blog6.category', { ns: 'blog' }),
			date: t('StartupAgencyBlog.blogs.blog6.date', { ns: 'blog' }),
			title: t('StartupAgencyBlog.blogs.blog6.title', { ns: 'blog' }),
			excerpt: t('StartupAgencyBlog.blogs.blog6.excerpt', { ns: 'blog' }),
		},
	];

	useEffect(() => {
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
			<section className="blog__related blog__animation">
				<div className="container g-0 line pt-130 pb-140">
					<span className="line-3"></span>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">{t('blogRelated.title')}</h2>
							</div>
						</div>
					</div>

					<div className="row reset-grid">
						{blogs.map((blog, index) => (
							<div
								key={index}
								className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
								<article className="blog__item">
									<div className="blog__img-wrapper">
										<Link href={blog.href}>
											<div className="img-box">
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													className="image-box__item"
													src={blog.src}
													alt="Blog Thumbnail"
												/>
												<Image
													priority
													style={{ width: 'auto', height: 'auto' }}
													className="image-box__item"
													src={blog.src}
													alt="Blog Thumbnail"
												/>
											</div>
										</Link>
									</div>
									<h4 className="blog__meta sub-title-anim">
										<Link href="/category">{blog.category}</Link> . {blog.date}
									</h4>
									<h5>
										<Link
											href={blog.href}
											className="blog__title sub-title-anim">
											{blog.title}
										</Link>
									</h5>
									<Link
										href={blog.href}
										className="blog__btn">
										{t('blogRelated.readMore')}
										<span>
											<i className="fa-solid fa-arrow-right"></i>
										</span>
									</Link>
								</article>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogRelated4;
