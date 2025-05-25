"use client"
import Spinner from "@/components/Common/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner color="app_orange" />
    </div>
  );
};

export default loading;
