import HeroLink from "@/components/HeroLink";
import { useRouter } from "next/router";
import React from "react";
import { client, imageBuilder } from "@/lib/sanity";
import {
  projectQuery,
  moreProjectsQuery,
  projectsCategoriesQuery,
} from "@/lib/queries";
import { Container } from "@/components/Container";
import Image from "next/image";
import DateLocation from "@/components/DateLocation";
import ContentSocialLinks from "@/components/ContentSocialLinks";
import { PortableText } from "@portabletext/react";
import Achivment from "@/components/Achivment";
import { useText } from "@/constant/useText";
import ProgresPar from "@/components/ProgresPar";
import { calculatePercentage } from "@/lib/helperFunctions";
import { ButtonLink } from "@/components/Button";
import Link from "next/link";
const Project = ({ project, moreProjects, projectsCategories }) => {
  const { locale } = useRouter();
  const {
    title,
    body,
    image,
    location,
    target,
    total,
    socialLinks,
    date,
    projectImages,
    achivments,
  } = project;

  const {
    totalText,
    targetText,
    projectsText,
    donateNowText,
    commonPostsText,
    clickHereToSeeText,
    ourProgramsText,
  } = useText();
  const presentage = calculatePercentage(total, target);
  return (
    <div className="mb-8">
      <Container>
        <HeroLink title={title[locale]} linkText={projectsText} />
        <div className="flex md:flex-row  flex-col gap-10">
          <div className="md:w-2/3">
            <div className="relative w-full h-[450px]">
              <Image
                src={imageBuilder(image).url()}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-7 space-y-3">
              <h2 className="font-medium text-primaryPurple">
                {title[locale]}
              </h2>
              <div className="flex justify-between items-end">
                <DateLocation date={date} location={location.title[locale]} />
                <ContentSocialLinks
                  socialLinks={socialLinks}
                  className=" flex-wrap"
                />
              </div>
              <PortableText value={body[locale]} />
              <div className="flex gap-8 flex-wrap">
                {achivments?.map((achiv) => (
                  <Achivment
                    key={achiv._key}
                    image={achiv.image}
                    number={achiv.number}
                    text={achiv.title[locale]}
                  />
                ))}
              </div>
              <div className="flex justify-between pt-5 items-center font-semibold">
                <div className="text-primaryPurple">
                  <span>{totalText}: </span>
                  <span>{total}$</span>
                </div>
                <div className="text-red-600">
                  <span>{targetText}: </span>
                  <span>{target}$</span>
                </div>
              </div>
              <ProgresPar present={presentage} className="px-0" />
              <div className=" pt-5">
                <ButtonLink href="/donate" className="rounded-none ">
                  {donateNowText}
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-primaryPurple font-semibold text-sm  ">
              {commonPostsText}
            </h2>
            <div className="md:space-y-5  mt-3 sm:grid sm:grid-cols-3 space-y-3 sm:space-y-0  md:block">
              {moreProjects?.map((project) => (
                <div
                  key={project._id}
                  className=" border-b border-primaryPurple "
                >
                  <div className=" flex  gap-3 pb-3 ">
                    <div className=" relative  w-1/3 h-20">
                      <Image
                        src={imageBuilder(project.image).url()}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm">{project.title[locale]}</h2>
                      <Link href={`/project/${project.slug.current}`}>
                        <a className="text-xs text-primaryPurple font-medium">
                          {clickHereToSeeText}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <h2 className="text-primaryPurple font-semibold text-sm">
                {ourProgramsText}
              </h2>
              <ul className="grid grid-cols-3  md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc mt-4 place-items-center md:place-items-start ">
                {projectsCategories?.map((cat) => (
                  <li key={cat._id} className="text-xs">
                    {cat.title[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" grid grid-cols-2 gap-[0.5px] mt-5">
              {projectImages?.map((img) => (
                <div key={img._key} className=" relative h-28">
                  <Image
                    src={imageBuilder(img).url()}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;

export async function getStaticPaths({ locales }) {
  const pathsArray = await client
    .fetch(`*[_type == "project" && defined(slug.current)][].slug.current`)
    .then((res) =>
      res.map((slug) => ({
        params: {
          slug,
        },
      }))
    );
  const paths = locales.reduce((acc, locale) => {
    const localePaths = pathsArray.map((path) => ({
      params: path.params,
      locale,
    }));
    return [...acc, ...localePaths];
  }, []);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await client.fetch(projectQuery, {
    slug: params.slug,
  });

  const moreProjects = await client.fetch(moreProjectsQuery, {
    slug: params.slug,
  });

  const projectsCategories = await client.fetch(projectsCategoriesQuery);

  return {
    props: {
      project,
      moreProjects,
      projectsCategories,
    },
  };
}
