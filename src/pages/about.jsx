import AboutAchivments from "@/components/about/AboutAchivments";
import AboutDescription from "@/components/about/AboutDescription";
import Collapse from "@/components/about/Collapse";
import Programmes from "@/components/about/Programmes";
import JoinUs from "@/components/homePage/JoinUs";
import PageHero from "@/components/PageHero";
import { TitleWithIcon } from "@/components/Title";
import client from "@/lib/sanity";
import React from "react";
import { aboutAchivmetnsListQuery } from "@/lib/queries";
const about = ({ achivmentsList }) => {
  return (
    <section>
      <PageHero />
      <AboutDescription />
      <Programmes />
      <JoinUs />
      <Collapse />
      <AboutAchivments achivmentsList={achivmentsList} />
      <section className="py-8">
        <TitleWithIcon title="part" />
      </section>
    </section>
  );
};

export default about;

export async function getStaticProps() {
  const achivmentsList = await client.fetch(aboutAchivmetnsListQuery);
  return {
    props: {
      achivmentsList,
    },
  };
}
