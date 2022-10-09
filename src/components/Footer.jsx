import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import { useText } from "@/constant/useText";
const Footer = () => {
  const { locale } = useRouter();
  const text = {
    rights: {
      ar: "جميع الحقوق محفوظة لصالح منظمة السنابل",
      en: "All rights reserved to Sanabel organization",
    },
  };
  return (
    <footer>
      <div className="bg-primaryPurple">
        <div className="flex  justify-center">
          <Image
            src="/images/footer/whiteLogoWithText.svg"
            width={250}
            height={180}
            objectFit="contain"
          />
        </div>
      </div>
      <div className=" bg-white py-2">
        <p className="text-primaryPurple text-bold w-full text-center text-sm font-bold ">
          {text.rights[locale]} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
