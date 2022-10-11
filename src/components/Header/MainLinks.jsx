import React, { Fragment, useEffect } from "react";
import { Container } from "../Container";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/constant/links";
import { useRouter } from "next/router";
import clsx from "clsx";
import LocalSwitcher from "@/components/LocalSwitcher";
import { Transition, Dialog } from "@headlessui/react";
import { imageBuilder } from "@/lib/sanity";
import { useAsync } from "@/hooks/useAsync";
import { useText } from "@/constant/useText";
import LoadingSpinner from "@/components/LoadingSpinner";

const MainLinksNav = () => {
  const { data, run, isLoading } = useAsync();

  const { locale, asPath } = useRouter();
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
    openModal();
  }, [data]);

  useEffect(() => {
    closeModal();
  }, [asPath]);

  const searchLinks = {
    project: "/project",
    projectCase: "/case",
    success: "/success-story",
  };

  const { foundSearch, notFoundSearch } = useText();
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
              <Search
                run={run}
                isOpen={isOpen}
                openModal={openModal}
                setOnOpen={setOnOpen}
                isLoading={isLoading}
              />
              <>
                <Transition appear show={isOpen && !isLoading} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-50"
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
                          <Dialog.Panel className="max-h-[300px]  overflow-y-auto w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900 text-center mb-5"
                            >
                              {data?.length ? foundSearch : notFoundSearch}
                            </Dialog.Title>
                            <div className="mt-2 space-y-3">
                              {data?.map((item) => (
                                <div
                                  key={item._id}
                                  className=" shadow-md p-2   "
                                >
                                  <Link
                                    href={`${searchLinks[item._type]}/${
                                      item.slug.current
                                    }`}
                                  >
                                    <a className=" grid grid-cols-2 text-right gap-4 ">
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
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
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

const Search = ({ run, setOnOpen, isLoading, isOpen }) => {
  const [search, setSearch] = React.useState();
  const [isQuered, setIsQuered] = React.useState(false);
  const { locale } = useRouter();
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
  const { searchText } = useText();
  return (
    <form className="flex relative " onSubmit={handleSubmit}>
      <input
        placeholder={searchText}
        className="bg-[#4a2353] border-0 p-2 rounded-md placeholder-gray-200  focus:ring-1 focus:ring-gray-500"
        id="search"
        disabled={isOpen}
      />

      <button
        type="submit"
        className={clsx(
          " absolute   text-gray-400    flex items-center h-full",
          locale === "en" ? "right-2" : "left-2"
        )}
        onClick={setOnOpen}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="currentColor"
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
        )}
      </button>
    </form>
  );
};

export default MainLinksNav;
