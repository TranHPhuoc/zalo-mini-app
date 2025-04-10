import React, { FC } from "react";
import { Box } from "zmp-ui";
import { MatBang1 } from "./matbang";

export const MatBangDuAn: FC = () => {
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
          MẶT BẰNG DỰ ÁN
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
          <p
            className="font-tinhHoaHoiTu text-[#000000] text-[1em] ml-4 mr-4 text-justify "
            style={{ lineHeight: "30px" }}
          >
            Kiến trúc phương Tây kết hợp với những nét kiến trúc phương Đông
            mang đậm văn hoá Việt tạo nên điểm nhấn ấn tượng cho <strong>Gladia</strong>. Nét đẹp
            tinh tế của kiến trúc tân cổ điển Châu Âu với điểm nhấn mái Mansard
            biểu trưng cho sự giao hòa Đông – Tây được tái hiện hoàn mỹ qua
            những dãy phố <strong>Gladia Khang Điền</strong> một mang vẻ đẹp cân bằng giữa hoài
            cổ và hiện đại, sang trọng và bình yên mà bất cứ ai cũng say lòng
            khi ngắm nhìn
          </p>
          <MatBang1 />
        </div>
      </Box>
    </Box>
  );
};
