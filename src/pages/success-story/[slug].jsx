import React from "react";
import { fetchPagePaths, fetchPageData } from "@/lib/helperFunctions";
import ContantPage from "@/components/ContantPage";
const SuccessStory = ({ cases, moreCases, projectsCategories }) => {
  return (
    <ContantPage
      pageContent={cases}
      morePosts={moreCases}
      projectsCategories={projectsCategories}
      page="success"
    />
  );
};

export default SuccessStory;

export async function getStaticPaths({ locales }) {
  const { paths } = await fetchPagePaths({
    locales,
    currentPage: "successStory",
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { pageData, morePost, projectsCategories } = await fetchPageData({
    slug: params.slug,
    currentPage: "successStory",
  });
  return {
    props: {
      cases: pageData,
      moreCases: morePost,
      projectsCategories,
    },
  };
}
