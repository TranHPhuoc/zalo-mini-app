import React, { useState } from "react";
import { Box, ImageViewer } from "zmp-ui";



const ViTriDuAn = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);


  const imgSrc =
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743456330/GemSkyWorld/v26bjrksznsh0gzuf7li.jpg";

  const images = [
    { key: "banner_notification", src: imgSrc, alt: "Banner Notification" },
  ];

  return (
    <Box className="m-4 text-justify">
      {/* Tiêu đề */}
      <div className="text-center">
        <h2 className="font-tinhHoaHoiTu font-bold uppercase text-[1.8em] text-[#82ba41]">
          Vị trí dự án
        </h2>
        <div className="w-[150px] h-[1px] bg-[#82ba41] mx-auto my-2 rounded"></div>
      </div>

      {/* Mô tả */}
      <p className="text-[#4a5d52] text-[1em] leading-[30px] font-tinhHoaHoiTu">
        Tọa lạc tại xã Long Đức, huyện Long Thành, tỉnh Đồng Nai, cách sân bay
        quốc tế Long Thành khoảng 4 km, Khu đô thị thương mại giải trí Gem Sky
        World được thừa hưởng tối đa lợi thế của vị trí gần kề sân bay. Gem Sky
        World còn kết nối linh hoạt với trung tâm thành phố, tỉnh Bà Rịa Vũng
        Tàu, các tỉnh miền Tây và tất cả các khu vực lân cận… bằng đường cao tốc
        TP.HCM - Long Thành - Dầu Giây, cao tốc Biên Hoà - Vũng Tàu, cao tốc Bến
        Lức - Long Thành và các tuyến đường huyết mạch như Quốc lộ 1A, Quốc lộ
        51…
      </p>

      {/* Ảnh bản đồ */}
      <Box
        className="mt-4 cursor-pointer"
        onClick={() => {
          setActiveIndex(0);
          setVisible(true);
        }}
      >
        <img
          className="w-full h-auto rounded-lg object-cover"
          src={imgSrc}
          alt="Bản đồ Gem Sky World"
        />

      </Box>

      {/* Modal hiển thị ảnh */}
      <ImageViewer
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        visible={visible}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />

      {/* Ghi chú */}
      <p className="text-[#4a5d52] text-[0.75em] text-center italic leading-[30px] font-content mt-2">
        Vị trí chi tiết khu đô thị Gem Sky World
      </p>
    </Box>
  );
};

export default ViTriDuAn;
