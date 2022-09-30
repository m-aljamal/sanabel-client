import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import socialLinks from "@/constant/socialLinks";
const Footer = () => {
  const { locale } = useRouter();
  const text = {
    rights: {
      ar: "جميع الحقوق محفوظة لصالح منظمة السنابل",
      en: "All rights reserved to Sanabel organization",
    },
  };
  return (
    <footer className=" bg-primaryPurple  pt-10 pb-5 relative">
      <Container>
        <div className="   flex   ">
          <div className="relative  w-1/3  ">
            <Image
              src="/images/whiteLogo.svg"
              width={200}
              height={100}
              objectFit="contain"
            />
          </div>

          <div className="text-white   w-full">
            <h2 className="font-bold mb-5">الصفحات</h2>
            <ul className=" grid grid-cols-5  gap-x-8 gap-y-5">
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

const FooterAddress = ({ icon, label, ...props }) => {
  return (
    <div className="flex gap-2 items-center justify-center sm:justify-start ">
      <div>
        <Image src={icon} width={40} height={30} objectFit="fill" />
      </div>
      <p className="text-white" {...props}>
        {label}
      </p>
    </div>
  );
};
