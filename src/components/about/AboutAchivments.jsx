import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { TitleWithIcon } from "../Title";
import CountUp from "react-countup";
const AboutAchivments = ({ achivmentsList }) => {
  const [numberOfAchivments, setNumberOfAchivments] = React.useState(4);
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

  function addMoreAchivments() {
    if (numberOfAchivments < achivmentsList.length) {
      setNumberOfAchivments(numberOfAchivments + 8);
    }
  }

  return (
    <section className="bg-primaryPurple py-10">
      <Container>
        <TitleWithIcon title={title} subTitle={subtitle} color="white" />
        <div className="grid grid-cols-4 grid-flow-row place-items-center mt-10 gap-6">
          {achivmentsList.slice(0, numberOfAchivments).map((archive, i) => (
            <div
              key={i}
              className="text-white flex flex-col space-y-2 items-center"
            >
              <Image
                src={imageBuilder(archive.image).url()}
                width={50}
                height={50}
              />
              <CountUp
                start={0}
                end={archive.number}
                duration={2}
                separator=" "
                className="md:text-xl font-bold"
              />

              <h2 className="md:text-xl ">{archive.title[locale]}</h2>
            </div>
          ))}
        </div>
        {achivmentsList.length > numberOfAchivments ? (
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
