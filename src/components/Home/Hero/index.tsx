import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    // Hero Section
    <section className=" overflow-hidden bg-[#E5EAF4] py-[50px] sm:pt-45 lg:pt-30 xl:pt-51.5 px-[20px]">
      <div className="max-w-[1500px] mx-auto w-full">
        <div className="flex flex-wrap justify-between mb-[50px]">
          {/* Shop By Department */}
          <div className="xl:max-w-[20%] w-full flex flex-col text-custom-sm text-app_text bg-white rounded-md p-[15px] border-[2px] border-orange">
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Office<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Technology<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Furniture<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Janitorial & Sanitation<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Industrial<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Food Service<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              School Supplies<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Oven<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Ink & Toner<span>i</span>
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Desk Accessories<span>i</span>
            </button>
          </div>

          {/* Hero Slider */}
          <div className="xl:max-w-[78%] w-full rounded-[10px] overflow-hidden">
            {/* <!-- bg shapes --> */}
            <HeroCarousel />
          </div>
        </div>

        {/* <!-- Hero features --> */}
        <HeroFeature />
      </div>
    </section>
  );
};

export default Hero;
