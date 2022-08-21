import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonLink } from "../Button";
import { Title } from "../Title";
import socialLinks from "@/constant/socialLinks";
import ProgresPar from "../ProgresPar";
import { Container } from "../Container";

const MostCases = () => {
  return (
    <div className=" py-5">
      <Title title="أهم الحالات" />
      <Case />
    </div>
  );
};

export default MostCases;

const data = [
  {
    id: 1,
    total: 15000,
    remain: 10000,

    present: Math.round((8000 / 15000) * 100),
    image: "/images/case-01.jpg",
    text: {
      "ar": {
        title: "الحالات الأكثر شيوعاً",
        description:
          "تسهيل أداء نسك الهدي والفدية على حجاج بيت الله الحرام، وأداء نسك الأضحية والصدقة نيابة عنهم وعمّن يرغب في ذلك من عموم المسلمين، وتوزيع اللحوم على مستحقيها.",
      },
      "en": {
        title: "Most cases",
        description: "this is english text",
      },
    },
  },
];

const Case = () => {
  const { id, total, remain, image, text, present } = data[0];
  const { locale } = useRouter();
  const { title, description } = text[locale];
  return (
    <div
      className="bg-primaryWhite flex lg:flex-row  flex-col gap-5 h-full py-5 "
      style={{ direction: "rtl" }}
    >
      <div className=" relative w-full md:h-full h-[500px]">
        <Image src={image} layout="fill" objectFit="cover" />
        <div className=" absolute  z-10 bg-white  bottom-0 right-0 left-0  h-32 opacity-60 " />
        <div className=" absolute bottom-0 z-20 text-primaryPurple left-0 right-0 px-1 ">
          <ProgresPar present={present} />
          <Container>
            <div className=" flex justify-between   font-medium text-center">
              <div>
                <p>{total}$</p>
                <p>المجموع</p>
              </div>
              <div>
                <p>{remain}$</p>
                <p>المتبقي</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="w-full flex flex-col  justify-between">
        <div>
          <h2 className="text-primaryPurple text-lg font-medium">{title}</h2>
          <p className="text-sm mt-5">{description}</p>
        </div>
        <div>
          <div className=" mb-5 flex lg:flex-row flex-col justify-center gap-5">
            <ButtonLink href="/" className="px-3">
              تبرع الأن
            </ButtonLink>
            <ButtonLink href="/" variant="outline" className="px-3">
              مشاهدة المزيد
            </ButtonLink>
          </div>
          <p className="text-primaryPurple font-medium">
            ساعدنا في المشاركة للتبرع عبر:
          </p>
          <ul className="flex justify-center gap-4 ">
            {socialLinks.map((s) => (
              <a href={s.link} key={s.id}>
                <li className="mt-4 rounded-full border border-primaryPurple p-[5px]">
                  <s.icon className='socialIconCases'/>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
