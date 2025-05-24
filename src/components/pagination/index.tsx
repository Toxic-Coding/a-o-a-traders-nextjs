"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useMergedSearchParams } from "@/hooks/useQuery";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const getVisiblePages = (current: number, total: number) => {
  if (total <= 7) return [...Array(total)].map((_, i) => i + 1);

  const range = [];

  if (current <= 4) {
    range.push(1, 2, 3, 4, 5, "...", total);
  } else if (current >= total - 3) {
    range.push(1, "...", total - 4, total - 3, total - 2, total - 1, total);
  } else {
    range.push(1, "...", current - 1, current, current + 1, "...", total);
  }

  return range;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pages = getVisiblePages(currentPage, totalPages);
  const buildQuery = useMergedSearchParams();
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const pagQuery = buildQuery({ page: pageNumber });
    NProgress.start();
    replace(pagQuery);
  };

  return (
    <div className="flex justify-center mt-15">
      <div className="bg-white shadow-1 rounded-md p-2">
        <ul className="flex items-center">
          {/* Prev */}
          <li>
            <button
              onClick={() => createPageURL(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] disabled:text-gray-4"
              aria-label="button for pagination left"
              type="button"
            >
              <ChevronLeft className="text-app_text" />
            </button>
          </li>

          {/* Page Numbers */}
          {pages.map((page, i) => (
            <li key={i}>
              {page === "..." ? (
                <span className="flex py-1.5 px-3.5 text-gray-400">...</span>
              ) : (
                <button
                  onClick={() => createPageURL(Number(page))}
                  className={`flex py-1.5 px-3.5 duration-200 rounded-[3px] ${
                    currentPage === page
                      ? "bg-app_blue text-white"
                      : "hover:text-white hover:bg-app_blue"
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Next */}
          <li>
            <button
              onClick={() => createPageURL(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-white hover:bg-app_blue disabled:text-gray-4"
              aria-label="button for pagination right"
              type="button"
            >
              <ChevronRight className="text-app_text" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
