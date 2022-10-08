import React from "react";
import { BiErrorAlt } from "react-icons/bi";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex gap-1 items-center">
      <BiErrorAlt className="h-5 w-5 text-red-700" />
      <p className="text-lg text-red-500  ">{error}</p>
    </div>
  );
};

export default ErrorMessage;
