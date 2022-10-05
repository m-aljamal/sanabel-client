import { TitleWithIcon } from "../Title";
import Image from "next/image";
import { imageBuilder } from "@/lib/sanity";
import { useText } from "@/constant/useText";
const Media = ({ mediaData }) => {
  const { mediaText, seeOurNewsOnSocialText } = useText();
  return (
    <section>
      <TitleWithIcon title={mediaText} subTitle={seeOurNewsOnSocialText} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2 ">
        {mediaData.map((img) => (
          <div key={img._id} className="relative  h-[300px] ">
            <Image
              src={imageBuilder(img.image).url()}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
