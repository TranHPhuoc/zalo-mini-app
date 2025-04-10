import React, { FC } from "react";
import { Box } from "zmp-ui";
import { ViTri1 } from "./vi-tri1";
import { ViTri2 } from "./vi-tri-2";
export const ViTriDuAn: FC = () => {
  const nen1 =
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742960642/Du-an-JD-Junction/ianf14rgbgaqvt5yte3a.jpg";
  return (
    <Box
      className="m-2"
      style={{
        backgroundImage: `url(${nen1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-3">
        <div className="text-center font-tinhHoaHoiTu mb-5">
          <h2 className="text-white text-[1.5em] uppercase">
            Vị trí dự án the prive{" "}
          </h2>
          <img
            src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png"
            alt=""
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          ></img>
        </div>

        <div className="font-content text-white">
          <p>
            Dự án The Prive tọa lạc trong KDC Nam Rạch Chiếc, Phường An Phú,
            Quận 2, TP. Thủ Đức. Từ dự án chỉ cách trung tâm đô thị mới Thủ
            Thiêm 1km, trung tâm hành chính 2km, trung tâm quận 1 3km và cách
            Phú Mỹ Hưng Quận 7 khoảng 7km.
          </p>
        </div>
        <div>
          <ViTri1 />
          <p className="text-white font-content">
            Sở hữu vị trí vàng khi nằm ngay giữa các khu đô thị, dân cư hiện
            hữu, cùng với hạ tầng giao thông huyết mạch hoàn thiện và lợi thế
            với 2 mặt giáp sông. <br></br><br></br>
            Vì vậy, The Prive được mệnh danh là “Vịnh Hạ
            Long” giữa Sài Gòn, khẳng định tiềm năng gia tăng bất động sản vượt
            bật trong thời gian tới
          </p>
        </div>
        <div>
          <ViTri2 />
        </div>
      </div>
    </Box>
  );
};
