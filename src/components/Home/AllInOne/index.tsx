import React from "react";
import AllInOneProducts from "./Slider";
import { Fetch } from "@/helpers/requestHandler";
import { clearSession } from "@/lib/session";

const AllInOne = async () => {
  const res = await Fetch(`/?page=1&per_page=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return <AllInOneProducts products={data} />;
};

export default AllInOne;
