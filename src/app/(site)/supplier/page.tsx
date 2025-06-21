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
import Widgets from "./components/Widgets";
import { Suspense } from "react";
import SupplierProducts from "./components/SupplierProducts";
import TableSkeleton from "./components/TableSkeleton";
import WidgetsSkeleton from "./components/WidgetsLoading";

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

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <Suspense fallback={<WidgetsSkeleton />}>
            <Widgets />
          </Suspense>
          <Suspense fallback={<TableSkeleton />}>
            <SupplierProducts searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
