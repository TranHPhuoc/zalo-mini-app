import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";


export const TongQuanTest: FC = () => {

  return (
    <Box className="col-inner m-3">
      <Box className="text-center" >
        <div className="mt-1">
          <h2
            className="font-tinhHoaHoiTu font-bold"
            style={{
              fontSize: "1.8em",
              textTransform: "uppercase",
              color: "#1f726f",
            }}
          >
            TỔNG QUAN DỰ ÁN
          </h2>
        </div>

        <br />
        <div
          className="font-content text-[#4a5d52] text-[1em] text-left "
          style={{ lineHeight: "30px" }}
        >
          <ul className="list-disc ml-5 -mt-4">
            <li>
              Tên dự án:<strong> New Lavida Dĩ An Bình Dương</strong>
            </li>
            <li>
              Vị trí: Đường TL743C, phường Tân Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình
              Dương
            </li>
            <li>
              Chủ đầu tư:<strong> Công ty TNHH Kinh Doanh và Phát Triển Nhà Toàn Thịnh Phát</strong>
            </li>
            <li>
              Đơn vị phát triển:<strong> Công ty TNHH Đầu Tư và Phát Triển Lê Phong</strong>
            </li>
            <li>
              Tổng thầu xây dựng:<strong> Công ty Cổ Phần Xây lắp và Vật tư Xây dựng (CBM)</strong>
            </li>
            <li>Diện tích đất quy hoạch: 10.320 m2 </li>
            <li>
              Diện tích xây dựng: 65.000 m2 (bao gồm diện tích sân thượng +
              mái công trình)
            </li>
            <li>Quy mô dự án: <strong>Gồm 2 block cao 30 tầng với:</strong>
              <ul className="list-disc ml-4">
                <li>
                  Căn hộ <strong>1 phòng ngủ</strong> diện tích <strong>(30m²- 38m²)</strong>
                </li>
                <li>
                  Căn hộ <strong>2 phòng ngủ</strong> diện tích <strong>(58m²- 62m²)</strong>
                </li>
              </ul>
            </li>
            <li>Quy mô dân số: Dự kiến 1426 người</li>
            <li>
              Tổng số tầng: Dự án có 2 tháp liền. Tổng dự án có 873 căn hộ và 9
              căn hộ kinh doanh.
            </li>
            <li>
              Tổng số căn hộ: Tháp A có 308 căn (200 Căn NOXH, 108 Căn NOTM) và
              Tháp B có 565 Căn NOXH.
            </li>
            <li>Giá bán: 770 triệu / căn</li>
            <li>Pháp lý: Sở hữu lâu dài</li>
          </ul>
        </div>
      </Box>

    </Box>
  );
};
