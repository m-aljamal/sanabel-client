import AboutAchivments from "@/components/about/AboutAchivments";
import AboutDescription from "@/components/about/AboutDescription";
import Collapse from "@/components/about/Collapse";
import Programmes from "@/components/about/Programmes";
import JoinUs from "@/components/homePage/JoinUs";
import PageHero from "@/components/PageHero";
import client from "@/lib/sanity";
import React from "react";
import Partnars from "@/components/homePage/Partnars";
import { aboutAchivmetnsListQuery, partnersQury } from "@/lib/queries";
const about = ({ achivmentsList, partnersLogos }) => {
  return (
    <section>
      <PageHero />
      <AboutDescription />
      <Programmes />
      <JoinUs />
      <Collapse />
      <AboutAchivments achivmentsList={achivmentsList} />
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default about;

export async function getStaticProps() {
  const achivmentsList = await client.fetch(aboutAchivmetnsListQuery);
  const partnersLogos = await client.fetch(partnersQury);

  return {
    props: {
      achivmentsList,
      partnersLogos,
    },
  };
}
