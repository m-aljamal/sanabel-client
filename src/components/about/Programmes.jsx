import { useRouter } from "next/router";
import React from "react";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";

const data = [
  {
    iconPath: {
      mp4: "/videos/education.mp4",
      webm: "/videos/education.webm",
    },
    title: {
      ar: "التعليم",
      en: "Education",
    },
    description: {
      ar: "نسعى إلى رفع جودة التعليم وتنشئة جيل واعٍ فكريًا ومؤمن بقضايا أمته ومتميز أخلاقيًا وعلميًا...",
      en: "We strive to raise the quality of education and create a generation of visionary and dedicated intellectuals and intellectuals who are committed to the causes of the people and the world...",
    },
  },
  {
    iconPath: {
      mp4: "/videos/protection.mp4",
      webm: "/videos/protection.webm",
    },
    title: {
      ar: "الحماية",
      en: "Protection",
    },
    description: {
      ar: "انطلاقًا من القيم الإنسانية والكفاءة والتميز والشفافية يقوم برنامج الحماية بتقديم خدماته للطفل والمرأة...",
      en: "An open-minded approach to the values of human beings and the dignity and fairness of the individual",
    },
  },
  {
    iconPath: {
      mp4: "/videos/relef.mp4",
      webm: "/videos/relef.webm",
    },
    title: {
      ar: "الأمن الغذائي",
      en: "Relef",
    },
    description: {
      ar: "نعمل دومًا على تقديم المساعدات الطارئة والدورية للمحتاجين وللفئات الأكثر ضعفاً من النازحين...",
      en: "We work hard to provide the most urgent and timely assistance to the most vulnerable people and to the most vulnerable groups...",
    },
  },
  {
    iconPath: {
      mp4: "/videos/health.mp4",
      webm: "/videos/health.webm",
    },
    title: {
      ar: "الصحة",
      en: "Health",
    },
    description: {
      ar: "نعمل على تنمية القطاع الصحي وإنعاش الوضع الصحي للمرضى والمصابين...",
      en: "We work to improve the health sector and rehabilitate the health status of the patients and the affected...",
    },
  },
  {
    iconPath: {
      mp4: "/videos/shelter.mp4",
      webm: "/videos/shelter.webm",
    },
    title: {
      ar: "المأوى والـ NFI",
      en: "Shelter and NFI",
    },
    description: {
      ar: "نسعى بشكل رئيسي على تأمين المأوى للمتضررين والنازحين، وتأمين احتياجاتهم في فصل الشتاء...",
      en: "We strive to provide shelter and NFI to the most vulnerable people and to the most vulnerable groups, and to provide their needs in the winter...",
    },
  },
  {
    iconPath: {
      mp4: "/videos/woash.mp4",
      webm: "/videos/woash.webm",
    },
    title: {
      ar: "المياه والإصحاح",
      en: "Water and Repair",
    },
    description: {
      ar: "إعادة تأهيل محطات وشبكات المياه والصرف الصحي، بالإضافة إلى دعم تشغيل محطات المياه...",
      en: "We restore the water supply and repair the water pipes and systems, and support the operation of the water pipes...",
    },
  },
];

const title = {
  ar: "برامجنا",
  en: "Programmes",
};

const Programmes = () => {
  const { locale } = useRouter();
  return (
    <section className="py-10">
      <Container>
        <Title
          title={title[locale]}
          className=" flex flex-col items-center pb-10"
        />

        <ul className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-20">
          {data.map(({ description, iconPath, title }) => (
            <li key={title.en} className="flex items-start gap-5">
              <video autoPlay loop muted playsInline className="w-14">
                <source src={iconPath.webm} type="video/webm" />
                <source src={iconPath.mp4} type="video/mp4" />
              </video>
              <div className="text-primaryPurple">
                <h2 className="font-bold">{title[locale]}</h2>
                <p className="text-sm">{description[locale]}</p>
                <ButtonLink
                  href="/"
                  variant="outline"
                  className="border-0 font-medium "
                >
                  مشاهدة المزيد
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Programmes;
