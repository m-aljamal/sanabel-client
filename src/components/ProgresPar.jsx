import React from "react";

const ProgresPar = ({ present }) => {
  return (
    <div className="px-4 flex justify-center mb-8">
      <div className="w-full ring-1 ring-gray-500  h-4 bg-white rounded-lg">
        <div
          className={` bg-primaryPurple h-4 rounded-r-lg relative`}
          style={{ width: `${present}%` }}
        >
          <div className="absolute -left-2">
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
