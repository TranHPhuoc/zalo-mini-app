import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import { BannerGioiThieu } from "./banner-gioithieu";
export const GioiThieu: FC = () => {
  return (
    <Box className="col-inner m-4">
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#405f25",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          GIỚI THIỆU DỰ ÁN
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
      <div className="font-tinhHoaHoiTu">
        <p className="text-justify">
          <strong style={{color: "#405f25"}}>CITIGRAND</strong> là dự án căn hộ chất lượng cao cấp đầu tiên tại <strong style={{color: "#405f25"}}>Khu đô thị
          Cát Lái, Quận 2,</strong> sở hữu hệ thống tiện ích ấn tượng với vườn trên mái
          thời thượng, 6 lõi không gian xanh xuyên suốt, hồ bơi vô cực, vườn kết
          nối hạnh phúc, khu vui chơi trẻ em, khu BBQ, thẻ từ an ninh, sảnh đón
          sang trọng... Chủ nhân <strong style={{color: "#405f25"}}>CITIGRAND</strong> sẽ được tận hưởng không khí tươi mát
          của thiên nhiên, mở rộng tầm nhìn đất trời bao la, cho tâm hồn thư
          thái và trái tim tự do nhảy múa.
          <div className="mt-4">
            <BannerGioiThieu />
          </div>  
        </p>
      </div>
    </Box>
  );
};
