import { useRouter } from "next/router";
import Link from "next/link";

export default function LocalSwitcher() {
  const router = useRouter();
  const { locale: activeLocal, locales } = router;
  const otherLocales = locales.filter((l) => l !== activeLocal);
  return (
    <div>
      <ul>
        {otherLocales.map((local) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={local}>
              <Link href={{ pathname, query }} as={asPath} locale={local}>
                {local === "ar-SA" ? "AR" : "EN"}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
