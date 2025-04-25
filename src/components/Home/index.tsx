import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import PromoBanner from "./PromoBanner";
import BestSeller from "./NewArrivals";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
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
import SliderBranding from "./SliderBranding";

const Home = () => {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <SpecialSale />
      <AllInOne />
      <Fashion />
      <OfficeSupply />
      <LampSmall />
      <Industry />
      <HealthSkin />
      <Technology />
      <HolidaySeason />
      <NewArrivals />
      <Testimonials />
      {/* <SliderBranding /> */}
      {/* <Categories /> */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
