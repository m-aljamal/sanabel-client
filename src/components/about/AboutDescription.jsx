import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "../Container";
import { Title } from "../Title";

const aboutText = {
  ar: {
    title: "منظمة السنابل… نحنُ !",
    subtitle: "منظمة مجتمع مدني غير ربحية مستقلة...",
    body: `تأسست سنة 2014 في الشمال السوري ورسميًا في تركيا سنة 2019 وتهدف
        لتقديم الخدمات الإنسانية للناس الأكثر ضعفًا بغض النظر عن العرق أو
        الدين أو اللون أو الانتماءات السياسية، بغية إعادة النهوض بالمجتمع
        السوري على أسس من العدالة والمساوات والحرية...`,
  },
  en: {
    title: "About Us",
    subtitle:
      "A non-profit organization founded in 2014 in Turkey and democratically in 2019...",
    body: `We were founded in 2014 in the North of Turkey and democratically in 2019 and
        aim to provide services to the most vulnerable people in the country,
    `,
  },
};

const AboutDescription = () => {
  const { locale } = useRouter();
  return (
    <section className=" bg-primaryWhite py-16 ">
      <Container>
        <div className=" flex flex-col md:flex-row justify-center gap-16 items-center">
          <div className="hidden md:inline-block">
            <Image
              src="/placeHolder/photo-15.jpg"
              width={400}
              height={250}
              objectFit="cover"
            />
          </div>

          <div className="md:w-1/2 space-y-5">
            <Title title={aboutText[locale].title} />

            <p className=" text-darkPurple text-lg">
              {aboutText[locale].subtitle}
            </p>
            <p className="  text-darkPurple text-lg">
              {aboutText[locale].body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDescription;
