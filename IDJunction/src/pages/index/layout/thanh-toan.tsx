import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";

export const ThanhToan: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742989799/Du-an-JD-Junction/ph6chm8rxjk5kukjrkuh.jpg",
  ];

  return (
    <Box>
      <div className="text-center font-tinhHoaHoiTu m-3 ">
        <h2
          className="text-[1.5em]"
          style={{ textTransform: "uppercase", color: "rgb(0, 51, 102)" }}
        >
          Phương thức thanh toán    
        </h2>
        <strong
          style={{
            textTransform: "uppercase",
            color: "rgb(0, 51, 102)",
            fontSize: "2em",
          }}
        >
          Dự án ID Junction
        </strong>
        <img
          src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png"
          alt=""
          style={{
            width: "90%",
            margin: "0 auto",
          }}
        ></img>
      </div>
      <div className="m-3">
        <p style={{color: "rgb(0, 51, 102)"}}>
          <strong>Phương thức thanh toán</strong>
        </p>
      </div>
      <img src={images[activeIndex]} alt="" onClick={() => setVisible(true)} />
      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
      />
    </Box>
  );
};
