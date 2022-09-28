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
      CasesText: "الحالات",
      successStoryText: "قصص النجاح",
      noDataFound: "لم يتم العثور على بيانات",
      seeMoreText: "شاهد المزيد",
    },
    en: {
      targetText: "Target",
      totalText: "Total",
      projectsText: "Projects",
      donateNowText: "Donate Now",
      commonPostsText: "Common Posts",
      clickHereToSeeText: "Click here to see",
      ourProgramsText: "Our Programs",
      CasesText: "Cases",
      successStoryText: "Success Stories",
      noDataFound: "No Data Found",
      seeMoreText: "See More",
    },
  };

  return {
    ...text[locale],
  };
};
