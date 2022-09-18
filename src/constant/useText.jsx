import { useRouter } from "next/router";

export const useText = () => {
  const { locale } = useRouter();

  const targetTotal = {
    ar: {
      target: "الهدف",
      total: "المجموع",
    },
    en: {
      target: "Target",
      total: "Total",
    },
  };

  return {
    targetTotal: targetTotal[locale],
  };
};
