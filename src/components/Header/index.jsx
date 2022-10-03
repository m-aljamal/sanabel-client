import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import LogoSection from "./LogoSection";
import MainLinksNav from "./MainLinks";

const Header = () => {
  return (
    <header>
      <SocialMediaLinks />
      <LogoSection />
      <MainLinksNav />
    </header>
  );
};

export default Header;
