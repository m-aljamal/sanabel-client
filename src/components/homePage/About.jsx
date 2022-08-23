import React from "react";
import Image from "next/image";
import { Container } from "../Container";
import { ButtonLink } from "../Button";
const About = () => {
  return (
    <section className="relative h-[400px] my-10">
      <Image src="/images/aboutBg.jpg" layout="fill" objectFit="cover" />
      <div className="absolute items-center flex justify-center h-full w-full text-white">
        <Container>
          <div className="text-center md:w-1/2 mx-auto">
            <Image src="/images/whiteLogo.svg" width={50} height={50} />
            <h2 className="md:text-2xl text-lg font-bold">
              منظمة السنابل… نحنُ !
            </h2>

            <p className="mb-3">
              منظمة مجتمع مدني غير ربحية مستقلة... تأسست سنة 2014 في الشمال
              السوري ورسميًا في تركيا سنة 2019 وتهدف لتقديم الخدمات الإنسانية
              للناس الأكثر ضعفًا بغض النظر عن العرق أو الدين أو اللون أو
              الانتماءات السياسية، بغية إعادة النهوض بالمجتمع السوري على أسس من
              العدالة والمساوات والحرية...
            </p>
            <ButtonLink href="/" color="white" className='px-8'>
              تعرف أكثر علينا
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
