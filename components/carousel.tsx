// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="relative h-full">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: false }}
        longSwipes={false}
        speed={700}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/imgs/img-${i}.jpg`}
              alt={`${"img" + i}`}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={`/imgs/img-${i}.jpg`}
              className="object-cover"
            />
          </SwiperSlide>
        )).sort(() => 0.5 - Math.random())}
      </Swiper>
    </div>
  );
}
