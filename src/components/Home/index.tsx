import React from "react";
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
    </main>
  );
};

export default Home;
