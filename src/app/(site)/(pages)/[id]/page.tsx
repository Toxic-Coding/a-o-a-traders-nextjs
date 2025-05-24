import React, { Suspense } from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { Fetch } from "@/helpers/requestHandler";
import RelatedProducts from "@/components/ShopDetails/RecentlyViewd";
import { ProductListSkeletons } from "@/components/Skeletons/ProductItemSkeleton";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

const ShopDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const res = await Fetch(`/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return (
    <main>
      <ShopDetails product={data} />
      <Suspense fallback={<ProductListSkeletons />}>
        <RelatedProducts category={data.category.split(",")[0].trim()} />
      </Suspense>
    </main>
  );
};

export default ShopDetailsPage;
