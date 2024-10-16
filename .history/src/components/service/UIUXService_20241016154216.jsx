import ServiceDetail from '../../../public/assets/imgs/service/detail/UXUI/2.jpg';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';

const UIUXService = () => {
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">Chúng tôi mang đến những giải pháp sáng tạo và đáng tin cậy nâng cao trải nghiệm người dùng.</h2>
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
								<p>Thiết kế UI/UX không chỉ đơn thuần là tạo ra giao diện đẹp mắt, mà còn là việc tối ưu hóa trải nghiệm người dùng nhằm mang đến sự hài lòng và hiệu quả cao nhất cho người sử dụng. Tại NPH Digital, chúng tôi hiểu rằng một sản phẩm thành công phải kết hợp hài hòa giữa thẩm mỹ và chức năng.</p>
								<p>Với đội ngũ thiết kế giàu kinh nghiệm và công nghệ tiên tiến, NPH Digital cam kết mang đến giải pháp thiết kế UI/UX chất lượng nhất, giúp doanh nghiệp của bạn phát triển bền vững trong thời đại số.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UIUXService;
