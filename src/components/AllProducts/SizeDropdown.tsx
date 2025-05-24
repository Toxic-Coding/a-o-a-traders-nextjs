"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const SizeDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && "shadow-filter"
        }`}
      >
        <p>Size</p>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          aria-label="button for size dropdown"
          className={`ease-out duration-200 ${toggleDropdown && "rotate-180"}`}
        >
          <ChevronUp className="text-app_text" />
        </button>
      </div>

      {/* // <!-- dropdown menu --> */}
      <div
        className={`flex-wrap gap-2.5 p-6 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        <label
          htmlFor="sizeM"
          className="cursor-pointer select-none flex items-center rounded-md bg-app_blue text-white hover:bg-app_blue hover:text-white"
        >
          <div className="relative">
            <input type="radio" name="size" id="sizeM" className="sr-only" />
            <div className="text-custom-sm py-[5px] px-3.5 rounded-[5px]">
              M
            </div>
          </div>
        </label>

        <label
          htmlFor="sizeL"
          className="cursor-pointer select-none flex items-center rounded-md hover:bg-app_blue hover:text-white"
        >
          <div className="relative">
            <input type="radio" name="size" id="sizeL" className="sr-only" />
            <div className="text-custom-sm py-[5px] px-3.5 rounded-[5px]">
              L
            </div>
          </div>
        </label>

        <label
          htmlFor="sizeXL"
          className="cursor-pointer select-none flex items-center rounded-md hover:bg-app_blue hover:text-white"
        >
          <div className="relative">
            <input type="radio" name="size" id="sizeXL" className="sr-only" />
            <div className="text-custom-sm py-[5px] px-3.5 rounded-[5px]">
              XL
            </div>
          </div>
        </label>

        <label
          htmlFor="sizeXXL"
          className="cursor-pointer select-none flex items-center rounded-md hover:bg-app_blue hover:text-white"
        >
          <div className="relative">
            <input type="radio" name="size" id="sizeXXL" className="sr-only" />
            <div className="text-custom-sm py-[5px] px-3.5 rounded-[5px]">
              XXL
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SizeDropdown;
