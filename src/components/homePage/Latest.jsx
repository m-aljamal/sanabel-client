import React from "react";
import { SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import LatestSwiperContainer from "../LatestSwiperContainer";
import LatestNews from "./LatestNews";
import MostCases from "./MostCases";
const Latest = ({ newsData }) => {
  return (
    <section className="bg-primaryWhite py-8">
      <Container>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6   ">
          <LatestNews newsData={newsData} />
          <MostCases />
        </div>
      </Container>
    </section>
  );
};

export default Latest;
