import { imageBuilder } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "../Container";
const AboutProjects = ({ aboutProject }) => {
  const { locale } = useRouter();
  const { title, image, body } = aboutProject;

  return (
    <section>
      <div className="relative  h-[400px]">
        <Image src="/images/aboutPrjects.jpg" layout="fill" objectFit="cover" />
        <div className=" absolute  flex justify-center items-center h-full w-full">
          <Container>
            <div className=" flex md:flex-row flex-col-reverse  justify-center gap-4 items-center  ">
              <div className=" md:translate-y-7 hidden md:block  flex-shrink-0 ">
                <Image
                  src={imageBuilder(image).url()}
                  width={300}
                  height={350}
                  objectFit="contain"
                />
              </div>
              <div className="text-white md:w-[600px]   ">
                <h1 className="font-bold text-xl mb-5">{title[locale]}</h1>
                <PortableText value={body[locale]} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
