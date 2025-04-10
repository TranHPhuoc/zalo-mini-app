import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NhaMau: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Định nghĩa mảng ảnh
  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743164283/the-prive/gjwq5djhvjcgqznzdn3y.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160234/the-prive/zl4rfq9fcstg5lfupr5j.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743164283/the-prive/ovn0ey5lmapxe5apku1d.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743164283/the-prive/ipyrxikoxapalmezimxr.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743164284/the-prive/duo1yeuh0cowhysbte5j.jpg"
  ];


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
    <Box className="p-3">
      <div className="text-center font-tinhHoaHoiTu m-3">
        <h2
          className="font-tinhHoaHoiTu font-bold text"
          style={{
            fontSize: "1.8em",
            textTransform: "uppercase",
            background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span>NHÀ MẪU DỰ ÁN THE PRIVE</span>
        </h2>
      </div>

      <div className="text-black">
      </div>
      <br></br>

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
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
              </p>
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
