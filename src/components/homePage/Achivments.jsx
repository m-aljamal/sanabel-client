import React from "react";
import { Container } from "../Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonLink } from "../Button";
import { imageBuilder } from "@/lib/sanity";


const Achivments = ({achivmentsData}) => {
  const { locale } = useRouter();
  return (
    <section className="bg-primaryPurple mt-1">
      <Container>
        <ul className=" grid sm:grid-cols-5 grid-cols-2 py-10  space-y-5 sm:space-y-0">
          <li className="hidden sm:block">
            <SeeMoreAchivments />
          </li>
          {achivmentsData.map((achiv) => (
            <li className="text-white text-center" key={achiv._id}>
              <Image src={imageBuilder(achiv.image).url() } width={70} height={70} />
              <h2 className="sm:text-2xl text-xl font-bold">{achiv.number}</h2>
              <h2 className="text-xl">{achiv.title[locale]}</h2>
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
