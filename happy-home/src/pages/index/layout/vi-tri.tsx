import React, { FC } from "react";
import { Box } from "zmp-ui";
import { ViTri1 } from "./vi-tri1";
import { ViTri2 } from "./vi-tri-2";
export const ViTriDuAn: FC = () => {
  const nen1 = "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736155/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/w5hywbuv5r8elwkajlsd.png"
  return (
    <Box className="m-2"
      style={{
        backgroundImage: `url(${nen1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="p-3">
        <div className="text-center font-tinhHoaHoiTu mb-5">
          <h2 className="text-white text-[1.5em]">Vị trí & Kết nối</h2>
          <strong className="text-[#ffdb8f] text-[2em]">DỰ ÁN HAPPY HOME</strong>
        </div>

        <div className="font-content text-white">
          <p>Sở hữu vị trí đắc địa liền kề trung tâm thương mại Vincom Dĩ An, ngay mặt tiền đường ĐT 743C mở ra cuộc sống tiện nghi với nhiều trải nghiệm khác biệt.</p>
        </div>

        <div className="text-white mt-5">
          <li>Mất từ 2-5 phút đến trung tâm Nhơn Trạch.</li>
          <li>Mất 10 phút đến cao tốc thành phố Hồ Chí Minh – Long Thành – Dầu Giây.</li>
          <li>Mất 10 phút đến sân bay Long Thành Quốc tế.</li>
          <li>Mất 20 phút đến Cát Lái.</li>
          <li>70km là Khoảng cách từ HAPPY HOME đến thành phố du lịch Vũng Tàu thông qua tuyến đường huyết mạch QL51.</li>
        </div>

      </div>
      <div className="">
        <ViTri1/>
      </div>
      <div className="font-content text-white p-3">
        <p>Thuận lợi cho cư dân, công nhân di chuyển đến các cụm khu công nghiệp. Đặc biệt là tuyến đường di chuyển đến Công ty HUATEX rất dễ dàng</p>
        <div className="text-white mt-5">
          <li>Mất 9 phút di chuyển đối với xe máy.</li>
          <li>Mất vỏn vẹn 8p nếu di chuyển bằng ô tô</li>
        </div>
      </div>
      <div className="">
        <ViTri2/>
      </div>
    </Box>
  );
};
