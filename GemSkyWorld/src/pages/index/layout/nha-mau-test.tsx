import React, { FC, useState } from "react";
import { Box, Text, ImageViewer } from "zmp-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const NhaMauTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743506780/GemSkyWorld/u8msy7lngrp7thgqoblx.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743506830/GemSkyWorld/ggn6ckqdaxyisu0yujox.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743506830/GemSkyWorld/hjsqeixedayiqkl3buyr.jpg",
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743506780/GemSkyWorld/l7cl9nlybdftcvmq4yu3.jpg"
  ];

  const captions = [
    "<b>NHÀ PHỐ THƯƠNG MẠI</b></br></br>Sống bình yên trong một không gian hiện đại, xanh mát cùng cộng đồng trẻ trung, năng động giàu tính kết nối là mong muốn của rất nhiều người. Nhà phố tại dự án <b>Gem Sky World Long Thành</b> là điểm đến an cư hàng đầu của xu hướng di cư về các vùng vệ tinh TP. Hồ Chí Minh. <br><br>Sống xa nội thành nhưng tiện lợi, an toàn và rộng thoáng được ưu tiên lựa chọn hơn là chen chúc trong những cao ốc chật hẹp ngột ngạt trong nội đô. Sở hữu nhà phố tại dự án <b>Gem Sky World Long Thành</b>,  gia chủ có được đặc quyền phong phú thiết kế, linh hoạt không gian.",
    "<b>BIỆT THỰ ĐƠN LẬP</b></br></br>Chẳng cần phải là vương tôn quý tộc mới được ở trong cung điện, chỉ cần sở hữu biệt thự thương mại đơn lập tại dự án <b>Gem Sky World Long Thành</b>, gia chủ sẽ trở nên vương giả hơn bao giờ hết với phong cách thiết kế đương đại đầy quý phái.<br><br> Mê hoặc từ tổng thể đến từng chi tiết nhỏ nhất chính là sức thu hút không thể chối từ của những căn biệt thự đơn lập tại đây. Khu đô thị <b>Gem Sky World Long Thành</b> chắc chắn là không gian sống đáng tự hào tôn vinh phong cách của gia chủ.",
    "<b>BIỆT THỰ SONG LẬP</b><br><br>Một không gian sống sang trọng và đẳng cấp tạo tạo nên nét chấm phá tuyệt vời trong cuộc sống muôn màu của bạn tại dự án <b>Gem Sky World Long Thành.</b><br><br>Điểm nổi bật của sản phẩm biệt thự thương mại song lập đó chính là thiết kế tôn vinh các giá trị của không gian kết nối với thiên nhiên, xoá nhoà ranh giới giữa những khối bê tông liền mạch với không gian khuôn viên bên ngoài. Người trẻ đặc biệt mong ước sở hữu được những căn biệt thự thương mại song lập để kiến tạo nên ngôi nhà mơ ước.",
    "<b>SHOPHOUSE</b><br><br>Toạ lạc tại mặt tiền đại lộ vàng GoldSilk Boulevard rộng 34m và lề đường 5m rộng rãi, hứa hẹn một không gian kinh doanh sầm uất, một thành phố không ngủ với hơn 400 căn shophouse trải dài hơn 1,5 km. Thiết kế shophouse tinh tế với 1 trệt, 3 lầu vừa là không gian kinh doanh năng động vừa là không gian sống lý tưởng tạo vượng khí và sung túc cho gia chủ. <br><br>Nhờ giá trị kép và tiềm năng sinh lời cao nên shophouse tại dự án Gem Sky World Long Thành luôn được giới đầu tư đặc biệt săn đón. Shophouse tại khu đô thị <b>Gem Sky World Long Thành</b> góp phần cho sự sầm uất và năng động của Thành Phố trẻ Long Thành, xứng đáng vươn tầm Châu Lục và Thế Giới."
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
          NHÀ MẪU DỰ ÁN
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
