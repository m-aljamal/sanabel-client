import React from "react";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../Container";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
import { imageBuilder } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const StoriesList = ({ successStories }) => {
  return (
    <section className=" mt-10  ">
      <TitleWithIcon title="قصص النجاح" />
      <Container>
        <div className=" lg:grid grid-cols-3   my-10 border border-primaryPurple  ">
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
  const { date, image, successLocation, title, body } = storey;

  return (
    <div
      className={`flex  lg:even:flex-col lg:flex-col-reverse flex-col sm:flex-row  sm:even:flex-row-reverse `}
    >
      <div className=" relative h-[300px]   sm:w-[50%] lg:w-full">
        <Image
          src={imageBuilder(image).url()}
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
              <p className="text-sm">{successLocation.title[locale]}</p>
            </div>
          </div>
          <PortableText value={body[locale]} />
        </div>
      </div>
    </div>
  );
};

export default StoriesList;
