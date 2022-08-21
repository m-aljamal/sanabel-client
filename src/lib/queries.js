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
