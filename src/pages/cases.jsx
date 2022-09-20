import PageHero from "@/components/PageHero";
import client, { imageBuilder } from "@/lib/sanity";
import React from "react";
import { casesQuery, partnersQury } from "@/lib/queries";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "@/components/Container";
import CircleProgres from "@/components/CircleProgres";
import { ButtonLink } from "@/components/Button";
import Partnars from "@/components/homePage/Partnars";
const cases = ({ cases, partnersLogos }) => {
  return (
    <section>
      <PageHero />
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
  return {
    props: {
      cases,
      partnersLogos,
    },
  };
}

const CaseCard = ({ onseCase }) => {
  const { locale } = useRouter();
  const { image, title, total, remaining, shortDescription, totalPaied, slug } =
    onseCase;
  const text = {
    ar: {
      requested: "المطلوب",
      remaningText: "المتبقي",
      btn: "مشاهدة الحالة",
    },
    en: {
      requested: "Requested",
      remaningText: "Remaning",
      btn: "View Case",
    },
  };
  const { requested, remaningText, btn } = text[locale];
  const presentage = Math.round((totalPaied / total) * 100);

  return (
    <div>
      <div className="relative w-full  h-[300px] ">
        <Image
          src={imageBuilder(image).url()}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" p-4  bg-white   shadow-2xl">
        <h2 className="text-primaryPurple py-2 text-lg">{title[locale]}</h2>
        <div className="text-sm text-gray-800  ">
          <p>{shortDescription[locale]}</p>
        </div>
        <div className=" border-t border-primaryPurple mt-2  ">
          <div className="mt-5   ">
            <div className="flex gap-2 items-center">
              <CircleProgres percentage={presentage} />
              <div className="text-sm text-primaryPurple">
                <p>
                  {requested}: {total}$
                </p>
                <p>
                  {remaningText}: {remaining}$
                </p>
              </div>
            </div>

            <ButtonLink
              href={`case/${slug.current}`}
              className="text-xs  mt-5 "
            >
              {btn}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
