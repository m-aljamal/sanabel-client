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
      latestProjects: "أحدث المشاريع",
      benfitText: "مستفيد",
      mediaText: "الميديا",
      seeOurNewsOnSocialText:
        "يمكنكم مشاهدة المزيد عبر حساباتنا على السوشل ميديا",
      ourAchievementsText: "منجزاتنا",
      yourDonationText: "بفضل سخائكم أنجزنا الكثير من الحملات....",
      outPartnersText: "شركاؤنا في العمل الإنساني",
      pagestText: "الصفحات",
      aboutTitleText: ` منظمة السنابل… نحنُ !`,
      aboutBodyText: `
      منظمة مجتمع مدني غير ربحية مستقلة... تأسست سنة 2014 في الشمال
      السوري ورسميًا في تركيا سنة 2019 وتهدف لتقديم الخدمات الإنسانية
      للناس الأكثر ضعفًا بغض النظر عن العرق أو الدين أو اللون أو
      الانتماءات السياسية، بغية إعادة النهوض بالمجتمع السوري على أسس من
      العدالة والمساوات والحرية...
      `,
      knowMoreBtn: "تعرف أكثر علينا",
      typeOfOrgText: "منظمة مجتمع مدني غير ربحية مستقلة...",
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
      latestProjects: "Latest Projects",
      benfitText: "Beneficiaries",
      mediaText: "Media",
      seeOurNewsOnSocialText:
        "You can see more through our social media accounts",
      ourAchievementsText: "Our Achievements",
      yourDonationText:
        "Thanks to your generosity, we have achieved a lot of campaigns....",
      ourPartnersText: "Our Partners in Humanitarian Work",
      pagestText: "Pages",
      aboutTitleText: `Sanabelsao… We Are!`,
      aboutBodyText: `
      Sanabelsao is a non-profit, independent, civil society organization
      established in 2014 in the north of Syria and officially in Turkey in
      2019. It aims to provide humanitarian services to the most vulnerable
      people regardless of race, religion, color or political affiliations,
      in order to revive the Syrian society on the foundations of justice,
      equality and freedom...`,
      knowMoreBtn: "Know More About Us",
      typeOfOrgText: "Non-profit, independent, civil society organization...",
    },
  };

  return {
    ...text[locale],
  };
};
