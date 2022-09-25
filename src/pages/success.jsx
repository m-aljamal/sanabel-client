import PageHero from "@/components/PageHero";
import React from "react";
import {
  successStoriesPageQuery,
  partnersQury,
  panerImageQuery,
} from "@/lib/queries";
import client, { imageBuilder } from "@/lib/sanity";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "@/components/Container";
import DateLocation from "@/components/DateLocation";
import Partnars from "@/components/homePage/Partnars";
import Btn_Donate_Benfi from "@/components/Btn_Donate_Benfi";
import { ButtonLink } from "@/components/Button";
import { useText } from "@/constant/useText";
const success = ({ successStories, partnersLogos, panerImage }) => {
  const { noDataFound } = useText();
  return (
    <section>
      <PageHero paner={panerImage} />
      <div className="space-y-10 py-20 bg-gray-100">
        {successStories.length ? (
          successStories?.map((story) => (
            <SuccessCard story={story} key={story._id} />
          ))
        ) : (
          <p className="text-center text-red-600">{noDataFound}</p>
        )}
      </div>
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default success;

const SuccessCard = ({ story }) => {
  const { locale } = useRouter();
  const { info, title, slug } = story;
  return (
    <Container>
      <div className="grid md:grid-cols-2 grid-cols-1  bg-white shadow-lg ">
        <div className=" relative h-[250px] md:h-auto  ">
          <Image
            src={imageBuilder(info.mainImage).url()}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 space-y-3">
          <h2 className="text-primaryPurple">{title[locale]}</h2>
          <DateLocation
            date={info.date}
            location={info.location.title[locale]}
          />
          <p>{info.shortDescription[locale]}</p>
          {/* <Btn_Donate_Benfi btnText="seeStory" numberBeneficiaries="50" /> */}
          <ButtonLink
            href={`/success-story/${slug.current}`}
            className="px-7 text-[12px] "
          >
            مشاهدة القصة
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const successStories = await client.fetch(successStoriesPageQuery);
  const partnersLogos = await client.fetch(partnersQury);
  const panerImage = await client.fetch(panerImageQuery, {
    page: "Success Stories",
  });

  return {
    props: {
      successStories,
      partnersLogos,
      panerImage,
    },
  };
}
