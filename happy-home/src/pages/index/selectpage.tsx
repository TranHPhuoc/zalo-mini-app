import React from "react";
import { Button, Page, } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import { Welcome } from "./welcome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from 'static/icon.png';
import nen1 from 'static/nen1.jpg';

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
            src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742550419/kyf91otmhpdwhrgt54px.jpg"
            alt="Slide 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742571037/Du-an-1/pzyrfif4iw0f5btpg41x.png"
            alt="Slide 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742571037/Du-an-1/avzahwe7b9vek5txfvcs.png"
            alt="Slide 3"
            className="w-full h-auto object-cover"
          />
        </Slider>
      </div>

      {/* Phần background màu */}
      <div className="flex-1 flex justify-center items-center w-full bg-gradient-to-b from-[#001f3f] to-[#001b36] py-6 sm:py-8 md:py-10">
        {/* Khung border chứa chữ và button */}
        <div className="relative w-11/12 max-w-[400px] rounded-2xl p-6 text-center shadow-2xl border-2 border-[#00b3b3] flex flex-col gap-6 bg1">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10">
            <img 
              src={icon} 
              alt="icon" 
              className="w-20 h-20 object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 179, 179, 0.5))',
                transform: 'scale(9.5)',
              }}
            />
          </div>
          <h1 className="text-2xl sm:text-5xl font-bold"
            style={{
              background: 'linear-gradient(to right, #FFD700, #FDB931, #DAA520)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: `
                1px 1px 5px rgba(0,0,0,0.3),
                0 0 5px rgba(255,255,255,0.5),
                0 0 15px rgba(255,255,255,0.3),
                0 0 5px rgba(255,255,255,0.2)
              `,
              letterSpacing: '2px',
              filter: 'brightness(1.2)',
              fontFamily: "'Times New Roman', serif",
              fontStretch: 'condensed',
              fontWeight: '500',
              textTransform: 'uppercase'
            }}>
            KÍNH CHÀO QUÝ DÂN CƯ TƯƠNG LAI
          </h1>
          <div className="text-base font-bold text-white"
          style={{
            background: 'linear-gradient(90deg, #22c55e, #2dd4bf)', 
            borderRadius: '20px',
            fontFamily: "'Times New Roman', serif",
            fontWeight: '500',
            padding: '6px 12px',
            fontSize: '1.1rem'
          }}>
            DỰ ÁN NHÀ Ở XÃ HỘI HAPPY HOME
          </div>
          <div className="flex items-center justify-center gap-6">
            <div 
              className="text-[3.8rem] sm:text-6xl font-bold"
              style={{
                background: 'linear-gradient(to right, #FFD700, #FDB931, #DAA520)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: `
                  1px 1px 5px rgba(0,0,0,0.3),
                  0 0 5px rgba(255,255,255,0.5),
                  0 0 15px rgba(255,255,255,0.3),
                  0 0 5px rgba(255,255,255,0.2)
                `,
                letterSpacing: '2px',
                filter: 'brightness(1.2)'
              }}
            >
              DTA
            </div>
            <div className="flex flex-col gap-0">
              <div 
                style={{
                  color: '#fff',
                  textShadow: `
                    0 0 7px #fff,
                    0 0 10px #fff,
                    0 0 21px #8a2be2,
                    0 0 42px #8a2be2,
                    0 0 82px #8a2be2,
                    0 0 92px #8a2be2
                  `,
                  fontFamily: "'Great Vibes', cursive",
                  letterSpacing: '3px',
                  fontSize: '1.8rem',
                  fontStyle: 'italic',
                  fontWeight: '400',
                  lineHeight: '1'
                }}>
                Nhơn
              </div>
              <div 
                style={{
                  color: '#fff',
                  textShadow: `
                    0 0 7px #fff,
                    0 0 10px #fff,
                    0 0 21px #8a2be2,
                    0 0 42px #8a2be2,
                    0 0 82px #8a2be2,
                    0 0 92px #8a2be2
                  `,
                  fontFamily: "'Great Vibes', cursive",
                  letterSpacing: '3px',
                  fontSize: '1.8rem',
                  fontStyle: 'italic',
                  fontWeight: '400',
                  lineHeight: '1'
                }}>
                Trạch
              </div>
            </div>
          </div>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
            `}
          </style>

          {/* Button */}
          <div className="flex flex-col gap-3">
            <Button
              className="w-full py-2 sm:py-3 font-semibold text-white rounded-full shadow-lg text-xl sm:text-base hover:scale-105 transition-transform animate-pulseScale"
              style={{
                background: 'linear-gradient(90deg, #4ade80, #22d3ee, #4ade80)',
                backgroundSize: '300% 100%',
                animation: 'gradient 4s ease infinite, pulseScale 2s ease-in-out infinite 0.5s'
              }}
              onClick={() => navigate("/homepage")}
            >
              THÔNG TIN DỰ ÁN
            </Button>
            <Button
              className="w-full py-2 sm:py-3 font-semibold text-white rounded-full shadow-lg text-xl sm:text-base hover:scale-105 transition-transform animate-pulseScale"
              style={{
                background: 'linear-gradient(90deg, #4ade80, #22d3ee, #4ade80)',
                backgroundSize: '300% 100%',
                animation: 'gradient 4s ease infinite, pulseScale 2s ease-in-out infinite 0.5s'
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
