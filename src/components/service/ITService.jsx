import ServiceDetail from '../../../public/assets/imgs/service/detail/IT/2.png';
import Shape6 from '../../../public/assets/imgs/icon/shape-6.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const ITService = () => {
	const { t } = useTranslation('serviceDetails');
	return (
		<>
			<section className="service__detail">
				<div className="container g-0 line pb-140">
					<div className="line-3"></div>
					<div className="row">
						<div className="col-xxl-12">
							<div className="sec-title-wrapper">
								<h2 className="sec-title title-anim">{t('thuePhongItNgoai.ITService.secTitle')}</h2>
							</div>
						</div>
						<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
							<div className="service__detail-circle">
								<span></span>
							</div>
						</div>
						<div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
							<div className="service__detail-img">
								<Image
									priority
									width={960}
									style={{ height: 'auto' }}
									src={ServiceDetail}
									alt="Service detail image"
								/>
								<Image
									priority
									width={51}
									style={{ height: 'auto' }}
									src={Shape6}
									alt="Service shape image"
									className="sd-shape"
								/>
							</div>
							<div className="service__detail-content">
								<p>{t('thuePhongItNgoai.ITService.p.1')}</p>
								<p>{t('thuePhongItNgoai.ITService.p.2')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ITService;
