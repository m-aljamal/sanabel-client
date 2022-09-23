import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonLink } from "../Button";
import { Title } from "../Title";
import socialLinks from "@/constant/socialLinks";
import ProgresPar from "../ProgresPar";
import { Container } from "../Container";
import { imageBuilder } from "@/lib/sanity";
import clsx from "clsx";

const HomePageCase = ({ homePagecase }) => {
  return (
    <div className=" py-5 ">
      <Title title="أهم الحالات" />
      <Case homePagecase={homePagecase} />
    </div>
  );
};

export default HomePageCase;

const Case = ({ homePagecase }) => {
  const { locale } = useRouter();
  const {
    title,
    info: { target, paid, mainImage, shortDescription },
  } = homePagecase;
  const presentage = Math.round((paid / target) * 100);
  return (
    <div
      className={clsx(
        "bg-primaryWhite flex flex-col  sm:flex-row gap-5 h-full py-5"
      )}
    >
      <div className=" relative w-full md:h-full h-[500px]">
        <Image
          src={imageBuilder(mainImage).url()}
          layout="fill"
          objectFit="cover"
        />
        <div className=" absolute  z-10 bg-white  bottom-0 right-0 left-0  h-32 opacity-60 " />
        <div className=" absolute bottom-0 z-20 text-primaryPurple left-0 right-0 px-1 ">
          <ProgresPar present={presentage} />
          <Container>
            <div className=" flex justify-between   font-medium text-center">
              <div>
                <p>{target}$</p>
                <p>المجموع</p>
              </div>
              <div>
                <p>{paid}$</p>
                <p>المدفوع</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="w-full flex flex-col  justify-between">
        <div>
          <h2 className="text-primaryPurple text-lg font-medium">
            {title[locale]}
          </h2>
          <p className="text-sm mt-5">{shortDescription[locale]}</p>
        </div>
        <div>
          <div className=" mb-5 flex xl:flex-row flex-col gap-5">
            <ButtonLink href="/" className="px-8">
              تبرع الأن
            </ButtonLink>
            <ButtonLink href="/" variant="outline" className="px-3">
              مشاهدة المزيد
            </ButtonLink>
          </div>
          <p className="text-primaryPurple font-medium">
            ساعدنا في المشاركة للتبرع عبر:
          </p>
          <ul className="flex gap-4 ">
            {socialLinks.map((s) => (
              <a href={s.link} key={s.id}>
                <li className="mt-4 rounded-full border border-primaryPurple p-[5px]">
                  <s.icon className="socialIconCases" />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
