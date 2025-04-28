import React from "react";

import { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
export const metadata: Metadata = {
  title: "Checkout Page | NextCommerce Nextjs E-commerce template",
  description: "This is Checkout Page for NextCommerce Template",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <AboutUs />
    </main>
  );
};

export default CheckoutPage;
