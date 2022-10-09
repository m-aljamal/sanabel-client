import React from "react";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";
import { BenfitBtn, DonateBtn, SeeMoreBtn, ButtonLink } from "../Button";

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
    slug,
    title,
    info: { mainImage, shortDescription },
  } = project;
  const { seeProject } = useText();
  return (
    <div className="border border-lightPurple shadow-md transition duration-150 ease-out hover:scale-110">
      <div className="relative h-[250px] w-full ">
        <Image
          src={imageBuilder(mainImage).url()}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-primaryPurple font-bold">{title[locale]}</h2>
        <p>{shortDescription[locale]}</p>
        <div className=" flex flex-row items-center gap-4">
          <DonateBtn className="w-full" />
          <ButtonLink
            variant="outline"
            className="w-full"
            href={`/project/${slug.current}`}
          >
            {seeProject}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
