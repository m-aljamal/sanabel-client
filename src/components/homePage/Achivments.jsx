import React from "react";
import { Container } from "../Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonLink } from "../Button";
const data = [
  {
    id: 1,
    icon: "/images/project-02.svg",
    total: 45,
    title: {
      "ar": "مشروع",
      "en": "Project",
    },
  },
  {
    id: 2,
    icon: "/images/Location-02.svg",
    total: 90,
    title: {
      "ar": "منطقة",
      "en": "Area",
    },
  },
  {
    id: 3,
    icon: "/images/Student-02.svg",
    total: 1500,
    title: {
      "ar": "طلاب",
      "en": "Students",
    },
  },
  {
    id: 4,
    icon: "/images/beneficiary-02.svg",
    total: 500000,
    title: {
      "ar": "مستفيد",
      "en": "Beneficiaries",
    },
  },
];

const Achivments = () => {
  const { locale } = useRouter();
  return (
    <section className="bg-primaryPurple mt-1">
      <Container>
        <ul className=" grid sm:grid-cols-5 grid-cols-2 py-10  space-y-5 sm:space-y-0">
          <li className="hidden sm:block">
            <SeeMoreAchivments />
          </li>
          {data.map(({ icon, id, title, total }) => (
            <li className="text-white text-center" key={id}>
              <Image src={icon} width={70} height={70} />
              <h2 className="sm:text-2xl text-xl font-bold">{total}</h2>
              <h2 className="text-xl">{title[locale]}</h2>
            </li>
          ))}
          <li className='sm:hidden col-span-2 text-center'>
            <SeeMoreAchivments />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Achivments;

const SeeMoreAchivments = () => {
  return (
    <>
      <h2 className="text-white text-xl"> منجزاتنا</h2>
      <p className="py-3 text-white">بفضل سخائكم أنجزنا الكثير من الحملات...</p>
      <ButtonLink href="/" color="white">
        مشاهدة المزيد
      </ButtonLink>
    </>
  );
};
