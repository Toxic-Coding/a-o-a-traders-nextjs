import React from "react";

import { Metadata } from "next";
import Faqs from "@/components/Faqs";
export const metadata: Metadata = {
  title: "Checkout Page | NextCommerce Nextjs E-commerce template",
  description: "This is Checkout Page for NextCommerce Template",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Faqs />
    </main>
  );
};

export default CheckoutPage;
