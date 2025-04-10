import React, { FC } from "react";
import { Box } from "zmp-ui";

export const Object: FC = () => {
  const data = [
    {
      dot: "Đặt cọc",
      thoiDiem: "Ký thỏa thuận đặt cọc",
      tyLe: "200 triệu đồng hoặc 500 triệu đồng",
    },
    {
      dot: "1",
      thoiDiem:
        "Ký Hợp đồng mua bán nhà ở (Trong vòng 10 ngày kể từ ngày đặt cọc)",
      tyLe: "20% (bao gồm tiền cọc)",
    },
    {
      dot: "2",
      thoiDiem: "Trong vòng 30 ngày kể từ ngày ký HĐMB",
      tyLe: "10%",
    },
    {
      dot: "3",
      thoiDiem: "Trong vòng 60 ngày kể từ ngày ký HĐMB",
      tyLe: "10%",
    },
    {
      dot: "4",
      thoiDiem: "Trong vòng 90 ngày kể từ ngày ký HĐMB",
      tyLe: "10%",
    },
    {
      dot: "5",
      thoiDiem: "Trong vòng 120 ngày kể từ ngày ký HĐMB",
      tyLe: "10%",
    },
    {
      dot: "6",
      thoiDiem: "Trong vòng 150 ngày kể từ ngày ký HĐMB",
      tyLe: "10%",
    },
    {
      dot: "7",
      thoiDiem:
        "Trong vòng 180 ngày kể từ ngày ký HĐMB - Khách hàng nhận bàn giao nhà ở thực tế",
      tyLe: "25% + 1% phí dự phòng + 01 năm phí quản lý",
    },
    {
      dot: "8",
      thoiDiem: "Thông báo nhận GCNQSHNƠ",
      tyLe: "5%",
    },
  ];
  return (
    <Box className="m-4">
      <div className="text-center font-tinhHoaHoiTu mb-5">
        <h2 className="text-[#4a5d52] text-[2em]">Lịch thanh toán</h2>
        <strong className="text-[#f9856f] text-[3em]">& BÀN GIAO NHÀ</strong>
      </div>
      <br />
      <table
        className="w-full border-collapse border giaBan text-content"
        style={{ height: "232px" }}
      >
        <thead>
          <tr style={{ height: "43px" }} className="text-[#4a5d52]">
            <th className="text-center" style={{ width: "17.6698%" }}>
              <strong>ĐỢT</strong>
            </th>
            <th className="text-center" style={{ width: "44.7908%" }}>
              <strong>THỜI ĐIỂM THANH TOÁN</strong>
            </th>
            <th className="text-center" style={{ width: "37.5393%" }}>
              <strong>TỶ LỆ THANH TOÁN</strong>
              <br />
              <strong>(trên giá bán nhà ở sau thuế)</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ height: "21px" }}>
              <td className="text-center" style={{ width: "17.6698%" }}>
                {row.dot}
              </td>
              <td className="text-center" style={{ width: "44.7908%" }}>
                {row.thoiDiem}
              </td>
              <td className="text-center" style={{ width: "37.5393%" }}>
                {row.tyLe}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
