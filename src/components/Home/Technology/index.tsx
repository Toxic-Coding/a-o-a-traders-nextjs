import React from "react";
import { Fetch } from "@/helpers/requestHandler";
import TechnologyProducts from "./TechnologyProducts";

const Technology = async () => {
  const res = await Fetch(`/?page=10&per_page=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return <TechnologyProducts products={data} />;
};

export default Technology;
