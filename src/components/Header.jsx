import socialLinks from "@/constant/socialLinks";
import React, { Fragment, useEffect } from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./Button";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import clsx from "clsx";
import LocalSwitcher from "./LocalSwitcher";
import { Popover, Transition, Dialog } from "@headlessui/react";
import client, { imageBuilder } from "@/lib/sanity";
import { searchQuery, aboutAchivmetnsListQuery } from "@/lib/queries";
import { useAsync } from "@/hooks/useAsync";
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
                <s.icon className="socialIconHeader" />
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
          <li className=" relative h-14 w-52">
            <Link href="/">
              <>
                <span className="sr-only">Home</span>
                <Image
                  src="/images/headerLogo.svg"
                  layout="fill"
                  objectFit="fill"
                />
              </>
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
            <ButtonLink href="/" className="hidden md:block px-8 font-bold">
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
  const { data, error, run, isLoading, status, isError, isSuccess } =
    useAsync();
  console.log({ data, error, isLoading, status, isError, isSuccess });
  const { locale } = useRouter();
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function setOnOpen() {
    if (data?.length && !isOpen) {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    data?.length > 0 && openModal();
  }, [data]);

  return (
    <nav className="bg-darkPurple text-white">
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
            <li className="hidden lg:block relative">
              <Search run={run} openModal={openModal} setOnOpen={setOnOpen} />
              <>
                <Transition
                  appear
                  show={isOpen && data.length > 0}
                  as={Fragment}
                >
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            {/* <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Payment successful
                            </Dialog.Title> */}
                            <div className="mt-2 space-y-3">
                              {data?.map((item) => (
                                <div
                                  key={item._id}
                                  className="flex justify-center gap-5 "
                                >
                                  <p className="text-primaryPurple font-medium">
                                    {item.title[locale]}
                                  </p>
                                  <Image
                                    src={imageBuilder(
                                      item.info.mainImage
                                    ).url()}
                                    width={150}
                                    height={80}
                                    objectFit="cover"
                                  />
                                </div>
                              ))}
                            </div>

                            {/* <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div> */}
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

const Search = ({ run, setOnOpen }) => {
  const [search, setSearch] = React.useState();
  const [isQuered, setIsQuered] = React.useState(false);

  useEffect(() => {
    if (!isQuered) return;

    run(
      fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search }),
      })
    );
  }, [search, isQuered, run]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsQuered(true);
    setSearch(e.target.elements.search.value);
  };

  return (
    <form className="flex relative " onSubmit={handleSubmit}>
      <input
        placeholder="البحث...."
        className="bg-[#4a2353] border-0 p-2 rounded-md placeholder-gray-200  focus:ring-1 focus:ring-gray-500"
        id="search"
      />
      <button
        type="submit"
        className=" absolute right-2  text-gray-400  flex items-center   h-full"
        onClick={setOnOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="currentColor"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
      </button>
    </form>
  );
};

export default Header;
