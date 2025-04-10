import { image } from "@cloudinary/url-gen/qualifiers/source";
import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import bg from "static/bg_tongquan.png";
import nen1 from "static/nen-1.jpg";
import bg1 from "static/bg_home.png";
import nen2 from "static/nen.png";
import { ThanhToanBanner } from "./thanh-toan-banner";
export const ThanhToan: FC = () => {
  return (
    <Box className="col-inner m-4">
      <Box
        className="text-center relative"
        style={{
          backgroundImage: `url(${nen2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Lớp overlay để làm mờ background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
        {/* Nội dung chính */}
        <div className="relative z-10">
          <div className="mt-8 ">
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
              <span>GIÁ BÁN DỰ ÁN THE PRIVE</span>
            </h2>
          </div>
          <br />
          <div
            className="font-content text-[#000000] text-[1em] text-left "
            style={{ lineHeight: "30px" }}
          >
            <div>
              <p>
                Hiện theo thông tin cập nhật được thì giá bán các căn hộ dự án
                The Prive vẫn chưa được chủ đầu tư công bố chính thức, tuy nhiên
                theo các chuyên gia nhận định thì mức giá sẽ nằm trong khoảng
                100 – 120 triệu/ m². Giá bán chi tiết:
              </p>
              <ul
                style={{
                  textAlign: "justify",
                  listStyleType: "disc",
                  paddingLeft: "20px",
                }}
              >
                <li>Căn 2 Phòng Ngủ (71-85m²): Chỉ từ <strong>9 - 10 tỷ/căn</strong></li>
                <li>Căn 3 Phòng Ngủ (95m² trở lên): Chỉ từ <strong>12 tỷ/căn</strong></li>
                <li>Duplex Villa (124 - 201m²): Chỉ từ <strong>16 - 25 tỷ/căn</strong></li>
              </ul>
            </div>
          </div>
        </div>

      </Box>
      <ThanhToanBanner/>
    </Box>
           
  );
};
