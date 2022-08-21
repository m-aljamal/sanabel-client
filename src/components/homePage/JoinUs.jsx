import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonLink } from "../Button";
import { Container } from "../Container";

const data = [
  {
    id: 1,
    icon: "/images/tender-02.svg",
    background: "/images/background-1.jpg",
    text: {
      "ar": {
        title: "مناقصات",
        description:
          "يستطيع المزودين والتجار تقديم عروض المناقصات عبر هذه النافذة",
        buttonText: "طلب التزويد",
      },
      "en": {
        title: "Offers",
        description:
          "The suppliers and traders can offer their offers through this window",
        buttonText: "Request for participation",
      },
    },
  },
  {
    id: 2,
    background: "/images/background-2.jpg",
    text: {
      "ar": {
        title: "للتطوع",
        description:
          "الكثير من العمل والمجد بانتظارك بادر للتطوع في خدمة أهلنا في كل مكان",
        buttonText: "تطوع الآن",
      },
      "en": {
        title: "Volunteer",
        description:
          "Many jobs are waiting for you to volunteer in our service in any place",
        buttonText: "Volunteer now",
      },
    },
    icon: "/images/volunteering-02.svg",
  },
  {
    id: 3,
    background: "/images/background-3.jpg",
    text: {
      "ar": {
        title: "للتوظيف",
        description:
          "إذا كان لديك الخبرة الكافية وتؤمن بالعمل اﻹنساني فنحن نبحث عنك!",
        buttonText: "طلبات التوظيف",
      },
      "en": {
        title: "Employment",
        description:
          "If you have the necessary experience and trust in the work of an Egyptian human being, we will search for you!",
        buttonText: "Request for employment",
      },
    },
    icon: "/images/Recruit-02.svg",
  },
];

export default function JoinUs() {
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        {data.map(({ icon, id, text, background }) => (
          <JoinSection
            icon={icon}
            text={text}
            key={id}
            background={background}
          />
        ))}
      </div>
    </section>
  );
}

const JoinSection = ({ icon, text, background }) => {
  const { locale } = useRouter();
  const { title, description, buttonText } = text[locale];
  return (
    <div className="relative h-52 w-full">
      <Image
        src={background}
        layout="fill"
        className="w-full"
        objectFit="cover"
        priority
        quality={100}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <Container>
          <div className="flex gap-5    text-white">
            <div>
              <Image src={icon} width={50} height={50} />
            </div>
            <div className="w-3/4">
              <p className="font-bold">{title}</p>
              <p className="text-sm">{description}</p>
              <ButtonLink
                href="/"
                variant="outline"
                color="white"
                className="mt-2 ring-white text-xs"
              >
                {buttonText}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
