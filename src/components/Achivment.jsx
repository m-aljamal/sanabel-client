import React from "react";
import CountUp from "react-countup";
import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
const Achivment = ({ image, number, text }) => {
  return (
    <div
      style={{ direction: "ltr" }}
      className={
        "text-primaryPurple flex flex-row  gap-3 space-y-2 items-center "
      }
    >
      <div>
        <h2 className="md:text-lg ">{text}</h2>
        <CountUp
          start={0}
          end={number}
          duration={2}
          separator=" "
          className="md:text-lg font-bold"
        />
      </div>
      <Image src={imageBuilder(image).url()} width={40} height={40} />
    </div>
  );
};

export default Achivment;
