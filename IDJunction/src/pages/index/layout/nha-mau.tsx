import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const NhaMau: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742985702/Du-an-JD-Junction/hgaynuiqlmhkm9eaeqze.jpg",
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742985703/Du-an-JD-Junction/umfbv1cgtytnpr9yj520.jpg",
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742985702/Du-an-JD-Junction/nesg3zo32tweugzm4tj3.jpg",
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742985702/Du-an-JD-Junction/pq5snpnkpvosbxebwnc6.jpg",
    "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742985702/Du-an-JD-Junction/gvtg52fxwhznndgxjrxr.jpg"
  ];

  const captions = [
    "Garden Shophouse – các căn Shophouse vườn với ý tưởng khác biệt, là khái niệm mới mẻ lần đầu tiên được giới thiệu trên thị trường. Mặt tiền các căn hướng đường song hành và khu thể thao phức hợp. Thiết kế các căn đảm bảo một không gian thuận tiện cho việc kinh doanh, bao bọc trong những mảng vườn xanh mát.",
    "The Spring là dòng sản phẩm chiếm đa số trong dự án, với diện tích đất tiêu chuẩn là 7m x 15m, kích thước xây dựng 5,5m x 10,5m phù hợp với tài chính của các gia đình trẻ, năng động và thành đạt, các không gian sống được thiết kế và phân chia một cách thông minh, hợp lý.",
    "The Spring+ hay The Spring Plus là phiên bản nâng cấp của The Spring, với diện tích đất tiêu chuẩn 8m x 15m, kích thước xây dựng 6,5m x 10,5m. Mẫu nhà này có diện tích quy hoạch riêng để lắp đặt thang máy. Tất cả các căn đều ưu tiên góc nhìn hướng về cảnh quan và các tiện ích nhằm mang đến gia chủ những phút giây thư giãn nhẹ nhàng.",
    "The Bliss có mặt sau hướng vườn kèm lối riêng thăm vườn, diện tích đất tiêu chuẩn 10m x 17m, kích thước xây dựng 8m x 10,5m. Thiết kế theo không gian biệt thự với mái cổ điển và hàng hiên đón gió.",
    "The Infinity như tên gọi của mình, Infinity chào đón chủ nhân bằng tầm nhìn không giới hạn, trải rộng đến mặt hồ trung tâm và công viên tiện ích. Diện tích đất tiêu chuẩn 10m x 20m, kích thước xây dựng 8m x 11,5m"
  ];

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <Box className="p-3">
      <div className="text-center font-tinhHoaHoiTu m-3 ">
        <h2
          className="text-[1.5em]"
          style={{ textTransform: "uppercase", color: "rgb(0, 51, 102)" }}
        >
          Nhà mẫu dự án
        </h2>
        <strong
          style={{
            textTransform: "uppercase",
            color: "rgb(0, 51, 102)",
            fontSize: "2em",
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
      <p className="text-black my-5">{captions[activeIndex]}</p>
      <div className="relative w-full flex justify-center items-center mb-3">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevImage}
          style={{
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="w-4/5 mx-auto cursor-pointer"
          onClick={() => setVisible(true)}
        />
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextImage}
          style={{
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
      </div>

      <ImageViewer
        visible={visible}
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images.map((src) => ({ src }))}
      />
    </Box>
  );
};
