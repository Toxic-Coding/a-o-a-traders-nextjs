import React from "react";
import CookiesPolicy from "@/components/CookiesPolicy/index";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CookiesPolicy | NextCommerce Nextjs E-commerce template",
  description: "This is CookiesPolicy for NextCommerce Template",
};

const CookiesPolicyPage = () => {
  return (
    <main>
      <CookiesPolicy />
    </main>
  );
};

export default CookiesPolicyPage;
