import { image } from "@cloudinary/url-gen/qualifiers/source";
import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import bg from "static/bg_tongquan.png";
import nen1 from "static/nen-1.jpg";
import bg1 from "static/bg_home.png";
import nen2 from "static/nen.png";

export const TongQuanDuAn: FC = () => {
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
              <span>TỔNG QUAN DỰ ÁN</span>
            </h2>
          </div>
          <br />
          <div
            className="font-content text-[#4a5d52] text-[1em] text-left "
            style={{ lineHeight: "30px" }}
          >
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                border: "none",
              }}
            >
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Tên dự án:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  The Prive
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Vị trí:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  Khu Nam Rạch Chiếc, Phường An Phú, Quận 2, TP.Thủ ĐứcĐức
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Chủ đầu tư:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  Công ty Cổ phần Dịch vụ và Xây dựng Địa ốc Đất Xanh
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Quy mô:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  <strong>6,7ha</strong> gồm <strong>12 </strong> block cao <strong>33 - 34</strong> tầng
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                      style={{
                        background:
                          "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "110%",
                        fontWeight: "bold",
                      }}
                  >
                    Mật độ xây dựng:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  <strong>38,6%</strong>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Loại hình:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  Căn hộ, Duplex, Sky Garden, Penthouse...
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Loại hình sản phẩm:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  - Căn hộ 1PN (49 - 71m²)<br></br>
                  - Căn hộ 2PN (66 - 85m²)<br></br>
                  - Căn hộ 3PN (89 - 95m²)<br></br>
                  - Căn hộ Duplex (124 - 201m²)<br></br>
                  - Penthouse (107 - 151m²)                  
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Pháp lý:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  Sở hữu lâu dài
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Tiện ích nội khu đẳng cấp:
                  </span>
                </td>
                <td
                 style={{
                  padding: "8px 0",
                  border: "none",
                  background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                >
                  Hồ bơi, công viên, gym, spa, trường học,...
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Box>
    </Box>
  );
};
