"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { useAppSelector } from "@/redux/store";
import { ProductList } from "@/types/product";
import Empty from "../empty";

const AllProducts = ({ products }: { products: ProductList }) => {
  const { productStyle } = useAppSelector(
    (state) => state.productsListStyle
  );

  return (
    <>
      <div
        className={`${
          productStyle === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
            : "flex flex-col gap-7.5"
        }`}
      >
        {products.items.length ? (
          products.items.map((item, key) =>
            productStyle === "grid" ? (
              <SingleGridItem item={item} key={key} />
            ) : (
              <SingleListItem item={item} key={key} />
            )
          )
        ) : (
          <div className="col-span-12 flex items-center justify-center">
            <Empty />
          </div>
        )}
      </div>
      {/* <!-- Products Grid Tab Content End --> */}
    </>
  );
};

export default AllProducts;
