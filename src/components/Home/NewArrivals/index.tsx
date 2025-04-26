import React from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";
import { Calendar } from "lucide-react";

const NewArrivals = () => {
  return (
    <section className="overflow-hidden my-[70px] px-[20px]">
      <div className="max-w-[1500px] w-full mx-auto">
        {/* <!-- section title --> */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-app_text mb-1.5">
              <Calendar width={16} height={16} className="text-app_blue" />
              This Week’s
            </span>
            <h2 className="font-medium text-xl xl:text-heading-5 text-app_text">
              New Arrivals
            </h2>
          </div>

          <Link
            href="/shop-with-sidebar"
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-app_text ease-out duration-200 hover:bg-app_blue hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>

        <div className="w-full h-[2px] bg-app_border my-[20px]">
        <div className="w-[150px] h-full bg-orange"></div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {/* <!-- New Arrivals item --> */}
          {shopData.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
