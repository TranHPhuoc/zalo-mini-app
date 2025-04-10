import React, { FC } from "react";
import { Box } from "zmp-ui";

import icon1 from 'static/1.png'
import icon2 from 'static/2.png'
import icon3 from 'static/1.png'
import icon4 from 'static/2.png'
import icon5 from 'static/3.png'
import icon6 from 'static/4.png'
import icon from 'static/ico-rhomebus.png'

export const TienIchNgoaiKhu: FC = () => {


    return (
        <Box className="m-4">
            <div className="text-center font-tinhHoaHoiTu mb-5">
                <h2 className="text-[#4a5d52] text-[1.5em]">Tiện ích ngoại khu</h2>
                <strong className="text-[#f9856f] text-[2em]">DỰ ÁN HAPPY HOME</strong>
            </div>

            <div className="font-content tex-[#4a5d52]">
                <p>Bên cạnh các tiện ích nội khu vượt trội thì vị trí đắc địa của Happy Home đã giúp khu nhà ở xã hội này tích hợp thêm vô vàn các tiện ích ngoại khu khác. Ngay trong khu vực lân cận, cư dân sẽ được thừa hưởng:</p>
            </div>
            <br />
            <div className="relative p-4">
                <div className="grid grid-cols-2 gap-7">
 
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon3} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Đi đến Trung tâm hành chính Nhơn Trạch chỉ mất 5 phút.</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon4} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Liên kết giữa các trung tâm tài chính và ngân hàng.</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon5} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Các bệnh viện, Khu công nghiệp, siêu thị chỉ mất 5 phút.</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center" style={{background:'#fff0e4', border:'1px solid #efc19d', borderRadius: '10px'}}>
                        <img src={icon6} alt="" className="w-30 h-30 p-5" style={{background: '#4a5d52', borderRadius:'50%'}} />
                        <div className="text-center font-tinhHoaHoiTu text-[16px] mt-2 mb-3 text-[#4a5d52]">
                            <p>Kết nối khu du lịch biển Vũng Tàu thuận tiện cho cư dân.</p>
                        </div>
                        <div className="absolute mt-[208px] w-[25px] h-[25px]"><img src={icon} alt="" /></div>
                    </div>
                </div>
            </div>
        </Box>
    );
};
