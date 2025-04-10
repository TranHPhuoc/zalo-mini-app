import { image } from "@cloudinary/url-gen/qualifiers/source";
import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import bg from "static/bg_tongquan.png"
import nen1 from "static/nen-1.jpg"
import bg1 from "static/bg_home.png"
import nen2 from "static/nen.png"


export const TongQuanDuAn: FC = () => {
  return (
    <Box className="col-inner m-4">
      <Box className="text-center relative"
                style={{
                  backgroundImage: `url(${nen2})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  position: 'relative',
              }}>
        {/* Lớp overlay để làm mờ background */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
        />
        {/* Nội dung chính */}
        <div className="relative z-10">
          <div className="mt-8">
            <h2
                className="font-tinhHoaHoiTu font-bold"
                style={{
                fontSize: "1.8em",
                textTransform: "uppercase",
                color: "rgb(0, 51, 102)",
                }}
            >
                TỔNG QUAN DỰ ÁN
            </h2>
            <img src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png" alt="" 
                style={{
                    width: "80%",
                    margin: "0 auto",
                }}></img>
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
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Tên dự án:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>ID Junction</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Vị trí:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>Thị trấn Long Thành, huyện Long Thành, tỉnh Đồng Nai</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Chủ đầu tư:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>Công ty Cổ phần Long Thành Riverside
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Tổng diện tích:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>407.677m<sup>2</sup></td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Quy mô:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}><strong>40,7ha</strong> gồm <strong>650 </strong> nhà thấp tầng và <strong>2,000 </strong>căn hộ cao tầng</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Mật độ xây dựng:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>Chỉ <strong>28%</strong> và hơn <strong>40%</strong> tổng diện tích là cây xanh và mặt nước.</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Quy mô dân số:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>11.000 – 12.000 người</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Loại hình:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>Nhà ở riêng lẻ; nhà ở chung cư; công trình công cộng, thương mại – dịch vụ…</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ececec" }}>
                <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
                  <span
                    style={{
                      color: "rgb(0, 51, 102)",
                      fontSize: "110%",
                      fontWeight: "bold",
                    }}
                  >
                    Tiện ích:
                  </span>
                </td>
                <td style={{ padding: "8px 0", border: "none", color: "rgb(0, 51, 102)"}}>Công viên cây xanh – thể dục thể thao; mặt nước với hệ thống giao thông, hạ tầng kỹ thuật được đầu tư xây dựng mới đồng bộ…Pháp lý hoàn chỉnh, có Quyết định số 2527/QĐ-UBND về việc duyệt Nhiệm vụ quy hoạch chi tiết tỷ lệ 1/500 của UBND tỉnh Đồng Nai</td>
              </tr>
            </table>
          </div>
        </div>
      </Box>
    </Box>
  );
};
