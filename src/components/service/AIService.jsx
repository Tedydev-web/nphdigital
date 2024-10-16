import ServiceDetail from '../../../public/assets/imgs/service/detail/AI/2.jpg';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const AIService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Dịch vụ lập trình AI và tự động hóa từ NPH Digital giúp doanh nghiệp tối ưu hóa quy trình và nâng cao hiệu suất làm việc.</h2>
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
								<p>Với dịch vụ lập trình AI và tự động hóa từ NPH Digital, chúng tôi giúp doanh nghiệp tối ưu hóa quy trình làm việc, tăng cường hiệu suất và giảm thiểu chi phí. Chúng tôi phát triển các giải pháp AI tùy chỉnh phù hợp với nhu cầu cụ thể của từng khách hàng.</p>
								<p>Chúng tôi cam kết sử dụng các công nghệ tiên tiến nhất, từ machine learning đến deep learning, để xây dựng các ứng dụng thông minh và tự động hóa các quy trình kinh doanh. Điều này giúp bạn tiết kiệm thời gian và nguồn lực, đồng thời tăng cường khả năng cạnh tranh trên thị trường.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AIService;
