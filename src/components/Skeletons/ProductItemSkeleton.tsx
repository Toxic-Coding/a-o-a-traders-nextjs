import React from "react";

type SkeletonColor =
  | "white"
  | "gray"
  | "gray-1"
  | "gray-2"
  | "gray-3"
  | "gray-4"
  | "gray-5"
  | "gray-6";

export const ProductItemSkeleton = ({
  color = "gray-3",
}: {
  color?: SkeletonColor;
}) => {
  const bgClass = `bg-${color}`;
  return (
    <div className={`w-72 p-3 animate-pulse`}>
      <div
        className={`relative overflow-hidden flex items-center justify-center rounded-md h-60 ${bgClass}`}
      >
        <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 group-hover:translate-y-0">
          <div className={`w-9 h-9 rounded-md ${bgClass}`}></div>
          <div className={`w-9 h-9 rounded-md ${bgClass}`}></div>
          <div className={`w-9 h-9 rounded-md ${bgClass}`}></div>
        </div>
      </div>

      <div className="mt-2 flex gap-1">
        <div className={`w-3.5 h-3.5 ${bgClass} rounded-full`}></div>
        <div className={`w-3.5 h-3.5 ${bgClass} rounded-full`}></div>
        <div className={`w-3.5 h-3.5 ${bgClass} rounded-full`}></div>
        <div className={`w-3.5 h-3.5 ${bgClass} rounded-full`}></div>
        <div className={`w-3.5 h-3.5 ${bgClass} rounded-full`}></div>
      </div>

      <div className={`h-4 ${bgClass} rounded w-11/12 mt-2`}></div>

      <div className="mt-2 flex gap-2">
        <div className={`w-20 h-4 ${bgClass} rounded`}></div>
      </div>

      <div className={`w-30 h-9 ${bgClass} rounded-md mt-3`}></div>
    </div>
  );
};

export const ProductListSkeletons = ({
  length,
  color = "gray-3",
}: {
  length?: number;
  color?: SkeletonColor;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
      {Array.from({ length: length || 4 }, (_, index) => (
        <ProductItemSkeleton key={index} color={color} />
      ))}
    </div>
  );
};
