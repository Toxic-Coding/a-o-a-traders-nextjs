import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="max-w-[1500px] w-full mx-auto overflow-hidden border-t border-app_border py-[50px] px-[20px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="text-app_text text-xl sm:text-2xl xl:text-custom-2 font-semibold">
          {title}
        </h1>

        <ul className="flex items-center gap-2">
          <li className="text-custom-sm hover:text-app_blue">
            <Link href="/">Home /</Link>
          </li>

          {pages.length > 0 &&
            pages.map((page, key) => (
              <li
                className="text-custom-sm last:text-app_blue capitalize"
                key={key}
              >
                {page}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
