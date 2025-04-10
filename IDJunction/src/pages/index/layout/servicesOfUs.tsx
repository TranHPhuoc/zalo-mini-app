import React, { FC, useEffect, useRef } from "react";
import { Box, Icon, Text } from "zmp-ui";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";

import logo from "static/logo1.png";
import logo1 from "static/logo-gp-land.png";

const GOOGLE_MAPS_API_KEY = "AIzaSyDq3fVaC8bs1uxThPk9hshdNZxaEpbA6bs";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};
const center = {
  lat: 10.669288235883771,
  lng: 106.92600074657642,
};

const ServicesOfUs: FC = () => {
  const mapRef = useRef(null);

  // Sử dụng useEffect để tải và khởi tạo Google Maps
  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      if (mapRef.current) {
        // Tạo bản đồ với tọa độ và thuộc tính đã chọn
        const map = new google.maps.Map(mapRef.current, {
          center: center,
          zoom: 15,
        });

        // Thêm Marker vào vị trí hiện tại
        const marker = new google.maps.Marker({
          position: center,
          map: map,
          title: "Vị trí của bạn",
        });
        // Marker sẽ giúp hiển thị vị trí của bạn trên bản đồ với một dấu đỏ
      }
    });
  }, []);

  // Mã hiển thị giao diện và thông tin liên hệ
  return (
    <Box className="space-y-3 m-2 p-3" style={{ background: "#435d52" }}>
      <div className="flex justify-between items-center">
        <img src={logo} alt="" style={{ width: "100px", height: "auto" }} />
        <img src={logo1} alt="" style={{ width: "120px", height: "auto" }} />
      </div>
      <div
        className="font-content p-3"
        style={{ background: "#222a22", borderRadius: "10px" }}
      >
        <div
          className="flex flex-col-2 mb-3"
          style={{ borderBottom: "1px solid #665c4b", paddingBottom: "10px" }}
        >
          <Icon icon="zi-home" style={{ color: "white" }} className="mr-3" />
          <p className="text-white">
            Công ty Cổ phần Đầu Tư và Phát Triển Địa Ốc GP Land
          </p>
        </div>
        <div
          className="flex flex-col-2 mb-3"
          style={{ borderBottom: "1px solid #665c4b", paddingBottom: "10px" }}
        >
          <Icon
            icon="zi-location"
            style={{ color: "white" }}
            className="mr-3"
          />
          <p className="text-white">
            Số 37, đường số 12, P.An Phú, TP.Thủ Đức, TP.HCM, Việt Nam
          </p>
        </div>
        <div
          className="flex flex-col-2 mb-3"
          style={{ borderBottom: "1px solid #665c4b", paddingBottom: "10px" }}
        >
          <Icon icon="zi-call" style={{ color: "white" }} className="mr-3" />
          <p className="text-white">0921.90.91.92</p>
        </div>
        <div
          className="flex flex-col-2 mb-3"
          style={{ borderBottom: "1px solid #665c4b", paddingBottom: "10px" }}
        >
          <Icon icon="zi-at" style={{ color: "white" }} className="mr-3" />
          <p className="text-white">info@gpland.vn</p>
        </div>

        {/* Nhúng Google Maps vào div */}
        <div ref={mapRef} style={mapContainerStyle} />
      </div>
    </Box>
  );
};

export default ServicesOfUs;
