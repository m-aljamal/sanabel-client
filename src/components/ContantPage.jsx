import React, { useEffect } from "react";
import HeroLink from "@/components/HeroLink";
import { useRouter } from "next/router";
import { imageBuilder } from "@/lib/sanity";
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
import { useProjectCategory } from "@/context/ProjectCategory";

const ContantPage = ({
  pageContent,
  page = "project",
  morePosts,
  projectsCategories,
}) => {
  const {
    totalText,
    targetText,
    projectsText,
    donateNowText,
    commonPostsText,
    clickHereToSeeText,
    ourProgramsText,
    CasesText,
    successStoryText,
  } = useText();
  const pagesInfo = {
    project: {
      linkText: projectsText,
      morePostLink: "project",
    },
    case: {
      linkText: CasesText,
      morePostLink: "case",
    },
    success: {
      linkText: successStoryText,
      morePostLink: "success-story",
    },
  };

  const {
    title,
    info: {
      mainImage,
      date,
      location,
      socialLinks,
      body,
      achivments,
      target,
      paid,
      images,
    },
  } = pageContent;
  const presentage = calculatePercentage(paid, target);
  const { setSelectedCategory } = useProjectCategory();
  const { locale } = useRouter();
  const { linkText, morePostLink } = pagesInfo[page];
  return (
    <div>
      <div className="mb-8">
        <Container>
          <HeroLink title={title[locale]} linkText={linkText} />
          <div className="flex md:flex-row  flex-col gap-10">
            <div className="md:w-2/3">
              <div className="relative w-full h-[450px]">
                <Image
                  src={imageBuilder(mainImage).url()}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-7 space-y-3">
                <h2 className="font-medium text-primaryPurple">
                  {title[locale]}
                </h2>
                <div className="flex justify-between items-end">
                  <DateLocation
                    date={date}
                    location={location?.title[locale]}
                  />
                  <ContentSocialLinks
                    socialLinks={socialLinks || {}}
                    className=" flex-wrap"
                  />
                </div>
                {body && (
                  <div className="mt-7">
                    <PortableText value={body[locale]} />
                  </div>
                )}

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

                {target && paid && target > paid ? (
                  <div>
                    <div className="flex justify-between pt-5 items-center font-semibold">
                      <div className="text-primaryPurple">
                        <span>{totalText}: </span>
                        <span>{paid}$</span>
                      </div>
                      <div className="text-red-600">
                        <span>{targetText}: </span>
                        <span>{target}$</span>
                      </div>
                    </div>
                    <ProgresPar present={presentage} className="px-0" />
                  </div>
                ) : null}
                <div className="pt-5">
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
                {morePosts?.map((post) => (
                  <div
                    key={post._id}
                    className=" border-b border-primaryPurple "
                  >
                    <div className=" flex  gap-3 pb-3 ">
                      <div className=" relative  w-1/3 h-20">
                        <Image
                          src={imageBuilder(post.info.mainImage).url()}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm">{post.title[locale]}</h2>
                        <Link href={`/${morePostLink}/${post.slug.current}`}>
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
                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2  lg:grid-cols-3 gap-2 list-disc mt-4 place-items-center md:place-items-start ">
                  {projectsCategories?.map((cat) => (
                    <li
                      key={cat._id}
                      className="text-sm hover:text-lightPurple cursor-pointer"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <Link href="/projects">{cat.title[locale]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" grid grid-cols-2 gap-[0.5px] mt-5">
                {images?.map((img) => (
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
    </div>
  );
};

export default ContantPage;
