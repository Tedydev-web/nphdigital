import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import { useTranslation } from 'react-i18next';
import Link from 'next/link.js';
import Blog1 from '../../../public/assets/imgs/blog/3/3.png';
import Blog2 from '../../../public/assets/imgs/blog/3/4.png';
import Blog3 from '../../../public/assets/imgs/blog/3/5.png';
import Blog4 from '../../../public/assets/imgs/blog/3/6.jpg';
// import Blog5 from '../../../public/assets/imgs/blog/3/7.png';
import Blog6 from '../../../public/assets/imgs/blog/3/8.png';
import Blog7 from '../../../public/assets/imgs/blog/3/9.png';
import Blog8 from '../../../public/assets/imgs/blog/3/10.png';
import Blog9 from '../../../public/assets/imgs/blog/3/11.jpg';
import Blog10 from '../../../public/assets/imgs/blog/3/12.png';
import Blog11 from '../../../public/assets/imgs/blog/3/13.jpg';
import Blog12 from '../../../public/assets/imgs/blog/3/14.jpg';
import Blog13 from '../../../public/assets/imgs/blog/3/15.jpg';
import Blog14 from '../../../public/assets/imgs/blog/3/16.png';
import Blog15 from '../../../public/assets/imgs/blog/3/17.png';
// import Blog16 from '../../../public/assets/imgs/blog/3/18.png';
import Blog16 from '../../../public/assets/imgs/blog/detail/2.png';

