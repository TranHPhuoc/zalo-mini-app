import React, { Suspense, useEffect } from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "../welcome";
import { BannerHomeTest } from "./banner-home-test";
import ServicesOfUs from "./servicesOfUs";
import { TongQuan } from "./tong-quan";
import { MatBangTest } from "./mat-bang-test";
import { BangGiaTest } from "./bang-gia-test";
import { NhaMauTest } from "./nha-mau-test";
import Reason from "./reason";
import {DeliveryFormDangKy} from "./deliveryFormDangky"
import { TienIchTest } from "./tien-ich-test";

const HomeTest: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <BannerHomeTest/>
      <TongQuan/>
      <DeliveryFormDangKy/>
      <TienIchTest/>
      <DeliveryFormDangKy/>
      <MatBangTest/>
      <NhaMauTest/>
      <BangGiaTest/>
      <DeliveryFormDangKy/>
      <ServicesOfUs />
    </Page>
  );  
};

export default HomeTest;
