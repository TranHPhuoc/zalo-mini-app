import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";



export const TienIch2: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const img = "https://res.cloudinary.com/dl4szj3ff/image/upload/v1744107882/Gladia%20Khang%20%C4%90i%E1%BB%81n/owm4mufvrgmxwrj0wc6e.png"

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification",
    },
  ];

  return (
    <Box className="m-3 mb-0">
      <Box flexDirection="row">
        {images.map((img, index) => (
          <Box
            key={img.key}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover", }}
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
