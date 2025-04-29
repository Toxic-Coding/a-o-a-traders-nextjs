"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LoveToHear = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-[30px] items-center mb-[50px] lg:mb-[80px]">
      <h1 className="text-heading-3 md:text-heading-2 text-center font-semibold text-app_text">
        We’d love to hear from you!
      </h1>
      <p className="text-custom-lg text-center">
        We’d love to hear from you! If you have any questions about your trip,
        need details about historical places, or want to share your travel
        experiences, we’re here to help. Just fill out the contact form below
        with your questions or comments, and we’ll get back to you as soon as
        possible. Thank you for choosing PakExplore to discover Pakistan’s
        beauty and history!
      </p>
      <button onClick={()=> router.push("/contact")} className="inline-flex font-normal text-white text-custom-sm rounded-md bg-app_blue py-[14px] px-[35px] ease-out duration-200">
        Contact us
      </button>
    </div>
  );
};

export default LoveToHear;
