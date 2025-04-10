import React, { Suspense, useEffect } from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Divider } from "components/divider";
import { BannerHome } from "./layout/banner-home";
import ServicesOfUs from "./layout/servicesOfUs";
import { NotifiPage } from "./layout/nhanThongBao";
import FollowPage from "./layout/folllowOA";
import { Banner1 } from "./layout/banner-1";
import { TienIchNoiKhu } from "./layout/tien-ich-noi-khu";
import { TienIchNgoaiKhu } from "./layout/tien-ich-ngoai-khu";
import MatBangDuAn from "./layout/mat-bang";
import { ViTriDuAn } from "./layout/vi-tri";
import { TongQuanDuAn } from "./layout/tong-quan-du-an";
import { NhaMau } from "./layout/nha-mau";



const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <BannerHome />
        <TongQuanDuAn />
        <Divider />
        <Banner1 />
        <Divider />
        <NotifiPage />
        <Divider />
        <ViTriDuAn />
        <Divider />
        <TienIchNoiKhu />
        <Divider />
        <TienIchNgoaiKhu />
        <Divider />
        <MatBangDuAn />
        <Divider />
        <NhaMau />
        <Divider />
        <ServicesOfUs />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
