import React, { FC } from "react";
import { Box } from "zmp-ui";

export const BangGiaTest: FC = () => {
  return (
    <Box className="p-3">
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#82ba41",
        }}
      >
        BẢNG GIÁ GEM SKY WORLD  
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
      <Box>
        <table
          className="border w-full text-content giaBan border-[#82ba41]"
          style={{ height: "400px" }}
          summary="Bảng thông tin"
        >
          <tbody>
            <tr className="font-bold">
              <td>Kỳ thanh toán</td>
              <td>Thời hạn thanh toán</td>
              <td>Tỷ lệ thanh toán (% Giá bán đã bao gồm VAT)</td>
              <td>Ghi chú</td>
            </tr>
            <tr>
              <td></td>
              <td>Ngay khi Ký phiếu đăng ký giữ sản phẩm</td>
              <td>50 triệu đồng</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={4} className="text-center font-bold">
                HỢP ĐỒNG NGUYÊN TẮC MUA BÁN NHÀ
              </td>
            </tr>
            <tr>
              <td>Đợt 1</td>
              <td>
                Ký Hợp đồng nguyên tắc mua bán nhà (HĐNT) trong vòng 07 (bảy)
                ngày kể từ ngày đăng ký Phiếu giữ sản phẩm
              </td>
              <td>25%</td>
              <td>Bao gồm số tiền ký Phiếu ĐKGSP 50 triệu đồng</td>
            </tr>
            <tr>
              <td>Đợt 2</td>
              <td>02 (hai) tháng kể từ ngày ký HĐNT</td>
              <td>10%</td>
              <td></td>
            </tr>
            <tr>
              <td>Đợt 3</td>
              <td>04 (bốn) tháng kể từ ngày ký HĐNT</td>
              <td>15%</td>
              <td></td>
            </tr>
            <tr>
              <td>Đợt 4</td>
              <td>06 (sáu) tháng kể từ ngày ký HĐNT</td>
              <td>10%</td>
              <td></td>
            </tr>
            <tr>
              <td>Đợt 5</td>
              <td>08 (hai) tháng kể từ ngày ký HĐNT</td>
              <td>10%</td>
              <td></td>
            </tr>
            <tr>
              <td>Đợt 6</td>
              <td>
                Trong vòng 10 (mười) ngày làm việc kể từ ngày nhận được thông
                báo nhận bàn giao nhà
              </td>
              <td>25%</td>
              <td></td>
            </tr>
            <tr>
              <td>Đợt 7</td>
              <td>
                Trong vòng 10 (mười) ngày làm việc kể từ ngày nhận được thông
                báo nhận bàn giao Giấy chứng nhận quyền sở hữu
              </td>
              <td>5%</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center font-bold">
                Tổng cộng
              </td>
              <td>100%</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};
