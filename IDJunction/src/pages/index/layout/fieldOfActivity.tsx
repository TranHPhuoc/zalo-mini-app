import React, { FC } from "react";
import { Box, Text } from "zmp-ui";

import img1 from 'static/cam-15-min-scaled.jpg';
import icon1 from 'static/element-1.png';
import icon2 from 'static/element-2.png';
import icon3 from 'static/element-3.png';
import icon4 from 'static/element-4.png';

export const FieldOfActivity: FC = () => {
    const bgImageStyles = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <Box className="relative space-y-3 m-2" style={bgImageStyles}>
            <div className="absolute inset-0 z-2" style={{ backgroundColor: "rgba(46, 56, 45, 0.8)" }}></div>

            <div className="relative p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 flex flex-col justify-center items-center">
                        <img src={icon1} alt="" className="w-30 h-30" />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 text-[#ECC09A]">
                            <p>8 block</p>
                            <p>Thiết kế 1 trệt 3 lầu</p>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center">
                        <img src={icon3} alt="" className="w-30 h-30" />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 text-[#ECC09A]">
                            <p>176 căn</p>
                            <p>Nhà phố biệt thự</p>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center">
                        <img src={icon2} alt="" className="w-30 h-30" />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 text-[#ECC09A]">
                            <p>Diện tích toàn khu</p>
                            <p>43.000 m2</p>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center">
                        <img src={icon4} alt="" className="w-30 h-30" />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 text-[#ECC09A]">
                            <p>20+ tiện ích</p>
                            <p>đặc quyền</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};
