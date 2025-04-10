import React, { FC } from "react";
import { Box } from "zmp-ui";
import { ViTri1 } from "./vi-tri1";
import { ViTri2 } from "./vi-tri-2";
export const ViTriDuAn: FC = () => {
  const nen1 = "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742960642/Du-an-JD-Junction/ianf14rgbgaqvt5yte3a.jpg"
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
          <h1 className="text-white text-[1.5em] uppercase">Vị trí</h1>
          <strong className="text-[#ffdb8f] text-[2em]">DỰ ÁN ID JUNCTION</strong>
          <img src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png" alt="" 
                style={{
                    width: "90%",
                    margin: "0 auto",
                }}></img>
        </div>

        <div className="font-content text-white">
          <p>Dự án ID Junction có địa thế đắc địa, là một dự án hiếm hoi tại trung tâm thị trấn Long Thành sở hữu mặt tiền đường vô cùng đắt giá:
          </p>
          <br></br>
          <div>
            <ul>
              <li>
              + Phía Bắc: giáp Cao tốc TP.HCM – Long Thành – Dầu Giây.
              </li>
              <li>
              + Phía Nam: giáp rạch và một phần dân cư hiện hữu dọc đường ĐT 769 (đường Lý Thái Tổ).
              </li>
              <li >
              + Phía Đông: giáp hành lang lưới điện cao thế 220kV và 110kV.
              </li>
              <li>
              + Phía Tây: giáp sông Đồng Môn.
              </li>
            </ul><br></br>
            <p>ID Juntion nằm trong khu vực "Tam giác vàng của logistics" tương lai của miền Nam, hình thành bởi Cảng hàng không Quốc tế Long Thành và nút giao cao tốc TPHCM - Long Thành và Quốc Lộ 51, Cảng Cái Mép - Thị Vải đang là vị trí kết nối liên vùng, thông thương Quốc tế thuận lợi nhất mà chưa có dự án nào toạ lạc tại trung tâm Long Thành có được. Là khu đô thị giao thoa về vị trí, về kinh tế - xã hội. ID Juntion sẽ trở thành giao điểm thương mại Miền Nam, là miền đất tương lai cho công dân toàn cầu.</p>
          </div> 
          
        </div>

      </div>
      <div className="">
        <ViTri1/>
      </div>
      <div className="">
        <ViTri2/>
      </div>
    </Box>
  );
};
