import { useRouter } from "next/router";

export const useText = () => {
  const { locale } = useRouter();

  const text = {
    ar: {
      targetText: "الهدف",
      totalText: "المجموع",
      projectsText: "المشاريع",
      donateNowText: "تبرع الآن",
      commonPostsText: "منشورات شائعة",
      clickHereToSeeText: "انقر هنا للمشاهدة",
      ourProgramsText: "برامجنا",
    },
    en: {
      targetText: "Target",
      totalText: "Total",
      projectsText: "Projects",
      donateNowText: "Donate Now",
      commonPostsText: "Common Posts",
      clickHereToSeeText: "Click here to see",
      ourProgramsText: "Our Programs",
    },
  };

  return {
    ...text[locale],
  };
};
