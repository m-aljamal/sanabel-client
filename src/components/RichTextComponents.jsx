import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-[450px] my-5">
          <Image
            src={imageBuilder(value).url()}
            layout="fill"
            objectFit="cover"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className=" text-2xl text-green-500 ">{children}</ul>
    ),
    number: ({ children }) => <ol>{children}</ol>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-4xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="leading-6 my-5">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline text-blue-500">
          {children}
        </Link>
      );
    },
  },
};
