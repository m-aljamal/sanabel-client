import "../styles/globals.css";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectCategoryProvider } from "@/context/ProjectCategory";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <main
      style={{
        direction: locale === "en" ? "ltr" : "rtl",
      }}
    >
      <Header />
      <ProjectCategoryProvider>
        <Component {...pageProps} />
      </ProjectCategoryProvider>
      <Footer />
    </main>
  );
}

export default MyApp;
