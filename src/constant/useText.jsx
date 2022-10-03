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
      seeMore: "شاهد المزيد",
      ourProgramsText: "برامجنا",
      CasesText: "الحالات",
      successStoryText: "قصص النجاح",
      noDataFound: "لم يتم العثور على بيانات",
      seeMoreText: "شاهد المزيد",
      foundSearch: "نتائج البحث",
      searchText: "البحث...",
      notFoundSearch: "لم يتم العثور على نتائج",
      loadingText: "الرجاء الانتظار",
      latestNewsText: "أخر الأخبار",
      latestCasesText: "أهم الحالات",
      helpUsSocialText: "ساعدنا في المشاركة للتبرع عبر",
      emailText: "البريد الإلكتروني",
      toCallText: "للاتصال",
    },
    en: {
      targetText: "Target",
      totalText: "Total",
      projectsText: "Projects",
      donateNowText: "Donate Now",
      commonPostsText: "Common Posts",
      seeMore: "See More",
      clickHereToSeeText: "Click here to see",
      ourProgramsText: "Our Programs",
      CasesText: "Cases",
      successStoryText: "Success Stories",
      noDataFound: "No Data Found",
      seeMoreText: "See More",
      foundSearch: "Search Results",
      searchText: "Search...",
      notFoundSearch: "No Results Found",
      loadingText: "Please Wait",
      latestNewsText: "Latest News",
      latestCasesText: "Latest Cases",
      helpUsSocialText: "Help us share to donate through",
      emailText: "Email",
      toCallText: "To Call",
    },
  };

  return {
    ...text[locale],
  };
};
