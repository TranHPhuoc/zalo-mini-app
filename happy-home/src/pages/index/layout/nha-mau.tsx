import React, { FC, useState } from "react";
import { Box, Text,ImageViewer  } from "zmp-ui";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const NhaMau: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737551864/9_x0oxjb.png",
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737551864/7_xvahmh.png",
    "https://res.cloudinary.com/dqcrcdufy/image/upload/v1737551865/8_pqx9jo.png"
];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Box className="p-3 bg-[#387270]">
            <div className="text-center font-tinhHoaHoiTu m-3">
                <h2 className="text-white text-[1.5em]">Hình ảnh nhà mẫu</h2>
                <strong className="text-[#ffdb8f] text-[2em]">DỰ ÁN HAPPY HOME</strong>
            </div>

            <div className="text-center text-white mb-3">
                <p>Thông tin liên quan đến Dự án căn hộ Happy Home đã đề cập trên sẽ là nguồn tham khảo hữu ích dành cho bạn. Bạn sẽ nhận cơ hội sở hữu căn hộ chất lượng, tiện ích đầy đủ và đặc biệt được nhận thông tin chính xác về giá cả căn hộ tốt nhất.</p>
            </div>

            <Box style={{ overflow: 'hidden' }}>
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className=""
                                onClick={() => {
                                    setActiveIndex(index);
                                    setVisible(true);
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </Box>
            <ImageViewer
                visible={visible}
                onClose={() => setVisible(false)}
                activeIndex={activeIndex}
                images={images.map((src) => ({ src }))}
                style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
            />
        </Box>
    );
};

