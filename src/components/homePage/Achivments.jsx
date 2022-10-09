import React from "react";
import { Container } from "../Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonLink } from "../Button";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";
import CountUp from "react-countup";

const Achivments = ({ achivmentsData }) => {
  const { locale } = useRouter();
  return (
    <section className="bg-primaryPurple mt-1">
      <Container>
        <ul className=" grid sm:grid-cols-5 grid-cols-2 py-10  space-y-5 sm:space-y-0">
          <li className="hidden sm:block">
            <SeeMoreAchivments />
          </li>
          {achivmentsData.map((achiv) => (
            <li
              className="text-white text-center flex flex-col space-y-2"
              key={achiv._id}
            >
              <Image
                src={imageBuilder(achiv.achievement.image).url()}
                width={70}
                height={70}
              />
              <CountUp
                style={{ direction: "ltr" }}
                start={0}
                end={achiv.achievement.number}
                duration={2}
                separator=" "
                className="sm:text-2xl text-xl font-bold"
              />

              <h2 className="text-xl">{achiv.achievement.title[locale]}</h2>
            </li>
          ))}
          <li className="sm:hidden col-span-2 text-center">
            <SeeMoreAchivments />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Achivments;

const SeeMoreAchivments = () => {
  const { ourAchievementsText, yourDonationText, seeMore } = useText();
  return (
    <>
      <h2 className="text-white text-xl"> {ourAchievementsText}</h2>
      <p className="py-3 text-white">{yourDonationText}</p>
      <ButtonLink href="/about" color="white">
        {seeMore}
      </ButtonLink>
    </>
  );
};
