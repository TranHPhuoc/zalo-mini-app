import React, { FC, useState } from "react";
import { Box, Text } from "zmp-ui";
import { DeliveryFormDangKy } from "./layout/deliveryFormDangky";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "static/cong-vien-gemini.jpg";
import img2 from "static/cong-vien-sport.jpg";
import img3 from "static/phong-gym.jpg";
import img4 from "static/san-tennis.jpg";
import img5 from "static/ho-boi-tran.jpg";
import img6 from "static/ho-boi-tre-em.jpg";

const HoursPage: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box className="m-4">
      <div className="text-center font-tinhHoaHoiTu mb-5">
        <h2 className="text-[#4a5d52] text-[2em]">Tiện ích nổi bật tại</h2>
        <strong className="text-[#f9856f] text-[3em]">THE CLASSIA</strong>
      </div>
      <Box style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Slide 1" className="" />
          </div>
          <div>
            <img src={img2} alt="Slide 2" className="" />
          </div>
          <div>
            <img src={img3} alt="Slide 3" className="" />
          </div>
          <div>
            <img src={img4} alt="Slide 4" className="" />
          </div>
          <div>
            <img src={img5} alt="Slide 5" className="" />
          </div>
          <div>
            <img src={img6} alt="Slide 6" className="" />
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default HoursPage;
