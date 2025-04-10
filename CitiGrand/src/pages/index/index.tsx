import React, { Suspense, useEffect } from "react";
import { Box, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Categories } from "./categories";
// import { Recommend } from "./recommend";
import { ProductList } from "./product-list";
import { Divider } from "components/divider";
import { GioiThieu } from "./layout/gioi-thieu-du-an";
import { DeliveryFormDangKy } from "./layout/deliveryFormDangky";
import { BannerHomeTest } from "./layout/banner-home-test";
import { FieldOfActivity } from "./layout/fieldOfActivity";
// import ServicesOfUs from "./servicesOfUs";

import Reason from "./layout/reason";
import { Master } from "./layout/master";
import { Symptom3 } from "./layout/sympot3";
import { Object } from "./layout/objects";
// import  Steps  from "./steps";
// import FollowPage from "./folllowOA";

import HoursPage from "./hours";
import ServicesOfUs from "./layout/servicesOfUs";
import { getPhoneNumber } from "zmp-sdk/apis";
import { NotifiPage } from "./layout/nhanThongBao";
import FollowPage from "./layout/folllowOA";


const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        {/* <Inquiry /> */}
        <BannerHomeTest />
        {/* <Suspense>
          <Categories />
        </Suspense> */}
        <GioiThieu />
        {/* <Recommend /> */}
        <Divider />
        {/* <ProductList /> */}
        <Divider />
        <DeliveryFormDangKy />
        <Divider />
        <NotifiPage />
        <Divider />
        <FollowPage />
        <Divider />
        {/* <FieldOfActivity />
        <Divider /> */}

        <Divider />
        <Divider />
        <DeliveryFormDangKy />
        <Divider />
        <NotifiPage />
        <Divider />
        <FollowPage />
        <Divider />
        <Symptom3 />
        <Divider />
        {/* <Banner3 />
        <Divider /> */}
        {/* <ProductRow /> */}
        <Reason />
        <Divider />
        <Divider></Divider>
        <Divider />
        <NotifiPage />
        <HoursPage />
        <Divider />
        <Master />
        <Divider />
        <FollowPage />
        <Divider />
        <Object />
        <Divider />
        {/* <Symptom3 />
        <Divider /> */}
        {/* <ServicesOfUs /> */}
        {/* <Divider></Divider> */}
        <DeliveryFormDangKy />
        <Divider />
        <NotifiPage />
        <Divider />
        <FollowPage />
        <Divider />
        {/* <Banner3 /> */}
        <ServicesOfUs />
        <Divider />
        {/* <Object />
        <Divider />
        <FollowPage />
        <Divider />
        <Steps />
        <Divider />
        <FollowPage />
        <Divider />
        {/* <HoursPage /> */}
      </Box>
    </Page>
  );
};

export default HomePage;
