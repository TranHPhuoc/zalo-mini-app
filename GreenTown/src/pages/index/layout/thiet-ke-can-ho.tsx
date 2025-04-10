import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const a2 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760408/GreenTown/o6sxkx4wkp5w0rwz2sqc.jpg";

const a4 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760407/GreenTown/lzmbfonjsau9bqa7dv00.jpg";

const b =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760408/GreenTown/kxxpagexvunke973uebs.jpg";

const b1 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760408/GreenTown/xjoi2irn47sikvt5xefm.jpg";

const e2 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760408/GreenTown/bhbrcswufydmpgjikctd.jpg";

const e3 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743760408/GreenTown/cnejaqnhfr6lbjmu61oe.jpg";

const contentData = {
  "tab-1": { fixed: a2, slides: [] },
  "tab-2": { fixed: a4, slides: [] },
  "tab-3": { fixed: b, slides: [] },
  "tab-4": { fixed: b1, slides: [] },
  "tab-5": { fixed: e2, slides: [] },
  "tab-6": { fixed: e3, slides: [] },
};

const ThietKeCanHo: FC = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleClick = (tab: string) => setActiveTab(tab);

  const openImageViewer = (imageList: string[], index: number) => {
    setImages(imageList);
    setActiveIndex(index);
    setVisible(true);
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
  };

  const nen1 =
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742960642/Du-an-JD-Junction/ianf14rgbgaqvt5yte3a.jpg";

  return (
    <div className="p-2">
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
          THIẾT KẾ CĂN HỘ
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

      <div className="font-tinhHoaHoiTu m-4 text-justify">
        <p>
          <strong>Dự án Green Town Bình Tân</strong>, các căn hộ được thiết kế
          theo phong cách Hàn Quốc, đề cao yếu tố xanh, tiện nghi, rộng rãi, nội
          thất cao cấp với hệ thống tủ bếp, sàn gỗ…được nhập khẩu 100% từ Hàn
          Quốc, mang lại sự thoải mái, không gian sống đẳng cấp cho từng chủ
          nhân căn hộ nơi đây. Căn hộ <strong>Green Town</strong> có diện tích
          đa dạng từ 49m<sup>2</sup>-94m<sup>2</sup> có từ 2-3 phòng ngủ phù hợp cho gia đình từ 2-3
          thế hệ chung sống, tất cả căn hộ được thiết kế khoa học.<br></br>
          Hạn mục bàn giao căn hộ <strong>Green Town Bình Tân</strong> : Bàn giao căn hộ hoàn
          thiện nội thất cao cấp nhập khẩu, sàn gỗ, trần thạch cao, gạch bóng
          kiến, sàn gỗ phòng ngủ, đèn phòng ngủ, đèn trang trí phòng khách, cửa
          chính là cửa sắt, cửa gỗ phòng ngủ, cửa gỗ chống thấm nhà vệ sinh, tủ
          bếp trên và tủ bếp dưới và các thiết bị phòng vệ sinh..v.v. Quý khách
          hàng nhận nhà chỉ cần trang trí thêm bàn ghế, ti vi, tủ lạnh, giường
          ngủ là vào ở ngay không cần mua sắm gì thêm.
        </p>
      </div>
      <br />

      <div className="text-center font-tinhHoaHoiTu mb-3 grid grid-cols-2 gap-3">
        {Object.keys(contentData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg border-2 font-bold transition-all duration-300
        ${
          activeTab === tab
            ? "bg-[#30726f] text-white border-[#30726f]"
            : "bg-white text-[#30726f] border-[#30726f]"
        }`}
            onClick={() => handleClick(tab)}
          >
            {tab === "tab-1"
              ? "Căn hộ loại A2"
              : tab === "tab-2"
              ? "Căn hộ loại A4"
              : tab === "tab-3"
              ? "Căn hộ loại B"
              : tab == "tab-4"
              ? "Căn hộ loại B1"
              : tab == "tab-5"
              ? "Căn hộ loại E2"
              : "Căn hộ loại E3"}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div
          className="tab-content text-white font-content"
          style={{
            marginTop: "-30px",
            marginBottom: "10px",
            color: "white",
          }}
        ></div>
        {Object.keys(contentData).map((tab) => (
          <div key={tab} className={activeTab === tab ? "block" : "hidden"}>
            <img
              src={contentData[tab].fixed}
              alt={`Ảnh cố định của ${tab}`}
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
              }}
              onClick={() => openImageViewer([contentData[tab].fixed], 0)}
            />
          </div>
        ))}
      </div>

      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </div>
  );
};

export default ThietKeCanHo;
