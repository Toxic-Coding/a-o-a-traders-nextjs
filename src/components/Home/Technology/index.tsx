"use client";
import React from "react";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const Technology = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section className="max-w-[1500px] w-full mx-auto overflow-hidden px-[20px] my-[50px]">
      {/* <!-- section title --> */}
      <div className="flex items-center justify-between">
        <div>
          <span className="flex items-center gap-2.5 font-medium text-app_text mb-1.5">
            <Calendar width={16} height={16} className="text-app_blue" />
            This Week’s
          </span>
          <h2 className="font-medium text-xl xl:text-heading-5 text-app_text">
            Technology
          </h2>
        </div>
        <div className="flex items-center gap-[15px]">
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Technology
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Coffee Cups
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Coffee Table
          </h3>
        </div>
      </div>
      <div className="w-full h-[2px] bg-app_border my-[20px]">
        <div className="w-[150px] h-full bg-orange"></div>
      </div>
      <div className="flex items-center justify-end gap-3 mb-[30px]">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center h-9 w-9 rounded-lg bg-white text-app_text border border-gray-3 ease-out duration-200 hover:bg-app_blue hover:border-app_blue"
        >
          <ChevronLeft className="text-app_text hover:text-white" />
        </button>

        <button
          onClick={handleNext}
          className="flex items-center justify-center h-9 w-9 rounded-lg bg-white text-app_text border border-gray-3 ease-out duration-200 hover:bg-app_blue hover:border-app_blue"
        >
          <ChevronRight className="text-app_text hover:text-white" />
        </button>
      </div>
      {/* <!-- New Arrivals item --> */}
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={100}
        className="justify-between"
      >
        {shopData.map((item, key) => (
          <SwiperSlide key={key}>
            <ProductItem item={item} key={key} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Technology;
