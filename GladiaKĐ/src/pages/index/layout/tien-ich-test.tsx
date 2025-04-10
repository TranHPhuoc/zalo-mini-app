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
          color: "#1268b3",
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
            borderTop: "2px solid #1268b3",
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
            Tiện ích dự án nhà phố biệt thự <strong>Gladia Khang Điền</strong>{" "}
            là khu compoud đảm bảo chất lượng cuộc sống đẳng cấp, sang trọng, an
            ninh an toàn tuyệt đối, môi trường và không gian sống đúng chuẩn
            nghĩ dưỡng xứng tầm chủ nhân. Tại dự án biệt thự{" "}
            <strong>Gladia Khang Điền</strong>, cư dân được thừa hưởng những
            tiện ích nội khu cao cấp như:
          </p>
          <ul className="list-disc list-inside">
            <li>Hồ cảnh quan, Công viên cây xanh</li>
            <li>Hồ bơi tràn với thiết kế cực kỳ đẹp và sáng tạo.</li>
            <li>Sân thể thao Đa Năng, Sân Tenis.</li>
            <li>Siêu thị mini tiện ích cho các gia đình.</li>
            <li>Phòng Gym đầy đủ trang thiết bị.</li>
            <li>Khu tổ chức tiệc nướng BBQ…</li>
            <li>Khu vui chơi trẻ em.</li>
            <li>Phòng sinh hoạt cộng đồng.</li>
            <li>Trường mầm non.</li>
          </ul>
          <TienIch2 />
        </div>
      </Box>
    </Box>
  );
};
