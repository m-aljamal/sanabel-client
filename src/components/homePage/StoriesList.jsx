import React from "react";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../Container";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";

const StoriesList = ({ successStories }) => {
  const { successStoryText } = useText();
  return (
    <section className=" mt-10 ">
      <TitleWithIcon title={successStoryText} />
      <Container>
        <div className=" lg:grid grid-cols-3 my-10 border border-primaryPurple">
          {successStories.map((storey) => (
            <SeccessStory storey={storey} key={storey._id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const SeccessStory = ({ storey }) => {
  const { locale } = useRouter();
  const {
    title,
    info: { date, mainImage, shortDescription, location },
  } = storey;
  return (
    <div
      className={`flex lg:even:flex-col lg:flex-col-reverse flex-col sm:flex-row  sm:even:flex-row-reverse `}
    >
      <div className="relative h-[300px] sm:w-[50%] lg:w-full">
        <Image
          src={imageBuilder(mainImage).url()}
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="sm:h-[300px] overflow-hidden   sm:w-[50%] lg:w-auto ">
        <div className="p-4">
          <h2 className="text-primaryPurple  ">{title[locale]}</h2>
          <div className="flex gap-2 items-center py-2">
            <div className="flex gap-1 ">
              <CalendarIcon className="w-4 h-4 text-primaryPurple" />
              <p className="text-sm">{date}</p>
            </div>
            <div className="flex gap-1 ">
              <LocationMarkerIcon className="w-4 h-4 text-primaryPurple" />
              <p className="text-sm">{location.title[locale]}</p>
            </div>
          </div>
          <p>{shortDescription[locale]}</p>
        </div>
      </div>
    </div>
  );
};

export default StoriesList;
