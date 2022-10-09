import Head from "next/head";
import Hero from "@/components/homePage/Hero";
import JoinUs from "@/components/homePage/JoinUs";
import Latest from "@/components/homePage/Latest";
import LatestProjects from "@/components/homePage/LatestProjects";
import About from "@/components/homePage/About";
import Media from "@/components/homePage/Media";
import Achivments from "@/components/homePage/Achivments";
import StoriesList from "@/components/homePage/StoriesList";
import AboutProjects from "@/components/homePage/AboutProjects";
import Partnars from "@/components/homePage/Partnars";
import client from "@/lib/sanity";
import {
  heroImagesQuery,
  latestNewsQuery,
  homePageCasesQuery,
  latestProjectsQuery,
  mediaQuery,
  achivmentsHomePageQuery,
  successStoriesQuery,
  aboutProjectQuery,
  partnersQury,
  formQuery,
} from "@/lib/queries";
export default function Home({
  heroImages,
  latestNews,
  homePagecase,
  latestProjects,
  mediaData,
  achivmentsHomePage,
  successStories,
  aboutProject,
  partnersLogos,
  forms,
}) {
  return (
    <>
      <Head>
        <title>Sanabel</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Hero heroImages={heroImages} />
        <JoinUs forms={forms} />
        <Latest newsData={latestNews} homePagecase={homePagecase} />
        <LatestProjects projects={latestProjects} />
        <About />
        <Media mediaData={mediaData} />
        {/* !todo link to the achivenemts in about page */}
        <Achivments achivmentsData={achivmentsHomePage} />
        <StoriesList successStories={successStories} />
        <AboutProjects aboutProject={aboutProject} />
        <Partnars partnersLogos={partnersLogos} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const [
    heroImages,
    latestNews,
    homePagecase,
    latestProjects,
    mediaData,
    achivmentsHomePage,
    successStories,
    aboutProject,
    partnersLogos,
    forms,
  ] = await Promise.all([
    client.fetch(heroImagesQuery),
    client.fetch(latestNewsQuery),
    client.fetch(homePageCasesQuery),
    client.fetch(latestProjectsQuery),
    client.fetch(mediaQuery),
    client.fetch(achivmentsHomePageQuery),
    client.fetch(successStoriesQuery),
    client.fetch(aboutProjectQuery),
    client.fetch(partnersQury),
    client.fetch(formQuery),
  ]);
  return {
    props: {
      heroImages,
      latestNews,
      homePagecase,
      latestProjects,
      mediaData,
      achivmentsHomePage,
      successStories,
      aboutProject,
      partnersLogos,
      forms,
    },
  };
}
