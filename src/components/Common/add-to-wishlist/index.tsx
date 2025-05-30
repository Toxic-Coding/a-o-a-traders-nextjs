"use client";
import { cn } from "@/lib/utils";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const AddToWishlist = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { images, product_id, product_name, price } = product;
  const dispatch = useDispatch<AppDispatch>();
  // add to cart
  const image = images.length
    ? !images[0].main_image.startsWith("https")
      ? `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_100/${images[0].main_image}`
      : images[0].main_image
    : "/logo.avif";

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...product,
        image,
        quantity: 1,
      })
    );
  };
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleItemToWishList();
        toast("Product added to wishlist", {
          description: product.product_name,
          action: {
            label: "Undo",
            onClick: () => dispatch(removeItemFromWishlist(product.product_id)),
          },
          style: {
            backgroundColor: "white",
            color: "black",
            border: "none",
          },
          unstyled: false,
          actionButtonStyle: {
            backgroundColor: "#2F6CC1",
            color: "white",
          },
          position: "bottom-right",
        });
      }}
      aria-label="button for favorite select"
      id="favOne"
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-orange",
        className
      )}
    >
      <Heart width={17} height={17} />
    </button>
  );
};

export default AddToWishlist;
