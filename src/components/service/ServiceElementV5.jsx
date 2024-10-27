import animationCharCome from '@/lib/utils/animationCharCome';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import { useTranslation } from 'react-i18next';

const ServiceElementV5 = () => {
	const { t } = useTranslation('service');
	const charAnim = useRef();
	useEffect(() => {
		animationCharCome(charAnim.current);
	}, []);

	const serviceData = [
		{
			title: t('ServiceElementV5.service.mobileApp.title'),
			skills: [t('ServiceElementV5.service.mobileApp.item1'), t('ServiceElementV5.service.mobileApp.item2'), t('ServiceElementV5.service.mobileApp.item3')],
			slug: 'mobile-app',
		},
		{
			title: t('ServiceElementV5.service.web.title'),
			skills: [t('ServiceElementV5.service.web.item1'), t('ServiceElementV5.service.web.item2'), t('ServiceElementV5.service.web.item3')],
			slug: 'thiet-ke-website',
		},
		{
			title: t('ServiceElementV5.service.crmErpHrm.title'),
			skills: [t('ServiceElementV5.service.crmErpHrm.item1'), t('ServiceElementV5.service.crmErpHrm.item2'), t('ServiceElementV5.service.crmErpHrm.item3')],
			slug: 'crm-erp-hrm',
		},
		{
			title: t('ServiceElementV5.service.ads.title'),
			skills: [t('ServiceElementV5.service.ads.item1'), t('ServiceElementV5.service.ads.item2'), t('ServiceElementV5.service.ads.item3')],
			slug: 'quang-cao-so',
		},
		{
			title: t('ServiceElementV5.service.ai.title'),
			skills: [t('ServiceElementV5.service.ai.item1'), t('ServiceElementV5.service.ai.item2'), t('ServiceElementV5.service.ai.item3')],
			slug: 'lap-trinh-ai',
		},
		{
			title: t('ServiceElementV5.service.interaction.title'),
			skills: [t('ServiceElementV5.service.interaction.item1'), t('ServiceElementV5.service.interaction.item2'), t('ServiceElementV5.service.interaction.item3')],
			slug: 'tuong-tac-so',
		},
		{
			title: t('ServiceElementV5.service.fanpage.title'),
			skills: [t('ServiceElementV5.service.fanpage.item1'), t('ServiceElementV5.service.fanpage.item2'), t('ServiceElementV5.service.fanpage.item3')],
			slug: 'cham-soc-fanpage',
		},
		{
			title: t('ServiceElementV5.service.it.title'),
			skills: [t('ServiceElementV5.service.it.item1'), t('ServiceElementV5.service.it.item2'), t('ServiceElementV5.service.it.item3')],
			slug: 'thue-phong-it-ngoai',
		},
		{
			title: t('ServiceElementV5.service.uiUx.title'),
			skills: [t('ServiceElementV5.service.uiUx.item1'), t('ServiceElementV5.service.uiUx.item2'), t('ServiceElementV5.service.uiUx.item3')],
			slug: 'thiet-ke-ui-ux',
		},
	];

	const swiperParams = {
		modules: [Autoplay],
		spaceBetween: 30,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 5000,
		loop: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	};

	return (
		<div>
			<section className="portfolio__service service-v5 pt-140 pb-140">
				<div className="container">
					<div className="row">
						<div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
							<h2
								className="sec-title animation__char_come"
								ref={charAnim}>
								{t('ServiceElementV5.hero.title')}
							</h2>
						</div>
						<div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
							<div className="sec-text">
								<p>{t('ServiceElementV5.hero.description')}</p>
							</div>
						</div>
					</div>

					<div className="portfolio__service-list">
						{/* First Swiper - Left to Right */}
						<Swiper
							{...swiperParams}
							className="mb-4">
							{serviceData.concat(serviceData).map((service, index) => (
								<SwiperSlide key={index}>
									<div className="portfolio__service-item">
										<Link href={`${service.slug}`}>
											<h3 className="ps-title">
												{service.title.split(' ').map((word, i) => (
													<React.Fragment key={i}>
														{word.split('').map((char, j) => (
															<span key={j}>{char}</span>
														))}
														{i !== service.title.split(' ').length - 1 && ' '}
													</React.Fragment>
												))}
											</h3>
											<ul>
												{service.skills.map((skill, i) => (
													<li key={i}>+ {skill}</li>
												))}
											</ul>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Second Swiper - Right to Left */}
						<Swiper
							{...swiperParams}
							autoplay={{ ...swiperParams.autoplay, reverseDirection: true }}>
							{serviceData.concat(serviceData).map((service, index) => (
								<SwiperSlide key={index}>
									<div className="portfolio__service-item">
										<Link href={`/${service.slug}`}>
											<h3 className="ps-title">
												{service.title.split(' ').map((word, i) => (
													<React.Fragment key={i}>
														{word.split('').map((char, j) => (
															<span key={j}>{char}</span>
														))}
														{i !== service.title.split(' ').length - 1 && ' '}
													</React.Fragment>
												))}
											</h3>
											<ul>
												{service.skills.map((skill, i) => (
													<li key={i}>+ {skill}</li>
												))}
											</ul>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
			<style jsx>{`
				.portfolio__service-item {
					height: 250px;
					overflow: hidden;
				}
			`}</style>
		</div>
	);
};

export default ServiceElementV5;
