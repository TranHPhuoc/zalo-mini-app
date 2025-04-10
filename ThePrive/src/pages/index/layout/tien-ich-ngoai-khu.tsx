import React, { FC } from "react";
import { Box } from "zmp-ui";
import { TienIchNgoaiKhu1 } from "./Tien-ich-ngoai-khu-1";

const img =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743136548/the-prive/aneldt9vpdfavomwid3t.jpg";
export const TienIchNgoaiKhu: FC = () => {
  return (
    <Box className="m-4">
      <div className="text-center font-tinhHoaHoiTu m-3">
        <h2
          className="font-tinhHoaHoiTu font-bold text"
          style={{
            fontSize: "1.8em",
            textTransform: "uppercase",
            background: "linear-gradient(to bottom, #1B1F3B, #2C3E50)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span>TIỆN ÍCH NGOẠI KHU THE PRIVE</span>
        </h2>
      </div>

      <div className="font-content tex-[#4a5d52]">
        <p>
          Cư dân The Privé dễ dàng tận hưởng loạt tiện ích ngoại khu đẳng cấp
          chỉ trong vài phút di chuyển:
        </p>
        <div>
          <TienIchNgoaiKhu1 />
        </div>
        <ul
          style={{
            textAlign: "justify",
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          <li>
            <strong>Giáo dục quốc tế:</strong> Hệ thống trường quốc tế hàng đầu
            như AIS, BIS, TAS, cùng thư viện hiện đại hỗ trợ môi trường học tập
            lý tưởng.
          </li>
          <li>
            <strong>Y tế chất lượng cao:</strong> Bệnh viện Vinmec, Family
            Medical Practice, AIH, và các phòng khám quốc tế đáp ứng nhu cầu
            chăm sóc sức khỏe toàn diện..
          </li>
          <li>
            <strong>Trung tâm giải trí – mua sắm:</strong> Vincom Mega Mall, Big
            C, Vincom Center, và khu du lịch Suối Tiên mang đến những giây phút
            thư giãn hoàn hảo.
          </li>
          <li>
            <strong>Hoạt động thể thao – thư giãn:</strong> Sân golf Sông Bé,
            trung tâm thể thao Rạch Chiếc và trạm dừng tuyến Metro số 7 kết nối
            nhanh chóng đến các khu vực trọng điểm.
          </li>
        </ul>
      </div>
      <br />

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
