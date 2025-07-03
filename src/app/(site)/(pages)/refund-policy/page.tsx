import React from "react";

import { Metadata } from "next";
import RefundPolicy from "@/components/RefundPolicy";
export const metadata: Metadata = {
  title: "Refund Policy | NextCommerce Nextjs E-commerce template",
  description: "This is My Account page for NextCommerce Template",
};

const RefunPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefunPolicyPage;
