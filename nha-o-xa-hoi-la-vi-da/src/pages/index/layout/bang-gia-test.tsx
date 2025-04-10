import React, { FC} from "react";
import { Box } from "zmp-ui";
import { BangGia1 } from "./bang-gia-1";

export const BangGiaTest: FC = () => {
  return(
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
            BẢNG GIÁ NEW LAVIDA
          </h2>
        </div>
      </Box>
      <Box>
      <p className="font-content text-[#4a5d52] text-[1em] m-3 mt-1"
            style={{ lineHeight: "30px" }}>
      <strong>Phương thức thanh toán dự án New Lavida Dĩ An</strong> được chủ đầu tư đưa ra với nhiều ưu đãi hấp dẫn cho khách hàng. Chỉ cần trả trước 20% và ngân hàng sẽ cho vay 80% giá trị căn hộ.
      </p>
      <BangGia1/>
      <p  className="font-content text-[#4a5d52] text-[0.75em] text-center italic "
            style={{ lineHeight: "30px"}}
        >Chính sách mua dự án New Lavida Dĩ An</p>
      <table
        className="border border-black w-full text-content giaBan "
        style={{ height: "215px", border: "1px solid black" }}
        summary="Giá bán biệt thự & nhà phố Fo"
      >
        <tbody>
          <tr>
            <td style={{width:"35%"}}>Trả trước</td>
            <td>20% giá trị căn hộ – tầm 200 triệu</td>
          </tr>
          <tr>
            <td>Ngân hàng cho vay</td>
            <td>80% giá trị căn hộ</td>
          </tr>
          <tr>
            <td> Lãi suất vay</td>
            <td>6.6%/năm</td>
          </tr>
        </tbody>
        </table><br></br>
        <ul className="list-disc ml-7 -mt-3">
            <li>
            Ngân hàng chính sách xã hội sẽ hỗ trợ cho vay với lãi suất cực kì thấp chỉ từ 6.6% do chính sách mua nhà ở xã hội
            </li>
            <li>
            Chính sách thanh toán cũng được chia làm nhiều đợt để khách hàng có thể dễ dàng giải quyết vấn đề tài chính
            </li>
        </ul>  
      </Box>
      </Box>
  );

};