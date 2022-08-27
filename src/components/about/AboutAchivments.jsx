import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";

const AboutAchivments = ({ achivmentsList }) => {
  const [numberOfAchivments, setNumberOfAchivments] = React.useState(10);
  const { locale } = useRouter();
  const sectionTitle = {
    ar: {
      title: "منجزاتنا",
      subtitle: "بفضل بخائكم أنجزنا الكثير من الحملات....",
    },
    en: {
      title: "Our achievements",
      subtitle: "We have achieved many achievements....",
    },
  };
  const { title, subtitle } = sectionTitle[locale];
  const testPosts = [
    ...achivmentsList,
    ...achivmentsList,
    ...achivmentsList,
    ...achivmentsList,
    ...achivmentsList,
  ];

  function addMoreAchivments() {
    if (numberOfAchivments < testPosts.length) {
      setNumberOfAchivments(numberOfAchivments + 10);
    }
  }

  return (
    <section className="bg-primaryPurple py-10">
      <Container>
        <TitleWithIcon title={title} subTitle={subtitle} color="white" />
        <div className=" grid grid-cols-5 place-items-center mt-10 gap-8">
          {testPosts.slice(0, numberOfAchivments).map((archive) => (
            <div key={archive._id} className="text-white text-center">
              <Image
                src={imageBuilder(archive.image).url()}
                width={50}
                height={50}
              />
              <p className="text-xl font-bold">{archive.number}</p>
              <h2 className="text-xl ">{archive.title[locale]}</h2>
            </div>
          ))}
        </div>
        {testPosts.length > numberOfAchivments ? (
          <div
            className="flex justify-center mt-10"
            onClick={addMoreAchivments}
          >
            <Button color="white">مشاهدة المزيد</Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default AboutAchivments;
