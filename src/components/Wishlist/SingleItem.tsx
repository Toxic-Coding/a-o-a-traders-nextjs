import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";

import Image from "next/image";
import { toast } from "sonner";
import { AlertCircle, AlertCircleIcon, Layers3Icon, XCircle } from "lucide-react";
import Link from "next/link";

const SingleItem = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.product_id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex items-center border-t border-gray-3 py-5 px-10">
      <div className="min-w-[83px]">
        <button
          onClick={() => handleRemoveFromWishlist()}
          aria-label="button for remove product from wishlist"
          className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
        >
         <XCircle/>
        </button>
      </div>

      <div className="min-w-[387px]">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center gap-5.5">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-2 max-w-[80px] w-full h-17.5">
              <Image src={item.image} alt="product" width={200} height={200} />
            </div>

            <div>
              <h3 className="text-app_text ease-out duration-200 hover:text-app_blue">
                <Link href={`/detail/${item.product_id}`}> {item.product_name} </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[205px]">
        <p className="text-app_text">${item.price}</p>
      </div>

      <div className="min-w-[265px]">
        <div className="flex items-center gap-1.5">
          {item.stock_qty > 0 ? (
            <Layers3Icon className="text-app_blue" />
          ) : (
            <AlertCircleIcon className="text-red" />
          )}

          <span className={item.stock_qty > 0 ? "app_blue" : "text-red"}>
            {item.stock_qty > 0 ? "In Stock" : "Out Of Stock"}{" "}
          </span>
        </div>
      </div>

      <div className="min-w-[150px] flex justify-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart();
            toast("Product added to cart", {
              description: item.product_name,
              action: {
                label: "Undo",
                onClick: () => dispatch(removeItemFromCart(item.product_id)),
              },
              style: {
                backgroundColor: "white",
                color: "black",
                border: "none",
              },
              unstyled: false,
              //   closeButton: true,
              actionButtonStyle: {
                backgroundColor: "#2F6CC1",
                color: "white",
              },
              position: "bottom-right",
            });
          }}
          className="font-medium text-head-4 py-[7px] px-[18px] rounded-[5px] bg-app_blue text-white ease-out duration-200 mt-[15px]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
