'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import animationWordCome from '@/lib/utils/animationWordCome';

const AboutHero = () => {
	const wordAnim = useRef();

	useEffect(() => {
		animationWordCome(wordAnim.current);
	}, []);

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	return (
		<>
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
											src="/assets/imgs/story/2.mp4"
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
				.hero__about-video {
					position: relative;
					width: 100%; /* Video chiếm toàn bộ chiều rộng container */
					max-width: 1200px; /* Giới hạn chiều rộng tối đa cho desktop */
					margin: 0 auto; /* Căn giữa video trong container */

					/* Duy trì tỷ lệ 16:9 */
					padding-top: 56.25%; /* (9/16 * 100%) */
					overflow: hidden;

					video {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover; /* Video bao phủ toàn bộ diện tích mà không bị méo */
					}

					/* Kích thước nhỏ hơn cho thiết bị di động */
					@media (max-width: 768px) {
						width: 30%; /* Video chiếm 30% chiều rộng container */
						padding-top: calc(30% * 9 / 16); /* Điều chỉnh tỷ lệ video */
					}

					@media (max-width: 576px) {
						width: 30%; /* Vẫn giữ 30% trên màn hình rất nhỏ */
						padding-top: calc(30% * 9 / 16); /* Điều chỉnh tỷ lệ video */
					}
				}
			`}</style>
		</>
	);
};

export default AboutHero;
