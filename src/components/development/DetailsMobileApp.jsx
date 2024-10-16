import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/MobileApp/1.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsMobileApp = () => {
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
									Phát triển Mobile App
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi tự hào là đối tác phát triển ứng dụng di động chuyên nghiệp, cung cấp giải pháp toàn diện từ ý tưởng đến thực thi. Chúng tôi giúp các doanh nghiệp chuyển đổi số hiệu quả bằng cách tạo ra các ứng dụng di động tối ưu, mang lại giá trị thực tiễn và tạo dấu ấn thương hiệu trong mắt người dùng.</p>
									<p>Chúng tôi tuân thủ quy trình phát triển chuyên nghiệp từ nghiên cứu nhu cầu, thiết kế UI/UX, phát triển ứng dụng, đến kiểm thử và hỗ trợ sau triển khai. Với đội ngũ kỹ thuật giàu kinh nghiệm, chúng tôi đảm bảo mọi ứng dụng đều đáp ứng tiêu chuẩn cao nhất về chất lượng và hiệu suất.</p>
								</div>
								<ul>
									<li>+ Phát triển ứng dụng gốc cho iOS và Android với Swift, Kotlin, Java</li>
									<li>+ Phát triển ứng dụng đa nền tảng với Flutter, React Native</li>
									<li>+ Tích hợp API và dịch vụ backend</li>
									<li>+ Bảo mật ứng dụng với mã hóa và xác thực an toàn</li>
									<li>+ Tối ưu hiệu suất ứng dụng</li>
									<li>+ Hỗ trợ bảo trì và cập nhật liên tục</li>
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
							<div
								className="development__img"
								id="dev-2">
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

export default DetailsMobileApp;
