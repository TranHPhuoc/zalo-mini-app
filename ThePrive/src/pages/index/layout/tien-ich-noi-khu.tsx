import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TienIchNoiKhu: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Định nghĩa mảng ảnh
  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160233/the-prive/pjsshfoy6xb4iv6pbx51.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160234/the-prive/zl4rfq9fcstg5lfupr5j.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160232/the-prive/xrrvzfjnrl5rdko6crzv.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160233/the-prive/whbntymftgkoxgu5imxn.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743160233/the-prive/tzcrpxw7ktkwp8gmerac.jpg"
  ];
  const img =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743136548/the-prive/aneldt9vpdfavomwid3t.jpg";

  const imageCaptions = [
    "Công viên bên sông dự án The Prive",
    "Phối cảnh sảnh dự án The Prive",
    "Hồ bơi tràn bờ dự án The Prive ",
    "Tiện ích hồ bơi dự án The Prive",
    "Khu vui chơi trẻ em dự án The Prive"
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
          <span>TIỆN ÍCH NỘI KHU THE PRIVE</span>
        </h2>
      </div>

      <div className="text-black">
        <p>
          The Privé mang đến không gian sống đỉnh cao với hơn
          <strong> 45</strong> tiện ích vượt trội, được thiết kế để đáp ứng mọi
          nhu cầu từ giải trí, thư giãn đến chăm sóc sức khỏe:
        </p>
        <ul
          style={{
            textAlign: "justify",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li><strong>Hồ bơi đẳng cấp:</strong> Hồ bơi tràn bờ chuẩn resort, hồ bơi trên cao và khu vực tắm nắng.</li>
          <li><strong>Không gian xanh thư giãn:</strong> Công viên cây xanh, vườn trên cao, vườn Nhật, và các khu ngắm cảnh lãng mạn.</li>
          <li><strong>Khu thể thao:</strong> Sân tennis, khu thể thao đa năng, sân bóng rổ, phòng gym hiện đại.</li>
          <li><strong>Giải trí gia đình:</strong> Outdoor cinema, khu vui chơi trẻ em, khu BBQ, quảng trường đa chức năng, và sảnh lounge đẳng cấp.</li>
          <li><strong>Chăm sóc sức khỏe và làm đẹp:</strong> Phòng spa, hair beauty salon, tiệm thuốc tây.</li>
          <li><strong>Tiện nghi sinh hoạt:</strong> Nhà trẻ, cafeteria, siêu thị mini, nhà hàng sang trọng.</li>
          <li><strong>An ninh hiện đại:</strong> Camera giám sát 24/7, thẻ từ căn hộ, hệ thống intercom.</li>
        </ul>
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
                {imageCaptions[index]}
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
            <section
        style={{
          backgroundImage: `url(${img})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "35%",
          margin: "0px -12px 0px -16px",
        }}
      ></section>
    </Box>
  );
};
