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

export const homePageCasesQuery = groq`*[_type == "projectCase" && info.showOnHome == true ] | order(_updatedAt desc)  [0]{
        _id,
        title,
        slug,
        info{
          shortDescription,
          mainImage,
           target,
          paid,
           
      }
} `;

export const casesQuery = groq`*[_type == "projectCase"  ] | order(_updatedAt desc){
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

export const latestProjectsQuery = groq`*[_type == "project" && info.showOnHome == true] | order(_updatedAt desc)  [0...3]{
  info{
    mainImage, 
    numberBeneficiaries,
    shortDescription,
  },
  slug,
  title,
 _id,
 
}`;

export const projectsQuery = groq`*[_type == "project" ] | order(_updatedAt desc){
   
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

export const moreSuccessStoriesQuery = groq`*[_type == "successStory" && slug.current != $slug][0...3]{
  info{
    mainImage, 
  },
    slug,
    title,
   _id,
    

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
export const successStoriesQuery = groq`*[_type == "success" && info.showOnHome == true] | order(_updatedAt desc)[0...3]{
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
  darkImage,
  achievement{
    title,
  number,
  image,
  }
}`;
