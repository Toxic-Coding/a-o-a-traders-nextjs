import React from "react";
import { Fetch } from "@/helpers/requestHandler";
import OfficeSupplyProducts from "./OfficeSupplly";

const AllInOne = async () => {
  const res = await Fetch(`/?page=3&per_page=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return <OfficeSupplyProducts products={data} />;
};

export default AllInOne;
