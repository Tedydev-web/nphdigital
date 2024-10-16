import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/fanpage/1.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsFanpage = () => {
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
									Chăm sóc Fanpage
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>
										Tại <strong>NPH Digital</strong>, chúng tôi cung cấp dịch vụ chăm sóc Fanpage toàn diện và chuyên nghiệp, giúp doanh nghiệp của bạn tăng cường tương tác và xây dựng hình ảnh thương hiệu một cách nhất quán. Chúng tôi tạo nội dung phù hợp, tăng lượt tương tác, và đảm bảo rằng mỗi bài đăng trên Fanpage đều đem lại giá trị thực sự cho khách hàng mục tiêu.
									</p>
									<p>Dịch vụ chăm sóc Fanpage của chúng tôi bao gồm nghiên cứu đối tượng khách hàng, xây dựng kế hoạch nội dung chi tiết, và thực hiện các chiến lược marketing qua mạng xã hội. Chúng tôi hỗ trợ doanh nghiệp không chỉ tăng trưởng số lượng người theo dõi mà còn tối ưu hóa hiệu suất từ các chiến dịch quảng cáo trên Facebook.</p>
								</div>
								<ul>
									<li>+ Quản lý và tương tác với khách hàng trên Fanpage</li>
									<li>+ Xây dựng nội dung bài đăng hấp dẫn, phù hợp với từng đối tượng khách hàng</li>
									<li>+ Thiết kế hình ảnh, video chuyên nghiệp cho các bài đăng</li>
									<li>+ Chạy quảng cáo tối ưu ngân sách, tiếp cận đúng khách hàng tiềm năng</li>
									<li>+ Tư vấn và phát triển chiến lược Fanpage dài hạn</li>
									<li>+ Phân tích, báo cáo và cải thiện hiệu quả hoạt động của Fanpage</li>
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

export default DetailsFanpage;
