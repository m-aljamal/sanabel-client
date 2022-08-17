import React from "react";
import { TitleWithIcon } from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
const logos = [
  "/placeHolder/partners-logo-02.jpg",
  "/placeHolder/partners-logo-03.jpg",
  "/placeHolder/partners-logo-04.jpg",
  "/placeHolder/partners-logo-05.jpg",
  "/placeHolder/partners-logo-06.jpg",
  "/placeHolder/partners-logo-07.jpg",
];

const Partnars = () => {
  return (
    <section className="py-10">
      <TitleWithIcon title="شركاؤنا في العمل الإنساني" />
      <div className="py-8">
        <Swiper
          autoplay
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          dir="ltr"
          spaceBetween={10}
          slidesPerView={3}
          // breakpoints={{
          //   320:{
          //     slidesPerView: 2,
          //   },
          //   640: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //   },
          // }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo}>
              <div className="relative h-14">
                <Image
                  src={logo}
                  layout="fill"
                  objectFit="contain"
                  lang="partner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partnars;
