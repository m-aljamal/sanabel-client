import React from "react";
import Image from "next/image";
import { Container } from "../Container";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Swip from "../Swip";
import { imageBuilder } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h3: ({ children }) => (
      <h1 className="bg-primaryPurple w-fit p-1 text-lg md:text-xl">
        {children}
      </h1>
    ),
    h4: ({ children }) => (
      <h1 className="bg-lightPurple w-fit text-xl md:text-2xl p-1">
        {children}
      </h1>
    ),
    normal: ({ children }) => (
      <p className="text-primaryPurple bg-white w-fit p-1 text-md md:text-xl">
        {children}
      </p>
    ),
  },
};

const Hero = ({ heroImages }) => {
  const { locale } = useRouter();
  return (
    <Swip
      spaceBetween={10}
      slidesPerView={1}
      nextClass="swiper-next"
      prevClass="swiper-prev"
      arrowsStyle=" absolute right-0 left-0  z-30 flex justify-between items-center top-[40%] px-4"
    >
      {heroImages.map(({ _id, image, subtitle: { ar, en } }) => {
        return (
          <SwiperSlide key={_id}>
            <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-187px)]">
              <div
                className={clsx(
                  "text-white z-30 absolute  flex md:items-center items-end pb-5  h-full",
                  locale === "ar-SA"
                    ? "right-16 lg:right-[5%] xl:right-[15%]"
                    : "left-16 lg:left-[5%] xl:left-[15%]"
                )}
              >
                <Container>
                  <div
                    className="space-y-4 mt-2 md:mt-0"
                    style={{ direction: locale === "ar-SA" ? "rtl" : "ltr" }}
                  >
                    <PortableText
                      value={locale === "ar-SA" ? ar : en}
                      components={components}
                    />
                  </div>
                </Container>
              </div>
              <Image
                src={imageBuilder(image).url()}
                layout="fill"
                className=" w-full "
                objectFit="cover"
                priority
                quality={100}
              />
            </section>
          </SwiperSlide>
        );
      })}
    </Swip>
  );
};

export default Hero;
