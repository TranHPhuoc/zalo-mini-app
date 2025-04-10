import React, { FC } from "react";
import { Box } from "zmp-ui";

export const BangGiaTest: FC = () => {
  return (
    <Box className="p-3">
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#405f25",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "15px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          GIÁ BÁN CITIGRAND
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
      <div className="font-tinhHoaHoiTu my-3 text-justify">
        <p>
          <strong>Citi Grand </strong>mang đến những căn hộ chất lượng với giá
          bán hấp dẫn và phương thức thanh toán linh hoạt, phù hợp với khả năng
          tài chính của nhiều khách hàng.
        </p>
        <p>
          <strong>1. Bảng Giá Bán Căn Hộ Citi Grand 03/2025.</strong>
        </p>
      </div>
      <Box>
        <table
          className="border-collapse w-full text-content"
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#405f25", color: "white" }}>
              <th className="border border-[#82ba41] p-3 text-center">
                LOẠI CĂN HỘ
              </th>
              <th className="border border-[#82ba41] p-3 text-center">
                DIỆN TÍCH
              </th>
              <th className="border border-[#82ba41] p-3 text-center">
                GIÁ BÁN (TỶ ĐỒNG)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#82ba41] p-3 text-center">
                2PN, 2WC
              </td>
              <td className="border border-[#82ba41] p-3 text-center">
                56.32m<sup>2</sup>
              </td>
              <td className="border border-[#82ba41] p-3 text-center">
                2.2 - 2.5 tỷ
              </td>
            </tr>
            <tr>
              <td className="border border-[#82ba41] p-3 text-center">
                22PN, 2WC
              </td>
              <td className="border border-[#82ba41] p-3 text-center">
                60.30m<sup>2</sup>
              </td>
              <td className="border border-[#82ba41] p-3 text-center">
                2.4 - 2.7 tỷ
              </td>
            </tr>
          </tbody>
        </table>
        <div className="font-tinhHoaHoiTu mt-3 text-justify">
          <p>
            <strong>2. Phương Thức Thanh Toán Mới Nhất Citi Grand: </strong>
          </p>
          <p className="text-justify">
            Chủ đầu tư cung cấp nhiều phương thức thanh toán linh hoạt, giúp
            khách hàng dễ dàng sở hữu căn hộ mơ ước:
            <ul className="list-disc list-inside text-justify">
              <li>
                <strong>Thanh toán theo tiến độ:</strong> Chia thành nhiều đợt
                thanh toán trong quá trình xây dựng, giảm áp lực tài chính cho
                khách hàng.
              </li>
              <li>
                <strong>Vay ngân hàng:</strong> Hỗ trợ vay vốn lên đến 70% giá
                trị căn hộ với lãi suất ưu đãi, giúp khách hàng dễ dàng tiếp cận
                nguồn vốn.
              </li>
              <li>
                <strong>Chiết khấu hấp dẫn:</strong> Áp dụng cho khách hàng
                thanh toán sớm hoặc mua nhiều căn hộ, mang lại lợi ích tài chính
                lớn.
              </li>
            </ul>
            <p>
              Với giá bán hợp lý và phương thức thanh toán linh hoạt, <strong>Citi Grand</strong>
              là cơ hội không thể bỏ lỡ cho những ai đang tìm kiếm một căn hộ
              chất lượng tại Quận 2.
            </p>
          </p>
        </div>
      </Box>
    </Box>
  );
};
