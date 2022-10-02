import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
const Footer = () => {
  const { locale } = useRouter();
  const text = {
    rights: {
      ar: "جميع الحقوق محفوظة لصالح منظمة السنابل",
      en: "All rights reserved to Sanabel organization",
    },
  };
  return (
    <footer className=" bg-primaryPurple  pt-5 pb-3 relative">
      <Container>
        <div className="sm:flex items-center justify-around ">
          <div className="relative    flex-shrink-0 text-center  ">
            <Image
              src="/images/footer/whiteLogoWithText.svg"
              width={250}
              height={180}
              objectFit="contain"
            />
          </div>

          <div className="text-white   ">
            <h2 className="font-bold mb-5">الصفحات</h2>
            <ul className=" grid md:grid-cols-5  grid-cols-3 gap-x-8 gap-y-5">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <Link href={href}>
                    <a>{label[locale]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 h-[1px] w-full absolute left-0 right-0 bottom-[60px]"></div>
          <p className="text-white w-full text-center pt-16  text-sm">
            {text.rights[locale]} {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
