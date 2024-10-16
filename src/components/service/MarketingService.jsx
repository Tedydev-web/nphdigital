import ServiceDetail from '../../../public/assets/imgs/service/detail/maketing/2.png';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const MarketingService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Chúng tôi cung cấp giải pháp quảng cáo số sáng tạo và hiệu quả.</h2>
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
								<p>Tại NPH Digital, chúng tôi hiểu rằng quảng cáo số không chỉ là một phần trong chiến lược marketing, mà còn là một công cụ mạnh mẽ giúp kết nối doanh nghiệp với khách hàng. Chúng tôi phát triển các chiến dịch quảng cáo số hiệu quả, nhắm đến đúng đối tượng và tối ưu hóa chi phí quảng cáo.</p>
								<p>Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực quảng cáo và phân tích dữ liệu, chúng tôi cam kết mang đến những giải pháp toàn diện từ lập kế hoạch chiến lược đến triển khai và tối ưu hóa chiến dịch, đảm bảo rằng bạn sẽ đạt được kết quả tốt nhất trong mọi hoạt động quảng cáo số.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MarketingService;
