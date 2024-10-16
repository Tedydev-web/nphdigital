import ServiceDetail from '../../../public/assets/imgs/service/detail/system/2.jpeg';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const SystemService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Cung cấp giải pháp CRM, ERP, HRM hiệu quả cho doanh nghiệp</h2>
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
								<p>Các hệ thống CRM (Quản lý quan hệ khách hàng), ERP (Hoạch định nguồn lực doanh nghiệp) và HRM (Quản lý nguồn nhân lực) ngày nay đã trở thành những công cụ không thể thiếu trong việc tối ưu hóa quy trình kinh doanh. Chúng tôi cam kết mang đến cho bạn những giải pháp chất lượng cao, giúp bạn nâng cao hiệu suất và giảm thiểu chi phí.</p>
								<p>Đội ngũ của chúng tôi không chỉ phát triển các hệ thống tùy chỉnh phù hợp với nhu cầu riêng của doanh nghiệp, mà còn hỗ trợ triển khai và đào tạo nhân viên sử dụng hiệu quả. Từ việc quản lý thông tin khách hàng đến tối ưu hóa quy trình làm việc và nâng cao sự hài lòng của nhân viên, dịch vụ của chúng tôi giúp bạn xây dựng một môi trường làm việc hiệu quả và bền vững trong kỷ nguyên số.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SystemService;
