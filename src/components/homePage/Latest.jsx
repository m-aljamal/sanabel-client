import React from "react";
import { Container } from "../Container";
import LatestNews from "./LatestNews";
const Latest = () => {
  return (
    <section className="bg-primaryWhite py-8">
      <Container>
        <div className=" grid grid-cols-2 ">
          <div>
            <LatestNews />
          </div>
          <div>casses</div>
        </div>
      </Container>
    </section>
  );
};

export default Latest;
