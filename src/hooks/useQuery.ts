// lib/utils/mergeSearchParams.ts
"use client";

import { useSearchParams, usePathname } from "next/navigation";

export function useMergedSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    newParams: Record<string, string | number | null | undefined>,
    customPath?: string
  ) => {
    const current = new URLSearchParams(searchParams.toString());

    // Merge or remove keys
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        current.delete(key);
      } else {
        current.set(key, String(value));
      }
    });

    return `${customPath ?? pathname}?${current.toString()}`;
  };
}
