import React from "react";
import { Metadata } from "next";
import AllProducts from "@/components/AllProducts";
import { Fetch } from "@/helpers/requestHandler";
import AllProductsWrapper from "@/components/AllProducts/Wrapper";
import { objectToQueryString } from "@/hooks/paramsToQueryString";
import Pagination from "@/components/pagination";
import Empty from "@/components/empty";
import { tags } from "@/helpers/tags";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const { query, page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const queryParams = objectToQueryString({
    search: query,
    page: pageNumber,
    per_page: 8,
  });
  console.log(queryParams);

  const res = await Fetch(`/${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 600,
      tags: [tags.all_products.all_products],
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching products:", data);
  }

  return (
    <>
      <AllProducts products={data} />
      <Pagination totalPages={data.pages} />
    </>
  );
};

export default AllProductsPage;
