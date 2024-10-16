import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/IT/1.jpeg';

import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsIT = () => {
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);
	return (
		<>
			<section className="development__area">
				<div className="container g-0 line pt-130 pb-150">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
							<div className="sec-title-wrapper">
								<h2
									className="sec-title animation__char_come"
									ref={charAnim}>
									Cho thuê phòng IT ngoài
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ cho thuê phòng IT ngoài với tiêu chuẩn chất lượng cao, giúp các doanh nghiệp tối ưu hóa chi phí hoạt động và nâng cao hiệu quả làm việc. Các phòng IT được thiết kế hiện đại và tiện nghi, phục vụ cho nhu cầu làm việc, tổ chức sự kiện và đào tạo.</p>
									<p>Với sự am hiểu sâu sắc về nhu cầu của các doanh nghiệp, chúng tôi cam kết cung cấp môi trường làm việc linh hoạt và sáng tạo. Khách hàng sẽ được hưởng lợi từ các giải pháp kỹ thuật tiên tiến, trang thiết bị hiện đại và đội ngũ nhân viên hỗ trợ chuyên nghiệp.</p>
								</div>
								<ul>
									<li>+ Hỗ trợ kỹ thuật 24/7 từ đội ngũ chuyên gia IT.</li>
									<li>+ Phòng làm việc đầy đủ tiện nghi, đáp ứng tiêu chuẩn cao về chất lượng.</li>
									<li>+ Kết nối internet tốc độ cao và bảo mật thông tin tuyệt đối.</li>
									<li>+ Dịch vụ linh hoạt, cho phép thuê theo giờ, ngày hoặc tháng tùy theo nhu cầu.</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
							<div className="development__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev1}
									alt="Development Image"
									data-speed="auto"
								/>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
							<div className="development__img">
								<video
									src="/assets/imgs/service/detail/dev-2.webm"
									playsInline
									autoPlay
									loop
									muted
									style={{ width: '150%', height: '150%' }}
									data-speed="0.3"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DetailsIT;
