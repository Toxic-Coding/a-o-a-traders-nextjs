"use client";
import React from "react";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";

const AllInOne = () => {
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
    <section className="max-w-[1500px] w-full mx-auto overflow-hidden px-[20px] my-[50px] swiper categories-carousel common-carousel">
      {/* <!-- section title --> */}
      <div className="flex items-center justify-between mb-[25px] border-b-[2px] border-app_border pb-[15px]">
        <h2 className="text-heading-5 text-app_text font-medium border-b-[2px] border-orange pb-[15px]">
          All In One
        </h2>

        <div className="flex items-center gap-[15px]">
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Clearner
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Air Conditioner
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Computer Accessories
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={handlePrev} className="swiper-button-prev">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
              fill=""
            />
          </svg>
        </button>

        <button onClick={handleNext} className="swiper-button-next">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* <!-- New Arrivals item --> */}
      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={20}
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

export default AllInOne;