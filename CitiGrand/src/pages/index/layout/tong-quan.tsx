import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import nen1 from "static/nen-1.jpg";

export const TongQuan: FC = () => {
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
          TỔNG QUAN DỰ ÁN
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
      <table
        className=" w-full text-content giaBan font-tinhHoaHoiTu"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          marginTop: "15px",
        }}
      >
        <tbody>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Tên dự án</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              CitiGrand
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Vị trí</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Khu đô thị Cát Lái, phường Cát Lái, quận 2, TP. HCM.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Chủ đầu tư</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Công ty TNHH Đầu tư Vĩnh Phú.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Đơn vị phát triển</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Kiến Á Group
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Tổng diện tích</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              18.350m<sup>2</sup>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Loại sản phẩm</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Căn hộ, Thương mại, Dịch vụ, Văn phòng, Shophouse, Office,…
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Mật độ xây dựng</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              20%
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Quy mô dự án</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Dự án có 3 Block:</strong>
              <br></br>
              <strong>Block A:</strong> Cao 23 tầng với 667 căn hộ<br></br>
              <ul className="list-disc pl-5">
                <li>
                  522 căn (2PN-2WC); Diện tích tim tường: 56.32 – 60.3m
                  <sup>2</sup>.
                </li>
                <li>
                  45 căn có trần cao 5.4m<sup>2</sup>; Diện tích tim tường:
                  56.32 – 60.3m<sup>2</sup>. m2.
                </li>
              </ul>
              <strong>Block B:</strong> 11 căn Shop Townhouse.<br></br>
              <strong>Block C:</strong> Thương Mại – Dịch Vụ.<br></br>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Tiện ích </strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Thẻ từ an ninh, Sảnh đón sang trọng, Hồ bơi, BBQ, Khu thể thao,
              Khu vui chơi trẻ em…
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Pháp lý</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Sổ hồng
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#405f25",
              }}
            >
              <strong>Hình thức sở hữu</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <ul className="list-disc pl-5">
                <li>Người Việt Nam: Sổ hồng lâu dài</li>
                <li>
                  Người nước ngoài: Sở hữu 50 năm theo luật pháp hiện hành
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
