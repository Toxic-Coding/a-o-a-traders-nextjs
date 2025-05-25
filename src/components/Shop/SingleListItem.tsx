"use client";
import React from "react";

import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";

const SingleListItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const { images, product_id, product_name, price, description } = item;
  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // add to cart
  // const handleAddToCart = () => {
  //   dispatch(
  //     addItemToCart({
  //       ...item,
  //       quantity: 1,
  //     })
  //   );
  // };

  // const handleItemToWishList = () => {
  //   dispatch(
  //     addItemToWishlist({
  //       ...item,
  //       status: "available",
  //       quantity: 1,
  //     })
  //   );
  // };

  return (
    <Link href={`/detail/${product_id}`}>
      <div className="group rounded-lg bg-white shadow-1">
        <div className="flex">
          <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
            <Image
              src={
                !images[0].main_image.startsWith("https")
                  ? `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_240/${images[0].main_image}`
                  : images[0].main_image || "/logo.avif"
              }
              alt=""
              width={250}
              height={250}
            />

            <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
              <button
                onClick={() => {
                  openModal();
                  handleQuickViewUpdate();
                }}
                aria-label="button for quick view"
                className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-app_text bg-white hover:text-app_blue"
              >
                <Eye
                  width={18}
                  height={18}
                  className="text-app_text hover:text-orange"
                />
              </button>

              <button
                // onClick={() => handleAddToCart()}
                className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-app_blue text-white ease-out duration-200 hover:bg-app_blue"
              >
                Add to cart
              </button>

              <button
                // onClick={() => handleItemToWishList()}
                aria-label="button for favorite select"
                className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-app_text bg-white hover:text-app_blue"
              >
                <Heart
                  width={18}
                  height={18}
                  className="text-app_text hover:text-orange"
                />
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
            <div>
              <h3 className="font-medium text-app_text ease-out duration-200 hover:text-orange mb-1.5">
                {product_name}
              </h3>

              <span className="flex items-center gap-2 font-medium text-lg">
                <span className="text-app_text">${price}</span>
                {/* <span className="text-app_text line-through">${item.price}</span> */}
              </span>
            </div>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
                <Image
                  src="/images/icons/icon-star.svg"
                  alt="star icon"
                  width={15}
                  height={15}
                />
              </div>

              {/* <p className="text-custom-sm">({item.reviews})</p> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleListItem;
