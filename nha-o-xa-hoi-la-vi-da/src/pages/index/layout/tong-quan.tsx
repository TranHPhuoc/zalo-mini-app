import React, { FC } from "react";
import { Box, Button } from "zmp-ui";

export const TongQuan: FC = () => {
  return (
    <Box className="col-inner m-4">
      <Box className="text-center font-tinhHoaHoiTu font-bold " 
      style={{textTransform:"uppercase", fontSize: "1.6em",  color: "#1f621f"}}>TỔNG QUAN DỰ ÁN</Box><br></br>

    <table
        className="border border-black w-full text-content giaBan"
        style={{ height: "215px", border: "1px solid black" }}
        summary="Giá bán biệt thự & nhà phố Fo"
      >
        <tbody>
          <tr>
            <td style={{width:"35%"}}><strong>Tên dự án</strong></td>
            <td>New Lavida Dĩ An Bình Dương</td>
          </tr>
          <tr>
            <td><strong>Vị trí</strong></td>
            <td>Đường TL743C, phường Tân Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình
              Dương</td>
          </tr>
          <tr>
            <td><strong>Chủ đầu tư</strong></td>
            <td>Công ty TNHH Kinh Doanh và Phát Triển Nhà Toàn Thịnh Phát</td>
          </tr>
          <tr>
            <td><strong>Đơn vị phát triển</strong></td>
            <td>Công ty TNHH Đầu Tư và Phát Triển Lê Phong</td>
          </tr>
          <tr>
            <td><strong>Tổng thầu xây dựng</strong></td>
            <td>Công ty Cổ Phần Xây lắp và Vật tư Xây dựng (CBM)</td>
          </tr>
          <tr>
            <td><strong>Diện tích đất quy hoạch</strong></td>
            <td>10.320m<sup>2</sup></td>
          </tr>
          <tr>
            <td><strong>Diện tích xây dựng</strong></td>
            <td>65.000m<sup>2</sup> (bao gồm diện tích sân thượng +
              mái công trình)</td>
          </tr>
          <tr>
            <td><strong>Quy mô dự án</strong></td>
            <td>Gồm 2 block cao 30 tầng với:<br></br>
              +<strong> Căn hộ 1 phòng ngủ diện tích (30m²- 38m²)</strong><br></br>
              + <strong>Căn hộ 2 phòng ngủ diện tích (58m²- 62m²)</strong></td>
           
          </tr>
          <tr>
            <td><strong>Quy mô dân số</strong></td>
            <td>Dự kiến 1426 người</td>
          </tr>
          <tr>
            <td><strong>Tổng số tầng</strong></td>
            <td>Dự án có 2 tháp liền. Tổng dự án có 873 căn hộ và 9
              căn hộ kinh doanh.</td>
          </tr>
          <tr>
            <td><strong>Tổng số căn hộ</strong></td>
            <td>Tháp A có 308 căn (200 Căn NOXH, 108 Căn NOTM) và
              Tháp B có 565 Căn NOXH.</td>
          </tr>
          <tr>
            <td><strong>Giá bán</strong></td>
            <td>770 triệu / căn</td>
          </tr>
          <tr>
            <td><strong>Pháp lý</strong></td>
            <td> Sở hữu lâu dài</td>
          </tr>
        </tbody>
        </table><br></br>
    </Box>
  );
};