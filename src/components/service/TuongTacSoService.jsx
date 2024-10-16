import ServiceDetail from '../../../public/assets/imgs/service/detail/tuongtacso/2.webp';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const TuongTacSoService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Giải pháp tương tác số toàn diện giúp doanh nghiệp kết nối và phát triển mạnh mẽ trong thời đại số.</h2>
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
								<p>Tương tác số là yếu tố quan trọng giúp doanh nghiệp tiếp cận khách hàng một cách sáng tạo và hiệu quả. Chúng tôi cung cấp các giải pháp từ thiết kế tương tác đến tích hợp công nghệ hiện đại, đảm bảo sự tương tác giữa doanh nghiệp và khách hàng diễn ra mượt mà và tối ưu.</p>
								<p>Với khả năng phát triển ứng dụng đa nền tảng, tích hợp công cụ tự động hóa, và xây dựng trải nghiệm người dùng hoàn hảo, chúng tôi giúp doanh nghiệp không chỉ duy trì mối quan hệ với khách hàng hiện tại mà còn thu hút thêm những khách hàng tiềm năng mới.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TuongTacSoService;
