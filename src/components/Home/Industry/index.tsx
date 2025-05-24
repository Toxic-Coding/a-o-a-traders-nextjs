import React from "react";
import { Fetch } from "@/helpers/requestHandler";
import IndustryProducts from "./IndustryProducts";

const Industry = async () => {
  const res = await Fetch(`/?page=5&per_page=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return <IndustryProducts products={data} />;
};

export default Industry;
