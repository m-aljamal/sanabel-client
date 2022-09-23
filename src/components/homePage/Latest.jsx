import React from "react";
import { Container } from "../Container";
import LatestNews from "./LatestNews";
import HomePageCase from "./HomePageCase";
const Latest = ({ newsData, homePagecase }) => {
  return (
    <section className="bg-primaryWhite py-8">
      <Container>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6   ">
          <LatestNews newsData={newsData} />

          <HomePageCase homePagecase={homePagecase} />
        </div>
      </Container>
    </section>
  );
};

export default Latest;
