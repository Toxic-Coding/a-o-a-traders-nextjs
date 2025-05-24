"use client";
import React, { useEffect, useState } from "react";

import { useModalContext } from "@/app/context/QuickViewModalContext";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { updateproductDetails } from "@/redux/features/product-details";
import { CircleCheck, Heart, Maximize, Minus, Plus, X } from "lucide-react";
import extractAllVariantImages from "@/helpers/extractAllVariantImages";

const QuickViewModal = () => {
  const { isModalOpen, closeModal } = useModalContext();
  const { openPreviewModal } = usePreviewSlider();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch<AppDispatch>();

  // get the product data
  const product = useAppSelector((state) => state.quickViewReducer.value);

  const { images } = product;

  const [activePreview, setActivePreview] = useState(0);
  const [activePreviewPath, setActivePreviewPath] = useState<string | null>(
    null
  );

  const allVariantImages = extractAllVariantImages(images);

  // preview modal
  const handlePreviewSlider = () => {
    dispatch(updateproductDetails(product));

    openPreviewModal();
  };

  // add to cart
  // const handleAddToCart = () => {
  //   dispatch(
  //     addItemToCart({
  //       ...product,
  //       quantity,
  //     })
  //   );

  //   closeModal();
  // };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    }
    if (allVariantImages.length > 0) {
      setActivePreviewPath(
        allVariantImages[0]?.startsWith("http")
          ? allVariantImages[0]
          : `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_240/${allVariantImages[0]}`
      );
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setActivePreview(0);
    };
  }, [isModalOpen, closeModal]);

  return (
    <div
      className={`${
        isModalOpen ? "z-99999" : "hidden"
      } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-20 xl:py-25 2xl:py-[230px] bg-app_text bg-opacity-70   sm:px-8 px-4 py-5`}
    >
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-[1100px] rounded-xl shadow-3 bg-white p-7.5 relative modal-content">
          <button
            onClick={() => {
              closeModal();
              setActivePreview(0);
              setActivePreviewPath(null);
            }}
            aria-label="button for close modal"
            className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-app_border text-app_text hover:text-orange"
          >
            <X width={20} height={20} />
          </button>

          <div className="flex flex-wrap items-center sm:items-start gap-12.5">
            <div className="sm:max-w-[526px] w-full">
              <div className="flex gap-5">
                {/* <div className="max-h-[400px] overflow-y-auto overflow-x-hidden no-scrollbar"> */}
                <div className="flex flex-col gap-5 !min-w-max">
                  {extractAllVariantImages(images)?.map((img, key) => (
                    <button
                      onClick={() => {
                        setActivePreview(key);
                        setActivePreviewPath(
                          img?.startsWith("http")
                            ? img
                            : `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_240/${img}`
                        );
                      }}
                      key={key}
                      className={`flex items-center justify-center w-20 h-20 overflow-hidden rounded-lg bg-gray-1 ease-out duration-200 hover:border-2 hover:border-app_blue ${
                        activePreview === key && "border-2 border-app_blue"
                      }`}
                    >
                      <Image
                        src={
                          img?.startsWith("http")
                            ? img
                            : `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_240/${img}`
                        }
                        alt="thumbnail"
                        width={61}
                        height={61}
                        className="aspect-square"
                      />
                    </button>
                  ))}
                </div>
                {/* </div> */}

                <div className="relative z-1 overflow-hidden flex items-center justify-center w-full sm:min-h-[508px] bg-gray-1 rounded-lg border border-gray-3">
                  <div>
                    <button
                      onClick={handlePreviewSlider}
                      aria-label="button for zoom"
                      className="gallery__Image w-10 h-10 rounded-[5px] bg-white shadow-1 flex items-center justify-center ease-out duration-200 text-app_text hover:text-app_blue absolute top-4 lg:top-8 right-4 lg:right-8 z-50"
                    >
                      <Maximize width={22} height={22} />
                    </button>

                    <Image
                      src={activePreviewPath}
                      alt="products-details"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:max-w-[445px] w-full">
              <span className="inline-block text-custom-xs font-medium text-white py-1 px-3 bg-orange mb-6.5">
                SALE 20% OFF
              </span>

              <h3 className="font-semibold text-xl xl:text-heading-5 text-app_text mb-4">
                {product.product_name}
              </h3>

              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div className="flex items-center gap-1.5">
                  {/* <!-- stars --> */}
                  <div className="flex items-center gap-1">
                    <svg
                      className="fill-[#FFA645]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_375_9172)">
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_375_9172">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      className="fill-[#FFA645]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_375_9172)">
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_375_9172">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      className="fill-[#FFA645]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_375_9172)">
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_375_9172">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      className="fill-gray-4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_375_9172)">
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_375_9172">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      className="fill-gray-4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_375_9172)">
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_375_9172">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <span>
                    <span className="font-medium text-app_text">
                      4.7 Rating
                    </span>
                    <span className="text-app_text"> (5 reviews) </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {product.stock_qty > 0 ? (
                    <>
                      <CircleCheck
                        width={19}
                        widths={19}
                        className="text-green"
                      />
                      <span className="font-medium text-app_text">
                        In Stock
                      </span>
                    </>
                  ) : (
                    <>
                      <CircleCheck
                        width={19}
                        widths={19}
                        className="text-red"
                      />
                      <span className="font-medium text-app_text">
                        Out of Stock
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="overflow-hidden text-ellipsis line-clamp-3">
                {product.description}
              </p>

              <div className="flex flex-wrap justify-between gap-5 mt-6 mb-7.5">
                <div>
                  <h4 className="font-semibold text-lg text-app_text mb-3.5">
                    Price
                  </h4>

                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-app_text text-xl xl:text-heading-4">
                      ${product.price}
                    </span>
                    {/* <span className="font-medium text-app_text text-lg xl:text-2xl line-through">
                      ${product.price}
                    </span> */}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-app_text mb-3.5">
                    Quantity
                  </h4>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      aria-label="button for remove product"
                      className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-app_text ease-out duration-200 hover:text-app_blue"
                      disabled={quantity < 0 && true}
                    >
                      <Minus width={22} height={22} />
                    </button>

                    <span
                      className="flex items-center justify-center w-20 h-10 rounded-[5px] border border-gray-4 bg-white font-medium text-app_text"
                      x-text="quantity"
                    >
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="button for add product"
                      className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-app_text ease-out duration-200 hover:text-app_blue"
                    >
                      <Plus width={22} height={22} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  disabled={quantity === 0 && true}
                  // onClick={() => handleAddToCart()}
                  className={`inline-flex font-medium text-white bg-app_blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-app_blue
                  `}
                >
                  Add to Cart
                </button>

                <button
                  className={`inline-flex items-center gap-2 font-medium text-white bg-app_text py-3 px-6 rounded-md ease-out duration-200 hover:bg-opacity-95 `}
                >
                  <Heart width={24} height={24} />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
