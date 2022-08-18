import "../styles/globals.css";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <main
      style={{
        direction: locale === "en-US" ? "ltr" : "rtl",
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
