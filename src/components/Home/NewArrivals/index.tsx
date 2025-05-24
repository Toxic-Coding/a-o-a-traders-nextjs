import React from "react";
import { Fetch } from "@/helpers/requestHandler";
import NewArrivalsProducts from "./NewArrivalsProducts";

const NewArrivals = async () => {
  const res = await Fetch(`/?page=20&per_page=4`, {
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
    <>
      <NewArrivalsProducts products={data} />
    </>
  );
};

export default NewArrivals;
