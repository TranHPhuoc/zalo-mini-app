import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TienIchNoiKhu: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const img1 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547056/1_btrl3o.png";
  const img2 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547057/2_eoqwjq.png";
  const img3 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547059/3_rd2hii.png";
  const img4 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547056/4_sltq4a.png";
  const img5 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547057/5_yfvznt.png";
  const img6 =
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737547057/6_gkgth9.png";

  const images = [img1, img2, img3, img4, img5, img6];

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
    <Box className="p-3 bg-[#387270]">
      <div className="text-center font-tinhHoaHoiTu m-3">
        <h2 className="text-white text-[1.5em]">Tiện ích nội khu</h2>
        <strong className="text-[#ffdb8f] text-[2em]">DỰ ÁN HAPPY HOME</strong>
      </div>

      <div className="text-center text-white">
        <p>
          Tại Happy Home, bạn sẽ được trải nghiệm các chuỗi tiện ích nội khu đa
          dạng và ưu ái dành cho gia đình bạn.
        </p>
      </div>

      <PlanList />

      <Box style={{ overflow: "hidden" }}>
        <Slider {...settings}>
        {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=""
                onClick={() => {
                  setActiveIndex(index);
                  setVisible(true);
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
        
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </Box>
  );
};

const plans = [
  { id: 1, description: "Khu Shop House", tooltip: "#tooltip-2612" },
  {
    id: 2,
    description: "Bệnh viện Đa khoa Quốc tế DTA",
    tooltip: "#tooltip-2613",
  },
  {
    id: 3,
    description: "Trường mẫu giáo Quốc tế DTA",
    tooltip: "#tooltip-2617",
  },
  {
    id: 4,
    description: "Trường tiểu học Quốc tế DTA",
    tooltip: "#tooltip-2616",
  },
  { id: 5, description: "Hồ cảnh quan - 12ha", tooltip: "#tooltip-2723" },
  { id: 6, description: "Khu vui chơi", tooltip: "#tooltip-2724" },
];

const PlanList = () => {
  return (
    <Box className="p-3">
      <ul
        className="list-ground-plan flex flex-wrap mt-5 md:mt-8 xl:mt-10 max-h-[calc(235/1920*100rem)] xl:max-h-[calc(300/1920*100rem)] overflow-x-hidden overflow-y-auto"
        id="element1"
      >
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="text-white flex mb-[calc(10/1920*100rem)] w-full md:w-1/2 xl:w-1/3 pr-1"
            data-plan={plan.tooltip}
          >
            <span className="number text-center w-[calc(30/1920*100rem)] min-w-[calc(30/1920*100rem)] h-[calc(30/1920*100rem)] flex-center border border-solid border-[#ffdb8f] bg-transparent mr-[calc(10/1920*100rem)] rounded-full xl:text-[calc(14/1920*100rem)]">
              {plan.id}
            </span>
            <span>{plan.description}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default PlanList;
