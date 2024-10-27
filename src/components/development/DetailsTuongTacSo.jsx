import { useEffect, useRef } from 'react';
import ThumbDev1 from '../../../public/assets/imgs/service/detail/tuongtacso/1.png';
import Image from 'next/image';
import animationCharCome from '@/lib/utils/animationCharCome';
import { useTranslation } from 'react-i18next';

const DetailsTuongTacSo = () => {
	const { t } = useTranslation('serviceDetails');
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
									{t('tuongTacSo.DetailsTuongTacSo.secTitle')}
								</h2>
							</div>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
							<div className="development__wrapper">
								<div className="development__content">
									<p>{t('tuongTacSo.DetailsTuongTacSo.p.1')}</p>
									<p>{t('tuongTacSo.DetailsTuongTacSo.p.2')}</p>
								</div>
								<ul>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.1')}</li>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.2')}</li>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.3')}</li>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.4')}</li>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.5')}</li>
									<li>{t('tuongTacSo.DetailsTuongTacSo.ul.1.li.6')}</li>
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

export default DetailsTuongTacSo;
