import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Title } from "../Title";
import { imageBuilder } from "@/lib/sanity";

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

const News = ({ title, slug, newDate, location, shortDescription, image }) => {
  const { locale } = useRouter();

  return (
    <section>
      <Link href={`/news/${slug.current}`}>
        <a className="lg:flex gap-4">
          <div className="relative flex-shrink-0  lg:w-44  lg:h-36 h-60   ">
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
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 ">
                <CalendarIcon className="w-4 h-4 text-primaryPurple" />
                <p className="text-sm">
                  {new Date(newDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-1 ">
                <LocationMarkerIcon className="w-4 h-4 text-primaryPurple" />
                <p className="text-sm">{location.title[locale]}</p>
              </div>
            </div>
            <p className="text-sm mt-1">{shortDescription[locale]}</p>
          </div>
        </a>
      </Link>
    </section>
  );
};
