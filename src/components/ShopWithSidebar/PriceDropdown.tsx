import { ChevronUp } from "lucide-react";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState({
    from: 0,
    to: 100,
  });

  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5"
      >
        <p>Price</p>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          id="price-dropdown-btn"
          aria-label="button for price dropdown"
          className={`ease-out duration-200 ${toggleDropdown && "rotate-180"}`}
        >
          <ChevronUp className="text-app_text" />
        </button>
      </div>

      {/* // <!-- dropdown menu --> */}
      <div className={`p-6 ${toggleDropdown ? "block" : "hidden"}`}>
        <div id="pricingOne">
          <div className="price-range">
            <RangeSlider
              id="range-slider-gradient"
              className="margin-lg"
              step={"any"}
              onInput={(e) =>
                setSelectedPrice({
                  from: Math.floor(e[0]),
                  to: Math.ceil(e[1]),
                })
              }
            />

            <div className="price-amount flex items-center justify-between pt-4">
              <div className="text-custom-xs text-app_text flex rounded border border-gray-3/80">
                <span className="block border-r border-gray-3/80 px-2.5 py-1.5">
                  $
                </span>
                <span id="minAmount" className="block px-3 py-1.5">
                  {selectedPrice.from}
                </span>
              </div>

              <div className="text-custom-xs text-app_text flex rounded border border-gray-3/80">
                <span className="block border-r border-gray-3/80 px-2.5 py-1.5">
                  $
                </span>
                <span id="maxAmount" className="block px-3 py-1.5">
                  {selectedPrice.to}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
