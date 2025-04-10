import React, { FC, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { TienIch1 } from "./tien-ich-1";
import { TienIch2 } from "./tien-ich-2";
import { TienIch3 } from "./tien-ich-3";
import { TienIch4 } from "./tien-ich-4";
import { TienIch5 } from "./tien-ich-5";
import { TienIch6 } from "./tien-ich-6";
export const TienIchTest: FC = () => {
  
  return (
    <Box className="m-0.5">
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
            TIỆN ÍCH DỰ ÁN
          </h2>
        </div> 
      </Box>
      <Box>
        <div><TienIch1/>
        <p  className="font-content text-[#4a5d52] text-[1em] ml-4 mr-4 "
            style={{ lineHeight: "30px" }}
        >Khu phức hợp Căn hộ – Thương mại – Công viên – Trường học New Lavida sở hữu không gian sống khoáng đạt và tích hợp hệ thống tiện ích đồng bộ mang đến không gian sống mơ ước cho gia đình bạn.</p>
        </div>
        <div><TienIch6/>
        <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Tổng quan tiện ích dự án New Lavida</p>
        </div>
        <div><TienIch2/>
        <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Công viên chức năng dự án New Lavida</p>
        </div>
        <p  className="font-content text-[#4a5d52] text-[1em] ml-4 mr-4"
            style={{ lineHeight: "30px" }}
        >New Lavida được đầu tư hệ thống hồ bơi tràn bờ, các thành viên trong gia đình thoải mái vận động, thư giãn và rèn luyện sức khỏe mỗi ngày. Cùng với đó, hệ thống dịch vụ thương mại đa dạng được tích hợp tại 4 tầng khối đế và hệ thống shophouse trong dự án gồm: siêu thị, nhà hàng, café, Spa & Salon, Gym & Fitness, …. phục vụ cho một cuộc sống rực rỡ, năng động, tiện ích.</p>
        <div><TienIch3/>
        <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Hồ bơi dự án New Lavida</p>
        </div>
        <div><TienIch4/>
        <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Sân thể thao đa năng dự án New Lavida</p></div>
        <div><TienIch5/>
        <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Quy trình mua dự án New Lavida</p></div>
        
      </Box>
    </Box>
  );
}