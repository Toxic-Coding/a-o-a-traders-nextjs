import Uploader from "@/components/uploader";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Upload Products</h1>
      <p className="mt-4">
        This page will allow suppliers to upload their products.
      </p>
      {/* Add your upload form or component here */}
      <Uploader />
    </div>
  );
};

export default page;
