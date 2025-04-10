import React, { Suspense, useEffect } from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "../welcome";
import { BannerHomeTest } from "./banner-home-test";
import ServicesOfUs from "./servicesOfUs";
import { TongQuan } from "./tong-quan";
import { ThietKeCanHo } from "./thiet-ke-can-ho";
import { BangGiaTest } from "./bang-gia-test";
import { NhaMauTest } from "./nha-mau-test";
import Reason from "./reason";
import { TienIchTest } from "./tien-ich-test";
import { GioiThieu } from "./gioi-thieu-du-an";
import { Divider } from "components/divider";
import ViTriDuAn from "./vi-tri-test";
import { DeliveryFormDangKy } from "./deliveryFormDangky";
import { MatBangDuAn } from "./mat-bang-du-an";

const HomeTest: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <BannerHomeTest />
      <GioiThieu />
      <Divider />
      <TongQuan />
      <Divider />
      <ViTriDuAn />
      <Divider />
      <DeliveryFormDangKy />
      <Divider />
      <TienIchTest />
      <Divider />
      <DeliveryFormDangKy />
      <Divider />
      <MatBangDuAn />
      <Divider />
      <ThietKeCanHo />
      <Divider />
      <NhaMauTest />
      <Divider />
      <BangGiaTest />
      <Divider />
      <DeliveryFormDangKy />
      <Divider />
      <ServicesOfUs />
    </Page>
  );
};

export default HomeTest;
