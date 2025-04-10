import React, { FC } from "react";
import { Box } from "zmp-ui";
import { BangGia1 } from "./bang-gia-1";

export const BangGiaTest: FC = () => {
  return (
    <Box className="p-3">
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
          Giá bán Gladia Khang Điền
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
      <div className="my-2">
        <div className="font-tinhHoaHoiTu text-justify">
          <p>
            ​Dựa trên thông tin từ các dự án tương tự trong khu vực TP. Thủ Đức
            do Khang Điền phát triển, có thể ước tính mức giá dự kiến cho các
            loại hình sản phẩm tại dự án <strong>Gladia Khang Điền</strong> như
            sau:​
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>
                Nhà phố liền kề (95 – 133m²): Giá dự kiến khoảng từ 13 đến 15 tỷ
                đồng mỗi căn.
              </strong>
              Tham khảo từ dự án The Classia, các căn nhà phố diện tích 5x18m có
              giá khoảng 15,5 tỷ đồng.
            </li>
            <li>
              <strong>
                Biệt thự tứ lập (200 – 250m²): Giá dự kiến từ 18 đến 20 tỷ đồng
                mỗi căn.
              </strong>
              Theo thông tin từ dự án The Foresta Khang Điền, biệt thự tứ lập có
              giá khoảng 20 tỷ đồng.
            </li>
            <BangGia1/>
            <li>
              <strong>
                Biệt thự song lập (102 – 317m²): Giá dự kiến dao động từ 18 đến
                25 tỷ đồng mỗi căn, tùy thuộc vào diện tích và vị trí cụ thể.
              </strong>
              Biệt thự song lập (102 – 317m²): Giá dự kiến dao động từ 18 đến 25
              tỷ đồng mỗi căn, tùy thuộc vào diện tích và vị trí cụ thể.
            </li>
            <li>
              <strong>
                Biệt thự đơn lập (153 – 500m²): Giá dự kiến từ 25 tỷ đồng trở
                lên, tùy theo diện tích và vị trí.
              </strong>
              Biệt thự đơn lập tại các dự án cao cấp thường có giá trị cao hơn
              do tính riêng tư và diện tích lớn.​
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};
