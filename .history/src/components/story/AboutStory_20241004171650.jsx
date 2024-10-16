import Story1 from '../../../public/assets/imgs/story/1.jpg';
import Story2 from '../../../public/assets/imgs/story/2.jpg';
import Story3 from '../../../public/assets/imgs/story/3.jpg';
import Story4 from '../../../public/assets/imgs/story/4.jpg';
import Image from 'next/image';

const AboutStory = () => {
	return (
		<>
			<section className="story__area">
				<div className="container g-0 line pt-140">
					<span className="line-3"></span>
					<div className="sec-title-wrapper">
						<div className="row">
							<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
								<h2 className="sec-sub-title title-anim">NPH Digital</h2>
								<h3 className="sec-title title-anim">Lịch sử phát triển</h3>
							</div>
							<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
								<div className="story__text">
									<p style={{ textAlign: 'justify', color: '#fff' }}>Hơn bao giờ hết, kỷ nguyên Công nghệ thông tin ngày nay đang dần chiếm ưu thế và trở thành xu hướng toàn cầu. Công nghệ giúp chúng ta có thể giao tiếp và kết nối với nhau một cách dễ dàng, tiết kiệm được nhiều chi phí, đồng thời là một nguồn lưu trữ dữ liệu khổng lồ giúp cho con người không ngừng phát triển.</p>
									<p style={{ textAlign: 'justify', color: '#fff' }}>Nắm bắt được những cơ hội đó, Đối tác dịch vụ Công nghệ thông tin “NPH Digital” đã được thành lập. Chúng tôi không ngừng nỗ lực phát triển với sứ mệnh cung cấp những giải pháp công nghệ thông tin, dịch vụ tốt nhất tới tay khách hàng. Qua một chặng đường xây dựng và phát triển, NPH Digital đã dần khẳng định được vị trí của mình trong ngành công nghệ thông tin. Đến với NPH Digital, các bạn không chỉ yên tâm về sản phẩm, dịch vụ mà còn cảm nhận được sự nhiệt huyết đam mê công nghệ của đội ngũ nhân viên có trình độ, kinh nghiệm từ chúng tôi.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
							<div className="pin-spacer">
								{' '}
								<div
									className="cb-overview-offset"
									style={{ width: '1455.5px', height: '630.023px' }}>
									<div className="cb-overview-figure -offsetable">
										<div className="cb-overview-figure-bg -v1"></div>
										<div className="cb-overview-figure-media -sm">
											<video
												autoPlay
												playsInline
												loop
												muted>
												<source
													data-src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
													type="video/webm"
													src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
												/>
												<source
													data-src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
													type="video/mp4"
													src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
												/>
											</video>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutStory;
