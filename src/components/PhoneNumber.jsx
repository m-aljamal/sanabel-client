import React from "react";
import { PHONE_1 } from "@/constant/info";

const PhoneNumber = ({ number = PHONE_1 }) => {
  return <p style={{ direction: "ltr" }}>{number}</p>;
};

export default PhoneNumber;
