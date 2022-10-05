import AboutAchivments from "@/components/about/AboutAchivments";
import AboutDescription from "@/components/about/AboutDescription";
import Collapse from "@/components/about/Collapse";
import Programmes from "@/components/about/Programmes";
import JoinUs from "@/components/homePage/JoinUs";
import PageHero from "@/components/PageHero";
import client from "@/lib/sanity";
import React from "react";
import Partnars from "@/components/homePage/Partnars";
import {
  aboutAchivmetnsListQuery,
  partnersQury,
  panerImageQuery,
  formQuery,
  aboutTextQuery,
} from "@/lib/queries";
import { projectsCategoriesQuery } from "@/lib/queries";
const about = ({
  achivmentsList,
  partnersLogos,
  paner,
  projectsCategories,
  forms,
  aboutText,
}) => {
  return (
    <section>
      <PageHero paner={paner} />
      <AboutDescription />
      <Programmes projectsCategories={projectsCategories} />
      <JoinUs forms={forms} />
      <Collapse aboutText={aboutText} />
      <AboutAchivments achivmentsList={achivmentsList} />
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default about;

export async function getStaticProps() {
  const achivmentsList = await client.fetch(aboutAchivmetnsListQuery);
  const projectsCategories = await client.fetch(projectsCategoriesQuery);
  const partnersLogos = await client.fetch(partnersQury);
  const paner = await client.fetch(panerImageQuery, { page: "About Sanabel" });
  const forms = await client.fetch(formQuery);
  const aboutText = await client.fetch(aboutTextQuery);
  return {
    props: {
      achivmentsList,
      partnersLogos,
      paner,
      projectsCategories,
      forms,
      aboutText,
    },
  };
}
