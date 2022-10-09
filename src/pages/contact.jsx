import { LoadingBtn } from "@/components/Button";
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
import { ADDRESS, CONTACT_EMAIL, INFO_EMAIL, PHONE_2 } from "@/constant/info";
import { client } from "@/lib/sanity";
import Partnars from "@/components/homePage/Partnars";
import { useAsync } from "@/hooks/useAsync";
import { useText } from "@/constant/useText";
import PhoneNumber from "@/components/PhoneNumber";
import ErrorMessage from "@/components/ErrorMessage";
const contact = ({ partnersLogos, panerImage }) => {
  const { sanOnScoialMediaText } = useText();
  return (
    <section>
      <PageHero paner={panerImage} />
      <div className="pt-10">
        <Container>
          <TitleWithIcon title={sanOnScoialMediaText} />
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
          <s.icon className="w-5 h-5 text-lightPurple" />
        </a>
      ))}
    </div>
  );
};

const Map = () => {
  return (
    <div className="my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4231378098416!2d37.1322937!3d36.7123977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd1f38568a529%3A0xb09555cf8bce0c31!2z2YXZhti42YXYqSDYp9mE2LPZhtin2KjZhCBzYW5hYmVsIG9yZ2FuaXphdGlvbg!5e0!3m2!1sen!2str!4v1665340844112!5m2!1sen!2str"
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
  const {
    contactFormText,
    nameText,
    subjectText,
    emailText,
    phoneText,
    messageText,
    sendText,
  } = useText();
  const { locale } = useRouter();
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

  return (
    <div>
      <h2 className="text-primaryPurple font-bold py-5">{contactFormText}</h2>
      {isError && <ErrorMessage error={error[locale]} />}
      {status === "resolved" && (
        <p className="text-lg text-green-700 py-4 ">{data[locale]}</p>
      )}
      <div className="flex flex-col md:flex-row gap-5">
        <form onSubmit={handleSubmit} className="md:w-3/4">
          <div className="flex flex-col md:flex-row  gap-5 ">
            <div className="w-full space-y-4">
              <Input id="fullName" placeholder={nameText} />
              <Input id="subject" placeholder={subjectText} />
              <Input id="email" placeholder={emailText} />
              <Input id="phoneNumber" placeholder={phoneText} />
            </div>
            <textarea
              id="message"
              placeholder={messageText}
              className="w-full border border-primaryPurple active:border-black resize-none focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            />
          </div>
          <LoadingBtn
            type="submit"
            className="rounded-none w-full mt-5"
            loading={isLoading}
          >
            {sendText}
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
  const { addreessText, emailText, phoneText } = useText();
  return (
    <div className=" space-y-4  md:w-1/4">
      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit  rounded-full p-[6px]">
          <ImLocation2 className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">
            {addreessText}:
          </h2>
          <p>{ADDRESS}</p>
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit rounded-full p-[6px]">
          <FaPhoneVolume className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">
            {phoneText}:
          </h2>
          <div className=" text-right">
            <PhoneNumber />
            <PhoneNumber number={PHONE_2} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="bg-primaryPurple h-fit rounded-full p-[6px]">
          <MdEmail className=" w-3 h-3  text-white   " />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-primaryPurple">
            {emailText}:
          </h2>
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
