import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SwipArrows from "./homePage/SwipArrows";
SwiperCore.use([Navigation]);
const Swip = ({ children, nextClass, prevClass, arrowsStyle, ...props }) => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
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
      autoplay
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Autoplay, EffectFade]}
      effect="fade"
      dir="ltr"
    >
      <main className=" relative">{children}</main>

      <SwipArrows
        arrowsStyle={arrowsStyle}
        prevClass={prevClass}
        nextClass={nextClass}
        prevRef={prevRef}
        nextRef={nextRef}
      />
    </Swiper>
  );
};

export default Swip;
