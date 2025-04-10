import React, { useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

const ViTriDuAn = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const imgSrc =
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743565305/CitiGrand/dulvrjwwrwtnueaxr14v.jpg";

  const images = [
    {
      src: imgSrc,
      key: "banner_notification",
      alt: "Bản đồ vị trí CitiGrand"
    }
  ];

  return (
    <Box
      className="m-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dl4szj3ff/image/upload/v1743565300/CitiGrand/fyfcnn6glzb2iifyfv30.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
          marginTop: "8px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          VỊ TRÍ DỰ ÁN
        </span>
      </Box>
      <div className="w-screen h-screen ">
        <div className="flex items-center space-x-4 bg-green-900 text-white p-4 rounded-lg font-tinhHoaHoiTu">
          <div
            className="relative w-20 h-20 flex flex-col justify-center items-center rounded-full font-bold text-lg shrink-0"
            style={{ border: "solid 1px #f1c462", color: "#f1c462" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 rounded-full"></div>
            <span className="text-4xl">2</span>
            <span className="text-xs">Phút</span>
          </div>
          <p
            className="leading-snug text-justify"
            style={{
              fontSize: "15px",
              color: "#ffffff",
              marginRight: "5px",
            }}
          >
            đến cụm trường mầm non tới trung học chuẩn quốc gia, công viên trung
            tâm 4 ha
          </p>
        </div>
        <div className="flex items-center space-x-4 bg-green-900 text-white p-4 rounded-lg font-tinhHoaHoiTu">
          <div
            className="relative w-20 h-20 flex flex-col justify-center items-center rounded-full font-bold text-lg shrink-0"
            style={{ border: "solid 1px #f1c462", color: "#f1c462" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 rounded-full"></div>
            <span className="text-4xl">9 </span>
            <span className="text-xs">Phút</span>
          </div>
          <p
            className="leading-snug text-justify"
            style={{
              fontSize: "15px",
              color: "#ffffff",
              marginRight: "5px",
            }}
          >
            đến Phú Mỹ Hưng
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-green-900 text-white p-4 rounded-lg font-tinhHoaHoiTu">
          <div
            className="relative w-20 h-20 flex flex-col justify-center items-center rounded-full font-bold text-lg shrink-0"
            style={{ border: "solid 1px #f1c462", color: "#f1c462" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 rounded-full"></div>
            <span className="text-4xl">10</span>
            <span className="text-xs">Phút</span>
          </div>
          <p
            className="leading-snug "
            style={{
              fontSize: "15px",
              color: "#ffffff",
              marginRight: "5px",
            }}
          >
            đến các tiện ích liền kề như Estella Place, Vincom Mega Mall, Mega
            Market, Co.opMart, Big C...
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-green-900 text-white p-4 rounded-lg font-tinhHoaHoiTu">
          <div
            className="relative w-20 h-20 flex flex-col justify-center items-center rounded-full font-bold text-lg shrink-0"
            style={{ border: "solid 1px #f1c462", color: "#f1c462" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 rounded-full"></div>
            <span className="text-4xl">15</span>
            <span className="text-xs">Phút</span>
          </div>
          <p
            className="leading-snug"
            style={{
              fontSize: "15px",
              color: "#ffffff",
              marginRight: "5px",
            }}
          >
            đến Quận 1
          </p>
        </div>

        <Box
          className="mt-4 cursor-pointer"
          onClick={() => {
            setActiveIndex(0);
            setVisible(true);
          }}
        >
          <img
            style={{
              width: "96%",
            }}
            className=" h-auto object-cover "
            src={imgSrc}
            alt="Bản đồ CitiGrand"
          />
        </Box>
      </div>

      {/* Ảnh bản đồ */}

      {/* Modal hiển thị ảnh */}
      <ImageViewer
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        visible={visible}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </Box>
  );
};

export default ViTriDuAn;
