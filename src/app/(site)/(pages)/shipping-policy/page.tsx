import React from "react";
import { Metadata } from "next";
import ShippingPolicy from "@/components/ShippingPolicy/index";
export const metadata: Metadata = {
  title: "Shipping Policy| NextCommerce Nextjs E-commerce template",
  description: "This is My Account page for NextCommerce Template",
};

const ShippingPolicyPage = () => {
  return (
    <main>
      <ShippingPolicy />
    </main>
  );
};

export default ShippingPolicyPage;
