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
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762893/GreenTown/unsdcxcg3utemk7gihmq.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762893/GreenTown/tvjajx8meyr0rlma776l.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762893/GreenTown/odmfacjnn1tdiqtaicyd.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762893/GreenTown/ohcrcwpd5lso386tvk4l.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762893/GreenTown/ahloy2w3cj8c0ypd1igh.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762894/GreenTown/hiqyfy5znbfbukchjwjl.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762894/GreenTown/wytwninwbnhbs4ulncjm.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762894/GreenTown/ss8y0xze8j7wf50susye.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743762894/GreenTown/fpipyesuydwlwbwehuw7.jpg"

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
            color: "#30726f",
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
              borderTop: "2px solid #30726f",
              width: "50%",
            }}
          />
        </div>
      </div>
      <div className="font-tinhHoaHoiTu text-justify mb-3">
        <p>
          <strong>Nhà mẫu căn hộ Green Town (2 phòng ngủ 1 nhà vệ sinh)</strong>
          : Với giá bán Green Town rất hợp lý, căn hộ này có diện tích từ: 49m
          <sup>2</sup>-52.7m<sup>2</sup> (1 phòng khách – 2 phòng ngủ – 1 nhà vệ
          sinh – 1 phòng bếp và 1 logia) khá phù hợp với hầu hết những gia đình
          trẻ còn ít tài chính, độc thân và mua để đầu tư cho thuê.<br></br>
          <strong>Nhà mẫu căn hộ Green Town (2 phòng ngủ 2 nhà vệ sinh)</strong>
          : Diện tích cân xứng từ 63m<sup>2</sup>-71.89m<sup>2</sup> (1 phòng
          khách – 2 phòng ngủ – 2 nhà vệ sinh – 1 phòng bếp và 1 logia) thiết kế
          hài hòa, độc đáo và hiện đại của đại đa số mọi gia đình.<br></br>
          <strong>Nhà mẫu căn hộ Green Town (3 phòng ngủ 2 nhà vệ sinh)</strong>
          : Nếu gia đình bao gồm nhiều thế hệ, có cả ông bà – cha mẹ – con cháu
          và bạn yêu thích phong cách sang trọng với nhu cầu sống cao, sự rộng
          rãi, phong thủy… thì căn hộ Green Town với 3 phòng ngủ với diện tích
          từ 93m<sup>2</sup>-98m<sup>2</sup> (1 phòng khách – 1 phòng bếp – 2
          nhà vệ sinh – 3 phòng ngủ và 2 logia) là sự lựa chọn hợp lý và tuyệt
          vời.<br></br>
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
