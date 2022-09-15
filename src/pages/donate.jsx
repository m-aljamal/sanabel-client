import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import PageHero from "@/components/PageHero";
import { TitleWithIcon } from "@/components/Title";
import { useRouter } from "next/router";
import React from "react";

const donate = () => {
  const { locale } = useRouter();
  const text = {
    ar: {
      title: "ساهم معنا في مساعدة المحتاجين",
      donateAmount: "قيمة التبرع",
      other: "مبلغ مختلف",
      donateInfo: "معلومات المتبرع",
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
  } = text[locale];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        donateAmount: +e.target.amount.value,
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
              <p>{donateAmount}</p>
              <input type="radio" id="amount" value={10} name="amount" className="  appearance-none checked:bg-primaryPurple default:ring-2 valid:border-green-500 in-range:border-green-500" />
              <label htmlFor="amount" className="mr-2 text-primaryPurple">
                10$
              </label>
              <input type="radio" id="amount" value={20} name="amount" className="checked:bg-primaryPurple appearance-none"/>
              <label htmlFor="amount" className="mr-2 text-primaryPurple">
                20$
              </label>
              <Button type="submit">{btntext}</Button>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default donate;
