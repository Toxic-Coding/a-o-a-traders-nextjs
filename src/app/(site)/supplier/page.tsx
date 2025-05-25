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
import { DataTable } from "./components/DataTable";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    per_page?: string;
  }>;
}) {
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  const navData = {
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "Lifecycle",
        url: "#",
        icon: <ListIcon />,
      },
      {
        title: "Analytics",
        url: "#",
        icon: <BarChartIcon />,
      },
      {
        title: "Projects",
        url: "#",
        icon: <FolderIcon />,
      },
      {
        title: "Team",
        url: "#",
        icon: <UsersIcon />,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: <CameraIcon />,
        isActive: true,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Proposal",
        icon: <FileTextIcon />,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Prompts",
        icon: <FileCodeIcon />,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: <SettingsIcon />,
      },
      {
        title: "Get Help",
        url: "#",
        icon: <HelpCircleIcon />,
      },
      {
        title: "Search",
        url: "#",
        icon: <SearchIcon />,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: <DatabaseIcon />,
      },
      {
        name: "Reports",
        url: "#",
        icon: <ClipboardListIcon />,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: <FileIcon />,
      },
    ],
  };

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

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
