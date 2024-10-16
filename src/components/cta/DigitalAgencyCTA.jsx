import Link from 'next/link';
import VideoBackground from '../VideoBackground';

const DigitalAgencyCTA = () => {
	return (
		<>
			<section
				className="cta__area"
				style={{
					position: 'relative',
					overflow: 'hidden',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh', // Đảm bảo chiều cao toàn màn hình
				}}>
				<VideoBackground
					videoSrc="/assets/video/bg-cta.mp4"
					style={{ display: 'none' }}
				/>
				<canvas
					data-engine="three.js r167"
					width="2549"
					height="960"
					style={{
						display: 'block',
						width: '2549px',
						height: '960px',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: -1, // Đảm bảo canvas nằm phía sau nội dung
					}}></canvas>
				<div className="container line pb-110">
					<div className="row">
						<div className="col-xxl-12">
							<div
								className="cta__content"
								style={{ textAlign: 'center' }}>
								<p className="cta__sub-title">Liên hệ</p>
								<h2 className="cta__title title-anim">Chúng tôi rất vui khi được lắng nghe những ý tưởng của bạn</h2>
								<div className="btn_wrapper">
									<Link
										href="/lien-he"
										className="wc-btn-primary btn-hover btn-item">
										<span></span>Liên hệ với <br /> chúng tôi <i className="fa-solid fa-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyCTA;
