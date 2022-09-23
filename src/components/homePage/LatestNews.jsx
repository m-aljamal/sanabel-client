import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Title } from "../Title";
import { imageBuilder } from "@/lib/sanity";
import DateLocation from "../DateLocation";

const LatestNews = ({ newsData }) => {
  return (
    <section>
      <div className="py-5">
        <Title title="أخر الأخبار" />
      </div>

      <div className="space-y-5">
        {newsData.map((news) => (
          <News key={news._id} {...news} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;

const News = ({ title, newDate, location, shortDescription, image }) => {
  const { locale } = useRouter();

  return (
    <section>
      <a className=" grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="relative flex-shrink-0      h-52  ">
          <Image
            src={imageBuilder(image).url()}
            layout="fill"
            objectFit="cover"
            alt="news"
            className="w-full h-full"
          />
        </div>
        <div className="w-full mt-4 lg:mt-0">
          <h2 className="text-md text-primaryPurple font-medium ">
            {title[locale]}
          </h2>
          <DateLocation date={newDate} location={location.title[locale]} />
          <p className="text-sm mt-1">{shortDescription[locale]}</p>
        </div>
      </a>
    </section>
  );
};
