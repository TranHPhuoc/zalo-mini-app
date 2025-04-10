import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";


export const TienIch1: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const img = "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742962261/Du-an-JD-Junction/erri1oa06mrbdwbr4oya.jpg"

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification",
    },
  ];

  return (
    <Box className="m-3 ">
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
              style={{ width: "100%", height: "86%", objectFit: "cover", cursor: "pointer", borderRadius:"3px" }}
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
          style={{ position: "fixed", top: 0, left: 0, zIndex: 1000,  }}
        />
    </Box>
  );
};
