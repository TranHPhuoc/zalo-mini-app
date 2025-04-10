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
          color: "#30726f",
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
            borderTop: "2px solid #30726f",
            width: "50%",
          }}
        />
      </div>
      <div className="font-tinhHoaHoiTu">
        <p className="text-justify">
          <strong>Green Town Bình Tân</strong> là dự án căn hộ cao cấp tại lô 5 Khu Dân Cư Đô Thị
          Vĩnh Lộc, quận Bình Tân, TP. Hồ Chí Minh. Dự án nằm trong khu đô thị
          mới Vĩnh Lộc rộng 110 ha, với đầy đủ tiện ích như giáo dục, y tế, và
          giải trí. <strong>Chung cư Green Town</strong> có 4 mặt tiền đường, tổng diện tích 3,3
          ha, gồm 5 block và hơn 1000 căn hộ, mật độ xây dựng chỉ 27%. Với không
          gian xanh mát và tiện ích đẳng cấp, <strong>Green Town</strong> hứa hẹn sẽ trở thành
          tâm điểm bất động sản khu vực phía tây, mang lại cơ hội an cư và đầu
          tư sinh lời cao.
          <div className="mt-4">
            <BannerGioiThieu />
          </div>
        </p>
      </div>
    </Box>
  );
};
