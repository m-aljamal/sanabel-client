import React from "react";
import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Container } from "../Container";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";

const data = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    date: "2022/07/15",
    text: {
      "ar-SA": {
        title: "برنامج ذبح الاضاحي وتزيع لحوم 1",
        description:
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. .",
        location: "ريف حلب الشمالي",
      },
      "en-US": {
        title: "Program to buy and sell 1",
        description:
          "This is just an example text to show how a text can be replaced in the same space, you can generate many other texts like this one or many others, just add more words to increase the number of letters that the application can generate.",
        location: "Riyad Al-Sharq",
      },
    },
  },
  {
    id: 2,
    image: "/images/news-1.jpg",
    date: "2022/07/15",
    text: {
      "ar-SA": {
        title: "برنامج ذبح الاضاحي وتزيع لحوم 2",
        description:
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. .",
        location: "ريف حلب الشمالي",
      },
      "en-US": {
        title: "Program to buy and sell 1",
        description:
          "This is just an example text to show how a text can be replaced in the same space, you can generate many other texts like this one or many others, just add more words to increase the number of letters that the application can generate.",
        location: "Riyad Al-Sharq",
      },
    },
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    date: "2022/07/15",
    text: {
      "ar-SA": {
        title: "برنامج ذبح الاضاحي وتزيع لحوم 3",
        description:
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. .",
        location: "ريف حلب الشمالي",
      },
      "en-US": {
        title: "Program to buy and sell 1",
        description:
          "This is just an example text to show how a text can be replaced in the same space, you can generate many other texts like this one or many others, just add more words to increase the number of letters that the application can generate.",
        location: "Riyad Al-Sharq",
      },
    },
  },
];

const StoriesList = () => {
  return (
    <section className=" mt-10  ">
      <TitleWithIcon title="قصص النجاح" />
      <Container>
        <div className=" lg:grid grid-cols-3   my-10 border border-primaryPurple  ">
          {data.map((storey) => (
            <SeccessStory {...storey} key={storey.id} />
          ))}
        </div>
        {/* <div className="grid grid-cols-2 my-10 border border-primaryPurple md:hidden">
          {data.map((storey) => (
            <SeccessStory {...storey} key={storey.id} />
          ))}
        </div> */}
      </Container>
    </section>
  );
};

const SeccessStory = ({ image, date, text, id }) => {
  const { locale } = useRouter();
  const { title, description, location } = text[locale];
  return (
    <div
      className={`flex  lg:even:flex-col lg:flex-col-reverse flex-col sm:flex-row  sm:even:flex-row-reverse `}
    >
      <div className=" relative h-[300px]  w-full">
        <Image src={image} objectFit="cover" layout="fill" />
      </div>

      <div className="sm:h-[300px] overflow-hidden  w-fit lg:w-auto ">
        <div className="p-4">
          <h2 className="text-primaryPurple  ">{title}</h2>
          <div className="flex gap-2 items-center py-2">
            <div className="flex gap-1 ">
              <CalendarIcon className="w-4 h-4 text-primaryPurple" />
              <p className="text-sm">{date}</p>
            </div>
            <div className="flex gap-1 ">
              <LocationMarkerIcon className="w-4 h-4 text-primaryPurple" />
              <p className="text-sm">{location}</p>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StoriesList;
