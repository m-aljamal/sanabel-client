import {
  projectQuery,
  moreProjectsQuery,
  projectsCategoriesQuery,
} from "@/lib/queries";
import { client } from "@/lib/sanity";

const calculatePercentage = (value, total) => {
  return Math.round((value / total) * 100);
};

const fetchPageData = async ({ slug, currentPage = "project" }) => {
  const pageName = {
    project: {
      query: projectQuery,
      morePostsQuery: moreProjectsQuery,
    },
  };
  const { query, morePostsQuery } = pageName[currentPage];
  const pageData = await client.fetch(query, {
    slug,
  });

  const morePost = await client.fetch(morePostsQuery, {
    slug,
  });

  const projectsCategories = await client.fetch(projectsCategoriesQuery);

  return {
    pageData,
    morePost,
    projectsCategories,
  };
};

export { calculatePercentage, fetchPageData };
