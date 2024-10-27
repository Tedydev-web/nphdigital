import { FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const DigitalAgencyRoll = () => {
	const { t } = useTranslation('home');
	const words = t('DigitalAgencyRoll.words', { returnObjects: true });

	return (
		<>
			<section className="roll__area">
				<div className="roll__slider">
					<Swiper
						modules={[FreeMode, Autoplay]}
						spaceBetween={0}
						slidesPerView={1}
						freeMode={true}
						loop={true}
						centeredSlides={true}
						allowTouchMove={false}
						speed={2000}
						autoplay={{
							delay: 1,
							disableOnInteraction: true,
						}}
						breakpoints={{
							640: { slidesPerView: 3 },
							800: { slidesPerView: 3 },
							1024: { slidesPerView: 4 },
							1300: { slidesPerView: 5 },
							1900: { slidesPerView: 8 },
						}}>
						{words.map((word, index) => (
							<SwiperSlide key={index}>
								<div className="roll__slide">
									<h2>{word}</h2>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default DigitalAgencyRoll;
