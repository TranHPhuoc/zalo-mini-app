import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

export const BannerHome: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const img = "https://res.cloudinary.com/dvwozvfcy/image/upload/v1742954639/Du-an-JD-Junction/sqdbj94abxidi3aom0ui.jpg"

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification"
    },
  ];

  return (
    <Box className="m-4">
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
      />
    </Box>
  );
};
