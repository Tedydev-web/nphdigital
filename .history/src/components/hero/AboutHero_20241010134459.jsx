import { useEffect, useRef } from 'react';
import Link from 'next/link.js';
import Award from '../../../public/assets/imgs/about/award.png';
import Image from 'next/image.js';
import animationWordCome from '@/lib/utils/animationWordCome';

const AboutHero = () => {
	const wordAnim = useRef();
	useEffect(() => {
		animationWordCome(wordAnim.current);
	}, []);
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
										<p style={{ textAlign: 'justify' }}>{'Qua một chặng đường xây dựng và phát triển, NPH Digital đã dần khẳng định được vị trí của mình trong ngành công nghệ thông tin. Đến với NPH Digital, các bạn không chỉ yên tâm về sản phẩm, dịch vụ mà còn cảm nhận được sự nhiệt huyết đam mê công nghệ của đội ngũ nhân viên có trình độ, kinh nghiệm từ chúng tôi.'}</p>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row hero__about-row">
						<div className="col-xxl-12">
							<div className="hero__about-video">
								<video
									muted
									autoPlay
									playsInline>
									<source
										src="\assets\video\intro-01.mp4"
										type="video/mp4"
									/>
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutHero;
