import ServiceDetail from '../../../public/assets/imgs/service/detail/fanpage/2.jpeg';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const FanpageService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Dịch vụ chăm sóc Fanpage chuyên nghiệp từ NPH Digital giúp bạn xây dựng thương hiệu mạnh mẽ và gắn kết khách hàng hiệu quả.</h2>
							</div>
						</div>
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
							<div className="service__detail-circle">
								<span></span>
							</div>
						</div>
						<div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
							<div className="service__detail-img">
								<Image
									priority
									width={960}
									style={{ height: 'auto' }}
									src={ServiceDetail}
									alt="Service detail image"
								/>
								<Image
									priority
									width={51}
									style={{ height: 'auto' }}
									src={Shape6}
									alt="Service shape image"
									className="sd-shape"
								/>
							</div>
							<div className="service__detail-content">
								<p>Với dịch vụ chăm sóc Fanpage từ NPH Digital, chúng tôi không chỉ đơn thuần quản lý nội dung mà còn giúp bạn xây dựng hình ảnh thương hiệu vững chắc, tiếp cận đúng đối tượng khách hàng và tăng cường tương tác trên mạng xã hội.</p>
								<p>Chúng tôi phát triển chiến lược nội dung sáng tạo, độc đáo và thu hút, đồng thời tối ưu hóa quảng cáo để tăng cường tương tác và chuyển đổi. Từ việc quản lý bình luận, tin nhắn đến phân tích hiệu quả, chúng tôi luôn đồng hành cùng bạn trên hành trình phát triển thương hiệu.</p>
								<p>
									Dịch vụ chăm sóc Fanpage của chúng tôi bao gồm:
									<ul>
										<li>+ Quản lý nội dung Fanpage một cách hiệu quả và chuyên nghiệp.</li>
										<li>+ Xây dựng chiến lược nội dung hấp dẫn và thu hút người dùng.</li>
										<li>+ Tối ưu hóa quảng cáo và tiếp cận đúng đối tượng khách hàng.</li>
										<li>+ Theo dõi và phân tích dữ liệu để điều chỉnh chiến lược kịp thời.</li>
										<li>+ Quản lý tương tác, trả lời bình luận và tin nhắn khách hàng nhanh chóng.</li>
									</ul>
								</p>
								<p>NPH Digital cam kết mang lại giá trị vượt trội và kết quả thực tế, giúp doanh nghiệp của bạn phát triển mạnh mẽ trên nền tảng mạng xã hội.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FanpageService;
