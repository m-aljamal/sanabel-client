import React from "react";
import { fetchPagePaths, fetchPageData } from "@/lib/helperFunctions";
import ContantPage from "@/components/ContantPage";
const Case = ({ currentCase, moreCase, projectsCategories }) => {
  return (
    <ContantPage
      pageContent={currentCase}
      morePosts={moreCase}
      projectsCategories={projectsCategories}
      page="case"
    />
  );
};

export default Case;

export async function getStaticPaths({ locales }) {
  const { paths } = await fetchPagePaths({ locales, currentPage: "case" });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { pageData, morePost, projectsCategories } = await fetchPageData({
    slug: params.slug,
    currentPage: "case",
  });

  return {
    props: {
      currentCase: pageData,
      moreCase: morePost,
      projectsCategories,
    },
  };
}
