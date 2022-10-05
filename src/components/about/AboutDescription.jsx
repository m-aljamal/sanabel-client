import { useText } from "@/constant/useText";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "../Container";
import { Title } from "../Title";

const AboutDescription = () => {
  const { typeOfOrgText, aboutBodyText, aboutTitleText } = useText();
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
              lang="sideImage"
            />
          </div>

          <div className="md:w-1/2 space-y-5">
            <Title title={aboutTitleText} />

            <p className=" text-darkPurple text-lg">{typeOfOrgText}</p>
            <p className="  text-darkPurple text-lg">{aboutBodyText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDescription;
