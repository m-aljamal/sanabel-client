import React from "react";
import { ButtonLink } from "@/components/Button";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
const Btn_Donate_Benfi = ({
  numberBeneficiaries,
  btnText = "donate",
  className,
}) => {
  const { locale } = useRouter();
  const text = {
    ar: {
      beneficiaries: "مستفيد",
      donate: "تبرع الآن",
      seeStory: "مشاهدة القصة",
    },
    en: {
      beneficiaries: "Beneficiaries",
      donate: "Donate Now",
      seeStory: "See Story",
    },
  };
  const { beneficiaries } = text[locale];
  return (
    <div className={clsx("flex md:flex-row flex-col gap-4", className)}>
      <ButtonLink href="/" className="px-7 text-[12px] ">
        {text[locale][btnText]}
      </ButtonLink>
      <ButtonLink
        href="/"
        variant="outline"
        className="text-[12px] px-3 font-medium"
      >
        <div className="flex items-center gap-1 ">
          <div className="flex gap-1 items-center">
            <FaHeart className="w-3 h-3 " />
            <p className="-mb-[3px]">{numberBeneficiaries}</p>
          </div>
          <p>{beneficiaries}</p>
        </div>
      </ButtonLink>
    </div>
  );
};

export default Btn_Donate_Benfi;
