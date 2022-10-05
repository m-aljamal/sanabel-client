import React from "react";
import { Container } from "../Container";
import Link from "next/link";
import Image from "next/image";
import { DonateBtn } from "../Button";
import MobileNavigation from "./MobileNavigation";
import { useText } from "@/constant/useText";
import { INFO_EMAIL } from "@/constant/info";
import PhoneNumber from "../PhoneNumber";
const LogoSection = () => {
  const { emailText, toCallText, donateNowText } = useText();
  return (
    <nav className="py-5 relative z-50">
      <Container>
        <ul className="flex items-center justify-between ">
          <li className=" relative h-14 w-52">
            <Link href="/">
              <>
                <span className="sr-only">Home</span>
                <Image
                  src="/images/headerLogo.svg"
                  layout="fill"
                  objectFit="fill"
                  priority
                  lang="Logo"
                />
              </>
            </Link>
          </li>
          <li className=" hidden md:block">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/mail.svg"
                height={50}
                width={50}
                lang="MailLogo"
              />
              <div>
                <p>{emailText}</p>
                <p>{INFO_EMAIL}</p>
              </div>
            </div>
          </li>
          <li className=" hidden md:block">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/phone.svg"
                height={50}
                width={50}
                lang="phone logo"
              />
              <div>
                <p>{toCallText}</p>
                <PhoneNumber />
              </div>
            </div>
          </li>
          <li className="hidden md:block">
            <DonateBtn />
          </li>
          <li className="md:hidden">
            <MobileNavigation />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default LogoSection;
