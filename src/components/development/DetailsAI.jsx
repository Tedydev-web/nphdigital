import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/AI/1.png';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsAI = () => {
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
									Lập trình AI và tự động hóa
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ lập trình AI và tự động hóa tiên tiến, giúp doanh nghiệp tối ưu hóa quy trình làm việc và nâng cao hiệu suất. Chúng tôi tập trung vào việc phát triển các giải pháp thông minh, từ phân tích dữ liệu đến tự động hóa quy trình kinh doanh, nhằm mang lại giá trị tối đa cho khách hàng.</p>
									<p>Quy trình lập trình AI của chúng tôi bao gồm: phân tích yêu cầu, thiết kế giải pháp, phát triển mô hình AI, kiểm thử và triển khai. Đội ngũ kỹ sư chuyên nghiệp của chúng tôi cam kết đảm bảo rằng mỗi dự án đều đáp ứng các tiêu chuẩn chất lượng cao và tính ứng dụng thực tiễn.</p>
								</div>
								<ul>
									<li>+ Hỗ trợ bảo trì và cập nhật liên tục các giải pháp AI</li>
									<li>+ Phát triển các mô hình học máy (Machine Learning) và học sâu (Deep Learning)</li>
									<li>+ Tự động hóa quy trình kinh doanh (RPA) để giảm thiểu công việc thủ công</li>
									<li>+ Cung cấp giải pháp chatbot và trợ lý ảo để nâng cao trải nghiệm khách hàng</li>
									<li>+ Phân tích dữ liệu lớn (Big Data) để đưa ra các quyết định thông minh hơn</li>
									<li>+ Tích hợp AI vào các hệ thống hiện có để tối ưu hóa hiệu suất</li>
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

export default DetailsAI;
