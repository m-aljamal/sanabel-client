import { useRouter } from "next/router";
import React from "react";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";
import { videoAsset } from "@/lib/sanity";
import { useText } from "@/constant/useText";
import { useProjectCategory } from "@/context/ProjectCategory";

const Programmes = ({ projectsCategories }) => {
  const { ourProgramsText, seeMore } = useText();
  const { locale } = useRouter();
  const { setSelectedCategory } = useProjectCategory();

  return (
    <section className="py-10">
      <Container>
        <Title
          title={ourProgramsText}
          className=" flex flex-col items-center pb-10"
        />

        <ul className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-20">
          {projectsCategories.map((proCat) => (
            <li key={proCat._id} className="flex items-start gap-5">
              <video autoPlay loop muted playsInline className="w-14">
                <source src={proCat.webm && videoAsset(proCat.webm)} />
                <source
                  src={proCat.mp4 && videoAsset(proCat.mp4)}
                  type="video/mp4"
                />
              </video>
              <div className="text-primaryPurple">
                <h2 className="font-bold">{proCat.title[locale]}</h2>
                <p className="text-sm">
                  {proCat.description && proCat.description[locale]}
                </p>

                <ButtonLink
                  href="/projects"
                  variant="outline"
                  className="border-0 font-medium "
                  onClick={() => setSelectedCategory(proCat)}
                >
                  {seeMore}
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
