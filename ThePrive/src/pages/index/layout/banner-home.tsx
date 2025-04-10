import React, { FC, useState } from "react";
import { Box } from "zmp-ui";
import poster from "static/bg_prive.png"
export const BannerHome: FC = () => {
  const videoSrc =
    "https://res.cloudinary.com/dl4szj3ff/video/upload/v1743145053/the-prive/pgb97hebfjeeppbcapvv.mp4";

  return (
    <Box className="m-4">
      <Box flexDirection="row">
        <Box
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <video
            src={videoSrc}
            preload="auto" 
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
