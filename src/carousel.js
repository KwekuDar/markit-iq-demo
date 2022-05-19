import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-coverflow"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper'
import 'swiper/css';
import land1 from "./components/Landing/public/img/land1.jpg"
import land2 from "./components/Landing/public/img/landing-page-design-illustration.png"
import land3 from "./components/Landing/public/img/Preview.jpg"
import land4 from "./components/Landing/public/img/carousel/1.png"
import "./components/Landing/public/css/carousel.css"

export default function Carousel() {
    return (
      <div className="container-carousel">

        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination={{
            clickable: true
          }}
          autoplay={{delay: 2000, disableOnInteraction: false,}}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={land1} alt="page"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={land2} alt="page"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={land3} alt="page"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={land4} alt="page"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={land2} alt="page"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={land3} alt="page"/>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }