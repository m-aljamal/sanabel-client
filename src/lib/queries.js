import groq from "groq";

export const heroImagesQuery = groq`*[_type == "hero"]{
        _id,
        image,
        block,
        heroText
      }`;

export const latestNewsQuery = groq`*[_type == "news"] | order(newDate desc) [0...3]{
        _id,
        title,
        slug,
        newDate,
        location->{
          title
        },
        shortDescription,
        image,
      }`;

export const homePageCasesQuery = groq`*[_type == "projectCase" && showOnHome == true ] | order(_updatedAt desc)  [0]{
        _id,
        title,
        shortDescription,
        slug,
        image,
        total,
        totalPaied,
       "remaining": total - totalPaied,
} `;

export const casesQuery = groq`*[_type == "projectCase" ] | order(_updatedAt desc){
  _id,
  title,
  shortDescription,
  slug,
  image,
  total,
  totalPaied,
 "remaining": total - totalPaied,
  body
}`;

export const latestProjectsQuery = groq`*[_type == "project"] | order(_updatedAt desc)  [0...3]{
  image, 
  numberBeneficiaries,
  shortDescription,
  slug,
  title,
 _id,
}`;

export const projectsQuery = groq`*[_type == "project"] | order(_updatedAt desc){
    image, 
    numberBeneficiaries,
    shortDescription,
    slug,
    title,
   _id,
   category->,
   body,
    date,
    location->{
      title
    },
    accept,
    total,
    target,
    "remaining": target - total,
    socialLinks{
      facebook,
      twitter,
      instagram,
      youtube,
      telegram,
    },
    
  }`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
    image, 
    numberBeneficiaries,
    shortDescription,
    slug,
    title,
   _id,
   category->,
   body,
    date,
    location->{
      title
    },
    accept,
    total,
    target,
    "remaining": target - total,
    socialLinks{
      facebook,
      twitter,
      instagram,
      youtube,
      telegram,
    },
    achivments[]{
      image,
      number,
      title,
      _key
    } 
    
  }`;

export const projectsCategoriesQuery = groq`*[_type == "projectCategory"]{
    title,
    _id
  }`;

export const mediaQuery = groq`*[_type == "media"  ] | order(_updatedAt desc){
  image,
  _id
}`;

export const achivmentsHomePageQuery = groq`*[_type == "achievement"] | order(_updatedAt desc) [0...4]`;

export const successStoriesPageQuery = groq`*[_type == "success"] | order(_updatedAt desc){
  _id,
  date,
  image,
  successLocation->{
    title
    },
  title,
  body,
}`;
export const successStoriesQuery = groq`*[_type == "success"] | order(_updatedAt desc)[0...3]{
  _id,
  date,
  image,
  successLocation->{
    title
    },
  title,
  body,
}`;

export const aboutProjectQuery = groq`*[_type == "activeProject"] | order(_updatedAt desc)[0]{
  body,
  image,
  title,
  
}`;

export const partnersQury = groq`*[_type == "partners"] | order(_updatedAt desc){
  image,
  _id
}`;

export const aboutAchivmetnsListQuery = groq`*[_type == "achievement"] | order(_updatedAt desc){
  _id,
  title,
  number,
  image,
  darkImage
}`;
