import React from "react";
import { SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import LatestSwiperContainer from "../LatestSwiperContainer";
import LatestNews from "./LatestNews";
const Latest = () => {
  return (
    <section className="bg-primaryWhite py-8">
      <Container>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 ">
          <div>
            <LatestNews />
          </div>
          <div className="">
            <LatestSwiperContainer sectionTitle="أهم الحالات">
              <SwiperSlide>
                <div className="bg-red-200 ">1</div>
                <div className="bg-red-200 ">2</div>
                <div className="bg-red-200 ">3</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-red-200 ">4</div>
                <div className="bg-red-200 ">5</div>
                <div className="bg-red-200 ">6</div>
              </SwiperSlide>
            </LatestSwiperContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Latest;
