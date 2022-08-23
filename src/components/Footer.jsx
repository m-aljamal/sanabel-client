import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import socialLinks from "@/constant/socialLinks";
import { newsData } from "./homePage/LatestNews";
const Footer = () => {
  const { locale } = useRouter();

  return (
    <footer className=" bg-primaryPurple py-10">
      <Container>
        <div className="  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4   gap-5 justify-items-center      ">
          {/* start address */}
          <div>
            <div className="relative md:h-20 h-14 ">
              <Image
                src="/images/footer/logoWhite.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-white space-y-3 ">
              <p className="text-sm mt-5">
                لمتابعتنا ولمشاهدة المزيد يرجى التواصل عبر الحسابات التالية:
              </p>
              <FooterAddress
                icon="/images/footer/location.svg"
                label="Kilis-Turkey"
              />
              <FooterAddress
                icon="/images/footer/phone.svg"
                label="+90 534 779 30 22"
                style={{ direction: "ltr" }}
              />
              <FooterAddress
                icon="/images/footer/mail.svg"
                label="info@sanabelsao.org"
              />
              <div className="flex gap-2 justify-center sm:justify-start">
                {socialLinks.map((s) => (
                  <a
                    href={s.link}
                    key={s.id}
                    target="_blank"
                    rel="noreferrer"
                    className="  rounded-full border border-white p-[5px]"
                  >
                    <s.icon className="socialIconFooter" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* start Pages */}
          <div className="text-white mt-5 hidden sm:block">
            <h2 className="font-bold mb-8">الصفحات</h2>
            <ul className="space-y-3">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <Link href={href}>
                    <a>{label[locale]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* start News */}
          <div className="text-white mt-5 hidden md:block">
            <h2 className="font-bold mb-8">اخر الأخبار </h2>
            <ul className="space-y-5">
              {/* {newsData.map(({ id, text }) => (
                <li key={id}>{text[locale]?.title}</li>
              ))} */}
            </ul>
          </div>
          {/* start form */}
          <div>
            <div className="text-white mt-5 hidden sm:block">
              <h2 className="font-bold mb-8">فورم التواصل</h2>
              <form className=" space-y-2">
                <input
                  placeholder="الاسم الكامل"
                  className="bg-gray-300 px-3 py-1 w-full"
                />
                <input
                  placeholder="الموضوع"
                  className="bg-gray-300 px-3 py-1 w-full"
                />
                <textarea
                  placeholder="نص الرسالة"
                  className="bg-gray-300 px-3 py-1 w-full"
                />
                <button className=" bg-white  text-primaryPurple font-semibold px-3 py-1 w-full">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const FooterAddress = ({ icon, label, ...props }) => {
  return (
    <div className="flex gap-2 items-center justify-center sm:justify-start ">
      <div>
        <Image src={icon} width={40} height={30} objectFit="fill" />
      </div>
      <p className="text-white" {...props}>
        {label}
      </p>
    </div>
  );
};
