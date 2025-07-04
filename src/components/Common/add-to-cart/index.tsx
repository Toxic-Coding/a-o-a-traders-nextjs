"use client";
import { getImageUrl } from "@/helpers/getImageUrl";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";
import { AppDispatch } from "@/redux/store";
import { Product } from "@/types/product";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { images, product_id, product_name, price } = product;
  const dispatch = useDispatch<AppDispatch>();
  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...product,
        // image: images.length
        //   ? !images[0].main_image.startsWith("https")
        //     ? `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_100/${images[0].main_image}`
        //     : images[0].main_image
        //   : "/logo.avif",
        image: getImageUrl({
          imagePath: product.images?.[0]?.main_image,
          supplierId: product.supplier_id,
          variant: "100",
        }),
        quantity: 1,
      })
    );
  };
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // @ts-ignore
        if (
          e.nativeEvent &&
          typeof e.nativeEvent.stopImmediatePropagation === "function"
        ) {
          e.nativeEvent.stopImmediatePropagation();
        }
        handleAddToCart();
        toast("Product added to cart", {
          description: product.product_name,
          action: {
            label: "Undo",
            onClick: () => dispatch(removeItemFromCart(product.product_id)),
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
          position: "top-right",
        });
      }}
      className="font-medium text-head-4 py-[7px] px-[18px] rounded-[5px] bg-app_blue text-white ease-out duration-200 mt-[15px]"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
