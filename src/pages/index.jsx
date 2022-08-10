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
        <div  className="grid grid-cols-2">
          <div className="bg-red-500">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
          </div>
          <div className="bg-green-200">
            2
          </div>
        </div>
      </main>
    </>
  );
}
