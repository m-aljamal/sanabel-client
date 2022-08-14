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
            <h2 className="md:text-2xl text-lg font-bold">منظمة السنابل.... نحن!</h2>
            <h3 className="text-lg my-2">غير ربحية</h3>
            <p className='mb-3'>
              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء
              الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر
              عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
            </p>
            <ButtonLink href="/"  color="white">تعرف أكثر علينا</ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
