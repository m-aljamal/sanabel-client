import React from "react";
import ContantPage from "@/components/ContantPage";
import { fetchPageData } from "@/lib/helperFunctions";
import { fetchPagePaths } from "@/lib/helperFunctions";

const Project = ({ project, moreProjects, projectsCategories }) => {
  return (
    <ContantPage
      pageContent={project}
      morePosts={moreProjects}
      projectsCategories={projectsCategories}
    />
  );
};

export default Project;

export async function getStaticPaths({ locales }) {
  const { paths } = await fetchPagePaths({ locales });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { pageData, morePost, projectsCategories } = await fetchPageData({
    slug: params.slug,
  });

  return {
    props: {
      project: pageData,
      moreProjects: morePost,
      projectsCategories,
    },
  };
}
