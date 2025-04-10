import React, { FC } from "react";
import { Box } from "zmp-ui";
import { ThietKeCanho1 } from "./bg-thiet-ke-can-ho";

export const ThietKeCanHo: FC = () => {
  return (
    <Box className="m-1">
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
          THIẾT KẾ CĂN HỘ
        </span>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #1268b3",
            width: "40%",
          }}
        />
      </div>
      <Box>
        <div>
          <p
            className="font-tinhHoaHoiTu text-[#000000] text-[1em] ml-4 mr-4 text-justify "
            style={{ lineHeight: "30px" }}
          >
            Chủ đầu tư <strong>Khang Điền</strong> đã có lựa chọn những kiến trúc sư tài ba để
            chăm chút ngôi nhà tới từng chi tiết nhỏ. Đó không chỉ là sự tỉ mỉ
            trong từng đường nét, từng viên gạch mà còn là sự tinh tế, hài hòa
            giữa nội thất với cảnh quan, đem lại góc nhìn thẩm mỹ nhất. Nhà 1
            trệt, 2 lầu và 3 lầu giao hoàn thiện đồng bộ bên ngoài và thô bên
            trong. Có Garage ôtô và có sân vườn mảng xanh bao quanh.
          </p>
          <ThietKeCanho1/>
        </div>
      </Box>
    </Box>
  );
};
