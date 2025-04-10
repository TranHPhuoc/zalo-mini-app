import React, { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Nhập ảnh từ nguồn của bạn
import img1 from "static/can-lien-ke.jpg";
import img2 from "static/nha-bien.jpg";
import img3 from "static/nha-goc.jpg";
import img4 from "static/candcbiet.jpg";

import lk1 from "static/lk1.jpg";
import lk2 from "static/lk1.1.jpg";
import lk3 from "static/lk2.jpg";
import lk4 from "static/lk2.1.jpg";
import lk5 from "static/lk3.jpg";
import lk6 from "static/lk3.1.jpg";
import lk7 from "static/lk6.jpg";
import lk8 from "static/lk6.1.jpg";
import lk9 from "static/lk7.jpg";

import lkb1 from "static/lkb1.jpg";
import lkb2 from "static/lkb1.1.jpg";
import lkb3 from "static/lkb1m.jpg";
import lkb4 from "static/lkb1.1m.jpg";
import lkb5 from "static/lkb2.jpg";
import lkb6 from "static/lkb2m.jpg";
import lkb7 from "static/lkb6.jpg";
import lkb8 from "static/lkb6m.jpg";

import lkg1 from "static/lkg1.jpg";
import lkg2 from "static/lkg1m.jpg";
import lkg3 from "static/lkg3.jpg";

// Cấu trúc dữ liệu với ảnh cố định và ảnh slider cho mỗi tab
const contentData = {
  "tab-1": {
    fixed: img1,
    slides: [lk1, lk2, lk3, lk4, lk5, lk6, lk7, lk8, lk9],
  },
  "tab-2": {
    fixed: img2,
    slides: [lkb1, lkb2, lkb3, lkb4, lkb5, lkb6, lkb7, lkb8],
  },
  "tab-3": { fixed: img3, slides: [lkg1, lkg2, lkg3] },
};
const Reason: FC = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Cấu hình slider
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
  };

  const nen1 =
    "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726736155/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/w5hywbuv5r8elwkajlsd.png";

  return (
    <div className="m-2"
      
      style={{
        borderRadius: "8px",
        backgroundImage: `url(${nen1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center font-tinhHoaHoiTu mb-5">
        <h2 className="text-white text-[2em]">Mặt bằng Dự án</h2>
        <strong className="text-[#ffdb8f] text-[3em]">New LaVIVDA</strong>
      </div>

      <div className="text-center font-content text-white m-1">
        <p>
          Nét đẹp tinh tế của kiến trúc tân cổ điển Châu Âu với điểm nhấn mái
          Mansard biểu trưng cho sự giao hòa Đông - Tây được tái hiện hoàn mỹ
          qua những dãy phố mang vẻ đẹp cân bằng giữa hoài cổ và hiện đại.
        </p>
      </div>
      <br />
      <div className="text-center mb-3 grid grid-cols-2 gap-3">
        {Object.keys(contentData).map((tab) => (
          <button
            key={tab}
            className={`button-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleClick(tab)}
          >
            {`${tab === "tab-1" ? "Căn 1 phòng ngủ" : tab === "tab-2" ? "Căn 2 phòng ngủ" : "Căn thương mại"}`}
          </button>
        ))}
      </div>

      <div className="p-7">
        {Object.keys(contentData).map((tab) => (
          <div key={tab} className={activeTab === tab ? "active" : "hidden"}>
            {activeTab === tab ? (
              <div>
                <img
                  src={contentData[tab].fixed}
                  alt={`Ảnh cố định của ${tab}`}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "5px",
                    marginBottom: "20px",
                  }}
                />

                <Slider {...sliderSettings}>
                  {contentData[tab].slides.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Slide của ${tab}`}
                        style={{ maxWidth: "100%", borderRadius: "5px" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reason;
