import React from "react";
import Image from "next/image";
import CounDown from "./Countdown";

const PromoBanner = () => {
  return (
    <section className="max-w-[1500px] mx-auto w-full overflow-hidden px-[10px] sm:px-[20px] my-[50px]">
      <CounDown />

      <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
        {/* <!-- promo banner small --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
          <Image
            src="/images/promo/promo-02.png"
            alt="promo img"
            className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
            width={241}
            height={241}
          />

          <div className="text-right ">
            <span className="block text-lg text-app_text mb-1.5">
              Foldable Motorised Treadmill
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 text-app_blue mb-2.5">
              Workout At Home
            </h2>

            <p className="font-semibold text-custom-1 text-orange">
              Flat 20% off
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-white hover:text-app_text mt-9"
            >
              Grab Now
            </a>
          </div>
        </div>

        {/* <!-- promo banner small --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
          <Image
            src="/images/promo/promo-03.png"
            alt="promo img"
            className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
            width={200}
            height={200}
          />

          <div>
            <span className="block text-lg text-app_text mb-1.5">
              Apple Watch Ultra
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 text-app_blue mb-2.5">
              Up to <span className="text-orange">40%</span> off
            </h2>

            <p className="max-w-[285px] text-app_text text-custom-sm">
              The aerospace-grade titanium case strikes the perfect balance of
              everything.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-white hover:text-app_text mt-7.5"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
