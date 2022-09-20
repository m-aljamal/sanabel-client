import React from "react";
import { client } from "@/lib/sanity";
import {
  projectQuery,
  moreProjectsQuery,
  projectsCategoriesQuery,
} from "@/lib/queries";
import ContantPage from "@/components/ContantPage";

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
