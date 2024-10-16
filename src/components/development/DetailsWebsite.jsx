import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/website/2.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsWebsite = () => {
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
									Thiết kế và Phát triển Website
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Chúng tôi cung cấp dịch vụ thiết kế và phát triển website chất lượng cao, giúp doanh nghiệp của bạn hiện diện mạnh mẽ hơn trên mạng. Mỗi website mà chúng tôi phát triển đều được thiết kế riêng biệt, phù hợp với nhu cầu và mong muốn của khách hàng.</p>
									<p>Chúng tôi cam kết sử dụng công nghệ tiên tiến nhất để tạo ra các trang web nhanh chóng, tối ưu hóa cho các thiết bị di động và thân thiện với người dùng. Với đội ngũ chuyên gia dày dạn kinh nghiệm, chúng tôi sẽ hỗ trợ bạn từ khâu lên ý tưởng cho đến khi website đi vào hoạt động.</p>
								</div>
								<ul>
									<li>+ Thiết kế UI/UX chuyên nghiệp</li>
									<li>+ Phát triển web ứng dụng động</li>
									<li>+ Tối ưu hóa SEO cho website</li>
									<li>+ Tích hợp hệ thống quản lý nội dung (CMS)</li>
									<li>+ Đảm bảo tính tương thích trên mọi thiết bị</li>
									<li>+ Hỗ trợ bảo trì và cập nhật website thường xuyên</li>
								</ul>
							</div>
						</div>
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
							<div className="development__img">
								<Image
									priority
									style={{ width: 'auto', height: 'auto' }}
									src={ThumbDev1}
									alt="Website Development Image"
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

export default DetailsWebsite;
