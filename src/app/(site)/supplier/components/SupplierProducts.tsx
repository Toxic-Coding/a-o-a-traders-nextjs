import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { authenticatedFetch } from "@/helpers/requestHandler";
import { tags } from "@/helpers/tags";
import { objectToQueryString } from "@/hooks/paramsToQueryString";
import { endpoints } from "@/helpers/endpoints";
import { DataTable } from "./DataTable";

export default async function SupplierProducts({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    per_page?: string;
  }>;
}) {
  const { query, page, per_page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const queryParams = objectToQueryString({
    search: query,
    page: pageNumber,
    per_page: per_page || 10,
  });

  const res = await authenticatedFetch(
    `${endpoints.supplier.dashboardProducts}${queryParams}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600,
        tags: [tags.all_products.all_products],
      },
    }
  );

  if (!res.ok) {
    const data = await res.text();
    console.error("Error fetching products:", data);
  }

  const data = await res.json();

  return <DataTable data={data} />;
}
