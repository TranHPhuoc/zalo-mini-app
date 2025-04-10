import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const MatBangDuAn: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162191/the-prive/thq8u3dqxfztbiifsn9v.png",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162189/the-prive/id1watynydu58kcluzyh.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162189/the-prive/kzfpuubbujeke0la9sob.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162190/the-prive/y2kk4kab2d1zobwpvmxy.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162190/the-prive/xp06v7zdsdgphfw9yuv5.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743162190/the-prive/lkunb1zbq5kxbdvtliqs.jpg",
  ];

  const captions = [
    "Mặt bằng tổng thể dự án The PrivePrive",
    "Tầng 1 & 2 Đất Xanh Homes Riverside",
    "Tầng 3 Đất Xanh Homes Riverside",
    "Tầng 3-24 & Tầng 27-31 Đất Xanh Homes Riverside ",
    "Tầng 25 & 26 Đất Xanh Homes Riverside",
    "Tầng 32 & 33 Đất Xanh Homes Riverside"
  ];

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <Box className="p-3">
      <div className="text-center font-tinhHoaHoiTu m-3 ">
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
          <span>MẶT BẰNG DỰ ÁN THE PRIVE</span>
        </h2>
      </div>
      <p className="font-content mb-5">
        Mặt bằng <strong>The Prive</strong> nổi bật với những căn hộ có diện tích đa dạng, mang
        đến sự lựa chọn phong phú cho khách hàng. Mỗi căn hộ đều có thiết kế
        vuông vức, tối ưu hóa không gian sống và hai mặt tiếp giáp với sông,
        giúp đón ánh sáng và gió tự nhiên một cách tối đa. Đặc biệt, các cửa sổ
        cửa lùa được lắp đặt khoa học, tạo điều kiện cho không gian sống luôn
        thoáng đãng và gần gũi với thiên nhiên, thể hiện đúng tinh thần “sống
        xanh” mà cư dân đô thị hiện nay đang hướng đến.
      </p>

      <div className="relative w-full flex justify-center items-center mb-3">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevImage}
          style={{
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="w-4/5 mx-auto cursor-pointer"
          onClick={() => setVisible(true)}
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextImage}
          style={{
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
      </div>
      <p
        className="text-black my-5 font-content"
        style={{
          fontStyle: "italic",
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        {captions[activeIndex]}
      </p>
      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
      />
    </Box>
  );
};
