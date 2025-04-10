import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import nen1 from "static/bghoa.jpg";

export const TongQuan: FC = () => {
  return (
    <Box
      className="col-inner m-4"
      style={{
        backgroundImage: `url(${nen1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
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
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          TỔNG QUAN DỰ ÁN
        </span>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #1268b3",
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
                color: "#1268b3",
              }}
            >
              <strong>Tên dự án</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Gladia Khang Điền
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Vị trí</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Võ Chí Công, Bình Trưng Đông, Thành phố Thủ Đức, Thành phố Hồ Chí
              Minh
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Chủ đầu tư</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Công ty Cổ phần ĐT & KD nhà Khang Điền và tập đoàn Keppelland{" "}
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Mật độ xây dựng</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              38%
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Tổng diện tích</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              11,8 Hecta gồm 200 căn nhà ở thấp tầng (Nhà phố – Biệt thự) và 600
              căn hộ cao tầng
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Loại hình sản phẩm</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Biệt thự song lập Foresta: 86 sản phẩm: khu A 42 căn và khu B 44
              căn <br />
              Biệt thự đơn lập Foresta: 73 sản phẩm: khu C 27 căn, khu D 28 căn,
              khu E 18 căn <br />
              Thiết kế nhà 1 trệt, 3 lầu.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #1b2b0b" }}>
            <td
              style={{
                width: "50%",
                padding: "8px 0",
                border: "none",
                color: "#1268b3",
              }}
            >
              <strong>Pháp lý</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Sổ hồng sở hữu lâu dài
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
