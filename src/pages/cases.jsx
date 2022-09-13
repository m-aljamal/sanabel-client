import PageHero from "@/components/PageHero";
import client, { imageBuilder } from "@/lib/sanity";
import React from "react";
import { casesQuery } from "@/lib/queries";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "@/components/Container";
import { PortableText } from "@portabletext/react";
import CircleProgres from "@/components/CircleProgres";
import { ButtonLink } from "@/components/Button";
const cases = ({ cases }) => {
  return (
    <section>
      <PageHero />
      <div className="bg-gray-200">
        <Container>
          <div className=" grid grid-cols-3 py-10 gap-6">
            {cases.map((onseCase) => (
              <CaseCard onseCase={onseCase} key={onseCase._id} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default cases;

export async function getStaticProps({ locale }) {
  const cases = await client.fetch(casesQuery);
  return {
    props: {
      cases,
    },
  };
}

const CaseCard = ({ onseCase }) => {
  const { locale } = useRouter();
  const { image, title, total, remaining, shortDescription } = onseCase;
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
  return (
    <div className=" shadow-2xl">
      <div className="relative w-full  h-[300px] ">
        <Image src={imageBuilder(image).url()} layout="fill" />
      </div>
      <div className="bg-white p-4">
        <h2 className="text-primaryPurple py-2 text-lg">{title[locale]}</h2>
        <div className="text-sm text-gray-800 h-52 overflow-hidden ">
          <p>{shortDescription[locale]}</p>
        </div>
        <div className=" border-t border-primaryPurple mt-2 ">
          <div className="mt-5  relative">
            <div className="flex gap-2 items-center">
              <CircleProgres />
              <div className="text-sm text-primaryPurple">
                <p>
                  {requested}: {total}$
                </p>
                <p>
                  {remaningText}: {remaining}$
                </p>
              </div>
            </div>
            <ButtonLink href="/" className="text-xs absolute left-0  bottom-0">
              {btn}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
