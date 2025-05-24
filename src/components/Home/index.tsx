import React, { Suspense } from "react";
import Hero from "./Hero";
import PromoBanner from "./PromoBanner";
import Testimonials from "./Testimonials";
import SpecialSale from "./Special Sale";
import Fashion from "./Fashion";
import OfficeSupply from "./OfficeSupply";
import LampSmall from "./Lampsmall";
import Industry from "./Industry";
import HealthSkin from "./HealthSkin";
import Technology from "./Technology";
import AllInOne from "./AllInOne";
import NewArrivals from "./NewArrivals";
import HolidaySeason from "./HolidaySeason";
import { ProductListSkeletons } from "../Skeletons/ProductItemSkeleton";

const Home = () => {
  return (
    <main>
      <Hero />
      <PromoBanner />
      {/* <SpecialSale /> */}
      <Suspense fallback={<ProductListSkeletons />}>
        <AllInOne />
      </Suspense>
      <Fashion />
      <Suspense fallback={<ProductListSkeletons />}>
        <OfficeSupply />
      </Suspense>
      <LampSmall />
      <Suspense fallback={<ProductListSkeletons />}>
        <Industry />
      </Suspense>
      <HealthSkin />
      <Suspense fallback={<ProductListSkeletons />}>
        <Technology />
      </Suspense>
      <HolidaySeason />
      <Suspense fallback={<ProductListSkeletons />}>
        <NewArrivals />
      </Suspense>
      {/* <Testimonials /> */}
    </main>
  );
};

export default Home;
