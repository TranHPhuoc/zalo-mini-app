import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { TienIch1 } from "./tien-ich-1";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TienIchTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454151/GemSkyWorld/jgotzlxq9n3ozawek9rh.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454962/GemSkyWorld/to8snkejg07l6f1iz9eh.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454151/GemSkyWorld/bzimvho5a7srtlzivb6f.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454151/GemSkyWorld/sdryma6b0fbdnhljyqdv.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454151/GemSkyWorld/glk7sw2jqd1wpe1kgrvs.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454151/GemSkyWorld/rek7oshwgzzb06anki8w.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454152/GemSkyWorld/igls39xzab7rfipfvryv.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454152/GemSkyWorld/tmeiletcldidtnf1cxyw.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454152/GemSkyWorld/gyeztnkmfv9af7bnrgzf.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454153/GemSkyWorld/d5njddp8zvaaurwldjji.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743454153/GemSkyWorld/jtzqs3mgrlickrtjpek5.jpg"

  ];
  const img =
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743455407/GemSkyWorld/yh0682xxvststckgqfx1.jpg";
  const imageCaptions = [
    "Mặt bằng tiện ích nội khu Gem Sky World",
    "Công viên Sky Park",
    "Khu vui chơi công viên Sky Park ",
    "Quảng trường Gem Sky World",
    "Khu vực sinh hoạt ngoài trời",
    "Leo núi mô hình của trẻ em",
    "Công viên buổi đêm",
    "Tiện ích mê cung",
    "Mô hình máy bay bằng hoa",
    "Không gian xanh",
    "Cổng chào",
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
    <Box className="m-0.5 text-justify">
      <Box className="text-center">
        <div className="mt-4">
          <h2
            className="font-tinhHoaHoiTu font-bold"
            style={{
              fontSize: "1.8em",
              textTransform: "uppercase",
              color: "#82ba41",
            }}
          >
            TIỆN ÍCH DỰ ÁN
          </h2>
        </div>
      </Box>
      <Box
        style={{
          width: "150px", // Độ dài gạch chân
          height: "1px", // Độ dày gạch chân
          backgroundColor: "#82ba41",
          margin: "8px auto 0", // Canh giữa và cách chữ một chút
          borderRadius: "2px",
          marginTop: "6px",
          marginBottom: "25px", // Bo tròn 2 đầu
        }}
      ></Box>
      <Box>
        <div>
          <TienIch1 />
          <p
            className="font-content text-[#4a5d52] text-[1em] ml-4 mr-4 "
            style={{ lineHeight: "30px" }}
          >
            <strong>Tiện ích dự án nhà phố Gem Sky World </strong>với định hướng
            sẽ trở thành “Đô thị hạt nhân” của Huyện Long Thành, chính vì thế mà
            Đất Xanh Group đã rất chú trọng tới việc tích hợp hệ thống tiện ích
            5* đẳng cấp bậc nhất khu vực vào dự án, cùng tiện ích phong phú, đem
            đến trải nghiệm muôn màu với khu giải trí - vận động ngoài trời và
            trong nhà đa chức năng bao gồm quảng trường, vòng đu quay, khu trò
            chơi Aventure Forest, khu leo núi, mê cung… đầy thử thách và kỳ thú,
            kết hợp với hạ tầng trong khu vực đã hoàn thiện đồng bộ. Gem Sky World Long
            Thành Đồng Nai chính là dự án mang đến cơ hội đầu tư có 1-0-2 trong
            năm 2024 này.
          </p>
        </div>
      </Box>
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
          margin: "15px -2px 0px -15px",
          opacity: "0.5",
        }}
      ></section>
    </Box>
  );
};
