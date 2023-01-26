import { calculatePercentage } from "@/lib/helperFunctions";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

const ProgresPar = ({ paid, target, className }) => {
  const present = calculatePercentage(paid, target);
  const { locale } = useRouter();

  return (
    <div className={clsx("px-4 flex justify-center mb-8", className)}>
      <div className="w-full ring-1 ring-gray-500  h-4 bg-white rounded-lg">
        <div
          className={` bg-primaryPurple h-4 ${
            locale === "ar" ? "rounded-r-lg" : "rounded-l-lg"
          } relative`}
          style={{ width: `${present}%` }}
        >
          <div
            className={clsx(
              "absolute",
              locale === "ar" ? "-left-2" : "-right-2"
            )}
          >
            <div className="relative bg-primaryPurple w-8 h-8 flex items-center justify-center -mt-[7px]  ring-white ring-2 rounded-full  ">
              <p className="text-white text-xs font-bold">%{present}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgresPar;
