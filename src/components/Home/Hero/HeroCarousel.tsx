"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="w-full h-[500px] relative flex items-center sm:flex-row">
          <Image
            src="/images/hero/hero1.webp"
            alt="headphone"
            fill
            className="object-cover rounded-md"
          />

          <div className="text-white relative left-[50px] z-10 max-w-[500px]">
            <h1 className="text-heading-2 font-semibold">
              <a href="#">Samsung Wireless Speakers Multi-Room Audio</a>
            </h1>

            <p className="text-custom-lg mt-[20px]">
              From the backyard to the beach, stream audio wirelessly from any
              Bluetooth device with the speaker that packs big sound into a
              slim, portable package.
            </p>

            <button className="inline-flex font-normal text-white text-custom-sm rounded-md bg-orange py-[14px] px-[35px] ease-out duration-200 hover:bg-white hover:text-app_text mt-[30px]">
              Get It Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[500px] relative flex items-center flex-col-reverse sm:flex-row">
          <Image
            src="/images/hero/hero2.webp"
            alt="headphone"
            fill
            className="object-cover rounded-md"
          />

          <div className="text-white relative left-[50px] z-10 max-w-[500px]">
            <h1 className="text-heading-2 font-semibold">
              <a href="#">Big Sale Off Washing Machine</a>
            </h1>

            <p className="text-custom-lg mt-[20px]">
              Powerful Steam Eliminates Stains without Pre-treatment Super
              Speed. Wash a full load in 40 minutes.
            </p>

            <a
              href="#"
              className="inline-flex font-normal text-white text-custom-sm rounded-md bg-orange py-[14px] px-[35px] ease-out duration-200 hover:bg-white hover:text-app_text mt-[30px]"
            >
              Get It Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[500px] relative flex items-center flex-col-reverse sm:flex-row">
          <Image
            src="/images/hero/hero3.webp"
            alt="headphone"
            fill
            className="object-cover rounded-md"
          />

          <div className="text-white relative left-[50px] z-10 max-w-[500px]">
            <h1 className="text-heading-2 font-semibold">
              <a href="#">Hurry up! American FastFood Everyday</a>
            </h1>

            <p className="text-custom-lg mt-[20px]">
              Powerful Steam Eliminates Stains without Pre-treatment Super
              Speed. Wash a full load in 40 minutes.
            </p>

            <button className="inline-flex font-normal text-white text-custom-sm rounded-md bg-orange py-[14px] px-[35px] ease-out duration-200 hover:bg-white hover:text-app_text mt-[30px]">
              Get It Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
