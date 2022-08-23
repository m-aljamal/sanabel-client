import clsx from "clsx";
import React from "react";
import Image from "next/image";
const baseStyle = "text-lg font-semibold text-primaryPurple";
const Title = ({ title }) => {
  return (
    <div>
      <h1 className={clsx(baseStyle)}>{title}</h1>
      <Line />
    </div>
  );
};

const TitleWithIcon = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h1 className={clsx(baseStyle)}>{title}</h1>
      <h2 className="text-primaryPurple ">{subTitle}</h2>
      <div className="flex items-center justify-center">
        <Line />
        <Image src="/images/smallLogo.svg" width={20} height={20} />
        <Line />
      </div>
    </div>
  );
};

export { TitleWithIcon, Title };

const Line = () => {
  return (
    <div className=" space-y-[2px]">
      <div className="w-14 h-[1px]  bg-primaryPurple"></div>
      <div className="w-14 h-[1px]  bg-primaryPurple"></div>
    </div>
  );
};
