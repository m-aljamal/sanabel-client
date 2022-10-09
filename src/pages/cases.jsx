import PageHero from "@/components/PageHero";
import client, { imageBuilder } from "@/lib/sanity";
import React from "react";
import { casesQuery, partnersQury, panerImageQuery } from "@/lib/queries";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "@/components/Container";
import CircleProgres from "@/components/CircleProgres";
import { ButtonLink } from "@/components/Button";
import Partnars from "@/components/homePage/Partnars";
import { calculatePercentage } from "@/lib/helperFunctions";
import { useText } from "@/constant/useText";
const cases = ({ cases, partnersLogos, panerImage }) => {
  return (
    <section>
      <PageHero paner={panerImage} />
      <div className="bg-gray-200">
        <Container>
          <div className=" grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1  py-10 gap-6   ">
            {cases.map((onseCase) => (
              <CaseCard onseCase={onseCase} key={onseCase._id} />
            ))}
          </div>
        </Container>
      </div>
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default cases;

export async function getStaticProps() {
  const cases = await client.fetch(casesQuery);
  const partnersLogos = await client.fetch(partnersQury);
  const panerImage = await client.fetch(panerImageQuery, { page: "Cases" });

  return {
    props: {
      cases,
      partnersLogos,
      panerImage,
    },
  };
}

const CaseCard = ({ onseCase }) => {
  const { locale } = useRouter();
  const {
    title,
    slug,
    info: { mainImage, shortDescription, target, paid },
  } = onseCase;

  const presentage = calculatePercentage(paid, target);
  const { targetText, totalText, viewCaseText, donateNowText } = useText();
  return (
    <div>
      <div className="relative w-full  h-[300px] ">
        <Image
          src={imageBuilder(mainImage).url()}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" p-4  bg-white   shadow-2xl">
        <h2 className="text-primaryPurple py-2 text-lg font-bold">
          {title[locale]}
        </h2>
        <div className="text-sm text-gray-800  ">
          <p>{shortDescription[locale]}</p>
        </div>
        <div className=" border-t border-primaryPurple mt-2  ">
          <div className="mt-5   ">
            <div className="flex gap-8 items-center justify-center">
              <CircleProgres percentage={presentage} />
              <div className="text-sm text-primaryPurple font-bold">
                <p>
                  {targetText}: {target}$
                </p>
                <p>
                  {totalText}: {paid}$
                </p>
              </div>
            </div>
            <div className=" flex justify-center gap-5 mt-3  font-bold">
              <ButtonLink
                href={`case/${slug.current}`}
                className="text-sm py-0 px-5"
              >
                {viewCaseText}
              </ButtonLink>
              <ButtonLink
                href="/donate"
                variant="outline"
                className="py-0 px-5 text-sm"
              >
                {donateNowText}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
