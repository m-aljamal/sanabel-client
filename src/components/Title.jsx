import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <div className=" space-y-[2px]">
        <div className="w-12 h-[1px]  bg-primaryPurple"></div>
        <div className="w-12 h-[1px]  bg-primaryPurple"></div>
      </div>
    </div>
  );
};

export default Title;
