import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SwipArrows from "@/components/homePage/SwipArrows";
SwiperCore.use([Navigation]);

const data = [
  {
    id: 1,
    date: "15-07-2022",
    image: "/images/news-1.jpg",
    link: "/",
    text: {
      "ar-SA": {
        title: "برنامج ذبح الاضاحي وتزيع لحومحا",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
  {
    id: 2,
    link: "/",
    date: "15-07-2022",
    image: "/images/news-2.jpg",
    text: {
      "ar-SA": {
        title: "خبر 2",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
  {
    id: 3,
    link: "/",
    date: "15-07-2022",
    image: "/images/news-3.jpg",
    text: {
      "ar-SA": {
        title: "خبر 3",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
  {
    id: 4,
    link: "/",
    date: "15-07-2022",
    image: "/images/news-2.jpg",
    text: {
      "ar-SA": {
        title: "خبر 4",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
  {
    id: 5,
    link: "/",
    date: "15-07-2022",
    image: "/images/news-3.jpg",
    text: {
      "ar-SA": {
        title: "خبر 5",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
  {
    id: 6,
    link: "/",
    date: "15-07-2022",
    image: "/images/news-1.jpg",
    text: {
      "ar-SA": {
        title: "خبر 6",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
      },
      "en-US": {
        title: "Tender for the purchase of agricultural products",
        location: "Riyad al-Shamal",
        description:
          "The suppliers and traders can offer their offers through this window",
      },
    },
  },
];

const LatestNews = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <section>
      <div className="flex justify-between py-5 items-center">
        <h1>أخر الأخبار</h1>
        <SwipArrows
          arrowsStyle=" flex space-x-2"
          nextClass="latest-next"
          prevClass="latest-prev"
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
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
        <main className=" relative">
          <SwiperSlide>
            <div className="bg-red-200 ">1</div>
            <div className="bg-red-200 ">2</div>
            <div className="bg-red-200 ">3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-200 ">4</div>
            <div className="bg-red-200 ">5</div>
            <div className="bg-red-200 ">6</div>
          </SwiperSlide>
        </main>
      </Swiper>
    </section>
  );
};

export default LatestNews;

const News = ({ date, image, text }) => {
  const { locale } = useRouter();
  const { title, location, description } = text[locale];
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
