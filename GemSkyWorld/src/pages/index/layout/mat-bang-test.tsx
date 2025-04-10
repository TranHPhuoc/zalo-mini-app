import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const MatBangTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743460116/GemSkyWorld/adp6bmc15q9dsvozmqsk.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743460117/GemSkyWorld/diismklfcuwwwqrzhyns.jpg"
  ];

  const captions = [
    "<b>MẶT BẰNG PHÂN KHU GEM SKY WORLD LONG THÀNH</b></br></br>Lấy cảm hứng từ đá quý, <b>Gem Sky World Long Thành</b> được quy hoạch thành các phân khu mang tên châu ngọc, trở thành khu đô thị thương mại – giải trí sầm uất bậc nhất Đồng Nai. Dự án bắt nhịp xu hướng hiện đại, tạo không gian sống, giải trí, ẩm thực lý tưởng cho người trẻ năng động. <br><br>Với công viên trung tâm Sky Park và 6 công viên nội khu, Gem Sky World mang đến không gian xanh hài hòa cùng thiên nhiên. Cây xanh hiện diện khắp nơi, tạo nên vẻ đẹp mềm mại giữa nhịp sống hiện đại. <br><br>Hạ tầng hoàn thiện với đường rộng 15-60m, vỉa hè thông thoáng, hệ thống điện nước ngầm, công viên, hồ cảnh quan và đài phun nước, mang đến cuộc sống tiện nghi, văn minh cho cư dân.",
    "<b>MẶT BẰNG PHÂN KHU SAPPHIRE  PARKVIEW </b></br></br><b>Sapphire Parkview</b> liền kề công viên Gem Sky Park, nơi hội tụ loạt tiện ích giải trí hấp dẫn. Cư dân tận hưởng không gian sống sôi động, đồng thời khai thác thương mại từ lượng khách tham quan đông đảo. <br><br>Dãy shophouse sầm uất chạy dọc đại lộ GoldSilk Boulevard – trục đường huyết mạch dài 2km, rộng 34m, kết nối linh hoạt giữa các phân khu, tạo nên trung tâm kinh doanh sôi động. <br><br>Bao quanh Sapphire Parkview là hệ thống trường học từ mầm non đến trung học phổ thông, nổi bật với Greenfield School – thành viên hệ thống Cambridge quốc tế, mang đến môi trường giáo dục chất lượng."
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
    <Box className="p-3 text-justify">
      <div className="text-center font-tinhHoaHoiTu m-3 ">
        <Box
          className="text-center font-tinhHoaHoiTu font-bold relative"
          style={{
            textTransform: "uppercase",
            fontSize: "1.6em",
            color: "#82ba41",
          }}
        >
          MẶT BẰNG DỰ ÁN
        </Box>
        <Box
          style={{
            width: "150px", // Độ dài gạch chân
            height: "1px", // Độ dày gạch chân
            backgroundColor: "#82ba41",
            margin: "8px auto 0", // Canh giữa và cách chữ một chút
            borderRadius: "2px",
            marginTop: "6px",
            marginBottom: "25px", // Bo tròn 2 đầu
          }}
        ></Box>
      </div>
      <p
  className="text-black my-5"
  dangerouslySetInnerHTML={{ __html: captions[activeIndex] }}
></p>
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
            size="1x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="w-5/6 mx-auto cursor-pointer"
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
            size="1x"
            className="transition-transform duration-300 hover:scale-110"
          />
        </button>
      </div>

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
