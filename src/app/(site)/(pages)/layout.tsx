import ScrollToTop from "@/components/Common/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default layout;
