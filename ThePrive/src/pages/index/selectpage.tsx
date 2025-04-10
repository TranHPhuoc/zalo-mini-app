import React from "react";
import { Button, Page } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import { Welcome } from "./welcome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelectPage = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Page className="relative flex flex-col items-center justify-start bg-white min-h-screen">
      {/* Phần hình ảnh ở trên */}
      <Welcome />
      <div className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px]">
        <Slider {...sliderSettings}>
          <img
            src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743135949/the-prive/m5mjpcqlldoysirh3ocl.png"
            alt="Slide 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743136767/the-prive/b8dio4zal1n9bls4ettx.jpg"
            alt="Slide 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743136242/the-prive/qkhxzpnkxwruh4js7tec.jpg"
            alt="Slide 3"
            className="w-full h-auto object-cover"
          />
        </Slider>
      </div>

      {/* Phần background màu */}
      <div className="flex-1 flex justify-center items-center w-full py-6 sm:py-8 md:py-10 bg">
        {/* Khung border chứa chữ và button */}
        <div className="relative w-11/12 max-w-[400px] rounded-2xl p-6 text-center shadow-2xl border-2 border-[#003366] flex flex-col gap-6">
          <h1
            className="text-2xl sm:text-5xl font-bold"
            style={{
              color: "#003366", // Xanh đậm sang trọng
              textShadow: `
      2px 2px 5px rgba(255, 255, 255, 0.5),  /* Bóng đổ trắng nhẹ */
      1px 1px 2px rgba(255, 255, 255, 0.3)
    `,
              letterSpacing: "2px",
              filter: "brightness(1)", // Tăng độ sáng nhẹ
              fontFamily: "'Times New Roman', serif",
              fontStretch: "condensed",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            KÍNH CHÀO QUÝ DÂN CƯ TƯƠNG LAI
          </h1>

          <div
            className="text-base font-bold text-white"
            style={{
              background: "linear-gradient(45deg, #896565, #003366)",
              borderRadius: "20px",
              fontFamily: "'Times New Roman', serif",
              fontWeight: "500",
              padding: "6px 12px",
              fontSize: "1.1rem",
            }}
          >
            DỰ ÁN KHU CĂN HỘ THE PRIVE
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col gap-0">
              <div
                className="text-white text-5xl font-bold uppercase relative whitespace-nowrap mt-2"
                style={{
                  textShadow: `
              0 0 10px #1f4586,
              0 0 20px #1f4586,
              0 0 30px #ff00ff
            `,
                  fontFamily: "'Merienda', cursive",
                  letterSpacing: "2px",
                  
                  color: "#fff",
                }}
              >
                THE PRIVE
              </div>

              {/* Chữ phản chiếu */}
              <div
                className="text-white text-5xl font-bold uppercase mt-2 opacity-50 whitespace-nowrap"
                style={{
                  transform: "scaleY(-1)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))",
                }}
              >
                THE PRIVE
              </div>
            </div>
          </div>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap');
            `}
          </style>

          {/* Button */}
          <div className="flex flex-col gap-3">
            <Button
              className="w-full py-2 sm:py-3 font-semibold text-white rounded-full shadow-lg text-xl sm:text-base hover:scale-105 transition-transform animate-pulseScale"
              style={{
                background: "radial-gradient(circle, #896565 50%, #003366 100%)",
                backgroundSize: "300% 100%",
                animation:
                  "gradient 4s ease infinite, pulseScale 2s ease-in-out infinite 0.5s",
              }}
              onClick={() => navigate("/homepage")}
            >
              THÔNG TIN DỰ ÁN
            </Button>
            <Button
              className="w-full py-2 sm:py-3 font-semibold text-white rounded-full shadow-lg text-xl sm:text-base hover:scale-105 transition-transform animate-pulseScale"
              style={{
                background: "radial-gradient(circle, #896565 50%, #003366 100%)",
                backgroundSize: "300% 100%",
                animation:
                  "gradient 4s ease infinite, pulseScale 2s ease-in-out infinite 0.5s",
              }}
              onClick={() => navigate("/dangky")}
            >
              KHẢO SÁT NHU CẦU
            </Button>
          </div>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }

              /* Ẩn scrollbar và ngăn scroll */
              * {
                scrollbar-width: none;
                -ms-overflow-style: none;
                box-sizing: border-box;
              }

              *::-webkit-scrollbar {
                display: none;
              }

              /* Fix scroll ngang và khoảng trắng */
              html, body {
                margin: 0;
                padding: 0;
                width: 100%;
                overflow-x: hidden;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }

              /* Fix cho ZMP Page */
              .zaui-page {
                overflow-x: hidden !important;
                width: 100% !important;
                max-width: 100% !important;
              }
            `}
          </style>
        </div>
      </div>
    </Page>
  );
};

export default SelectPage;
