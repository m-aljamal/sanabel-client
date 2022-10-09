import { imageBuilder } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/router";
import { OutLink } from "../Button";
import { Container } from "../Container";

export default function JoinUs({ forms }) {
  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        {forms?.map((form) => (
          <JoinSection form={form} key={form._id} />
        ))}
      </div>
    </section>
  );
}

const JoinSection = ({ form }) => {
  const { locale } = useRouter();
  return (
    <div className="relative h-52 w-full">
      <Image
        src={imageBuilder(form.backgroundImage).url()}
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
              <Image
                src={imageBuilder(form.icon).url()}
                width={50}
                height={50}
              />
            </div>
            <div className="w-3/4">
              <p className="font-bold">{form.title[locale]}</p>
              <p className="text-sm">{form.description[locale]}</p>
              <OutLink
                href={form.slug.current}
                variant="outline"
                color="white"
                className="mt-2 ring-white text-xs px-6 font-bold"
              >
                {form.btnText[locale]}
              </OutLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
