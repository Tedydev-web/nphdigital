import ServiceDetail from '../../../public/assets/imgs/service/detail/MobileApp/2.jpeg';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const MobileAppDetailsService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Chúng tôi không chỉ phát triển ứng dụng di động, mà còn mang đến những giải pháp sáng tạo và đáng tin cậy.</h2>
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
								<p>Ứng dụng di động ngày nay không chỉ là công cụ kết nối, mà còn là cầu nối giữa doanh nghiệp và khách hàng. Chúng tôi xây dựng những sản phẩm giúp bạn tiếp cận thị trường mục tiêu hiệu quả hơn.</p>
								<p>Từ phát triển ứng dụng đa nền tảng đến tối ưu hóa hiệu năng và trải nghiệm người dùng, chúng tôi cam kết cung cấp giải pháp chất lượng cao nhất, giúp bạn phát triển mạnh mẽ trong kỷ nguyên số.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MobileAppDetailsService;
