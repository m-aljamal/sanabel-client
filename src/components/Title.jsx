import clsx from "clsx";
import React from "react";
import Image from "next/image";
const baseStyle = " text-xl   font-semibold  ";
const colorStyles = {
  primary: {
    text: "text-primaryPurple",
    back: "bg-primaryPurple",
  },
  white: {
    text: "text-white",
    back: "bg-white",
  },
};
const Title = ({ title, className, color = "primary" }) => {
  return (
    <div className={className} >
      <h1 className={clsx(baseStyle, [colorStyles[color].text])}>{title}</h1>
      <Line color={color} />
    </div>
  );
};

const TitleWithIcon = ({ title, subTitle, color = "primary" }) => {
  return (
    <div className={clsx("text-center", [colorStyles[color].text])}>
      <h1 className={clsx(baseStyle)}>{title}</h1>
      <h2 className="  ">{subTitle}</h2>
      <div className="flex items-center justify-center">
        <Line color={color} />
        <Image
          src={
            color === "primary"
              ? "/images/smallLogo.svg"
              : "/images/whiteLogo.svg"
          }
          width={20}
          height={20}
        />
        <Line color={color} />
      </div>
    </div>
  );
};

export { TitleWithIcon, Title };

const Line = ({ color }) => {
  const style = `w-14 h-[1px] ${colorStyles[color].back}`;
  return (
    <div className=" space-y-[2px] ">
      <div className={style}></div>
      <div className={style}></div>
    </div>
  );
};
