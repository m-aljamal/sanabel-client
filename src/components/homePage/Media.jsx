import React from "react";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { imageBuilder } from "@/lib/sanity";

const Media = ({ mediaData }) => {
  return (
    <section>
      <TitleWithIcon
        title="الميديا"
        subTitle="يمكنكم مشاهدة المزيد عبر حساباتنا على السوشل ميديا"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2 ">
        {mediaData.map((img) => (
          <div key={img._id} className="relative  h-[300px] ">
            <Image
              src={imageBuilder(img.image).url()}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
