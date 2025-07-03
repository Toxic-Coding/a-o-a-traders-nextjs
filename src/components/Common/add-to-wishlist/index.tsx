"use client";
import { getImageUrl } from "@/helpers/getImageUrl";
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
  // const image = images.length
  //   ? !images[0].main_image.startsWith("https")
  //     ? `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_100/${images[0].main_image}`
  //     : images[0].main_image
  //   : "/logo.avif";

  const image = getImageUrl({
    imagePath: images?.[0]?.main_image,
    supplierId: product.supplier_id,
    variant: "100",
  });

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
      className={cn(className)}
    >
      <Heart width={17} height={17} />
    </button>
  );
};

export default AddToWishlist;
