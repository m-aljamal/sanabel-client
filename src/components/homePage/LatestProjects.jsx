import React from "react";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";
import { BenfitBtn, DonateBtn } from "../Button";

const LatestProjects = ({ projects }) => {
  const { latestProjects } = useText();
  return (
    <section className="py-14">
      <Container>
        <TitleWithIcon title={latestProjects} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestProjects;

const ProjectCard = ({ project }) => {
  const { locale } = useRouter();
  const {
    title,
    info: { mainImage, numberBeneficiaries, shortDescription },
  } = project;
  return (
    <div className="border border-lightPurple shadow-md transition duration-150 ease-out hover:scale-110">
      <div className="relative h-[250px] w-full ">
        <Image
          src={imageBuilder(mainImage).url()}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-primaryPurple font-medium mb-4">{title[locale]}</h2>
        <p>{shortDescription[locale]}</p>
        <div className="mt-4 flex flex-col items-center gap-4">
          <DonateBtn className="w-full" />
          <BenfitBtn number={numberBeneficiaries} className="w-full" />
        </div>
      </div>
    </div>
  );
};
