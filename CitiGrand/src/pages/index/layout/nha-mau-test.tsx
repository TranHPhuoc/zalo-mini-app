import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const NhaMauTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images1 = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743582584/CitiGrand/lsnclqo8xcs7cedyto3p.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743582585/CitiGrand/gqfeq6tg9mckczxwztrj.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743582585/CitiGrand/wjss9zpy18lwcxp63gnf.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743582585/CitiGrand/h8z82wrbnkfeuzkxzowc.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743582585/CitiGrand/sv1vtiqejkv4lwwqxmfs.jpg"
  ];

  const imageCaptions1 = [
    "Phòng khách căn hộ CitiGrand",
    "Phòng ngủ Master căn hộ CITIGRAND",
    "Phòng ngủ nhỏ căn hộ CITIGRAND",
    "Bếp căn hộ CITIGRAND",
    "WC căn hộ CITIGRAND"
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
      <div className="text-center font-tinhHoaHoiTu ">
        <Box
          className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
          style={{
            textTransform: "uppercase",
            fontSize: "1.6em",
            color: "#405f25",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "15px",
          }}
        >
          <span style={{ position: "relative", display: "inline-block" }}>
            NHÀ MẪU DỰ ÁN
            <img
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743561760/CitiGrand/luoqrp32dudgtwtyksop.png"
              style={{
                position: "absolute",
                top: "-12px",
                left: "-20px",
                width: "50px",
                height: "auto",
              }}
            />
            <img
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743561760/CitiGrand/luoqrp32dudgtwtyksop.png"
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-20px",
                width: "50px",
                height: "auto",
                transform: "rotate(180deg)",
              }}
            />
          </span>
        </Box>
      </div>
      <Box style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {images1.map((src, index) => (
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
                {imageCaptions1[index]}
              </p>
            </div>
          ))}
        </Slider>
      </Box>


      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images1.map((src) => ({ src }))}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </Box>
  );
};
