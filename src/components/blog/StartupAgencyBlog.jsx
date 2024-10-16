import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link.js';
import Blog41 from '../../../public/assets/imgs/blog/3/3.png';
import Blog42 from '../../../public/assets/imgs/blog/3/4.png';
import Blog43 from '../../../public/assets/imgs/blog/3/5.png';
import Blog44 from '../../../public/assets/imgs/blog/3/6.jpg';
import Blog45 from '../../../public/assets/imgs/blog/3/7.png';
import Blog46 from '../../../public/assets/imgs/blog/3/8.png';
import Blog47 from '../../../public/assets/imgs/blog/3/9.png';
import Blog48 from '../../../public/assets/imgs/blog/3/10.png';
import Blog49 from '../../../public/assets/imgs/blog/3/11.jpg';
import Blog50 from '../../../public/assets/imgs/blog/3/12.png';
import Blog51 from '../../../public/assets/imgs/blog/3/13.jpg';
import Blog52 from '../../../public/assets/imgs/blog/3/14.jpg';
import Blog53 from '../../../public/assets/imgs/blog/3/15.jpg';
import Blog54 from '../../../public/assets/imgs/blog/3/16.png';
import Blog55 from '../../../public/assets/imgs/blog/3/17.png';
import Blog56 from '../../../public/assets/imgs/blog/3/18.png';
import Blog57 from '../../../public/assets/imgs/blog/3/19.png';
import Blog58 from '../../../public/assets/imgs/blog/3/20.png';
import Blog59 from '../../../public/assets/imgs/blog/3/21.jpg';
import Blog60 from '../../../public/assets/imgs/blog/3/22.png';
import Blog61 from '../../../public/assets/imgs/blog/3/22.png';
import Blog62 from '../../../public/assets/imgs/blog/3/22.png';
import Blog63 from '../../../public/assets/imgs/blog/3/22.png';
import Blog64 from '../../../public/assets/imgs/blog/3/22.png';
import Blog65 from '../../../public/assets/imgs/blog/3/22.png';
import Blog66 from '../../../public/assets/imgs/blog/3/22.png';
import Blog67 from '../../../public/assets/imgs/blog/3/22.png';
import Blog68 from '../../../public/assets/imgs/blog/3/22.png';
import Blog69 from '../../../public/assets/imgs/blog/3/22.png';
import Blog70 from '../../../public/assets/imgs/blog/3/22.png';
import Blog71 from '../../../public/assets/imgs/blog/3/22.png';
import Blog72 from '../../../public/assets/imgs/blog/3/22.png';
import Blog73 from '../../../public/assets/imgs/blog/3/22.png';
import Blog74 from '../../../public/assets/imgs/blog/3/22.png';
import Blog75 from '../../../public/assets/imgs/blog/3/22.png';
import Blog76 from '../../../public/assets/imgs/blog/3/22.png';
import Blog77 from '../../../public/assets/imgs/blog/3/22.png';
import Blog78 from '../../../public/assets/imgs/blog/3/22.png';
import Blog79 from '../../../public/assets/imgs/blog/3/22.png';
import Blog80 from '../../../public/assets/imgs/blog/3/22.png';
import baiviet1 from '@/pages/chi-tiet-bai-viet';
import Image from 'next/image.js';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
	{ src: Blog54, href: '/chi-tiet-bai-viet-14', category: 'Innovation', date: '14 May 2019', title: 'Thiết Kế App Cho Doanh Nghiệp Năm 2023: Chiến Lược Số Hóa Đa Dạng Và Tương Lai' },
	{ src: Blog55, href: '/chi-tiet-bai-viet-15', category: 'Technology', date: '15 May 2019', title: 'Thiết kế app giao hàng cho thị trường nông thôn: 10 thách thức và giải pháp', excerpt: 'Thiết kế app giao hàng cho thị trường nông thôn không chỉ mang lại lợi ích kinh tế cho doanh nghiệp mà còn góp phần nâng cao chất lượng cuộc sống và thúc đẩy sự phát triển bền vững của cộng đồng nông thôn.' },
	{ src: Blog49, href: '/chi-tiet-bai-viet-9', category: 'Branding', date: '09 May 2019', title: 'Thiết Kế App Theo Yêu Cầu: 7 Nguyên Tắc Vàng', excerpt: 'Thiết kế app theo yêu cầu đòi hỏi phải tuân thủ các nguyên tắc cơ bản để đảm bảo tính khả thi, hiệu năng và bảo mật của ứng dụng.' },
	{ src: Blog50, href: '/chi-tiet-bai-viet-10', category: 'E-commerce', date: '10 May 2019', title: 'Thiết Kế App Giao Nhận Cho Các Doanh Nghiệp Khởi Nghiệp | Xu hướng 2024', excerpt: 'Bằng cách thiết kế app giao nhận riêng, các doanh nghiệp khởi nghiệp có thể tối ưu hóa hoạt động kinh doanh của mình, nâng cao trải nghiệm khách hàng và tạo điều kiện thuận lợi cho sự phát triển bền vững trong môi trường cạnh tranh khốc liệt hiện nay.' },
	{ src: Blog53, href: '/chi-tiet-bai-viet-13', category: 'Business Strategy', date: '13 May 2019', title: 'Thiết Kế App Nội Thất Năm 2023: Cách Tối Ưu Hóa Không Gian Sống Của Bạn' },
	{ src: Blog52, href: '/chi-tiet-bai-viet-12', category: 'Startup Tips', date: '12 May 2019', title: 'Giải pháp nhà thông minh: Nhà thông minh NPH Digital – 1 Sự tiện nghi trong tầm tay' },
	{ src: Blog51, href: '/chi-tiet-bai-viet-11', category: 'Mobile App', date: '11 May 2019', title: '7 Bước Tạo Trang Web Tin Tức Thu Hút Hàng Ngàn Lượt Truy Cập' },
	{ src: Blog41, href: '/chi-tiet-bai-viet', category: 'Thiết kế App', date: '22/08/2024', title: 'Các Yếu Tố Thiết Kế App Không Thể Thiếu Trong Năm 2024', excerpt: 'Việc thiết kế app chất lượng không chỉ mang lại lợi ích trực tiếp về trải nghiệm người dùng và tăng cường sự hiện diện của thương hiệu, mà còn tạo ra nhiều cơ hội kinh doanh mới, cung cấp dữ liệu quý giá, và nâng cao khả năng cạnh tranh.' },
	{ src: Blog42, href: '/chi-tiet-bai-viet-2', category: 'Thiết kế App', date: '13/08/2024', title: 'Thiết Kế App Theo Yêu Cầu: 9 Cách Tối Ưu Hóa Giao Diện Người Dùng', excerpt: 'Trong bối cảnh người dùng ngày càng đòi hỏi cao về sự tiện ích và trải nghiệm cá nhân, thiết kế app theo yêu cầu không chỉ là một lựa chọn mà còn là một chiến lược quan trọng giúp các doanh nghiệp đạt được lợi thế cạnh tranh và thành công bền vững trong thị trường ứng dụng di động.' },
	{ src: Blog43, href: '/chi-tiet-bai-viet-3', category: 'Thiết kế App', date: '03 May 2019', title: '10 Lợi Ích Ứng Dụng Gamification Trong Thiết Kế App Để Tăng Tương Tác', excerpt: 'Phần diễn giải này cung cấp một cái nhìn sâu sắc về cách các yếu tố gamification được sử dụng trong thiết kế app, giúp tăng cường sự tương tác và giữ chân người dùng.' },
	{ src: Blog44, href: '/chi-tiet-bai-viet-4', category: 'Graphic Design', date: '04 May 2019', title: 'Thiết Kế App Giao Nhận Đồ Ăn: 7 Lợi Ích Tính Năng Chat Với Tài Xế', excerpt: 'Triển khai tính năng chat trong quy trình thiết kế app giao nhận đồ ăn không chỉ đơn thuần là một công việc kỹ thuật, mà còn đòi hỏi sự kết hợp giữa việc phát triển công nghệ, quản lý hệ thống, và xây dựng trải nghiệm người dùng.' },
	{ src: Blog45, href: '/chi-tiet-bai-viet-5', category: 'Digital Marketing', date: '05 May 2019', title: 'Thiết Kế App Theo Yêu Cầu: 10 Bước Đơn Giản Để Bắt Đầu', excerpt: 'Thiết kế app theo yêu cầu không chỉ là một xu hướng mà còn là một giải pháp cần thiết cho sự phát triển và thành công của doanh nghiệp trong thời đại kỹ thuật số.' },
	{ src: Blog46, href: '/chi-tiet-bai-viet-6', category: 'SEO', date: '06 May 2019', title: '10 Công Nghệ Mới Trong Thiết Kế App Giao Nhận', excerpt: 'Các công nghệ mới như AI, Machine Learning, Blockchain, IoT, AR/VR, Big Data, Cloud Computing, 5G, Chatbots và Trợ Lý Ảo, Contactless Payment, và BaaS đang thay đổi cách thức phát triển và tối ưu hóa trong thiết kế app giao nhận.' },
	{ src: Blog47, href: '/chi-tiet-bai-viet-7', category: 'Content Marketing', date: '07 May 2019', title: '10 Cách Tối Ưu Hóa Trải Nghiệm Người Dùng Trong Thiết Kế App', excerpt: 'Trong quá trình thiết kế app, các nguyên tắc của UX phải được áp dụng để đảm bảo rằng ứng dụng không chỉ đẹp mắt mà còn dễ sử dụng và hiệu quả.' },
	{ src: Blog48, href: '/chi-tiet-bai-viet-8', category: 'Social Media', date: '08 May 2019', title: 'Thiết Kế App Giao Hàng Đa Nền Tảng | Xu Hướng 2024', excerpt: 'Các xu hướng thiết kế app giao hàng năm 2024 tập trung vào việc tối ưu hóa trải nghiệm người dùng thông qua công nghệ tiên tiến như AI, AR, và blockchain.' },
	// { src: Blog56, href: '/chi-tiet-bai-viet-1'category: 'Entrepreneurship', date: '16 May 2019', title: 'Học máy (Machine Learning) trong Xây dựng App Giao hàng: Thúc đẩy Hiệu quả Kinh doanh Thời đại 4.0', excerpt: 'Học máy (Machine Learning) đang trở thành cột mốc quan trọng trong xây dựng ứng dụng giao hàng, đem lại tiềm năng tối ưu hóa tuyến đường, dự báo nhu cầu và cải thiện trải nghiệm người dùng. Bài viết này khám phá cách mà công nghệ hiện đại này thúc đẩy hiệu quả kinh doanh trong bối cảnh Cách mạng Công nghiệp 4.0.' },
	// { src: Blog57, href: '/chi-tiet-bai-viet-1'category: 'Leadership', date: '17 May 2019', title: 'Các Xu Hướng Trong Thiết Kế App Năm 2024', excerpt: 'Thiết kế app hiệu quả giúp cải thiện sự tương tác, tối ưu hóa hiệu suất và làm tăng độ tin cậy của ứng dụng, từ đó góp phần vào sự phát triển của doanh nghiệp và nâng cao giá trị thương hiệu.' },
	// { src: Blog58, href: '/chi-tiet-bai-viet-1'category: 'Productivity', date: '18 May 2019', title: '10 Cách Sử Dụng Animation Trong Thiết Kế App Giao Hàng', excerpt: 'Trong thiết kế app giao hàng, animation không chỉ là một yếu tố thẩm mỹ mà còn là một phần thiết yếu để nâng cao trải nghiệm người dùng.' },
	// { src: Blog59, href: '/chi-tiet-bai-viet-1'category: 'Work-Life Balance', date: '19 May 2019', title: '9 Yếu Tố Quyết Định Thành Công Trong Thiết Kế App Theo Yêu Cầu', excerpt: 'Nội dung bài viết Giới Thiệu Chung Tầm Quan Trọng và Sự Cạch Tranh Của…' },
	// { src: Blog60, href: '/chi-tiet-bai-viet-1'category: 'Career Development', date: '20 May 2019', title: 'Thiết kế app giao hàng: 5 Kinh nghiệm từ các doanh nghiệp hàng đầu', excerpt: 'Thiết kế app giao hàng cung cấp một giải pháp nhanh chóng và hiệu quả cho việc vận chuyển hàng hóa, từ thực phẩm, đồ uống đến hàng tiêu dùng và các sản phẩm công nghệ.' },
	// { src: Blog61, href: '/chi-tiet-bai-viet-1'category: 'Career Development', date: '21 May 2019', title: '10 Gợi ý thiết kế app theo yêu cầu cho các lĩnh vực khác nhau', excerpt: 'Nội dung bài viết Giới thiệu về tầm quan trọng của Thiết kế App theo…' },
	// { src: Blog62, href: '/chi-tiet-bai-viet-1'category: 'Career Development', date: '22 May 2019', title: 'Thiết kế app giao hàng đa ngôn ngữ: 10 điều cần lưu ý', excerpt: 'Thiết kế app giao hàng đa ngôn ngữ là yếu tố quan trọng trong việc mở rộng và phát triển doanh nghiệp trên thị trường toàn cầu.' },
	// { src: Blog63, href: '/chi-tiet-bai-viet-1'category: 'Career Development', date: '23 May 2019', title: 'Thiết Kế App Theo Yêu Cầu: 5 Cách Tiếp Cận Khách Hàng Hiệu Quả', excerpt: 'Việc đầu tư vào thiết kế app theo yêu cầu là một chiến lược kinh doanh thông minh, giúp doanh nghiệp tiếp cận và phục vụ khách hàng một cách hiệu quả, từ đó đạt được thành công bền vững trong thời đại công nghệ số.' },
	// { src: Blog64, href: '/chi-tiet-bai-viet-1'category: 'Career Development', date: '24 May 2019', title: '8 Chiến Lược Phát Triển App Giao Hàng Cho Doanh Nghiệp Nhỏ', excerpt: 'Nội dung bài viết Giới Thiệu tổng quan Tại Sao Doanh Nghiệp Nhỏ Cần Một…' },
];

const StartupAgencyBlog = () => {
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
								<h2 className="sec-subtile-6">Bài viết gần đây</h2>
								<h3 className="sec-title-6 title-anim">Bài viết</h3>
								<p>Nơi chia sẻ kiến thức và kinh nghiệm của chúng tôi về các chủ đề đa dạng như thiết kế, tiếp thị kỹ thuật số, SEO, và nhiều lĩnh vực khác để giúp bạn phát triển doanh nghiệp của mình.</p>{' '}
								<Link
									className="btn-started"
									href="/bai-viet">
									Tất cả bài viết{' '}
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
											href="#"
											className="blog__btn-4">
											Xem thêm{' '}
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
							Trước
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
							Sau
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default StartupAgencyBlog;
