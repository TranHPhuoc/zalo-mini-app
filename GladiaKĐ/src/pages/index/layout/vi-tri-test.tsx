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
          color: "#1268b3",
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
            borderTop: "2px solid #1268b3",
            width: "35%",
          }}
        />
      </div>
      <div className="font-tinhHoaHoiTu text-justify m-4">
        Tọa lạc tại mặt tiền đường Võ Chí Công ngay cầu Bà Qua với 2 mặt giáp
        sông khu Quận 2. Gần ngay góc giao với cao tốc Long Thành Giầu Giây. Vị
        trí đắc địa <strong>Dự Án Khang Điền Gladia</strong> Quận 2 – điểm vàng
        kết nối giao thông góc giao với cao tốc TP.HCM – Long Thành – Giầu Dây –
        “Điểm Vàng” kết nối các tuyến giao thông quan trọng của thành phố mới
        Thủ Đức.Kế cận các dự án cùng CĐT Khang Điền như: Melosa Garden, Verosa
        Park, Mega Village, Lucasta Villa, Emeria Khang Điền, The Venica, The
        Classia…
        <br></br> <br></br>
        <div className="">
          <ViTri1 />
        </div>
        Đồng thời, dự án Gladia Khang Điền Bình Trưng nằm trong quy hoạch Khu đô
        thị Cát Lái – Bình Trưng Đông rộng 66,08 hecta. Khu vực này được quy
        hoạch bài bản với các dự án nhà phố, biệt thự, chung cư cao cấp, khu vực
        trường học, bệnh viện, công viên và đất xây trụ sở hành chính. <br /><br />
        <ul className="list-disc list-inside">
          <li>
          Cư dân di chuyển về KĐT Thủ Thiêm: 10km – tương đương với <strong>17 phút</strong> .
          </li>
          <li>
          Cư dân di chuyển về Phú Mỹ Hưng: 9,7 km – tương đương với <strong>14 phút</strong> 
          </li>
          <li>
          Cư dân di chuyển về chợ Bến Thành Quận 1: 12,7 km – tương đương <strong>20 phút</strong> .
          </li>
          <li>
          Dự án cách 2km tới đường dẫn lên cao tốc Long Thành – Dầu Giây
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default ViTriDuAn;
