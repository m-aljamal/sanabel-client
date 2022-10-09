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

export const homePageCasesQuery = groq`*[_type == "projectCase" && info.showOnHome == true ] | order(_createdAt desc)  [0]{
        _id,
        title,
        slug,
        info{
          shortDescription,
          mainImage,
           target,
          paid,
          socialLinks{
            facebook,
            twitter,
            instagram,
            youtube,
            telegram,
          },
      }
} `;

export const casesQuery = groq`*[_type == "projectCase"  ] | order(_createdAt desc){
  _id,
  title,
  slug,
 
  info{
    mainImage,
    target,
    paid,
    location,
    shortDescription,
    numberBeneficiaries,
    socialLinks,
    
  }
  
}`;

export const caseQuery = groq`*[_type == "projectCase" && slug.current == $slug][0]{
  _id,
  slug,
  title,
  info{
    mainImage, 
    numberBeneficiaries,
    shortDescription,
    images,
    body,
    date,
    location->{
      title
    },
    target,
    paid,
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
  }
}`;

export const latestProjectsQuery = groq`*[_type == "project" && info.showOnHome == true] | order(_createdAt desc)  [0...3]{
  info{
    mainImage, 
    numberBeneficiaries,
    shortDescription,
  },
  slug,
  title,
 _id,
 
}`;

export const projectsQuery = groq`*[_type == "project" ] | order(_createdAt desc){
  slug,
  title,
  _id,
  category->,
  accept,
   
  info{
    target, 
    paid,
    mainImage,
    shortDescription,
    date,
    socialLinks{
      facebook,
      twitter,
      instagram,
      youtube,
      telegram,
    },
    numberBeneficiaries,
    location->{
      title
    },
  }
  }`;

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{

  slug,
  title,
  _id,
  category->,
  accept,

  info{
    mainImage, 
    numberBeneficiaries,

    shortDescription,
    images,
    body,
    date,
    location->{
      title
    },
    target,
    paid,
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
  }
  }`;

export const moreProjectsQuery = groq`*[_type == "project" && slug.current != $slug][0...3]{
  info{
    mainImage, 
  },
    slug,
    title,
   _id,
  }`;

export const moreCasesQuery = groq`*[_type == "projectCase" && slug.current != $slug][0...3]{
  info{
    mainImage, 
  },
    slug,
    title,
   _id,
    

}`;

export const moreSuccessStoriesQuery = groq`*[_type == "success" && slug.current != $slug][0...3]{
  info{
    mainImage, 
  },
    slug,
    title,
   _id,
    

}`;

export const projectsCategoriesQuery = groq`*[_type == "projectCategory"]{
  _id,
  title,
  description,
  mp4,
  webm,
} `;

export const mediaQuery = groq`*[_type == "media"  ] | order(_createdAt desc){
  image,
  _id
}`;

export const achivmentsHomePageQuery = groq`*[_type == "achievement"] | order(_createdAt desc) [0...4]`;

export const successStoriesPageQuery = groq`*[_type == "success"] | order(_createdAt desc){
  slug,
  title,
  _id,
  info{
    mainImage,
    shortDescription,
    date,
    location->{
      title
    },
  }
} `;
export const successStoriesQuery = groq`*[_type == "success" && info.showOnHome == true] | order(_createdAt desc)[0...3]{
  _id,
  title,
  slug,
  info{
    mainImage,
    date,
    shortDescription,
    location->{
      title
    },
  }
}`;

export const successStoryQuery = groq`*[_type == "success" && slug.current == $slug][0]{
  _id,
  slug,
  title,
  info{
    mainImage, 
    numberBeneficiaries,

    shortDescription,
    images,
    body,
    date,
    location->{
      title
    },
    target,
    paid,
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
  }
}`;

export const aboutProjectQuery = groq`*[_type == "activeProject"] | order(_createdAt desc)[0]{
  body,
  image,
  title,
  
}`;

export const partnersQury = groq`*[_type == "partners"] | order(_createdAt desc){
  image,
  _id
}`;

export const aboutAchivmetnsListQuery = groq`*[_type == "achievement"] | order(_createdAt desc){
  _id,
  darkImage,
  achievement{
    title,
  number,
  image,
  }
}`;

export const panerImageQuery = groq`*[_type == "panerImage"  && page == $page ] [0]{
  image,
  _id,
  page,
}`;

export const searchQuery = groq`*[_type == "project" || _type == "projectCase" || _type == "success"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _type,
  info{
    mainImage,
    shortDescription,
    date,
    location->{
      title
    },
  }
}[title.en match $search || title.ar match $search]`;

export const formQuery = groq`*[_type == "form"]{
  _id,
  slug,
  title,
  description,
  icon,
  backgroundImage,
  btnText
}`;

export const aboutTextQuery = groq`*[_type == "aboutUs"]{
title,
_id,
description
}`;
