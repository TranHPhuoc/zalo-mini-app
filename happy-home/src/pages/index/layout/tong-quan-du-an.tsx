import React, { FC } from "react"
import { Box, Button } from "zmp-ui"

import nen1 from "static/nen-1.jpg"

export const TongQuanDuAn: FC = () => {

    return (
        <Box className="col-inner m-4">
            <Box className="text-center"
                style={{
                    backgroundImage: `url(${nen1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mt-8">
                    <h2 className="font-tinhHoaHoiTu font-bold" style={{ fontSize: "1.8em", textTransform: "uppercase", color: "#1f726f" }}>
                        TỔNG QUAN DỰ ÁN
                    </h2>
                </div>

                <br />
                <div className="font-content text-[#4a5d52] text-[1em] text-left " style={{ lineHeight: "30px" }}>
                    <ul className="list-disc ml-8"><li>Tên dự án:<strong> HAPPY HOME</strong></li>
                        <li>Vị trí: Đường Nguyễn Văn Cừ, Xã Phước An, H. Nhơn Trạch, Tỉnh Đồng Nai</li>
                        <li>Chủ đầu tư:<strong> Công Ty Cổ Phần Đệ Tam (DTA)</strong></li>
                        <li>Tổng diện tích khu đất: 5.143ha</li>
                        <li>Mật độ xây dựng: 38%</li>
                        <li>Quy mô: 5 tầng với tổng số 2.192 căn hộ</li>
                        <li>Tiện ích: 3 Block giữ xe cao 3 tầng – Khu thương mại 4 tầng – Công viên cây xanh – Khu vui chơi trẻ em</li>
                        <li>Loại hình sản phẩm: Nhà ở Xã Hội – Căn Hộ Thương Mại</li>

                    </ul>
                </div>
            </Box>
        </Box>
    );
};