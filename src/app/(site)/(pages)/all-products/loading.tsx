import { ProductListSkeletons } from "@/components/Skeletons/ProductItemSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <ProductListSkeletons length={8} color="white" />
    </div>
  );
};

export default loading;
