import React from "react";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const Industry = () => {
  return (
    <section className="max-w-[1500px] w-full mx-auto overflow-hidden px-[20px] my-[50px]">
      {/* <!-- section title --> */}
      <div className="flex items-center justify-between mb-[25px] border-b-[2px] border-app_border pb-[15px]">
        <h2 className="text-heading-5 text-app_text font-medium border-b-[2px] border-orange pb-[5px]">
          Industry
        </h2>

        <div className="flex items-center gap-[15px]">
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Industrial
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Baby Safety
          </h3>
          <h3 className="text-custom-sm text-app_text font-medium cursor-pointer hover:text-orange">
            Garden Racks
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-[20px] overflow-x-auto no-scrollbar ">
        {/* <!-- New Arrivals item --> */}
        {shopData.map((item, key) => (
          <ProductItem item={item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Industry;
