"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { AppDispatch, useAppSelector } from "@/redux/store";
import SingleItem from "./SingleItem";
import { useDispatch } from "react-redux";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import Empty from "../empty";

export const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />
      <section className="overflow-hidden py-20 bg-app_bg px-[10px] sm:px-[20px]">
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            <h2 className="font-medium text-app_text text-2xl">
              Your Wishlist
            </h2>
            <button
              className="text-app_text"
              onClick={() => dispatch(removeAllItemsFromWishlist())}
            >
              Clear Wishlist Cart
            </button>
          </div>

          <div className="bg-white rounded-[10px] shadow-1">
            <div className="w-full overflow-x-auto">
              {wishlistItems.length ? (
                <div className="min-w-[1500px]">
                  {/* <!-- table header --> */}
                  <div className="flex items-center py-5.5 px-10">
                    <div className="min-w-[83px]"></div>
                    <div className="min-w-[387px]">
                      <p className="text-app_text">Product</p>
                    </div>

                    <div className="min-w-[205px]">
                      <p className="text-app_text">Unit Price</p>
                    </div>

                    <div className="min-w-[265px]">
                      <p className="text-app_text">Stock Status</p>
                    </div>

                    <div className="min-w-[150px]">
                      <p className="text-app_text text-right">Action</p>
                    </div>
                  </div>

                  {/* <!-- wish item --> */}
                  {wishlistItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
