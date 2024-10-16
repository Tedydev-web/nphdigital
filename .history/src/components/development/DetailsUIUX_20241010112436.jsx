import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/UXUI/2.jpg';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';

const DetailsUIUX = () => {
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
									Thiết kế UI/UX
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>Tại NPH Digital, chúng tôi cung cấp dịch vụ thiết kế UI/UX chuyên nghiệp, tập trung vào việc tạo ra trải nghiệm người dùng hấp dẫn và hiệu quả. Chúng tôi hiểu rằng một thiết kế tốt không chỉ thu hút người dùng mà còn phải tối ưu hóa quy trình tương tác với sản phẩm.</p>
									<p>Quy trình thiết kế của chúng tôi bắt đầu từ việc nghiên cứu người dùng và phân tích thị trường để hiểu rõ nhu cầu và hành vi của khách hàng. Sau đó, chúng tôi phát triển các mẫu thiết kế, tiến hành thử nghiệm và nhận phản hồi để cải thiện sản phẩm. Đội ngũ thiết kế của chúng tôi sử dụng các công cụ hiện đại để tạo ra các sản phẩm chất lượng cao, đảm bảo rằng mỗi giao diện đều thân thiện và dễ sử dụng.</p>
								</div>
								<ul>
									<li>+ Nghiên cứu người dùng, phân tích đối thủ cạnh tranh</li>
									<li>+ Thiết kế giao diện người dùng (UI) đẹp mắt và trực quan</li>
									<li>+ Xây dựng prototype và wireframe cho sản phẩm</li>
									<li>+ Tối ưu hóa trải nghiệm người dùng (UX) thông qua thử nghiệm A/B</li>
									<li>+ Thiết kế responsive cho mọi thiết bị</li>
									<li>+ Hỗ trợ bảo trì và cập nhật thiết kế theo phản hồi người dùng</li>
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

export default DetailsUIUX;
