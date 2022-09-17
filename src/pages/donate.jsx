import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import PageHero from "@/components/PageHero";
import { TitleWithIcon } from "@/components/Title";
import { useRouter } from "next/router";
import React from "react";
import { partnersQury } from "@/lib/queries";
import Partnars from "@/components/homePage/Partnars";
import { client } from "@/lib/sanity";

const donate = ({ partnersLogos }) => {
  const { locale } = useRouter();
  const text = {
    ar: {
      title: "ساهم معنا في مساعدة المحتاجين",
      donateAmount: "قيمة التبرع",
      other: "مبلغ مختلف",
      donateInfo: "معلومات المتبرع",
      personInfoTitle:
        "بعد القيام بتعبئة المعلومات التالية سيتم التواصل مع حضرتكم وتزويدكم بالمعلومات وطرق التبرع لحسابتنا الرسمية",
      fullName: "الاسم الكامل",
      nameText: "يرجى كتابة الاسم والكنية هنا",
      country: "الدولة",
      countryText: "يرجى كتابة اسم دولتك هنا",
      city: "المدينة",
      cityText: "يرجى كتابة اسم مدينتك هنا",
      phone: "رقم الهاتف",
      phoneText: "يرجى كتابة رقم هاتفك مع الرمز الدولي هنا",
      email: "اﻹيميل",
      emailText: "يرجى كتابة ايميلك هنا",
      donteForProject: "التبرع لصالح مشروع",
      donteForProjectText: "يرجى كتابة اسم المشروع الذي تريدون التبرع لاجله",
      notes: "ملاحظات إضافية",
      notesText: "يرجى الكتابة هنا",
      btntext: "ارسل البيانات",
    },
    en: {
      title: "Join us in helping the needy",
      donateAmount: "Total Donate",
      other: "Other",
      donateInfo: "Donor Information",
      personInfoTitle:
        "After filling out the following information, we will contact you and provide you with information and ways to donate to our official account",
      fullName: "Full Name",
      nameText: "Please enter your name and surname here",
      country: "Country",
      countryText: "Please enter your country name here",
      city: "City",
      cityText: "Please enter your city name here",
      phone: "Phone Number",
      phoneText:
        "Please enter your phone number with the international code here",
      email: "Email",
      emailText: "Please enter your email here",
      donteForProject: "Donate for Project",
      donteForProjectText:
        "Please enter the name of the project you want to donate for",
      notes: "Additional Notes",
      notesText: "Please enter here",
      btntext: "Send Data",
    },
  };
  const {
    title,
    donateAmount,
    other,
    donateInfo,
    fullName,
    nameText,
    country,
    countryText,
    city,
    cityText,
    phone,
    phoneText,
    email,
    emailText,
    donteForProject,
    donteForProjectText,
    notes,
    notesText,
    btntext,
    personInfoTitle,
  } = text[locale];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      donateAmount: +e.target.amount.value,
      fullName: e.target.name.value,
      country: e.target.country.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      donateForProject: e.target.donateForProject.value,
      notes: e.target.notes.value,
    });
  };

  return (
    <section>
      <PageHero />
      <div className="py-8">
        <Container>
          <TitleWithIcon title={title} />
          <div>
            <form onSubmit={handleSubmit}>
              <div className=" space-y-5 mb-5">
                <h2 className="font-bold text-primaryPurple">{donateAmount}</h2>
                <div className=" flex justify-between gap-2">
                  <Radio id="amount" value={10} name="amount">
                    10$
                  </Radio>
                  <Radio id="amount" value={20} name="amount">
                    20$
                  </Radio>
                  <Radio id="amount" value={50} name="amount">
                    50$
                  </Radio>
                  <Radio id="amount" value={100} name="amount">
                    100$
                  </Radio>
                  <Radio id="amount" value={150} name="amount">
                    150$
                  </Radio>
                  <Radio id="amount" value={200} name="amount">
                    200$
                  </Radio>
                  <input
                    id="otherAmount"
                    placeholder={other}
                    className="border"
                  />
                </div>
              </div>
              <div className=" space-y-5">
                <div className="py-4 space-y-3">
                  <h2 className="font-bold text-primaryPurple">{donateInfo}</h2>
                  <p>{personInfoTitle}</p>
                </div>
                <InputGroup>
                  <Input title={fullName} placeholder={nameText} id="name" />
                  <Input
                    title={country}
                    placeholder={countryText}
                    id="country"
                  />
                  <Input title={city} placeholder={cityText} id="city" />
                </InputGroup>
                <InputGroup>
                  <Input id="phone" title={phone} placeholder={phoneText} />
                  <Input id="email" title={email} placeholder={emailText} />
                  <Input
                    id="donateForProject"
                    title={donteForProject}
                    placeholder={donteForProjectText}
                  />
                </InputGroup>

                <div className="col-span-2">
                  <label htmlFor="notes" className="block text-lightPurple  ">
                    {notes}
                  </label>
                  <textarea
                    id="notes"
                    placeholder={notesText}
                    className="active:border-black w-full border-gray-300 resize-none focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
                  />
                </div>

                <Button type="submit" className="    rounded-none  ">
                  {btntext}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <Partnars partnersLogos={partnersLogos} />
    </section>
  );
};

export default donate;

const Radio = ({ id, children, ...props }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        className="appearance-none checked:bg-primaryPurple ring-0"
        {...props}
      />
      <label htmlFor={id} className="mr-2 text-primaryPurple">
        {children}
      </label>
    </div>
  );
};

const Input = ({ ...props }) => {
  return (
    <div className="space-y-3">
      <label className="block text-lightPurple">{props.title}</label>
      <input className="border w-full p-1" {...props} />
    </div>
  );
};

const InputGroup = ({ children }) => {
  return <div className=" grid grid-cols-3 gap-16">{children}</div>;
};

export async function getStaticProps() {
  const partnersLogos = await client.fetch(partnersQury);
  return {
    props: {
      partnersLogos,
    },
  };
}
