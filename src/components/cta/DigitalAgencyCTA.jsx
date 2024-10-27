import Link from 'next/link';
import VideoBackground from '../VideoBackground';
import { useTranslation } from 'react-i18next';

const DigitalAgencyCTA = () => {
	const { t } = useTranslation('home');
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
					height: '100vh',
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
						zIndex: -1,
					}}></canvas>
				<div className="container line pb-110">
					<div className="row">
						<div className="col-xxl-12">
							<div
								className="cta__content"
								style={{ textAlign: 'center' }}>
								<p className="cta__sub-title">{t('DigitalAgencyCTA.subTitle')}</p>
								<h2 className="cta__title title-anim">{t('DigitalAgencyCTA.title')}</h2>
								<div className="btn_wrapper">
									<Link
										href="/lien-he"
										className="wc-btn-primary btn-hover btn-item">
										<span></span>
										{t('DigitalAgencyCTA.button.line1')} <br />
										{t('DigitalAgencyCTA.button.line2')}
										<i className="fa-solid fa-arrow-right"></i>
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
