import { useTranslation } from 'react-i18next';

const TuongTacSoWorkflow = () => {
	const { t } = useTranslation('serviceDetails');

	return (
		<>
			<section className="workflow__area-6">
				<div className="container g-0 line pb-130">
					<div className="line-3"></div>
					<div className="workflow__wrapper-6">
						<div className="row">
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('tuongTacSo.tuongTacSoWorkflow.1.title.line1')}</span> <br />
										<span>{t('tuongTacSo.tuongTacSoWorkflow.1.title.line2')}</span>
									</h6>
									<p>{t('tuongTacSo.tuongTacSoWorkflow.1.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">{t('tuongTacSo.tuongTacSoWorkflow.2.title')}</h6>
									<p>{t('tuongTacSo.tuongTacSoWorkflow.2.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('tuongTacSo.tuongTacSoWorkflow.3.title.line1')}</span> <br />
										<span>{t('tuongTacSo.tuongTacSoWorkflow.3.title.line2')}</span>
									</h6>
									<p>{t('tuongTacSo.tuongTacSoWorkflow.3.description')}</p>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
								<div className="workflow__slide-6">
									<h6 className="workflow__title-6">
										<span>{t('tuongTacSo.tuongTacSoWorkflow.4.title.line1')}</span> <br />
										<span>{t('tuongTacSo.tuongTacSoWorkflow.4.title.line2')}</span>
									</h6>
									<p>{t('tuongTacSo.tuongTacSoWorkflow.4.description')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TuongTacSoWorkflow;
