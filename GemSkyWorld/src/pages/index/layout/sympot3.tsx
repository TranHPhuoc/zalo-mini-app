import React, { FC } from "react";
import { Box } from "zmp-ui";

export const Symptom3: FC = () => {
  const img1 =
    "https://res.cloudinary.com/dfzc1gkqr/image/upload/v1726737316/Nh%C3%A0%20%E1%BB%9E%20X%C3%A3%20H%E1%BB%99i%20-%20New%20LaVIDA/b3wplcgvpgrruwppczgj.png";
  return (
    <Box className="m-1 bg-[#387270]">
      <div className="text-center font-tinhHoaHoiTu mb-5">
        <h2 className="text-white text-[2em]">Tiện ích dự án</h2>
        <strong className="text-[#ffdb8f] text-[3em]">New LaVIDA</strong>
      </div>

      <div className="text-center text-white">
        <p>
          Nét đẹp tinh tế của kiến trúc tân cổ điển Châu Âu với điểm nhấn mái
          Mansard biểu trưng cho sự giao hòa Đông – Tây được tái hiện hoàn mỹ
          qua những dãy phố mang vẻ đẹp cân bằng giữa hoài cổ và hiện đại, sang
          trọng và bình yên mà bất cứ ai cũng say lòng khi ngắm nhìn.
        </p>
      </div>
      <PlanList />
      <div>
        <img src={img1} alt="" />
      </div>
    </Box>
  );
};

const plans = [
  { id: 1, description: "Cổng chào", tooltip: "#tooltip-2612" },
  { id: 2, description: "Trường mầm non", tooltip: "#tooltip-2613" },
  { id: 3, description: "Sân thể thao đa năng", tooltip: "#tooltip-2617" },
  { id: 4, description: "Sân chơi trẻ em", tooltip: "#tooltip-2616" },
  { id: 5, description: "Sân máy tập thể dục", tooltip: "#tooltip-2723" },
  { id: 6, description: "Đồi cảnh quan", tooltip: "#tooltip-2724" },
  { id: 7, description: "Vườn BBQ", tooltip: "#tooltip-2725" },
  { id: 8, description: "Đường đua Scooter", tooltip: "#tooltip-2722" },
  { id: 9, description: "Đường chạy bộ", tooltip: "#tooltip-2720" },
  { id: 10, description: "Sảnh căn hộ", tooltip: "#tooltip-2714" },
  { id: 11, description: "Tiện ích thương mại", tooltip: "#tooltip-2715" },
  { id: 12, description: "Vườn cảnh quan", tooltip: "#tooltip-2711" },
  { id: 13, description: "Hồ bơi", tooltip: "#tooltip-2712" },
  { id: 14, description: "Locker", tooltip: "#tooltip-2713" },
  { id: 15, description: "Lối thang", tooltip: "#tooltip-2708" },
  { id: 16, description: "Bãi đỗ xe", tooltip: "#tooltip-2709" },
];

const PlanList = () => {
  return (
    <Box className="p-3">
      <ul
        className="list-ground-plan flex flex-wrap mt-5 md:mt-8 xl:mt-10 max-h-[calc(235/1920*100rem)] xl:max-h-[calc(300/1920*100rem)] overflow-x-hidden overflow-y-auto"
        id="element1"
      >
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="text-white flex mb-[calc(10/1920*100rem)] w-full md:w-1/2 xl:w-1/3 pr-1"
            data-plan={plan.tooltip}
          >
            <span className="number text-center w-[calc(30/1920*100rem)] min-w-[calc(30/1920*100rem)] h-[calc(30/1920*100rem)] flex-center border border-solid border-[#ffdb8f] bg-transparent mr-[calc(10/1920*100rem)] rounded-full xl:text-[calc(14/1920*100rem)]">
              {plan.id}
            </span>
            <span>{plan.description}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default PlanList;
