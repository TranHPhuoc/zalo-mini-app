import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

interface BannerGioiThieuProps {
  className?: string;
}

export const TienIchNgoaiKhu: FC<BannerGioiThieuProps> = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const img = "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743575972/CitiGrand/t3qrmsb5jwdkmuns2p7l.jpg"

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification",
    },
  ];

  return (
    <Box className={`m-1 mb-0 ${className || ''}`}>
      <Box flexDirection="row">
        {images.map((img, index) => (
          <Box
            key={img.key}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              role="presentation"
              onClick={() => {
                setActiveIndex(index);
                setVisible(true);
              }}
              src={img.src}
              alt={img.alt}
            />
          </Box>
        ))}
      </Box>
      <ImageViewer
        onClose={() => setVisible(false)}
        activeIndex={activeIndex}
        images={images}
        visible={visible}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
      />
    </Box>
  );
};

