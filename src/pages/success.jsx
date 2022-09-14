import PageHero from "@/components/PageHero";
import React from "react";
import { successStoriesPageQuery, partnersQury } from "@/lib/queries";
import client, { imageBuilder } from "@/lib/sanity";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "@/components/Container";
import DateLocation from "@/components/DateLocation";
import Partnars from "@/components/homePage/Partnars";
import Btn_Donate_Benfi from "@/components/Btn_Donate_Benfi";
const success = ({ successStories, partnersLogos }) => {
  return (
    <section>
      <PageHero />

      <div className="space-y-10 py-20 bg-gray-100">
        {successStories.map((story) => (
          <SuccessCard story={story} key={story._id} />
        ))}
      </div>
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default success;

const SuccessCard = ({ story }) => {
  const { locale } = useRouter();
  const { date, image, successLocation, title } = story;
  return (
    <Container>
      <div className=" grid grid-cols-2  bg-white shadow-lg">
        <div className=" relative  ">
          <Image
            src={imageBuilder(image).url()}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 space-y-3">
          <h2 className="text-primaryPurple">{title[locale]}</h2>
          <DateLocation date={date} location={successLocation.title[locale]} />
          <p>
            Nostrud esse sunt consectetur aliqua magna incididunt do amet ipsum
            veniam mollit cupidatat esse. Sit adipisicing esse reprehenderit
            ullamco Lorem et ipsum cupidatat eiusmod occaecat dolor occaecat. Ad
            excepteur non esse nulla est ipsum et minim.
          </p>
          <Btn_Donate_Benfi btnText="seeStory" numberBeneficiaries="50" />
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const successStories = await client.fetch(successStoriesPageQuery);
  const partnersLogos = await client.fetch(partnersQury);

  return {
    props: {
      successStories,
      partnersLogos,
    },
  };
}
