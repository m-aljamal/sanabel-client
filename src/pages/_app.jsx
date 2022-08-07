import "../styles/globals.css";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <main
      style={{
        direction: locale === "en-US" ? "ltr" : "rtl",
      }}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
