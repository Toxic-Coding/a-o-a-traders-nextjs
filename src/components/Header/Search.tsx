"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { debounce } from "@/helpers/dbounce";
import { ProductList } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import Button from "../Common/button";
import { getImageUrl } from "@/helpers/getImageUrl";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<ProductList | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchTyping = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = async (value: string) => {
    if (!value.trim()) {
      setResults(null);
      return;
    }
    setLoading(true);
    try {
      console.log(process.env.BASE_URL);

      const response = await axios.get(
        `${process.env.BASE_URL}/?search=${value}`
      );
      setResults(response.data);
    } catch (err) {
      console.error("Search error", err);
    } finally {
      setLoading(false);
    }
  };

  const debounceSearch = useCallback(
    debounce((val: string) => {
      setShowDropdown(true);
      setResults(null);
      handleSearch(val);
    }, 500),
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setShowDropdown(false);
      setResults(null);
    }
  }, [searchQuery]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchQuery);
        }}
      >
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="I am shopping for..."
            value={searchQuery}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => {
              const value = e.target.value;
              setSearchQuery(value); // only this on key press
              debounceSearch(value); // this is where the UI and request happen after user stops
              setLoading(true);
            }}
            className="rounded-full pl-4 pr-10 border border-gray-3 bg-gray-1 py-2.5"
          />
          <Link href={`/all-products?query=${searchQuery}`}>
            <button
              id="search-btn"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowDropdown(false)}
            >
              <Search
                width={20}
                height={20}
                className="text-app_text hover:text-app_blue"
              />
            </button>
          </Link>
        </div>
      </form>

      {searchQuery.trim() && showDropdown && (
        <div className="absolute mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-md z-50 max-h-80 overflow-y-auto">
          {loading ? (
            <div className="p-4 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3 py-2">
                  <Skeleton className="w-[60px] h-[60px] rounded" />
                  <div className="flex flex-col flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : results && results?.items?.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {results?.items?.map((item, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    console.log("Selected:", item);
                    setShowDropdown(false);
                  }}
                >
                  <Link href={`/detail/${item.product_id}`}>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={getImageUrl({
                          imagePath: item.images?.[0]?.main_image,
                          supplierId: item.supplier_id,
                          variant: "100", // or "200", "300" as needed
                        })}
                        alt=""
                        width={60}
                        height={60}
                      />
                      {/* <Image
                        src={
                          item.images && item.images.length
                            ? !item.images[0].main_image.startsWith("https")
                              ? `${process.env.NEXT_PUBLIC_SUPPLIER_IMAGE_BASE_URL}_100/${item.images[0].main_image}`
                              : item.images[0].main_image
                            : "/logo.avif"
                        }
                        alt=""
                        width={60}
                        height={60}
                      /> */}
                      <div className="flex flex-col">
                        <span className="font-medium">{item.product_name}</span>
                        <span className="text-sm text-gray-500">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              {results && results.items.length > 5 ? (
                <div className="p-3 border-t-gray-1 border-dotted">
                  <Link
                    href={`/all-products?query=${searchQuery}`}
                    className="w-full"
                  >
                    <Button
                      className="w-full"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      View All {results.items.length + 1}
                    </Button>
                  </Link>
                </div>
              ) : null}
            </ul>
          ) : (
            <div className="p-6 flex flex-col items-center text-center text-gray-500">
              <Search className="mb-2 text-gray-300" size={32} />
              <span className="font-semibold text-base">
                No results for &quot;{searchQuery}&quot;
              </span>
              <span className="text-xs mt-1">
                Try a different keyword or check your spelling.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
