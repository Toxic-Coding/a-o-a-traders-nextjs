import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Fastest Shipping",
    description: "Fastest Shipping in US",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Satisfaction Guaranteed",
    description: "Best Price Guarantee",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Customer Support",
    description: "Phone Support 24/7",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Membership Discount",
    description: "Upto 40% Discount All Products",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between">
      {featureData.map((item, key) => (
        <div className="flex items-center gap-4" key={key}>
          <Image src={item.img} alt="icons" width={40} height={41} />

          <div>
            <h3 className="font-medium text-custom-lg text-app_text">
              {item.title}
            </h3>
            <p className="text-custom-sm text-app_text2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeature;
