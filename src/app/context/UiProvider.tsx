"use client";

import PreLoader from "@/components/Common/PreLoader";
import { useAuth } from "./authProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Spinner from "@/components/Common/spinner";

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, refresh, logout, user } = useAuth();

  return isLoading ? (
    <Spinner
      size="medium"
      color="app_blue"
      className="fixed top-1/2 left-1/2"
    />
  ) : !user || (user && user.user_role !== "supplier") ? (
    <>
      <Header />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  ) : (
    <>{children}</>
  );
};
