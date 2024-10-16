import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/system/2.jpeg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsSystem = () => {
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
									Dịch vụ CRM, ERP, HRM
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp giải pháp tích hợp CRM, ERP và HRM giúp doanh nghiệp tối ưu hóa quy trình làm việc và nâng cao hiệu quả quản lý. Các hệ thống này không chỉ đơn thuần là phần mềm, mà còn là công cụ mạnh mẽ hỗ trợ doanh nghiệp trong việc quản lý mối quan hệ khách hàng, tài nguyên doanh nghiệp và nhân sự một cách đồng bộ và hiệu quả.</p>
									<p>Quy trình triển khai dịch vụ của chúng tôi bao gồm: tư vấn, phân tích nhu cầu, thiết kế giải pháp tùy chỉnh, triển khai hệ thống, đào tạo nhân viên và hỗ trợ sau triển khai. Chúng tôi cam kết mang lại giải pháp chất lượng cao với sự hỗ trợ tận tâm từ đội ngũ chuyên gia giàu kinh nghiệm.</p>
								</div>
								<ul>
									<li>+ Hỗ trợ tuỳ chỉnh hệ thống phù hợp với nhu cầu cụ thể của doanh nghiệp.</li>
									<li>+ Quản lý mối quan hệ khách hàng (CRM) để tối ưu hóa quy trình bán hàng và chăm sóc khách hàng.</li>
									<li>+ Bảo trì và cập nhật hệ thống liên tục để đảm bảo hiệu suất tối ưu.</li>
									<li>+ Quản lý tài nguyên doanh nghiệp (ERP) giúp theo dõi và quản lý tất cả các hoạt động nội bộ.</li>
									{/* <li>+ Tích hợp các công nghệ hiện đại như AI và phân tích dữ liệu để cải thiện ra quyết định.</li>
									<li>+ Quản lý nguồn nhân lực (HRM) với các tính năng theo dõi nhân sự, chấm công, và tuyển dụng.</li> */}
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

export default DetailsSystem;
