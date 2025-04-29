"use client";

import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import React from "react";

const CustomerCare = () => {
  const handleEmail = () => {
    const email = encodeURIComponent("Ahsanmeharj@gmail.com");
    const subject = encodeURIComponent("hello");
    const body = encodeURIComponent("Hy! How r u?");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handlePhone = () => {
    window.location.href = "tel:(760) 590-4250";
  };

  const handleWhatsapp = () => {
    const number = "(760) 590-4250";
    const message = "Hello, I need assistance!";
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full text-white text-center bg-app_blue rounded-[20px] px-[15px] md:px-[100px] py-[30px] my-[50px] lg:my-[80px]">
      <h1 className="text-heading-3 font-semibold mb-[20px]">Customer Care</h1>
      <p className="text-customer-lg">
        We provide 24/7 customer care support. You can contact us at any time
        because your problem is our problem and for that problem our highly
        professional team is present with all possible solutions.
      </p>

      <div className="w-full text-app_text mx-auto grid grid-cols-1 xl:grid-cols-3 gap-[50px] mt-[30px]">
        <div
          className="h-[148px] bg-white flex flex-col items-center justify-center gap-[15px] rounded-tr-[20px] rounded-bl-[20px] cursor-pointer"
          onClick={handleEmail}
        >
          <Mail width={40} height={40} className="text-orange" />
          <h5 className="text-custom-lg">Aoatradersinc@gmail.com</h5>
        </div>

        <div
          className="h-[148px] bg-white flex flex-col items-center justify-center gap-[15px] rounded-tr-[20px] rounded-bl-[20px] cursor-pointer"
          onClick={handlePhone}
        >
          <PhoneCall width={40} height={40} className="text-orange" />
          <h5 className="text-custom-lg">(760) 590-4250</h5>
        </div>

        <div
          className="h-[148px] bg-white flex flex-col items-center justify-center gap-[15px] rounded-tr-[20px] rounded-bl-[20px] cursor-pointer"
          onClick={handleWhatsapp}
        >
          <MessageCircle width={40} height={40} className="text-orange" />
          <h5 className="text-custom-lg">Whatsapp</h5>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
