import ServiceDetail from '../../../public/assets/imgs/service/detail/IT/2.png';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const ITService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Cho thuê phòng IT ngoài - Giải pháp hiệu quả cho doanh nghiệp của bạn</h2>
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
								<p>Dịch vụ Cho thuê phòng IT ngoài của NPH Digital cung cấp không gian làm việc linh hoạt và tiện nghi, được thiết kế để hỗ trợ tối đa cho các doanh nghiệp trong quá trình phát triển. Chúng tôi hiểu rằng môi trường làm việc ảnh hưởng lớn đến hiệu suất làm việc của nhân viên, vì vậy chúng tôi tạo ra những không gian thích hợp nhất.</p>
								<p>Với cơ sở hạ tầng công nghệ tiên tiến và các tiện ích đi kèm, chúng tôi cam kết mang đến cho bạn không chỉ một không gian làm việc mà còn là một giải pháp giúp bạn tiếp cận và phục vụ khách hàng tốt hơn. Hãy để chúng tôi hỗ trợ bạn trong việc xây dựng môi trường làm việc tối ưu, giúp doanh nghiệp bạn phát triển bền vững trong kỷ nguyên số.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ITService;
