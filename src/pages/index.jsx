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
import { heroImagesQuery, latestNewsQuery, casesQuery } from "@/lib/queries";
export default function Home({ heroImages, latestNews, homePagecase }) {
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
        <LatestProjects />
        <About />
        <Media />
        <Achivments />
        <StoriesList />
        <AboutProjects />
        <Partnars />
      </main>
    </>
  );
}

export async function getStaticProps({ local }) {
  const heroImages = await client.fetch(heroImagesQuery);
  const latestNews = await client.fetch(latestNewsQuery);
  const homePagecase = await client.fetch(casesQuery);
  return {
    props: {
      heroImages,
      latestNews,
      homePagecase,
    },
  };
}
