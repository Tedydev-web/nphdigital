import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/tuongtacso/1.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsTuongTacSo = () => {
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
									Tương tác số
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Chúng tôi cung cấp dịch vụ tương tác số, giúp doanh nghiệp chuyển đổi số và tạo ra trải nghiệm tương tác phong phú với người dùng thông qua các nền tảng kỹ thuật số. Dịch vụ này tập trung vào việc nâng cao khả năng kết nối giữa thương hiệu và khách hàng thông qua các công cụ, ứng dụng và chiến lược tương tác số.</p>
									<p>Với sự kết hợp giữa công nghệ hiện đại và sáng tạo, chúng tôi phát triển các giải pháp tương tác giúp doanh nghiệp tiếp cận khách hàng một cách trực tiếp và hiệu quả hơn. Chúng tôi cam kết mang đến sự khác biệt trong từng dự án, từ việc phát triển các ứng dụng tương tác đến tích hợp các công cụ hỗ trợ phân tích hành vi người dùng.</p>
								</div>
								<ul>
									<li>+ Xây dựng chiến lược tương tác số toàn diện</li>
									<li>+ Phát triển các nền tảng tương tác số cho doanh nghiệp</li>
									<li>+ Hỗ trợ bảo trì và nâng cấp dịch vụ tương tác liên tục</li>
									<li>+ Tối ưu hóa trải nghiệm người dùng trên các thiết bị di động</li>
									<li>+ Đảm bảo bảo mật và tính riêng tư cho người dùng</li>
									<li>+ Tích hợp các công cụ phân tích hành vi và dữ liệu khách hàng</li>
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

export default DetailsTuongTacSo;
