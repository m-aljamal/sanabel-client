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
    first: ({ children }) => (
      <h1 className="bg-primaryPurple w-fit py-1 px-2 text-lg md:text-xl font-bold">
        {children}
      </h1>
    ),
    second: ({ children }) => (
      <h1 className="bg-primaryPurple w-fit text-xl md:text-xl py-1 px-2">
        {children}
      </h1>
    ),
    hashtag: ({ children }) => (
      <p className="text-primaryPurple bg-white w-fit py-1 px-2 text-md md:text-xl">
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
      {heroImages.map(({ _id, image, heroText }) => {
        return (
          <SwiperSlide key={_id}>
            <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-187px)]">
              <div
                className={clsx(
                  "text-white z-30 absolute  flex md:items-center items-end pb-5  h-full",
                  locale === "ar"
                    ? "right-16 lg:right-[5%] xl:right-[15%]"
                    : "left-16 lg:left-[5%] xl:left-[15%]"
                )}
              >
                <Container>
                  <div
                    className="space-y-4 mt-2 md:mt-0"
                    style={{ direction: locale === "ar" ? "rtl" : "ltr" }}
                  >
                    <PortableText
                      value={heroText[locale]}
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
                lang="hero image"
              />
            </section>
          </SwiperSlide>
        );
      })}
    </Swip>
  );
};

export default Hero;
