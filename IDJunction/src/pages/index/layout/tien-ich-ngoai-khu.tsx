import React, { FC } from "react";
import { Box } from "zmp-ui";
import { TienIchNgoaiKhu1 } from "./Tien-ich-ngoai-khu-1";

const img =
  "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742974462/Du-an-JD-Junction/zb357qerziwecaoknlwk.jpg";
export const TienIchNgoaiKhu: FC = () => {
  return (
    <Box className="m-4">
      <div className="text-center font-tinhHoaHoiTu m-3">
        <h2
          className="text-[1.5em]"
          style={{
            textTransform: "uppercase",
            color: "rgb(0, 51, 102)",
          }}
        >
          Tiện ích ngoại khu dự án
        </h2>
        <strong
          className="text-[2em]"
          style={{
            textTransform: "uppercase",
            color: "rgb(0, 51, 102)",
          }}
        >
          ID Junction
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

      <div className="font-content tex-[#4a5d52]">
        <p>
          Nhờ tọa lạc ngay trung tâm khu vực phát triển năng động là thị trấn
          Long Thành, dự án Long Thanh Riverside được thụ hưởng toàn bộ hệ thống
          tiện ích hiện đại nơi đây. Có thể kể đến như trung tâm hành chính,
          bệnh viện đa khoa, trung tâm văn hóa thể dục thể thao, trường học, sân
          golf, chợ, Vincom Plaza,…
        </p>
      </div>
      <br />
      <div>
        <TienIchNgoaiKhu1 />
      </div>
      <section
        style={{
          backgroundImage: `url(${img})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "35%",
          margin: "0px -16px 0px -16px",
        }}
      ></section>
    </Box>
  );
};
