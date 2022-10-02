import { Button, LoadingBtn } from "@/components/Button";
import { Container } from "@/components/Container";
import PageHero from "@/components/PageHero";
import { TitleWithIcon } from "@/components/Title";
import socialLinks from "@/constant/socialLinks";
import { useRouter } from "next/router";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { partnersQury, panerImageQuery } from "@/lib/queries";
import {
  ADDRESS,
  CONTACT_EMAIL,
  INFO_EMAIL,
  PHONE_1,
  PHONE_2,
} from "@/constant/info";
import { client } from "@/lib/sanity";
import Partnars from "@/components/homePage/Partnars";
import { useAsync } from "@/hooks/useAsync";
import { BiErrorAlt } from "react-icons/bi";
const contact = ({ partnersLogos, panerImage }) => {
  const { locale } = useRouter();
  const text = {
    ar: {
      title: "السنابل على السوشل ميديا",
    },
    en: {
      title: "Follow us on social media",
    },
  };
  const { title } = text[locale];
  return (
    <section>
      <PageHero paner={panerImage} />
      <div className="pt-10">
        <Container>
          <TitleWithIcon title={title} />
          <SocialILinks />
          <Map />
          <Form />
          <section>
            <Partnars partnersLogos={partnersLogos} />
          </section>
        </Container>
      </div>
    </section>
  );
};

export default contact;

const SocialILinks = () => {
  return (
    <div className="flex justify-center gap-5 py-5">
      {socialLinks.map((s) => (
        <a
          href={s.link}
          key={s.id}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-primaryPurple p-[8px]   "
        >
          <s.icon className="w-5 h-5 text-lightPurple     " />
        </a>
      ))}
    </div>
  );
};

const Map = () => {
  return (
    <div className="my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4088196493262!2d37.130072816398226!3d36.712741653775794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd14b3888bf3b%3A0x3c4e81e098a827ed!2z2YfZitim2Kkg2KrYt9mI2YrYsSDYp9mE2KrYudmE2YrZhQ!5e0!3m2!1sen!2str!4v1663164409468!5m2!1sen!2str"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const Form = () => {
  const text = {
    ar: {
      title: "فورم التواصل",
      name: "الاسم الكامل",
      subject: "الموضوع",
      email: "اﻹيميل",
      phone: "رقم الهاتف",
      message: "نص الرسالة",
      send: "ارسال الرسالة",
    },
    en: {
      title: "Contact Form",
      name: "Full Name",
      subject: "Subject",
      email: "Email",
      phone: "Phone Number",
      message: "Message",
      send: "Send Message",
    },
  };
  const { locale } = useRouter();
  const { title, name, subject, email, phone, message, send } = text[locale];
  const { run, data, isError, isLoading, status, error } = useAsync();

  const handleSubmit = (e) => {
    e.preventDefault();
    run(
      fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: e.target.fullName.value,
          subject: e.target.subject.value,
          email: e.target.email.value,
          phone: e.target.phoneNumber.value,
          message: e.target.message.value,
          messageFrom: "contact form",
        }),
      })
    );
  };
  console.log({
    data,
    isError,
    error,
    status,
  });
  return (
    <div>
      <h2 className="text-primaryPurple font-bold py-5">{title}</h2>
      {isError && (
        <div className="flex gap-1 items-center">
          <BiErrorAlt className="h-5 w-5 text-red-700" />
          <p className="text-lg text-red-500  ">{error[locale]}</p>
        </div>
      )}
      {status === "resolved" && (
        <p className="text-lg text-green-700 py-4 ">{data[locale]}</p>
      )}
      <div className="flex flex-col md:flex-row gap-5">
        <form onSubmit={handleSubmit} className="md:w-3/4">
          <div className="flex flex-col md:flex-row  gap-5 ">
            <div className="w-full space-y-4">
              <Input id="fullName" placeholder={name} />
              <Input id="subject" placeholder={subject} />
              <Input id="email" placeholder={email} />
              <Input id="phoneNumber" placeholder={phone} />
            </div>
            <textarea
              id="message"
              placeholder={message}
              className="w-full border border-primaryPurple active:border-black resize-none focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            />
          </div>
          <LoadingBtn
            type="submit"
            className="rounded-none w-full mt-5"
            loading={isLoading}
          >
            {send}
          </LoadingBtn>
        </form>
        <Address />
      </div>
    </div>
  );
};

const Input = ({ ...props }) => {
  return (
    <input className="border border-primaryPurple p-2  w-full" {...props} />
  );
};

const Address = () => {
  const text = {
    ar: {
      title: "العنوان",
      phone: "الهاتف",
      email: "الايميل",
    },
    en: {
      title: "Address",
      phone: "Phone",
      email: "Email",
    },
  };
  const { locale } = useRouter();
  const { title, phone, email } = text[locale];
  return (
    <div className=" space-y-4  md:w-1/4">
      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit  rounded-full p-[6px]">
          <ImLocation2 className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">{title}:</h2>
          <p>{ADDRESS}</p>
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit rounded-full p-[6px]">
          <FaPhoneVolume className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">{phone}:</h2>
          <div className=" text-right">
            <p style={{ direction: "ltr" }}>{PHONE_1}</p>
            <p style={{ direction: "ltr" }}>{PHONE_2}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit rounded-full p-[6px]">
          <MdEmail className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">{email}:</h2>
          <div className=" text-right">
            <p style={{ direction: "ltr" }}>{INFO_EMAIL}</p>
            <p style={{ direction: "ltr" }}>{CONTACT_EMAIL}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const partnersLogos = await client.fetch(partnersQury);
  const panerImage = await client.fetch(panerImageQuery, { page: "Contact" });

  return {
    props: {
      partnersLogos,
      panerImage,
    },
  };
}
