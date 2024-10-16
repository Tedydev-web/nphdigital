import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/maketing/1.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsMarketing = () => {
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
									Quảng cáo số
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ quảng cáo số chuyên nghiệp giúp nâng cao nhận diện thương hiệu và thúc đẩy doanh thu.</p>
									<p>Mỗi chiến dịch quảng cáo số của chúng tôi đều được thiết kế đặc thù nhằm tối ưu hóa lợi ích cho khách hàng, sử dụng các giải pháp công nghệ tiên tiến nhất.</p>
								</div>
								<ul>
									<li>+ Quảng cáo Google Ads</li>
									<li>+ Quảng cáo Facebook Ads</li>
									<li>+ Quảng cáo trên mạng xã hội</li>
									<li>+ SEO & Tối ưu hóa từ khóa</li>
									<li>+ Phân tích dữ liệu & Đo lường hiệu quả</li>
									<li>+ Tư vấn chiến lược Digital Marketing</li>
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

export default DetailsMarketing;
