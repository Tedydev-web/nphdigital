import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DesignStudioRoll = () => {
  return (
    <>
      <section className="roll__area-2">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Studio</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Strategy</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Branding</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Agency</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>typhography</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Design</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Element</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>DIgital SOlution</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Strategy</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Branding</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Agency</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>DIgital SOlution</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>typhography</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Design</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Element</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="roll__area-3">
        <div className="roll__slider">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            freeMode={true}
            centeredSlides={true}
            allowTouchMove={false}
            simulateTouch={false}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
            dir="rtl"
          >
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Development</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Studio</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Strategy</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Branding</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Agency</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>typhography</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Design</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Element</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>DIgital SOlution</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Strategy</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Branding</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Agency</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>DIgital SOlution</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>typhography</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Design</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Interaction</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="roll__slide">
                <h2>Element</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioRoll;
