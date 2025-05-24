import AllProductsWrapper from "@/components/AllProducts/Wrapper";
import React, { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const layout = ({ children }: LayoutProps) => {
  return <AllProductsWrapper>{children}</AllProductsWrapper>;
};

export default layout;
