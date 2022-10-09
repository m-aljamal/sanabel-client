import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "../Container";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
const data = [
  {
    id: 1,
    ar: {
      title: "رؤيتنا",
      body: "نهـــدف إلى تأمين ســـبل العيش الكريمة للمحتاجين فـــي المجتمع، وبناء جيل واع، ونشـــر الثقافـــة والتنميـــة بيـــن الأفـــراد؛ لتحقيـــق أكبـــر نجـــاح والوصول إلـــى الإبداع والرقـــي في كافـــة مجالات الحيـــاة ( ثقافياً، طبياً، تنموياً، إغاثياً)",
    },
    en: {
      title: "Our Vision",
      body: "To provide a secure and secure environment for the needy in the community, building a healthy and vibrant life, and spreading the culture and the development of the people, to achieve the biggest success and the access to the success in all areas of life (health, education, development, art)",
    },
  },
  {
    id: 2,
    ar: {
      title: "مهمتنا",
      body: "تقديم المساعدات الإنسانية للنازحين والمحتاجين، وتوفير الحياة الكريمة لهم، والسعي إلى نشر العدالة والخير. العمل على زرع القيم الراسخة في عالم سريع التغير. إحياء الخير في كل زمان ومكان.",
    },
    en: {
      title: "Our Mission",
      body: "To provide the human assistance to the needy and the people, and provide a secure and secure environment for them, and to strive to spread the goodness and the goodness in all times and all places.",
    },
  },
  {
    id: 3,
    ar: {
      title: "رسالتنا",
      body: "أن نحمي الناس من الاستغلال، وأن نقف مع المضطهدين والأشد فقراً وبؤساً، من أجل حياة كريمة، نبني المجتمع ونسعى للتنمية، معتمدين في ذلك على فريق من الشباب يحملون الأمانة والنزاهة بأرقى اشكالها لإسعاد الآخرين.",
    },
    en: {
      title: "Our Message",
      body: "To protect the people from the exploitation, and to prevent the extremism and extremism, from the aim of a healthy life, we build the community and strive to develop it, with the support of the children who are upholding the dignity of the others.",
    },
  },
  {
    id: 4,
    ar: {
      title: "مبادؤنا",
      body: "حفظ الأمانة وتسليمها بأرقى الصور تقديم المساعدات دون التمييز بين أي عرق أو لغة أو دين أو طائفة العمل على زرع القيم الراسخة في عالم سريع التغير إحياء الخير في كل زمان ومكان",
    },
    en: {
      title: "Our Principles",
      body: "To preserve the dignity and deliver it with the lowest images, we provide the assistance without the differentiation between any religion, language, or faith on the basis of the goodness that is being planted.",
    },
  },
  {
    id: 5,
    ar: {
      body: "الإنسانية- الكفاءة والتميز- الشفافية والمساءلة",
      title: "قيمنا",
    },
    en: {
      title: "Values",
      body: "Humanity - Integrity - Transparency - Accountability",
    },
  },
  {
    id: 6,
    ar: {
      title: "شركاؤنا",
      body: "تســعى السنابل لبنــاء علاقــات وشــراكات مــع المنظمــات الدوليــة والمحليــة للوصــول إلــى أكبــر قــدر ممكــن مــن الاستفادة للمجتمع السوري",
    },
    en: {
      title: "Our Partners",
      body: "We strive to build relationships and partnerships with the international and local organizations to achieve the biggest possible benefit from the community in the Syrian Arab Republic",
    },
  },
];
const title = {
  ar: "العمل معًا نحو النجاح لبناء مستقبل أفضل… !",
  en: "Work with us to build a better future… !",
};

const Collapse = ({ aboutText }) => {
  const { locale } = useRouter();
  const [open, setOpen] = React.useState({
    _id: aboutText[0]._id,
  });
  return (
    <section className="py-10">
      <Container>
        <div className=" grid sm:grid-cols-2 grid-cols-1   ">
          <div className="relative sm:w-full sm:h-full h-[200px]  mb-8   sm:mb-0 ">
            <Image
              src="/images/about/aboutLogo.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h2 className="text-primaryPurple font-bold text-lg">
              {title[locale]}
            </h2>
            <div>
              {aboutText.map((item) => (
                <Accordion
                  id={item._id}
                  key={item._id}
                  title={item.title[locale]}
                  content={item.description[locale]}
                  setOpen={() =>
                    item._id === open._id
                      ? setOpen({ _id: null })
                      : setOpen({ _id: item._id })
                  }
                  openId={open._id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collapse;

const Accordion = ({ id, title, content, setOpen, openId }) => {
  return (
    <div onClick={setOpen}>
      <div className="flex  justify-between  bg-white p-2 cursor-pointer ">
        <h2 className=" text-primaryPurple font-bold">{title}</h2>
        {openId === id ? (
          <div className=" bg-primaryPurple px-5 rounded-bl-lg rounded-tr-lg h-4 flex ">
            <ChevronDownIcon className="text-white w-5 h-5" />
          </div>
        ) : (
          <div className=" bg-primaryPurple px-5 rounded-bl-lg rounded-tr-lg h-4 flex">
            <ChevronUpIcon className="text-white w-5 h-5  " />
          </div>
        )}
      </div>
      <div
        className={`${
          openId === id
            ? "max-h-60  transition-[max-height]  duration-500 ease-in overflow-hidden"
            : "max-h-0 transition-[max-height] duration-300 ease-out  overflow-hidden"
        } `}
      >
        <p className="py-1 text-primaryPurple">{content}</p>
      </div>
    </div>
  );
};
