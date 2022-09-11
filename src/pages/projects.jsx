import React from "react";
import { projectsQuery, projectsCategoriesQuery } from "@/lib/queries";
import { client, imageBuilder } from "@/lib/sanity";
import PageHero from "@/components/PageHero";
import { Title } from "@/components/Title";
import { useRouter } from "next/router";
import { Container } from "@/components/Container";
import clsx from "clsx";
import Image from "next/image";
import DateLocation from "@/components/DateLocation";
import { PortableText } from "@portabletext/react";
import Btn_Donate_Benfi from "@/components/Btn_Donate_Benfi";
import { socialMediaIcons } from "@/constant/socialLinks";
import ProgresPar from "@/components/ProgresPar";
import { aboutAchivmetnsListQuery, partnersQury } from "@/lib/queries";
import AboutAchivments from "@/components/about/AboutAchivments";
import Partnars from "@/components/homePage/Partnars";
const projects = ({
  projects,
  projectsCategories,
  achivmentsList,
  partnersLogos,
}) => {
  const { locale } = useRouter();
  const programTitle = {
    ar: "برامجنا",
    en: "Our Programs",
  };
  const [selectedCategory, setSelectedCategory] = React.useState(
    projectsCategories[0]
  );
  const filtredProjects = projects.filter(
    (project) => project.category._id === selectedCategory._id
  );

  return (
    <section>
      <PageHero />
      <div className="py-10">
        <Container>
          <div className="flex justify-center mb-10">
            <Title title={programTitle[locale]} />
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center gap-3    ">
              {projectsCategories.map((category) => (
                <button
                  className={clsx(
                    " px-7 py-3 md:first:rounded-r-lg md:last:rounded-l-lg  ",
                    category._id === selectedCategory._id
                      ? "bg-primaryPurple text-white"
                      : "bg-gray-100 text-primaryPurple border-primaryPurple border"
                  )}
                  key={category._id}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.title[locale]}
                </button>
              ))}
            </div>

            <div>
              {filtredProjects?.map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))}
            </div>
          </div>
        </Container>
        <section className="mt-10">
          <AboutAchivments achivmentsList={achivmentsList} style="light" />
        </section>
        <section>
          <Partnars partnersLogos={partnersLogos} />
        </section>
      </div>
    </section>
  );
};

export default projects;

const ProjectCard = ({ project }) => {
  const { locale } = useRouter();

  const text = {
    ar: {
      target: "الهدف",
      total: "المجموع",
    },
    en: {
      target: "Target",
      total: "Total",
    },
  };

  const socialLinksKeys = Object.keys(project.socialLinks).filter(
    (key) => project.socialLinks[key]
  );

  const { target, total } = text[locale];
  const presentage = Math.round((project.total / project.target) * 100);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10 border  border-primaryPurple">
      <div className="relative w-full h-80 md:h-auto ">
        <Image
          src={imageBuilder(project.image).url()}
          layout="fill"
          objectFit="cover"
        />
        <div className=" absolute  z-10 bg-white  bottom-0 right-0 left-0  h-20 opacity-60 " />
        <div className=" absolute bottom-0 z-20 text-primaryPurple left-0 right-0 px-1 ">
          <ProgresPar present={presentage} />
        </div>
      </div>
      <div className="pt-5 pl-5 pb-5 pr-5 md:pr-0">
        <h1 className="text-primaryPurple font-medium">
          {project.title[locale]}
        </h1>
        <div className="flex gap-16 text-sm py-3">
          <p>
            {total}: {project.total}$
          </p>
          <p className="text-red-600">
            {target}: {project.target}$
          </p>
        </div>
        <div className="sm:flex justify-between">
          <DateLocation
            date={project.date}
            location={project.location.title[locale]}
          />
          <p className="text-sm py-2 md:py-0">{project.accept[locale]}</p>
        </div>
        <div className="my-8">
          <PortableText value={project.body[locale]} />
        </div>
        <div className="lg:flex justify-between items-center">
          <Btn_Donate_Benfi numberBeneficiaries={project.numberBeneficiaries} />
          <div className="flex gap-1  pt-4 lg:pt-0 justify-center">
            {socialLinksKeys?.map((social) => (
              <a
                href={project.socialLinks[social]}
                target="_blank"
                rel="noreferrer"
                key={social}
              >
                <div className="rounded-full border hover:bg-violet-100 border-primaryPurple p-[5px] ">
                  {socialMediaIcons[social]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(projectsQuery);
  const projectsCategories = await client.fetch(projectsCategoriesQuery);
  const achivmentsList = await client.fetch(aboutAchivmetnsListQuery);
  const partnersLogos = await client.fetch(partnersQury);

  return {
    props: {
      projects,
      projectsCategories,
      achivmentsList,
      partnersLogos,
    },
  };
}
