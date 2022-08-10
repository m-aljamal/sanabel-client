import React from "react";
import LatestSwiperContainer from "../LatestSwiperContainer";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonLink } from "../Button";

const data = [
  {
    id: 1,
    total: 15000,
    paid: 5000,
    image: "/images/case-01.jpg",
    text: {
      "ar-SA": {
        title: "الحالات الأكثر شيوعاً",
        description:
          "تسهيل أداء نسك الهدي والفدية على حجاج بيت الله الحرام، وأداء نسك الأضحية والصدقة نيابة عنهم وعمّن يرغب في ذلك من عموم المسلمين، وتوزيع اللحوم على مستحقيها.",
      },
      "en-US": {
        title: "Most cases",
        description: "this is english text",
      },
    },
  },
  {
    id: 2,
    total: 20000,
    paid: 8000,
    image: "/images/case-01.jpg",
    text: {
      "ar-SA": {
        title: "الحالات الأكثر شيوعاً 1",
        description:
          "تسهيل أداء نسك الهدي والفدية على حجاج بيت الله الحرام، وأداء نسك الأضحية والصدقة نيابة عنهم وعمّن يرغب في ذلك من عموم المسلمين، وتوزيع اللحوم على مستحقيها.",
      },
      "en-US": {
        title: "Most cases",
        description: "this is english text",
      },
    },
  },
  {
    id: 3,
    total: 6000,
    paid: 5900,
    image: "/images/case-01.jpg",
    text: {
      "ar-SA": {
        title: "الحالات الأكثر شيوعاً 2",
        description:
          "تسهيل أداء نسك الهدي والفدية على حجاج بيت الله الحرام، وأداء نسك الأضحية والصدقة نيابة عنهم وعمّن يرغب في ذلك من عموم المسلمين، وتوزيع اللحوم على مستحقيها.",
      },
      "en-US": {
        title: "Most cases",
        description: "this is english text",
      },
    },
  },
];

const MostCases = () => {
  return (
    <div className="">
      <LatestSwiperContainer
        sectionTitle="أهم الحالات"
        spaceBetween={20}
        slidesPerView={1}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Case key={item.id} {...item} />
          </SwiperSlide>
        ))}
      </LatestSwiperContainer>
    </div>
  );
};

export default MostCases;

const Case = ({ id, total, paid, image, text }) => {
  const { locale } = useRouter();
  const { title, description } = text[locale];
  return (
    <div className="bg-primaryWhite flex  gap-5" style={{ direction: "rtl" }}>
      <div className=" relative h-60  w-1/2 ">
        <Image src={image} layout="fill" objectFit="cover" />
        <div className=" absolute z-50 text-white bottom-0   right-0 left-0 ">
          <p className="text-primaryPurple">Total</p>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-primaryPurple text-lg">{title}</h2>
        <p className="text-sm">{description}</p>
        
      </div>
    </div>
  );
};
