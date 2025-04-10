import React, { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, ImageViewer } from "zmp-ui";
import matbang1 from "static/mat-bang-chi-tiet-can-ho-chung-cu-new-lavida-di-an.jpg";
import matbang2 from "static/mat-bang-chi-tiet-can-ho-chung-cu-new-lavida-di-an-01-1.jpg";
import matbang3 from "static/Thiet-ke-Can-ho-1PN-Chung-cu-Nha-o-Xa-hoi-New-Lavida-Binh-Duong.jpg";
import matbang4 from "static/Thiet-ke-Can-ho-2PN-Chung-cu-Nha-o-Xa-hoi-New-Lavida-Binh-Duong.jpg";
import matbang5 from "static/Thiet-ke-Can-ho-1PN-38m2-Chung-cu-Nha-o-Xa-hoi-New-Lavida-Binh-Duong.jpg";

const images = [
  { key: "img1", src: matbang1, alt: "Mặt bằng 1" },
  { key: "img2", src: matbang2, alt: "Mặt bằng 2" },
  { key: "img3", src: matbang3, alt: "Mặt bằng 3" },
  { key: "img4", src: matbang4, alt: "Mặt bằng 4" },
  { key: "img5", src: matbang5, alt: "Mặt bằng 5" },
];

export const MatBangTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const nen1 =
  "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736155/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/w5hywbuv5r8elwkajlsd.png";
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <Box className="m-2">
      <Box className="text-center mt-4">
        <h2 className="font-bold text-[#1f726f] text-2xl uppercase">MẶT BẰNG DỰ ÁN</h2>
      </Box>

      <p className="font-content text-[#4a5d52] text-base my-4" style={{ lineHeight: "30px" }}>
        <strong>Mặt bằng chi tiết căn hộ chung cư New Lavida Dĩ An</strong> được 
        <strong> chủ đầu tư Toàn Thịnh Phát </strong> và 
        <strong> đơn vị phát triển Lê Phong </strong> đầu tư xây dựng trên quỹ đất 
        <strong> 10.000m² </strong> với hơn 
        <strong> 60.000m² </strong> diện tích sàn xây dựng, quy mô 
        <strong> 2 block cao 30 tầng </strong> với các căn hộ từ 
        <strong> 1-2 phòng ngủ. </strong>
      </p>

      {/* Slider */}
      <div className="p-7"  style={{
        borderRadius: "8px",
        backgroundImage: `url(${nen1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
        
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={image.key}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ maxWidth: "100%", borderRadius: "5px", cursor: "pointer" }}
                onClick={() => {
                  setActiveIndex(index);
                  setVisible(true);
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* ImageViewer */}
      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </Box>
  );
};
