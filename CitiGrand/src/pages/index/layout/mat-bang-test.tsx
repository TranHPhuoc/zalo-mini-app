import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tt1 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743580508/CitiGrand/cxxungjlfovrxdkm8o8x.jpg";


const a1a1a2a3 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743580508/CitiGrand/rhri40swttvvrqp47peg.jpg";


const a4 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743580507/CitiGrand/hsebfq0bpkfp8gljzfxu.jpg";

const b1 =
  "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743580508/CitiGrand/hbsiolxwxs17jcuspcjo.jpg";


const contentData = {
  "tab-1": { fixed: tt1, slides: [] },
  "tab-2": { fixed: a1a1a2a3, slides: [] },
  "tab-3": { fixed: a4, slides: [] },
  "tab-4": { fixed: b1, slides: [] },
};

const MatBangTest: FC = () => {
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
    <div
      className="p-2"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dl4szj3ff/image/upload/v1743565300/CitiGrand/fyfcnn6glzb2iifyfv30.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        className="text-center font-tinhHoaHoiTu font-bold relative inline-block"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6em",
          color: "#ffffff",
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

      <div className="font-tinhHoaHoiTu text-white my-5 text-justify">
        <p>
          Với <strong>CITIGRAND</strong>, các nhà thiết kế đã khai thác thành công từng chi tiết,
          đường nét của phong cách kiến trúc đương đại. Dù ở bất kỳ góc nhìn hay
          cao độ nào, cũng có thể dễ dàng nhận thấy sự liên kết chặt chẽ và liền
          mạch của chỉ một ngôn ngữ kiến trúc, đó là giao hòa cùng thiên nhiên.
          Đây là dự án căn hộ cao cấp đầu tiên tại Khu đô thị Cát Lái, Quận 2,
          sở hữu tiện ích ấn tượng nhất với hệ thống 6 lõi không gian xanh xuyên
          suốt, vườn trên mái thời thượng, hồ bơi vô cực, vườn kết nối hạnh
          phúc… đảm bảo mang đến trải nghiệm sống hoàn toàn mới và đặc sắc cho
          gia đình bạn.
        </p>
      </div>
      <br />

      <div className="text-center font-tinhHoaHoiTu mb-3 grid grid-cols-2 gap-3">
        {Object.keys(contentData).map((tab) => (
          <button
            key={tab}
            className={`button-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleClick(tab)}
          >
            {tab === "tab-1"
              ? "Tổng thể"
              : tab === "tab-2"
              ? "Type A1-A1'-A2-A3"
              : tab === "tab-3"
              ? "Type A4"
              : "Type B1"}
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
        >

        </div>
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
                border: "2px solid rgba(255, 255, 255, 0.1)"
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

export default MatBangTest;
