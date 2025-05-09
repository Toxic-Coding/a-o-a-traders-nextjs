import React from "react";
import Image from "next/image";
import { BadgeCheck, BadgePercent, Rocket, UsersRound } from "lucide-react";

const featureData = [
  {
    icon: <Rocket width={35} height={35} strokeWidth={1} className="text-orange" />,
    title: "Fastest Shipping",
    description: "Fastest Shipping in US",
  },
  {
    icon: <BadgeCheck width={35} height={35} strokeWidth={1} className="text-orange"/>,
    title: "Satisfaction Guaranteed",
    description: "Best Price Guarantee",
  },
  {
    icon: <UsersRound width={35} height={35} strokeWidth={1} className="text-orange"/>,
    title: "Customer Support",
    description: "Phone Support 24/7",
  },
  {
    icon: <BadgePercent width={35} height={35} strokeWidth={1} className="text-orange"/>,
    title: "Membership Discount",
    description: "Upto 40% Discount All Products",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-[20px]">
      {featureData.map((item, key) => (
        <div className="flex items-center gap-4" key={key}>
          {item.icon}

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
