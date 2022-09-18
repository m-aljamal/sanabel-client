import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
const HeroLink = ({ title, linkText }) => {
  const { locale } = useRouter();
  const homePageLink = links.find((link) => link.href === "/");
  const textLink = links.find(
    (link) => link.label[locale].toLowerCase() === linkText.toLowerCase()
  ).href;

  return (
    <div className="text-center space-y-3 py-16">
      <h2 className="text-xl font-bold text-primaryPurple">{title}</h2>
      <div className="flex gap-5 text-darkPurple justify-center">
        <Link href="/">
          <a className="text-lightPurple">{homePageLink.label[locale]}</a>
        </Link>
        <ChevronLeftIcon className="w-5 h-5 text-darkPurple" />
        <Link href={textLink}>
          <a className="text-lightPurple">{linkText}</a>
        </Link>
      </div>
    </div>
  );
};

export default HeroLink;
