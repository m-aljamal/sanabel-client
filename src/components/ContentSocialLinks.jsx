import React from "react";
import { socialMediaIcons } from "@/constant/socialLinks";

const ContentSocialLinks = ({ socialLinks }) => {
  const socialLinksKeys = Object.keys(socialLinks).filter(
    (key) => socialLinks[key]
  );
  return (
    <div className="flex gap-1  pt-4 lg:pt-0 justify-center">
      {socialLinksKeys?.map((social) => (
        <a
          href={socialLinks[social]}
          target="_blank"
          rel="noreferrer"
          key={social}
        >
          <div className="rounded-full border hover:bg-violet-100 border-primaryPurple p-[5px] ">
            {socialMediaIcons[social]}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContentSocialLinks;
