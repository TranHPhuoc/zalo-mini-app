import React, { FC, useState, useEffect } from "react";
import { Box, ImageViewer } from "zmp-ui";

export const BannerHomeTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      key: "banner_1",
      src: "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743413486/GemSkyWorld/vtkt97p8izrpx63t9te1.jpg",
      alt: "Banner 1",
    },
    {
      key: "banner_2",
      src: "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743413973/GemSkyWorld/cj0nzkp2teqtw3sjeq6z.png",
      alt: "Banner 2",
    },
    {
      key: "banner_3",
      src: "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743413485/GemSkyWorld/s8ccevx0sellqfwag1au.jpg",
      alt: "Banner 3",
    },
  ];

  // Tự động chuyển ảnh mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Đổi ảnh mỗi 3 giây

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box className="m-2">
      <Box 
        style={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          height: "200px", // Điều chỉnh chiều cao banner
        }}
      >
        {images.map((img, index) => (
          <img
            key={img.key}
            src={img.src}
            alt={img.alt}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === activeIndex ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
            role="presentation"
            onClick={() => {
              setActiveIndex(index);
              setVisible(true);
            }}
          />
        ))}
      </Box>

      {/* ImageViewer khi click vào ảnh */}
      <ImageViewer
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        visible={visible}
      />
    </Box>
  );
};
