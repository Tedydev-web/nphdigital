import Link from 'next/link';
import VideoBackground from '../VideoBackground';
import { useTranslation } from 'react-i18next';

const DesignStudioCTA = () => {
	const { t } = useTranslation('blog');

	return (
		<>
			<section
				className="cta__area-2"
				style={{ position: 'relative', overflow: 'hidden' }}>
				<VideoBackground videoSrc="https://res.cloudinary.com/tedydev/video/upload/v1730016118/nphdigital/1.mp4" />
				<div className="container line pt-130 pb-120">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="cta__content-2">
								<p className="cta__sub-title-2 title-anim">{t('DesignStudioCTA.title')}</p>
								<h2 className="cta__title-2 title-anim">{t('DesignStudioCTA.description')}</h2>
								<div className="btn_wrapper">
									<Link
										href="/lien-he"
										className="wc-btn-pink btn-hover btn-item">
										<span></span>
										{t('DesignStudioCTA.button.line1')} <br />
										{t('DesignStudioCTA.button.line2')} <i className="fa-solid fa-arrow-right"></i>
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
