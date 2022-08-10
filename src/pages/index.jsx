import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/homePage/Hero";
import JoinUs from "@/components/homePage/JoinUs";

import Latest from "@/components/homePage/Latest";
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
      </main>
    </>
  );
}
