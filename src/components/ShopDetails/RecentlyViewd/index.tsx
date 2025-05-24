import React from "react";
import RelatedProductsItems from "./RelatedProducts";
import { Fetch } from "@/helpers/requestHandler";

const RelatedProducts = async ({ category }: { category?: string }) => {
  const res = await Fetch(`/?category=${category}&limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }
  return <RelatedProductsItems products={data}/>;
};

export default RelatedProducts;
