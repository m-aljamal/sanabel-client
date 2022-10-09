import React from "react";
import CountUp from "react-countup";
import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
const Achivment = ({ image, number, text }) => {
  return (
    <div
      style={{ direction: "ltr" }}
      className={"text-primaryPurple flex flex-row  gap-3   items-center "}
    >
      <div>
        {number > 1 ? (
          <CountUp
            start={0}
            end={number}
            duration={2}
            separator=","
            className="md:text-lg font-bold   "
          />
        ) : null}
        <h2 className="md:text-lg -mt-2">{text}</h2>
      </div>
      <Image src={imageBuilder(image).url()} width={40} height={40} />
    </div>
  );
};

export default Achivment;
