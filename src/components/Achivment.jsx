import React from "react";
import CountUp from "react-countup";
import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
const Achivment = ({ image, number, text }) => {
  return (
    <div className={"text-primaryPurple flex flex-row gap-3 space-y-2 items-center"}>
      <Image src={imageBuilder(image).url()} width={50} height={50} />
      <div  >
        <CountUp
          start={0}
          end={number}
          duration={2}
          separator=" "
          className="md:text-xl font-bold"
        />

        <h2 className="md:text-xl ">{text}</h2>
      </div>
    </div>
  );
};

export default Achivment;
