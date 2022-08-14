import React from "react";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
const images = [
  "/placeHolder/photo-13.jpg",
  "/placeHolder/photo-14.jpg",
  "/placeHolder/photo-15.jpg",
  "/placeHolder/photo-16.jpg",
  "/placeHolder/photo-17.jpg",
  "/placeHolder/photo-18.jpg",
  "/placeHolder/photo-19.jpg",
  "/placeHolder/photo-18.jpg",
];

const Media = () => {
  return (
    <section>
      <TitleWithIcon
        title="الميديا"
        subTitle="يمكنكم مشاهدة المزيد عبر حساباتنا على السوشل ميديا"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2 ">
        {images.map((image, index) => (
          <div key={index} className="relative  h-[300px] ">
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
