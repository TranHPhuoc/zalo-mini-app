import React, { FC, } from "react";
import { Box,} from "zmp-ui";
import { MatBang1 } from "./matbang";

export const MatBangDuAn: FC = () => {
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
          MẶT BẰNG DỰ ÁN
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
          <p
            className="font-tinhHoaHoiTu text-[#000000] text-[1em] ml-4 mr-4 text-justify "
            style={{ lineHeight: "30px" }}
          >
            <strong>Dự án Green Town Bình Tân </strong>
            gồm 5 block cao 15 tầng, với diện tích xây dựng là 9.288 m2, mật độ
            xây dựng là 27,5%. Dự án có tổng cộng hơn 1.000 căn hộ có diện tích
            từ 49m2 – 91 m2/căn. Mỗi căn có từ 1 đến 3 phòng ngủ, 2 phòng vệ
            sinh.
          </p>
          <MatBang1/>
        </div>
      </Box>
    </Box>
  );
};
