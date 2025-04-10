import React, { FC } from "react";
import { Box, Button } from "zmp-ui";
import { BannerGioiThieu } from "./banner-gioithieu";
export const GioiThieu: FC = () => {
  return (
    <Box className="col-inner m-4">
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
          GIỚI THIỆU DỰ ÁN
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
      <div className="font-tinhHoaHoiTu">
        <p className="text-justify">
          Dự án <strong>Gladia Khang Điền</strong> Thủ Đức là dự án biệt thự cao
          cấp được chủ đầu tư Khang Điền chuẩn bị quỹ đất từ lâu. Dự án biệt thự
          cao cấp Khang Điền Thủ Đức Gladia Khang Điền toạ lạc tại Phường Bình
          Trưng Đông, Thủ Đức, Tp.HCM. Vị trí vô cùng đắc địa và thuận lợi cho
          cư dân. Dự án có quy mô 5,8 hecta, có tổng cộng 159 căn biệt thự cao
          cấp. Trong đó 86 căn biệt thự song lập và 73 căn biệt thự đơn lập. Dự
          kiến được triển khai trong thời gian tới. Khi hình thành, nơi đây sẽ
          trở thành khu dân cư đáng sống bậc nhất tại TP.HCM.
          <div className="mt-4">
            <BannerGioiThieu />
          </div>
        </p>
      </div>
    </Box>
  );
};
