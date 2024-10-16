import ServiceDetail from '../../../public/assets/imgs/service/detail//website/1.png';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const WebsiteService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Chúng tôi mang đến giải pháp thiết kế và phát triển website toàn diện và chuyên nghiệp.</h2>
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
									alt="Website development service image"
								/>
								<Image
									priority
									width={51}
									style={{ height: 'auto' }}
									src={Shape6}
									alt="Service shape icon"
									className="sd-shape"
								/>
							</div>
							<div className="service__detail-content">
								<p>Thiết kế và phát triển website của chúng tôi đảm bảo rằng mọi doanh nghiệp đều có một giải pháp số hoàn chỉnh. Từ việc tạo ra những trang web thân thiện với người dùng đến tối ưu hóa tốc độ và hiệu suất, chúng tôi giúp doanh nghiệp của bạn tiếp cận khách hàng tiềm năng một cách dễ dàng.</p>
								<p>Chúng tôi tập trung vào việc tạo ra trải nghiệm người dùng mượt mà, tích hợp SEO và bảo mật mạnh mẽ. Bằng cách sử dụng các công nghệ tiên tiến như React, Next.js, và WordPress, chúng tôi cung cấp giải pháp website tùy chỉnh phù hợp với từng nhu cầu cụ thể của doanh nghiệp, đồng thời giúp bạn mở rộng quy mô trong tương lai.</p>
								<p>Đội ngũ của chúng tôi cam kết mang đến sản phẩm chất lượng, giúp bạn xây dựng thương hiệu mạnh mẽ trên không gian số và đạt được mục tiêu kinh doanh nhanh chóng.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WebsiteService;
