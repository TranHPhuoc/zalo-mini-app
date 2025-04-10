import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { TienIch1 } from "./tien-ich-1";
import { TienIchNgoaiKhu } from "./tien-ich-ngoai-khu";
import { TienIch2 } from "./tien-ich-2";

export const TienIchTest: FC = () => {
  return (
    <Box className="m-1">
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
          marginTop: "8px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          TIỆN ÍCH DỰ ÁN
        </span>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #30726f",
            width: "40%",
          }}
        />
      </div>
      <Box>
        <div>
          <TienIch1 />
          <p
            className="font-tinhHoaHoiTu text-[#000000] text-[1em] ml-4 mr-4 text-justify "
            style={{ lineHeight: "30px" }}
          >
            <strong>Dự án Green Town </strong>
            thực sự ấn tượng với hệ thống tiện ích – dịch vụ nội khu, tại đây dù
            bất cứ tầng lớp nào, thế hệ nào, trẻ em hay người lớn tuổi, người
            độc thân hay cặp vợ chồng son đều dễ dàng tìm thấy không gian riêng
            của mình. Với mật độ xây dựng thấp, các tiện ích nội khu được đầu tư
            chau chuốt, bố trí thông minh trên địa bàn dự án, giúp người dân dễ
            dàng di chuyển đến bất cứ đâu. Một số tiện ích nội khu tiêu biểu
            như: công viên cây xanh, đường chạy bộ, khu vui chơi giải trí, trung
            tâm mua sắm, khu thể thao đa năng nhiều loại hình luyện tập, …
          </p>
          <TienIch2 />
        </div>
      </Box>
    </Box>
  );
};
