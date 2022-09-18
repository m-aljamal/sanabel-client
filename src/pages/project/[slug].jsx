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
import Achivment from "@/components/Achivment";
import { useText } from "@/constant/useText";
import ProgresPar from "@/components/ProgresPar";
import { calculatePercentage } from "@/lib/helperFunctions";
const Project = ({ project }) => {
  const { locale } = useRouter();
  const {
    title,
    body,
    image,
    location,
    target,
    total,
    numberBeneficiaries,
    socialLinks,
    date,
    remaining,
    achivments,
  } = project;
  console.log(project);
  const text = {
    ar: {
      projects: "المشاريع",
    },
    en: {
      projects: "Projects",
    },
  };
  const {
    targetTotal: { total: totalText, target: targetText },
  } = useText();
  const presentage = calculatePercentage(total, target);

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
              <div className="flex gap-8">
                {achivments?.map((achiv) => (
                  <Achivment
                    key={achiv._key}
                    image={achiv.image}
                    number={achiv.number}
                    text={achiv.title[locale]}
                  />
                ))}
              </div>
              <div className="flex justify-between pt-8 items-center font-semibold">
                <div className="text-primaryPurple">
                  <span>{totalText}: </span>
                  <span>{total}$</span>
                </div>
                <div className="text-red-600">
                  <span>{targetText}: </span>
                  <span>{target}$</span>
                </div>
              </div>
              <div>
                <ProgresPar present={presentage} className="px-0" />
              </div>
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

// accept
// :
// {_type: 'localeString', ar: 'أُنجز المشروع', en: 'Project accomplished'}
// achivments
// :
// null
// body
// :
// {_type: 'localeBlock', ar: Array(1), en: Array(1)}
// category
// :
// {_createdAt: '2022-09-10T12:30:18Z', _id: '6b5fe970-6872-40a2-a6fc-d95ac3dc1d12', _rev: 'imagPqDWG1ImSbXkko2ToR', _type: 'projectCategory', _updatedAt: '2022-09-14T07:07:32Z', …}
// date
// :
// "2016-06-23"
// image
// :
// {_type: 'image', asset: {…}}
// location
// :
// {title: {…}}
// numberBeneficiaries
// :
// 25371
// shortDescription
// :
// {_type: 'localeText', ar: 'مشروع توزيع قرطاسية ووسائل تعليمية كاملة في الغوطة الشرقية', en: 'A project to distribute complete stationery and educational aids in Eastern Ghouta'}
// slug
// :
// {_type: 'slug', current: 'stationery-distribution'}
// socialLinks
// :
// {facebook: 'https://www.facebook.com/SanabelAlamal.S.A.O', instagram: 'https://www.instagram.com/sanabelalamal.s.a.o', telegram: 'https://t.me/sanabesao', twitter: 'https://twitter.com/SanabelSAO', youtube: 'https://www.youtube.com/channel/UCVorx5BxYaYbdE_gxDD1xXA'}
// target
// :
// 45000
// title
// :
// {_type: 'localeString', ar: 'توزيع قرطاسية', en: 'stationery distribution'}
// total
// :
// 45000
// _id
// :
// "7fdfa53a-5139-4fe
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
