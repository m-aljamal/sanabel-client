import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonLink, DonateBtn } from "../Button";
import { Title } from "../Title";
import ProgresPar from "../ProgresPar";
import { Container } from "../Container";
import { imageBuilder } from "@/lib/sanity";
import clsx from "clsx";
import { useText } from "@/constant/useText";
import ContentSocialLinks from "@/components/ContentSocialLinks";
const HomePageCase = ({ homePagecase }) => {
  const { latestCasesText } = useText();
  return (
    <div className=" py-5 ">
      <Title title={latestCasesText} />
      <Case homePagecase={homePagecase} />
    </div>
  );
};

export default HomePageCase;

const Case = ({ homePagecase }) => {
  const { locale } = useRouter();
  const {
    title,
    slug,
    info: { target, paid, mainImage, shortDescription, socialLinks },
  } = homePagecase;
  const { totalText, targetText, helpUsSocialText, seeCase } = useText();

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
        <div className="absolute  z-10 bg-white  bottom-0 right-0 left-0  h-32 opacity-60 " />
        <div className="absolute bottom-0 z-20 text-primaryPurple left-0 right-0 px-1 ">
          <ProgresPar paid={paid} target={target} />
          <Container>
            <div className="font-bold space-y-2">
              <div className="flex  justify-evenly">
                <p>{targetText}:</p>
                <p>{target}$</p>
              </div>
              <div className="flex justify-evenly">
                <p>{totalText}:</p>
                <p>{paid}$</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="w-full flex flex-col  justify-between">
        <div>
          <h2 className="text-primaryPurple text-lg font-bold">
            {title[locale]}
          </h2>
          <p className="text-md mt-5">{shortDescription[locale]}</p>
        </div>
        <div>
          <div className=" mb-5 flex xl:flex-row flex-col gap-5">
            <DonateBtn />
            <ButtonLink
              href={`/case/${slug.current}`}
              variant="outline"
              className="px-3"
            >
              {seeCase}
            </ButtonLink>
          </div>
          <p className="text-primaryPurple font-medium">{helpUsSocialText}</p>
          <ContentSocialLinks
            socialLinks={socialLinks || {}}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};
