import React from "react";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonLink } from "../Button";
import { HeartIcon } from "@heroicons/react/solid";
import { imageBuilder } from "@/lib/sanity";

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
  const { image, numberBeneficiaries, shortDescription, title, slug } = project;
  return (
    <div className=" border border-lightPurple shadow-md transition duration-150 ease-out hover:scale-110">
      <div className="relative h-[250px] w-full ">
        <Image
          src={imageBuilder(image).url()}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-primaryPurple font-medium mb-4">{title[locale]}</h2>
        <p>{shortDescription[locale]}</p>
        <div className="flex md:flex-row flex-col gap-4 mt-5 justify-center">
          <ButtonLink href="/" className="px-8">
            تبرع الأن
          </ButtonLink>
          <ButtonLink href="/" variant="outline">
            <div className="flex gap-2  ">
              <HeartIcon className="w-5 h-5 " />
              <p>{numberBeneficiaries}</p>
              <p>مستفيد</p>
            </div>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
