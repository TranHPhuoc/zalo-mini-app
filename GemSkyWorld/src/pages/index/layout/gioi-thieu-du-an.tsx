import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import { BannerGioiThieu } from "./banner-gioithieu";
export const GioiThieu: FC = () => {
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
        GIỚI THIỆU DỰ ÁN
      </Box>
      <Box
        style={{
          width: "150px", // Độ dài gạch chân
          height: "1px", // Độ dày gạch chân
          backgroundColor: "#82ba41",
          margin: "8px auto 0", // Canh giữa và cách chữ một chút
          borderRadius: "2px",
          marginBottom: "25px", // Bo tròn 2 đầu
        }}
      ></Box>
      <div className="font-tinhHoaHoiTu text-justify">
        <p>
          <strong>Gem Sky World</strong> là khu đô thị thương mại – giải trí
          nghìn tỷ tại Long Thành, dự án có quy mô 92.2 hecta, cung ứng 4.022
          nền đất, nhà phố, biệt thự, shophouse với quy hoạch đồng bộ, hiện đại.
          Dự án đang thu hút rất nhiều nhà đầu tư bởi tiềm năng cực lớn khi giá
          BĐS cạnh Sân bay Long Thành “cất cánh”. <strong>Gem Sky World</strong>{" "}
          là dự án tọa lạc tại xã Long Đức huyện Long Thành nắm giữ vị trí đắc
          địa. Khu đô thị 92 ha xã Long Đức này được quy hoạch một cách bài bản
          và hiện đại.
          <div className="mt-4 mb-4">
            <BannerGioiThieu />
          </div>
          <strong>Dự án Gem Sky World</strong> bao gồm sản phẩm Căn hộ chung cư
          cao cấp; Shop House; Đất nền nhà phố – biệt thự; Các tiện ích nội khu
          tiêu chuẩn, Hạ tầng giao thông kết nối hiện đại. Dự án{" "}
          <strong>Khu đô thị Thương mại Giải trí Gem Sky World</strong> với các
          hạng mục chính như:{" "}
          <strong>Đất nền – Nhà ở liên kế có sân vườn</strong>–{" "}
          <strong>
            Nhà phố thượng mại Shophouse – Biệt thự Song lập – Biệt thự Đơn lập
          </strong>
          <strong> & Căn hộ chung cư</strong>. Đây cũng là dự án thứ 2 (sau dự
          án <strong>Datxanh Homes Riverside Quận 2</strong>) trong dòng thương
          hiệu GEM, dòng bất động sản cao cấp nhất của{" "}
          <strong>Tập Đoàn Đất Xanh</strong>. Ngoài ra, trong tháng 08/2021 thì
          Đất Xanh còn ra mắt 1 Dự án <strong>Opal Cityview</strong> tại thành
          phố <strong>Thủ Dầu Một – Bình Dương </strong>
          với gần <strong>1.600</strong> căn hộ trung cao cấp
        </p>
      </div>
      <br></br>
    </Box>
  );
};
