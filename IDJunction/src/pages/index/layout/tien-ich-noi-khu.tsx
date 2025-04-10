import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TienIchNoiKhu: FC = () => {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Định nghĩa mảng ảnh
    const images = [
        "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742962261/Du-an-JD-Junction/erri1oa06mrbdwbr4oya.jpg",
        "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742962771/Du-an-JD-Junction/wencvg2jfcazncfst0n1.jpg",
        "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742962797/Du-an-JD-Junction/m7kcxe3imcr55yyhmhqu.jpg",
        "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742962797/Du-an-JD-Junction/cn1fc049aq08labxioj5.jpg",
    ];
    const imageCaptions = [
        "Tổng quan tiện ích dự án ID Junction",
        "Khu vui chơi ngoài trời cho trẻ em",
        "Khu thể dục thể thao và giải trí",
        "Mặt bằng tiện ích dự án ID Junction"
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Box className="p-3">
            <div className="text-center font-tinhHoaHoiTu m-3">
                <h2 className= "text-[1.5em]"
                style={{
                    textTransform: "uppercase",
                    color: "rgb(0, 51, 102)",
                }}>Tiện ích nội khu dự án 
                </h2>
                <strong className="text-[2em]"
                style={{
                    textTransform: "uppercase",
                    color: "rgb(0, 51, 102)",
                }}>ID Junction</strong>
                <img src="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742958384/Du-an-JD-Junction/liwr4srk85mppo9i6bet.png" alt="" 
                style={{
                    width: "90%",
                    margin: "0 auto",
                }}>
                </img>
            </div>

            <div className="text-black">
                <p>Khu đô thị ID Junction được đánh giá sẽ có rất nhiều triển vọng đối với việc phát triển thương mại – dịch vụ. Ngay nội khu dự án cũng sẽ xây dựng dãy shophouse với các cửa tiệm sầm uất sáng rực ánh đèn ngày đêm nhằm đáp ứng nhu cầu mua sắm, giải trí của các khách hàng. Bên cạnh đó, bên trong dự án còn sở hữu nhiều tiện ích khác như: Công viên cây xanh rộng lớn và mảng xanh len lỏi, Khu vui chơi ngoài trời dành cho trẻ em, Khu thể dục thể thao như: dưỡng sinh, sân bóng đá, sân cầu lông… Trường học các cấp, Khu siêu thị, Gym, spa cao cấp, Khu vực sinh hoạt cộng đồng và BBQ ngoài trời…
                </p>
            </div><br></br>

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
                            <p style={{ fontStyle: "italic", marginTop: "8px", textAlign: "center" }}>
                                        {imageCaptions[index]}
                            </p>
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
