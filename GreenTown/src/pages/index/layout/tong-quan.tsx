import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import nen1 from "static/nen1bg.png"

export const TongQuan: FC = () => {
  return (
    <Box className="col-inner m-4"
    style={{
      backgroundImage: `url(${nen1})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative"
    }}>
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#30726f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block"}}>
          TỔNG QUAN DỰ ÁN
        </span>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #30726f",
            width: "50%",
          }}
        />
      </div>
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
                color: "#30726f",
              }}
            >
              <strong>Tên dự án</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Green Town Bình Tân
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Vị trí</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Lô 5, KĐT Vĩnh Lộc, P. Bình Hưng Hoà B, Q. Bình Tân, TP.HCM.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Chủ đầu tư</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Công ty TNHH IDE Việt Nam.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Diện tích toàn khu</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              33.741m<sup>2</sup>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Diện tích xây dựng</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              9,288m<sup>2</sup>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Mật độ xây dựng</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              28%
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Quy mô</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              4 block gồm B1, B2, B3, B4
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Tổng số tầng</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              15 tầng với 1082 sản phẩm
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Diện tích trung bình</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              49m<sup>2</sup> – 94m<sup>2</sup>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Tiện ích đi kèm</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Công viên cây xanh, khu vui chơi giải trí, phòng thể thao đa năng,
              đường chạy bộ, tiện ích đi kèm,….
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#30726f",
              }}
            >
              <strong>Hình thức sở hữu</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Lâu dài
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
