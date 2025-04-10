import React, { FC } from "react";
import { Box, Text } from "zmp-ui";

export const Master: FC = () => {
    return (
        <Box className="m-4">
            <div className="text-center font-tinhHoaHoiTu mb-5">
                <h2 className="text-[#4a5d52] text-[2em]">Giá bán năm 2024</h2>
                <strong className="text-[#f9856f] text-[3em]">THE CLASSIA</strong>
            </div>
            <div className="font-content text-[#4a5d52]">
                <strong>Giá bán biệt thự và nhà phố The Classia mới nhất tháng 01/2024 </strong><span className="text-black">tham khảo chỉ 18.8 TỶ/ CĂN ĐÃ BAO GỒM VAT ! Giá bán The Classia Khang Điền 18,8 tỷ gồm VAT là chưa trừ chiết khấu 7,3% và chính sách quà tặng… Quý khách hàng có thể liên hệ PKD để được tư vấn chi tiết hơn. Với những ưu điểm về quy mô, vị trí tọa lạc, thiết kế và những tiện ích đẳng cấp đi kèm, Foresta quận 9</span>
            </div>
            <br />
            <div className="font-content text-[#4a5d52] text-[16px] text-center">
                <strong>Giá bán biệt thự và nhà phố The Classia Khang Điền tháng 03/2024</strong>
            </div>
            <br />
            <table
                className="border border-black w-full text-content giaBan"
                style={{ height: '215px', border:"1px solid black",}}
                summary="Giá bán biệt thự & nhà phố Fo"
            >
                <thead>
                    <tr className="bg-[#ee8269] text-white text-center">
                        <th>LOẠI NHÀ</th>
                        <th>DIỆN TÍCH ĐẤT</th>
                        <th>DIỆN TÍCH XÂY DỰNG</th>
                        <th>GIÁ BÁN</th>
                    </tr>
                    <tr className="bg-[#ee8269] text-center">
                        <td></td>
                        <td>Đơn vị: m²</td>
                        <td>Đơn vị: m²</td>
                        <td>Đơn vị: tỷ đồng</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>Liên kế</td>
                        <td>90 – 127</td>
                        <td>277 – 333</td>
                        <td>18.4 – 21</td>
                    </tr>
                    <tr className="text-center">
                        <td>Căn góc</td>
                        <td>130 – 157</td>
                        <td>357 – 436</td>
                        <td>30 – 39</td>
                    </tr>
                    <tr className="text-center">
                        <td>Biệt Thự</td>
                        <td>157 – 210</td>
                        <td>290 – 455</td>
                        <td>36 – 43</td>
                    </tr>
                </tbody>
            </table>

        </Box>
    );
};