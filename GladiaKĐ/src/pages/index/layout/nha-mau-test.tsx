import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlideSkeleton } from "components/skeletons";

export const NhaMauTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images1 = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744164273/Gladia%20Khang%20%C4%90i%E1%BB%81n/wvehhynydw4ayrwl1jw4.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744164273/Gladia%20Khang%20%C4%90i%E1%BB%81n/icivbvfkwqpd4nl7ixjv.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744164273/Gladia%20Khang%20%C4%90i%E1%BB%81n/oy9ax05zlwsrbv7vvlly.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744164275/Gladia%20Khang%20%C4%90i%E1%BB%81n/koiepxtxqk60skgjcm4t.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744164275/Gladia%20Khang%20%C4%90i%E1%BB%81n/vqe49gt71fjlsgkkr6cl.jpg",
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
            color: "#1268b3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "8px",
            marginTop: "8px",
          }}
        >
          <span style={{ position: "relative", display: "inline-block" }}>
            NHÀ MẪU DỰ ÁN
          </span>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "8px 0",
            marginBottom: "15px",
          }}
        >
          <hr
            style={{
              border: "none",
              borderTop: "2px solid #1268b3",
              width: "50%",
            }}
          />
        </div>
      </div>
      <div className="font-tinhHoaHoiTu text-justify mb-3">
        <p>
          Nhà mẫu dự án căn hộ <strong>Gladia Khang Điền</strong> thiết kế theo phong cách hiện
          đại, trang trọng pha chút cổ điển, làm cho chủ nhân ở đây có cái nhìn
          mới hơn về nhà ở thông minh, căn hộ thông minh. Hội tụ đầy đủ các tiện
          ích thông minh trong nhà của bạn. Nhà Phố, Biệt Thự Gladia Khang Điền
          mang đậm chất sang trọng, tối ưu không gian sống cho gia đình bạn.
          <br></br>
        </p>
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