import Image from 'next/image.js';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyBlog = () => {
	const { t } = useTranslation('blog');
	const blogs = [
		{
			src: Blog16,
			href: '/cong-ty-tnhh-nph-digital-vinh-du-nhan-giai-thuong-top-10-thuong-hieu-uy-tin-hang-dau-viet-nam-2024',
			category: t('StartupAgencyBlog.blogs.blog1.category'),
			date: t('StartupAgencyBlog.blogs.blog1.date'),
			title: t('StartupAgencyBlog.blogs.blog1.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog1.excerpt'),
		},
		{
			src: Blog14,
			href: '/chi-tiet-bai-viet-14',
			category: t('StartupAgencyBlog.blogs.blog2.category'),
			date: t('StartupAgencyBlog.blogs.blog2.date'),
			title: t('StartupAgencyBlog.blogs.blog2.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog2.excerpt'),
		},
		{
			src: Blog15,
			href: '/chi-tiet-bai-viet-15',
			category: t('StartupAgencyBlog.blogs.blog3.category'),
			date: t('StartupAgencyBlog.blogs.blog3.date'),
			title: t('StartupAgencyBlog.blogs.blog3.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog3.excerpt'),
		},
		{
			src: Blog9,
			href: '/chi-tiet-bai-viet-9',
			category: t('StartupAgencyBlog.blogs.blog4.category'),
			date: t('StartupAgencyBlog.blogs.blog4.date'),
			title: t('StartupAgencyBlog.blogs.blog4.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog4.excerpt'),
		},
		{
			src: Blog10,
			href: '/chi-tiet-bai-viet-10',
			category: t('StartupAgencyBlog.blogs.blog5.category'),
			date: t('StartupAgencyBlog.blogs.blog5.date'),
			title: t('StartupAgencyBlog.blogs.blog5.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog5.excerpt'),
		},
		{
			src: Blog13,
			href: '/chi-tiet-bai-viet-13',
			category: t('StartupAgencyBlog.blogs.blog6.category'),
			date: t('StartupAgencyBlog.blogs.blog6.date'),
			title: t('StartupAgencyBlog.blogs.blog6.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog6.excerpt'),
		},
		{
			src: Blog12,
			href: '/chi-tiet-bai-viet-12',
			category: t('StartupAgencyBlog.blogs.blog7.category'),
			date: t('StartupAgencyBlog.blogs.blog7.date'),
			title: t('StartupAgencyBlog.blogs.blog7.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog7.excerpt'),
		},
		{
			src: Blog11,
			href: '/chi-tiet-bai-viet-11',
			category: t('StartupAgencyBlog.blogs.blog8.category'),
			date: t('StartupAgencyBlog.blogs.blog8.date'),
			title: t('StartupAgencyBlog.blogs.blog8.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog8.excerpt'),
		},
		{
			src: Blog1,
			href: '/chi-tiet-bai-viet',
			category: t('StartupAgencyBlog.blogs.blog9.category'),
			date: t('StartupAgencyBlog.blogs.blog9.date'),
			title: t('StartupAgencyBlog.blogs.blog9.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog9.excerpt'),
		},
		{
			src: Blog2,
			href: '/chi-tiet-bai-viet-2',
			category: t('StartupAgencyBlog.blogs.blog10.category'),
			date: t('StartupAgencyBlog.blogs.blog10.date'),
			title: t('StartupAgencyBlog.blogs.blog10.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog10.excerpt'),
		},
		{
			src: Blog3,
			href: '/chi-tiet-bai-viet-3',
			category: t('StartupAgencyBlog.blogs.blog11.category'),
			date: t('StartupAgencyBlog.blogs.blog11.date'),
			title: t('StartupAgencyBlog.blogs.blog11.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog11.excerpt'),
		},
		{
			src: Blog4,
			href: '/chi-tiet-bai-viet-4',
			category: t('StartupAgencyBlog.blogs.blog12.category'),
			date: t('StartupAgencyBlog.blogs.blog12.date'),
			title: t('StartupAgencyBlog.blogs.blog12.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog12.excerpt'),
		},
		{
			src: Blog6,
			href: '/chi-tiet-bai-viet-6',
			category: t('StartupAgencyBlog.blogs.blog14.category'),
			date: t('StartupAgencyBlog.blogs.blog14.date'),
			title: t('StartupAgencyBlog.blogs.blog14.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog14.excerpt'),
		},
		{
			src: Blog7,
			href: '/chi-tiet-bai-viet-7',
			category: t('StartupAgencyBlog.blogs.blog15.category'),
			date: t('StartupAgencyBlog.blogs.blog15.date'),
			title: t('StartupAgencyBlog.blogs.blog15.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog15.excerpt'),
		},
		{
			src: Blog8,
			href: '/chi-tiet-bai-viet-8',
			category: t('StartupAgencyBlog.blogs.blog16.category'),
			date: t('StartupAgencyBlog.blogs.blog16.date'),
			title: t('StartupAgencyBlog.blogs.blog16.title'),
			excerpt: t('StartupAgencyBlog.blogs.blog16.excerpt'),
		},
	];
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 5;
	const blogAreaRef = useRef(null);

	// Tính toán các bài viết cho trang hiện tại
	const indexOfLastBlog = currentPage * blogsPerPage;
	const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
	const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

	const totalPages = Math.ceil(blogs.length / blogsPerPage);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// Hàm chuyển trang
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		scrollToTop();
	};

	useEffect(() => {
		const blogItems = document.querySelectorAll('.blog__item-4');

		const handleMouseMove = (e, item) => {
			const { left, top, width, height } = item.getBoundingClientRect();
			const x = (e.clientX - left) / width;
			const y = (e.clientY - top) / height;

			const rotationIntensity = 30; // Tăng cường độ xoay

			requestAnimationFrame(() => {
				item.style.transform = `
        perspective(1000px)
        rotateX(${(y - 0.5) * rotationIntensity}deg)
        rotateY(${(x - 0.5) * -rotationIntensity}deg)
      `;

				item.style.setProperty('--mouse-x', `${x * 100}%`);
				item.style.setProperty('--mouse-y', `${y * 100}%`);
			});
		};

		const handleMouseLeave = (item) => {
			requestAnimationFrame(() => {
				item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
			});
		};

		blogItems.forEach((item) => {
			item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
			item.addEventListener('mouseleave', () => handleMouseLeave(item));
		});

		return () => {
			blogItems.forEach((item) => {
				item.removeEventListener('mousemove', handleMouseMove);
				item.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, [currentBlogs]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			let device_width = window.innerWidth;
			let tHero = gsap.context(() => {
				gsap.set('.blog__animation .blog__item-4', { x: 50, opacity: 0, marginBottom: '100px', backgroundColor: '#151b23' });

				if (device_width < 1023) {
					const blogList = gsap.utils.toArray('.blog__animation .blog__item-4');
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
					gsap.to('.blog__animation .blog__item-4', {
						scrollTrigger: {
							trigger: '.blog__animation .blog__item-4',
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
			<style jsx>{`
				.blog__item-4 {
					display: flex;
					flex-direction: column;
					height: 600px; // Chiều cao cố định
					background-color: #1c2128;
					border-radius: 8px;
					overflow: hidden;
					border-radius: 15px;
					transition: transform 0.1s ease-out;
					will-change: transform;
					position: relative;
					overflow: visible;
					border-radius: 15px;
				}

				.blog__item-4::before {
					content: '';
					position: absolute;
					top: -5px;
					left: -5px;
					right: -5px;
					bottom: -5px;
					background: linear-gradient(45deg, #ff00ff, #00ff00, #00ffff, #ff00ff);
					z-index: -1;
					filter: blur(20px);
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.blog__item-4:hover::before {
					opacity: 1;
				}

				.blog__item-4:hover {
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
				}

				.blog__item-4::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: #1c2128;
					z-index: -1;
					border-radius: 15px;
				}

				.blog__img-4 {
					height: 250px; // Chiều cao cố định
					overflow: hidden;
					border-radius: 15px;
				}
				.blog__content-4 {
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					padding: 20px 30px 40px 30px;
					overflow: hidden; // Đảm bảo nội dung không vượt quá chiều cao cố định
				}
				.blog__meta-4,
				.blog__excerpt-4 {
					margin-bottom: 20px;
				}
				.blog__title-4 {
					flex-grow: 1;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 3; // Giới hạn số dòng
					-webkit-box-orient: vertical;
				}
				.blog__excerpt-4 {
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2; // Giới hạn số dòng
					-webkit-box-orient: vertical;
				}
				.blog__btn-4 {
					margin-top: auto;
				}
				.pagination {
					display: flex;
					justify-content: center;
					margin-top: 30px;
				}
				.pagination button {
					margin: 0 5px;
					padding: 5px 10px;
					background-color: #1c2128;
					color: #f0f6fc;
					border: none;
					border-radius: 5px;
					cursor: pointer;
				}
				.pagination button:disabled {
					opacity: 0.5;
					cursor: not-allowed;
				}
			`}</style>

			<section
				ref={blogAreaRef}
				className="blog__area-4 blog__animation"
				style={{ backgroundColor: '#000' }}>
				<div className="container g-0 line_4 pt-150 pb-150">
					{/* <div className="line-col-4">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div> */}

					<div className="row">
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div className="sec-title-wrapper text-anim">
								<h2 className="sec-subtile-6">{t('StartupAgencyBlog.subTitle')}</h2>
								<h3 className="sec-title-6 title-anim">{t('StartupAgencyBlog.title')}</h3>
								<p>{t('StartupAgencyBlog.description')}</p>{' '}
								<Link
									className="btn-started"
									href="/bai-viet">
									{t('StartupAgencyBlog.viewAll')}
									<span>
										<i className="fa-solid fa-arrow-right"></i>
									</span>
								</Link>
							</div>
						</div>

						{currentBlogs.map((blog, index) => (
							<div
								key={index}
								className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-4">
								<article className="blog__item-4">
									<div className="blog__img-4">
										<Link href={blog.href}>
											<Image
												priority
												style={{ width: '100%', height: '250px' }}
												src={blog.src}
												alt="Blog Image"
											/>
										</Link>
									</div>
									<div className="blog__content-4">
										<h4 className="blog__meta-4">
											<Link href="/category">{blog.category}</Link> <span>{blog.date}</span>
										</h4>
										<h5 className="blog__title-4">
											<Link
												href={blog.href}
												style={{ color: '#f0f6fc' }}>
												{blog.title}
											</Link>
										</h5>
										<p className="blog__excerpt-4">{blog.excerpt}</p>
										<Link
											href={blog.href}
											className="blog__btn-4">
											{t('StartupAgencyBlog.readMore')}
											<span>
												<i className="fa-solid fa-arrow-right"></i>
											</span>
										</Link>
									</div>
								</article>
							</div>
						))}
					</div>

					<div className="pagination">
						<button
							onClick={() => paginate(currentPage - 1)}
							disabled={currentPage === 1}>
							{t('StartupAgencyBlog.previous')}
						</button>
						{[...Array(totalPages)].map((_, i) => (
							<button
								key={i}
								onClick={() => paginate(i + 1)}
								disabled={currentPage === i + 1}>
								{i + 1}
							</button>
						))}
						<button
							onClick={() => paginate(currentPage + 1)}
							disabled={currentPage === totalPages}>
							{t('StartupAgencyBlog.next')}
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default StartupAgencyBlog;
