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
          color: "#30726f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "8px",
          marginTop: "8px",
        }}
      >
        <span style={{ position: "relative", display: "inline-block" }}>
          TIẾN ĐỘ THANH TOÁN 
        </span>
      </Box>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #30726f",
            width: "50%",
          }}
        />
      </div>
      <div className="my-2">
          <BangGia1/>
      </div>

    </Box>
  );
};
