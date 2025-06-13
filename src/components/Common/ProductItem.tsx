"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { ArrowLeftRight, Eye, Heart } from "lucide-react";
import AddToCartButton from "./add-to-cart";
import AddToWishlist from "./add-to-wishlist";
import { getImageUrl } from "@/helpers/getImageUrl";

const ProductItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const { images, product_id, product_name, price } = item;
  const dispatch = useDispatch<AppDispatch>();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    <Link href={`/detail/${product_id}`}>
      <div className="w-[300px] group bg-white shrink-0 pl-[10px] pb-[15px]">
        <div className="relative overflow-hidden flex items-center justify-center rounded-[5px] min-h-[270px] ">
          <Image
            src={getImageUrl({
              imagePath: item.images?.[0]?.main_image,
              supplierId: item.supplier_id,
              variant: "240",
            })}
            alt="product"
            width={250}
            height={250}
          />

          <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
            <AddToWishlist product={item} />
            <button
              // onClick={() => handleItemToWishList()}
              aria-label="button for favorite select"
              id="favOne"
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-orange"
            >
              <ArrowLeftRight width={17} height={17} />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openModal();
                handleQuickViewUpdate();
              }}
              id="newOne"
              aria-label="button for quick view"
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-orange"
            >
              <Eye width={17} height={17} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-1">
            <Image
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
            <Image
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
            <Image
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
            <Image
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
            <Image
              src="/images/icons/icon-star.svg"
              alt="star icon"
              width={14}
              height={14}
            />
          </div>

          {/* <p className="text-custom-sm">({item.reviews})</p> */}
        </div>

        <h3
          className="text-app_text font-medium ease-out duration-200 hover:text-orange my-[8px]"
          onClick={() => handleProductDetails()}
        >
          {product_name}
        </h3>

        <span className="flex items-center gap-[7px] font-medium text-[20px]">
          <span className="text-app_text">${price}</span>
          {/* <span className="text-app_text2 line-through">${item.price}</span> */}
        </span>

        <AddToCartButton product={item} />
      </div>
    </Link>
  );
};

export default ProductItem;
