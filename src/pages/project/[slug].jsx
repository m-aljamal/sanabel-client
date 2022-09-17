import HeroLink from "@/components/HeroLink";
import { useRouter } from "next/router";
import React from "react";
import { client, imageBuilder } from "@/lib/sanity";
import { projectQuery } from "@/lib/queries";
import { Container } from "@/components/Container";
import Image from "next/image";
import DateLocation from "@/components/DateLocation";
import ContentSocialLinks from "@/components/ContentSocialLinks";
import { PortableText } from "@portabletext/react";
const Project = ({ project }) => {
  const { locale } = useRouter();
  const {
    title,
    body,
    image,
    location,
    target,
    numberBeneficiaries,
    socialLinks,
    date,
  } = project;
  console.log(project);
  const text = {
    ar: {
      projects: "المشاريع",
    },
    en: {
      projects: "projects",
    },
  };
  return (
    <div className="mb-8">
      <Container>
        <HeroLink title={title[locale]} linkText={text[locale].projects} />
        <div className=" flex  gap-10  ">
          <div className="  w-2/3">
            <div className="relative w-full  h-[350px]">
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
                <ContentSocialLinks socialLinks={project.socialLinks} />
              </div>
              <PortableText value={body[locale]} />
            </div>
          </div>
          <div className="w-1/3">
            <h2>منشورات شائعة</h2>
            <h2>othre</h2>
            <h2>othre</h2>
            <h2>othre</h2>
            <h2>othre</h2>
            <h2>othre</h2>
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

  return {
    props: {
      project,
    },
  };
}
