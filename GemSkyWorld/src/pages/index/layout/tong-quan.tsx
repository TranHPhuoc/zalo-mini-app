import React, { FC } from "react";
import { Box, Button } from "zmp-ui";

export const TongQuan: FC = () => {
  return (
    <Box className="col-inner m-4">
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#82ba41",
        }}
      >
        TỔNG QUAN DỰ ÁN
      </Box>
      <Box
        style={{
          width: "150px", // Độ dài gạch chân
          height: "1px", // Độ dày gạch chân
          backgroundColor: "#82ba41",
          margin: "8px auto 0", // Canh giữa và cách chữ một chút
          borderRadius: "2px",
          marginTop: "6px",
          marginBottom: "25px", // Bo tròn 2 đầu
        }}
      ></Box>
      <table
        className=" w-full text-content giaBan"
        style={{ borderCollapse: "collapse", width: "100%", border: "none", }}
      >
        <tbody>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Tên dự án</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Gem Sky World
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Vị trí</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Quốc lộ 51, xã Long Đức, Huyện Long Thành, tỉnh Đồng Nai
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Chủ đầu tư</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Công ty Cổ phần Đầu tư Kinh doanh Bất động sản Hà An
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Đơn vị phát triển</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Đất Xanh Group
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Quy mô</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              92,2 ha
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Loại sản phẩm</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Đất nền – Nhà ở liên kế có sân vườn – Nhà phố thượng mại Shophouse
              – Biệt thự Song lập – Biệt thự Đơn lập
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Diện tích phân lô</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              90m<sup>2</sup> – 300m<sup>2</sup>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Dự án chia thành 6 khu</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              Khu Công viên cây xanh – Khu phố thương mại – Nhà ở liên kế – Khu
              biệt thự – Khu thương mại dịch vụ – Khu Các công trình hạ tầng kỹ
              thuật hiện đại
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #82ba41" }}>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              <strong>Pháp lý</strong>
            </td>
            <td style={{ width: "50%", padding: "8px 0", border: "none" }}>
              1/500 – Sổ hồng lâu dài
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
    </Box>
  );
};
