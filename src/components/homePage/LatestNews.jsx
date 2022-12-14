import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Title } from "../Title";
import { imageBuilder } from "@/lib/sanity";
import DateLocation from "../DateLocation";
import { useText } from "@/constant/useText";

const LatestNews = ({ newsData }) => {
  const { latestNewsText } = useText();
  return (
    <section>
      <div className="py-5">
        <Title title={latestNewsText} />
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
        <div className="w-full mt-4 lg:mt-0 space-y-2">
          <h2 className="text-md text-primaryPurple font-bold  ">
            {title[locale]}
          </h2>
          <DateLocation date={newDate} location={location.title[locale]} />
          <p className="text-md mt-1 text-">
            {shortDescription[locale]}
          </p>
        </div>
      </a>
    </section>
  );
};
