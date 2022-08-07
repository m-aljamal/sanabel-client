import React from "react";
import Image from "next/image";
import { Container } from "../Container";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Swip from "../Swip";

const images = [
  {
    image: "/images/photo-01.jpg",
    id: 1,
    text: {
      "ar-SA": {
        title: "مدرسة الابداع النموزجية",
        subTitle: "جانب من الدروس اليومية",
        hashtag: "#الشمال-السوري",
      },
      "en-US": {
        title: "ensccddddddddddddddddddd",
        subTitle: "enrghffffffffffffffff",
        hashtag: "#endffdddddddddddd",
      },
    },
  },
  {
    id: 2,
    image: "/images/photo-09.jpg",
    text: {
      "ar-SA": {
        title: "مدرسة الابداع النموزجية",
        subTitle: "جانب من الدروس اليومية",
        hashtag: "#الشمال-السوري",
      },
      "en-US": {
        title: "en",
        subTitle: "en",
        hashtag: "#en",
      },
    },
  },
];

const Hero = () => {
  const { locale } = useRouter();

  return (
    <Swip
      spaceBetween={10}
      slidesPerView={1}
      nextClass="swiper-next"
      prevClass="swiper-prev"
      arrowsStyle=" absolute right-0 left-0  z-30 flex justify-between items-center top-[40%] px-4"
    >
      {images.map(({ image, id, text }) => {
        const { title, subTitle, hashtag } = text[locale];
        return (
          <SwiperSlide key={id}>
            <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-187px)]">
              <div
                className={clsx(
                  "text-white z-30 absolute  flex items-center h-full",
                  locale === "ar-SA"
                    ? "right-16 lg:right-[5%] xl:right-[15%]"
                    : "left-16 lg:left-[5%] xl:left-[15%]"
                )}
              >
                <Container>
                  <div
                    className="space-y-4 mt-2 md:mt-0 "
                    style={{ direction: locale === "ar-SA" ? "rtl" : "ltr" }}
                  >
                    <h1 className="bg-primaryPurple w-fit p-1 text-lg md:text-xl">
                      {title}
                    </h1>
                    <h2 className=" bg-lighterPurple w-fit text-xl md:text-2xl p-1">
                      {subTitle}
                    </h2>
                    <h2 className="text-primaryPurple bg-white w-fit p-1 text-md md:text-xl">
                      {hashtag}
                    </h2>
                  </div>
                </Container>
              </div>
              <Image
                src={image}
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
