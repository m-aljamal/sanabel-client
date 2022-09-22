import React from "react";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";

import { imageBuilder } from "@/lib/sanity";
import Btn_Donate_Benfi from "../Btn_Donate_Benfi";

const LatestProjects = ({ projects }) => {
  return (
    <section className="py-14">
      <Container>
        <TitleWithIcon title="أحدث المشاريع" />
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
  const {  title, info:{mainImage, numberBeneficiaries, shortDescription,} } = project;
  return (
    <div className=" border border-lightPurple shadow-md transition duration-150 ease-out hover:scale-110">
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
        <Btn_Donate_Benfi numberBeneficiaries={numberBeneficiaries} />
      </div>
    </div>
  );
};
