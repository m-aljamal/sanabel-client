import { useRouter } from "next/router";
import React from "react";
import { SwiperSlide } from "swiper/react";
import LatestSwiperContainer from "../LatestSwiperContainer";
import Image from "next/image";
import clsx from "clsx";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import Link from "next/link";
const data = [
  {
    id: 1,
    slug: "news-1",
    date: "15-07-2022",
    image: "/images/news-1.jpg",
    link: "/",
    text: {
      "ar-SA": {
        title: "برنامج ذبح الاضاحي وتزيع لحومحا",
        location: "ريف حلب الشمالي",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذ والتجار تقديم عروض المناصات عبر هذه النافذة يستطيع المزودين والتجار تقديم عروض المناصات عبر هذه النافذة",
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
    slug: "news-2",
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
    slug: "news-3",
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
    slug: "news-4",
    link: "/",
    date: "15-07-2022",
    image: "/images/news-2.jpg",
    text: {
      "ar-SA": {
        title: "خبر 4",
        location: "ريف حلب الشمالي",
        description: "يستطيع الم هذه النافذة",
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
    slug: "news-5",
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
    slug: "news-6",
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
  return (
    <section>
      <LatestSwiperContainer
        sectionTitle="أخر الأخبار"
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          {data.slice(0, 3).map((item) => (
            <News key={item.id} {...item} />
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {data.slice(3, 6).map((item) => (
            <News key={item.id} {...item} />
          ))}
        </SwiperSlide>
      </LatestSwiperContainer>
    </section>
  );
};

export default LatestNews;

const News = ({ date, image, text, id, slug }) => {
  const { locale } = useRouter();
  const { title, location, description } = text[locale];
  return (
    <div
      className={clsx("bg-primaryWhite py-3  ")}
      style={{ direction: "rtl" }}
    >
      <Link href={`/news/${slug}`}>
        <a className="lg:flex   gap-4 ">
          <div className="relative flex-shrink-0  lg:w-44  h-40z   ">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="news"
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <h2 className="text-md text-primaryPurple font-medium">{title}</h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 ">
                <CalendarIcon className="w-4 h-4 text-primaryPurple" />
                <p className="text-sm">{date}</p>
              </div>
              <div className="flex gap-1 ">
                <LocationMarkerIcon className="w-4 h-4 text-primaryPurple" />
                <p className="text-sm">{location}</p>
              </div>
            </div>
            <p className="text-sm mt-1">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
