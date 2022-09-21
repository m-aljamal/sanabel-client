import {
  projectQuery,
  moreProjectsQuery,
  projectsCategoriesQuery,
  moreCasesQuery,
  caseQuery,
  moreSuccessStoriesQuery,
  successStoryQuery,
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
    case: {
      query: caseQuery,
      morePostsQuery: moreCasesQuery,
    },
    successStory: {
      query: successStoryQuery,
      morePostsQuery: moreSuccessStoriesQuery,
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

const fetchPagePaths = async ({ currentPage = "project", locales }) => {
  const pageName = {
    project: {
      query: `*[_type == "project" && defined(slug.current)][].slug.current`,
    },
    case: {
      query: `*[_type == "projectCase" && defined(slug.current)][].slug.current`,
    },
    successStory: {
      query: `*[_type == "success" && defined(slug.current)][].slug.current`,
    },
  };
  const { query } = pageName[currentPage];
  const pathsArray = await client.fetch(query).then((res) =>
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
  };
};

export { calculatePercentage, fetchPageData, fetchPagePaths };
