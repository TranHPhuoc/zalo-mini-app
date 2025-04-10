import React, { useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { ViTri1 } from "./vi-tri-1";

const ViTriDuAn = () => {
  return (
    <Box className="m-0">
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
        <span
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "6px",
          }}
        >
          VỊ TRÍ DỰ ÁN
        </span>
      </Box>
      <div style={{ display: "flex", justifyContent: "center", margin: "8px" }}>
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #30726f",
            width: "35%",
          }}
        />
      </div>
      <div className="font-tinhHoaHoiTu text-justify m-4">
        <strong>Green Town Bình Tân</strong>, tọa lạc tại lô 5 Khu đô thị Vĩnh
        Lộc, phường Bình Hưng Hòa B, quận Bình Tân, đây là dự án duy nhất hiện
        tại ở TP.HCM sở hữu 4 mặt tiền nằm trong khu dân cư được quy hoạch bài
        bản 110ha, với đầy đủ các tiện ích dân sinh. Với vị trí đắc địa, dự án
        <strong> Green Town Bình Tân</strong> mang đến cho cư dân sự thuận tiện
        trong việc di chuyển và kết nối đến các trung tâm quận và các điểm quan
        trọng khác trong thành phố. Từ dự án, bạn có thể nhanh chóng tiếp cận
        trung tâm thành phố thông qua các tuyến đường giao thông huyết mạch như
        Lê Trọng Tấn, QL 1A, Cộng Hòa, Trường Chinh, Quang Trung, Đại Lộ Võ Văn
        Kiệt và nhiều tuyến đường khác.
        <br></br> <br></br>
        <div className="">
        <ViTri1 />
      </div>
        <strong>Green Town Bình Tân</strong> cũng dễ dàng kết nối đến các địa
        điểm quan trọng khác như:
        <ul className="list-disc list-inside">
          <li>
            <strong>Sân bay Tân Sơn Nhất:</strong> Chỉ cách dự án 10km, bạn có
            thể dễ dàng tiếp cận sân bay quốc tế Tân Sơn Nhất, giúp bạn tiện lợi
            trong việc đi lại và du lịch.
          </li>
          <li>
            <strong>Tòa nhà văn phòng Etown:</strong> Với khoảng cách chỉ 8km,
            việc tiếp cận khu vực kinh doanh tại tòa nhà văn phòng Etown trở nên
            thuận tiện và nhanh chóng.
          </li>
          <li>
            <strong>Quận Tân Bình:</strong> Với khoảng cách 6km, bạn có thể tận
            hưởng những trải nghiệm độc đáo và tiện ích đa dạng tại quận Tân
            Bình.
          </li>
          <li>
            <strong>Quận 12:</strong> Chỉ cách dự án 7km, quận 12 sẽ là nơi bạn
            có thể khám phá và tận hưởng mọi tiện ích ở đây mang lại.
          </li>
        </ul>
      </div>

    </Box>
  );
};

export default ViTriDuAn;
