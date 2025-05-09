import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    // Hero Section
    <section className=" overflow-hidden bg-app_bg pb-[50px] pt-[30px] px-[10px] sm:px-[20px]">
      <div className="max-w-[1500px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[50px]">
          {/* Shop By Department */}
          <div className="max-w-[300px] w-full hidden lg:flex flex-col text-custom-sm text-app_text bg-white rounded-md p-[15px] border-[2px] border-orange">
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Office <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Technology <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Furniture <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Janitorial & Sanitation <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Industrial <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Food Service <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              School Supplies <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Oven <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Ink & Toner <ChevronRight width={16} height={16} />
            </button>
            <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
              Desk Accessories <ChevronRight width={16} height={16} />
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
