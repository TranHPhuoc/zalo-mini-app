import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";

export const ViTriTest: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const img ="https://res.cloudinary.com/dvwozvfcy/image/upload/v1742355738/Du-an-1/u1c4usqzecv2bnvz6emh.jpg";

  const images = [
    {
      key: "banner_notification",
      src: img,
      alt: "Banner Notification",
    },
  ];

  return (
    <Box className="m-1">
      <Box className="text-center" >
        <div className="mt-4">
          <h2
            className="font-tinhHoaHoiTu font-bold"
            style={{
              fontSize: "1.8em",
              textTransform: "uppercase",
              color: "#1f726f",
            }}
          >
            VỊ TRÍ DỰ ÁN
          </h2>
        </div>
      </Box>
      <Box>
      <p className="font-content text-[#4a5d52] text-[1em] "
            style={{ lineHeight: "30px" }}
        >Tọa lạc tại vị trí gần Vincom Dĩ An, từ New Lavida cư dân chỉ mất 5 phút di chuyển có thể dễ dàng tiếp cận các địa điểm tại trung tâm Bình Dương cũng như chuỗi tiện ích vui chơi giải trí y tế, giáo dục, dịch vụ tài chính, ngân hàng, dịch vụ công và các khu công nghiệp trên địa bàn thành phố.</p>
      </Box>
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
      <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Vị trí chi tiết căn hộ chung cư New Lavida</p>
    </Box>
  );
};