import Link from 'next/link';
import VideoBackground from '../VideoBackground';

const DesignStudioCTA = () => {
	return (
		<>
			<section
				className="cta__area-2"
				style={{ position: 'relative', overflow: 'hidden' }}>
				<VideoBackground videoSrc="https://cdn.cuberto.com/cb/footer/1.mp4" />

				<div className="container line pt-130 pb-120">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="cta__content-2">
								<p className="cta__sub-title-2 title-anim">Bạn đã có ý tưởng?</p>
								<h2 className="cta__title-2 title-anim">Hãy cùng nhau tạo ra những điều tuyệt vời!</h2>
								<div className="btn_wrapper">
									<Link
										href="/lien-he"
										className="wc-btn-pink btn-hover btn-item">
										<span></span>Liên hệ <br />
										với chúng tôi <i className="fa-solid fa-arrow-right"></i>
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

export default DesignStudioCTA;
