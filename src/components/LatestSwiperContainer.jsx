import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SwipArrows from "@/components/SwipArrows";
SwiperCore.use([Navigation]);

const LatestSwiperContainer = ({ children, sectionTitle, ...props }) => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <section>
      <div className="flex justify-between py-5 items-center ">
        <div>
          <h1 className="text-2xl">{sectionTitle}</h1>
          <div className=" space-y-[2px]">
            <div className="w-12 h-[1px]  bg-primaryPurple"></div>
            <div className="w-12 h-[1px]  bg-primaryPurple"></div>
          </div>
        </div>
        <SwipArrows
          arrowsStyle="flex space-x-2"
          nextClass="latest-next"
          prevClass="latest-prev"
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>

      <Swiper
        {...props}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 20000,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        dir="ltr"
        
      >
        <main className=" relative">{children}</main>
      </Swiper>
    </section>
  );
};

export default LatestSwiperContainer;
