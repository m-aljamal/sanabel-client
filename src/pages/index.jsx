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
  casesQuery,
  latestProjectsQuery,
  mediaQuery,
  achivmentsHomePageQuery,
  successStoriesQuery,
  aboutProjectQuery,
  partnersQury,
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
}) {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Hero heroImages={heroImages} />
        <JoinUs />
        <Latest newsData={latestNews} homePagecase={homePagecase} />
        <LatestProjects projects={latestProjects} />
        <About />
        <Media mediaData={mediaData} />
        <Achivments achivmentsData={achivmentsHomePage} />
        <StoriesList successStories={successStories} />
        <AboutProjects aboutProject={aboutProject} />
        <Partnars partnersLogos={partnersLogos} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const heroImages = await client.fetch(heroImagesQuery);
  const latestNews = await client.fetch(latestNewsQuery);
  const homePagecase = await client.fetch(casesQuery);
  const latestProjects = await client.fetch(latestProjectsQuery);
  const mediaData = await client.fetch(mediaQuery);
  const achivmentsHomePage = await client.fetch(achivmentsHomePageQuery);
  const successStories = await client.fetch(successStoriesQuery);
  const aboutProject = await client.fetch(aboutProjectQuery);
  const partnersLogos = await client.fetch(partnersQury);
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
    },
  };
}
