import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { links } from "@/constant/links";
import { imageBuilder } from "@/lib/sanity";
const PageHero = ({ paner }) => {
  const { asPath, locale } = useRouter();
  const currentLink = links.find((link) => link.href === asPath);
  const homePageLink = links.find((link) => link.href === "/");
  return (
    <div className=" relative h-80  ">
      <Image
        src={paner ? imageBuilder(paner.image).url() : "/images/about/hero.jpg"}
        layout="fill"
        objectFit="cover"
      />
      {/* {paner ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 bg-opacity-70"></div>
      ) : null} */}
      <div className="  absolute flex justify-center items-center h-full w-full ">
        <div className="text-center space-y-3">
          <h2 className="text-xl font-bold text-primaryPurple">
            {currentLink?.label[locale]}
          </h2>
          <div className="flex gap-5 text-darkPurple">
            <Link href="/">{homePageLink.label[locale]}</Link>
            <ChevronLeftIcon className="w-5 h-5 text-darkPurple" />
            <p>{currentLink?.label[locale]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
