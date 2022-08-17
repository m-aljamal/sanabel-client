import Head from "next/head";
import Header from "@/components/Header";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <JoinUs />
        <Latest />
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
