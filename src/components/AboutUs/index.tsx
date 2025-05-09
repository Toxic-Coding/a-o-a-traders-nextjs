"use client";

import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CustomerCare from "./CustomerCare";
import LoveToHear from "./LoveToHear";
import HeroFeature from "../Home/Hero/HeroFeature";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev < 12 ? prev + 1 : prev));
    }, 80);

    const interval2 = setInterval(() => {
      setCount2((prev) => (prev < 14 ? prev + 1 : prev));
    }, 80);

    const interval3 = setInterval(() => {
      setCount3((prev) => (prev < 16 ? prev + 1 : prev));
    }, 80);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);
  return (
    <>
      <Breadcrumb title={"About us"} pages={["About us"]} />

      <section className="overflow-hidden bg-gray-2 py-[80px] px-[10px] sm:px-[20px]">
        <div className="max-w-[1500px] w-full mx-auto">
          {/* About Us  */}
          <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[50px]">
            <div className="max-w-[650px] full">
              <h5 className="text-custom-sm font-medium text-orange">
                Welcome to AOA Traders
              </h5>
              <h1 className="text-heading-3 md:text-heading-2 font-semibold text-app_text my-[15px]">
                Our Perfect Trendy Shopping Store
              </h1>
              <p className="text-custom-lg">
                Welcome to AOA Traders, your trusted partner in online shopping!
                Founded in 2025, we have proudly served our customers for over 2
                years, bringing a seamless and enjoyable shopping experience to
                the digital marketplace. We believe in delivering quality you
                can trust and service you can rely on. Explore our wide range of
                products and experience hassle-free shopping like never before.
              </p>

              <div className="full flex flex-col sm:flex-row items-center justify-between gap-y-[20px] mt-[35px]">
                <div className="w-fit">
                  <h2 className="text-heading-5 text-center font-semibold text-app_blue">
                    {count1}k+
                  </h2>
                  <h5 className="text-custom-sm text-app_text">
                    Happy Customers
                  </h5>
                </div>

                <div className="w-fit">
                  <h2 className="text-heading-5 text-center font-semibold text-app_blue">
                    {count2}k+
                  </h2>
                  <h5 className="text-custom-sm text-app_text">
                    Success Projects
                  </h5>
                </div>

                <div className="w-fit">
                  <h2 className="text-heading-5 text-center font-semibold text-app_blue">
                    {count3}%
                  </h2>
                  <h5 className="text-custom-sm text-app_text">
                    Conversion Rate Increased
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-full xl:max-w-[750px]">
              <Image
                src="/images/aboutus/about.avif"
                alt="Error-Image"
                width={800}
                height={600}
                className="w-full xl:w-[750px] h-[300px] sm:h-[600px] object-cover rounded-[30px]"
              />
            </div>
          </div>

          {/* CustomerCare  */}
          <CustomerCare />

          {/* LoveToHear  */}
          <LoveToHear />

          {/* HeroFeature  */}
          <HeroFeature />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
