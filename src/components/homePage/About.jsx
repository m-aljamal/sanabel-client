import React from "react";
import Image from "next/image";
import { Container } from "../Container";
import { ButtonLink } from "../Button";
import { useText } from "@/constant/useText";
const About = () => {
  const { aboutTitleText, aboutBodyText, knowMoreBtn } = useText();
  return (
    <section className="relative h-[400px] my-10">
      <Image src="/images/aboutBg.jpg" layout="fill" objectFit="cover" />
      <div className="absolute items-center flex justify-center h-full w-full text-white">
        <Container>
          <div className="text-center md:w-1/2 mx-auto">
            <Image src="/images/whiteLogo.svg" width={50} height={50} />
            <h2 className="md:text-2xl text-lg font-bold">{aboutTitleText}</h2>
            <p className="mb-3">{aboutBodyText}</p>
            <ButtonLink href="/about" color="white" className="px-8">
              {knowMoreBtn}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
