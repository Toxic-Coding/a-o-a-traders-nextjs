"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ColorsDropdwon = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [activeColor, setActiveColor] = useState("blue");

  const colors = ["red", "blue", "orange", "pink", "purple"];

  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && "shadow-filter"
        }`}
      >
        <p>Colors</p>
        <button
          aria-label="button for colors dropdown"
          className={`ease-out duration-200 ${toggleDropdown && "rotate-180"}`}
        >
          <ChevronUp className="text-app_text" />
        </button>
      </div>

      {/* <!-- dropdown menu --> */}
      <div
        className={`flex-wrap gap-2.5 p-6 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        {colors.map((color, key) => (
          <label
            key={key}
            htmlFor={color}
            className="cursor-pointer select-none flex items-center"
          >
            <div className="relative">
              <input
                type="radio"
                name="color"
                id={color}
                className="sr-only"
                onChange={() => setActiveColor(color)}
              />
              <div
                className={`flex items-center justify-center w-5.5 h-5.5 rounded-full ${
                  activeColor === color && "border"
                }`}
                style={{ borderColor: `${color}` }}
              >
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ backgroundColor: `${color}` }}
                ></span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorsDropdwon;
