import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { TienIch1 } from "./tien-ich-1";
import { TienIchNgoaiKhu } from "./tien-ich-ngoai-khu";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TienIchTest: FC = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);

  const images1 = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743569523/CitiGrand/wknefnvkwtx4kketerb9.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743569522/CitiGrand/omvthsgh87vprxxbfctf.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743569522/CitiGrand/bkwuhrdi8zy6occplpn3.jpg",
  ];
  const images2 = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743569523/CitiGrand/nbdmqitpjhqrrgc3vefo.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743575523/CitiGrand/ultiljagy5jbcrdjbcrg.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743575523/CitiGrand/fenaelkl4ojqsk60p9qm.jpg",
  ];
  const images3 = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743575972/CitiGrand/t3qrmsb5jwdkmuns2p7l.jpg"
  ];


  const imageCaptions1 = [
    "Tiện ích nội khu CitiGrand",
    "Hồ bơi cực rộng đến 200m²",
    "Khu Yoga ",
  ];
  const imageCaptions2 = ["Tiện ích nội khu CitiGrand"];
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
    <Box className="m-1">
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
          TIỆN ÍCH DỰ ÁN
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
      <Box>
        <div>
          <TienIch1 />
          <p
            className="font-tinhHoaHoiTu text-[#000000] text-[1em] ml-4 mr-4 text-justify "
            style={{ lineHeight: "30px" }}
          >
            <strong className="text-[#405f25]">
              Hệ thống tiện ích nội khu cao cấp{" "}
            </strong>
            được bố trí trên tầng thượng nơi gia chủ cùng với các thành viên
            trong gia đình có thể tận hưởng những khoảnh khắc bình yên riêng tư
            và ngắm nhìn toàn thành phố từ trên cao mà không bị che khuất tầm
            nhìn. Với: Hồ bơi tràn bờ, vườn thung lũng xanh thời thượng, khu
            yoga, phòng Gym, khu BBQ, Cafe Lounge, khu vận động ngoài trời, sân
            chơi trẻ em… đặt trên tầng cao nhất của dự án cũng đảm bảo vệ sinh
            và riêng tư cho cư dân khi chỉ cư dân Citigrand mới được sử dụng
            những tiện ích cao cấp này.
          </p>
        </div>
      </Box>

      <Box style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {images1.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=""
                onClick={() => {
                  setActiveIndex1(index);
                  setVisible1(true);
                }}
              />
              <p style={{ fontStyle: "italic", marginTop: "8px", textAlign: "center" }}>
                {imageCaptions1[index]}
              </p>
            </div>
          ))}
        </Slider>
      </Box>
      <ImageViewer
        visible={visible1}
        onClose={() => setVisible1(false)}
        activeIndex={activeIndex1}
        images={images1.map((src) => ({ src, key: src, alt: "Tiện ích nội khu" }))}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />

      <p
        className="font-tinhHoaHoiTu text-[#000000] text-[1em] m-4 text-justify"
        style={{ lineHeight: "30px" }}
      >
        Cùng với hàng chục tiện ích khác ở dưới đất như lối dạo bộ, sân cát trẻ
        em, sảnh đón sang trọng, thẻ từ an ninh, khu cát ngoài trờ …mang đến
        những trải nghiệm thú vị khi sống tại CitiGrand.
      </p>
      <Box style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {images2.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=""
                onClick={() => {
                  setActiveIndex2(index);
                  setVisible2(true);
                }}
              />
              <p style={{ fontStyle: "italic", marginTop: "8px", textAlign: "center" }}>
                {imageCaptions2[index]}
              </p>
            </div>
          ))}
        </Slider>
      </Box>
      <ImageViewer
        visible={visible2}
        onClose={() => setVisible2(false)}
        activeIndex={activeIndex2}
        images={images2.map((src) => ({ src, key: src, alt: "Tiện ích nội khu" }))}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />

      <p
        className="font-tinhHoaHoiTu text-[#000000] text-[1em] m-4 text-justify"
        style={{ lineHeight: "30px" }}
      >
        <strong>Hệ thống tiện ích ngoại khu:</strong> Do nằm trong khu đô thị
        Cát Lái được quy hoạch bài bản đến 152 hecta. Nên cư dân CitiGrand mặc
        nhiên được hưởng toàn bộ tiện ích trong toàn khu đô thị.
      </p>
      <TienIchNgoaiKhu />

      <ImageViewer
        visible={visible3}
        onClose={() => setVisible3(false)}
        activeIndex={activeIndex3}
        images={images3.map((src) => ({ src, key: src, alt: "Tiện ích ngoại khu" }))}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />

    </Box>
  );
};
