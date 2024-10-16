import { useEffect, useRef } from 'react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import animationWordCome from '@/lib/utils/animationWordCome';
import { jsx } from 'react/jsx-runtime';

const AboutHero = () => {
	const wordAnim = useRef();

	useEffect(() => {
		animationWordCome(wordAnim.current);
	}, []);

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	return (
		<section className="hero__about">
			<div className="container g-0 line">
				<span className="line-3"></span>
				<div className="row">
					<div className="col-xxl-12">
						<div className="hero__about-content">
							<h1
								className="hero-title animation__word_come"
								ref={wordAnim}>
								Chúng­ tôi­ không­ ngừng­ nỗ­ lực­ phát­ triển­ với­ sứ­ mệnh­ cung­ cấp­ những­ giải­ pháp­ công­ nghệ­ thông­ tin,­ dịch­ vụ­ tốt­ nhất­ tới­ tay­ khách­ hàng.
							</h1>
							<div className="hero__about-info">
								<div className="hero__about-btn">
									<div className="btn_wrapper">
										<Link
											href="/dich-vu"
											className="wc-btn-primary btn-hover btn-item">
											Xem các dịch vụ của NPH Digital
											<i className="fa-solid fa-arrow-right"></i>
										</Link>
									</div>
								</div>
								<div className="hero__about-text title-anim">
									<p style={{ textAlign: 'justify' }}>Qua một chặng đường xây dựng và phát triển, NPH Digital đã dần khẳng định được vị trí của mình trong ngành công nghệ thông tin. Đến với NPH Digital, các bạn không chỉ yên tâm về sản phẩm, dịch vụ mà còn cảm nhận được sự nhiệt huyết đam mê công nghệ của đội ngũ nhân viên có trình độ, kinh nghiệm từ chúng tôi.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row hero__about-row">
					<div className="col-xxl-12">
						<div className="hero__about-video">
							{!isMobile && (
								<video
									muted
									autoPlay
									playsInline>
									<source
										src="/assets/video/intro-01.mp4"
										type="video/mp4"
									/>
								</video>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
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
	);
};

export default AboutHero;
