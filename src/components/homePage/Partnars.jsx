import React from "react";
import { TitleWithIcon } from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";

const Partnars = ({ partnersLogos }) => {
  const { ourPartnersText } = useText();
  return (
    <section className="py-10">
      <TitleWithIcon title={ourPartnersText} />
      <div className="py-8">
        <Swiper
          autoplay
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          dir="ltr"
          spaceBetween={10}
          slidesPerView={3}
        >
          {partnersLogos.map((logo) => (
            <SwiperSlide key={logo._id}>
              <div className="relative h-16">
                <Image
                  src={imageBuilder(logo.image).url()}
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
