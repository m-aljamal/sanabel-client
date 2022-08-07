import socialLinks from "@/constant/socialLinks";
import React, { Fragment } from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./Button";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import clsx from "clsx";
import LocalSwitcher from "./LocalSwitcher";
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
  return (
    <header>
      <SoucialLinks />
      <LogoSection />
      <MainLinksNav />
    </header>
  );
};

const SoucialLinks = () => {
  return (
    <nav className="hidden md:block border-b" style={{ direction: "ltr" }}>
      <Container>
        <ul className="flex divide-x w-fit border-r border-l ">
          {socialLinks.map((s) => (
            <a href={s.link} target="_blank" rel="noreferrer" key={s.id}>
              <li className="p-3 group">
                <s.icon />
              </li>
            </a>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

const LogoSection = () => {
  const { locale } = useRouter();
  return (
    <nav className="py-5 relative z-50">
      <Container>
        <ul className="flex items-center justify-between ">
          <li>
            <Link href="/">
              <a className="flex items-center space-x-2 ">
                <span className="sr-only">Home</span>
                <Image src="/images/headerLogo.svg" width={50} height={50} />
                <div
                  className={clsx(
                    " border-primaryPurple  text-primaryPurple font-bold",
                    locale === "ar-SA" ? "border-r-2 pr-2" : "border-l-2 pl-2"
                  )}
                >
                  <p>منظمة الســــنابل</p>
                  <p>BAŞAKLAR DERNEĞİ</p>
                </div>
              </a>
            </Link>
          </li>
          <li className=" hidden md:block">
            <div className="flex gap-2 items-center">
              <Image src="/images/mail.svg" height={50} width={50} />
              <div>
                <p>إيميل</p>
                <p>info@sanabelsao.org</p>
              </div>
            </div>
          </li>
          <li className=" hidden md:block">
            <div className="flex gap-2 items-center">
              <Image src="/images/phone.svg" height={50} width={50} />
              <div>
                <p>للاتصال</p>
                <p style={{ direction: "ltr" }}>+90 534 779 30 22</p>
              </div>
            </div>
          </li>
          <li>
            <ButtonLink href="/" className="hidden md:block">
              تبرع الأن
            </ButtonLink>
          </li>
          <li className="md:hidden">
            <MobileNav />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

const MobileNav = () => {
  const { locale } = useRouter();
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx("origin-center transition", {
                  "scale-90 opacity-0": !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 mx-4 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                {links.map(({ href, id, label }) => (
                  <li key={id}>
                    <Link href={href}>
                      <a className="block w-full" onClick={() => close()}>
                        {label[locale]}
                      </a>
                    </Link>
                  </li>
                ))}

                <li
                  className="border-t border-slate-300/40 pt-4"
                  onClick={() => close()}
                >
                  <LocalSwitcher />
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
};

const MainLinksNav = () => {
  const { locale } = useRouter();
  return (
    <nav className="bg-primaryPurple text-white">
      <Container>
        <div className="md:flex items-center justify-between hidden ">
          <ul className="flex gap-8 py-4 ">
            {links.map(({ href, label, id }) => (
              <li key={id}>
                <Link href={href}>
                  <a className="text-white">{label[locale]}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-5">
            <li>
              <LocalSwitcher />
            </li>
            <li className="hidden lg:block">
              <Search />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

const Search = () => {
  return (
    <div className="flex relative ">
      <div className=" absolute     left-2  text-gray-400  flex items-center   h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="currentColor"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="البحث...."
        className="bg-[#4a2353] border-0 rounded-md placeholder-gray-400 pl-8"
      />
    </div>
  );
};

export default Header;
