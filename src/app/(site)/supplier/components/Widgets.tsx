import { endpoints } from "@/helpers/endpoints";
import { authenticatedFetch } from "@/helpers/requestHandler";
import { tags } from "@/helpers/tags";
import { Boxes, CheckCircle, AlertTriangle, UserCircle } from "lucide-react";
import React from "react";

// Type definitions
type DashboardData = {
  total_products: number;
  success_logs: number;
  error_logs: number;
  latest_certifications: string[];
};

type DashboardResponse = {
  data: DashboardData;
  role: string;
};

const cardStyle =
  "text-white p-6 rounded-2xl flex items-center gap-4 min-h-[140px]";

const iconStyle =
  "w-16 h-16 p-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0";

const Widgets = async () => {
  const res = await authenticatedFetch(
    `${endpoints.supplier.dashboardWidgets}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 600,
        tags: [tags.supplier.dashboard_widgets],
      },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error fetching widgets:", errorText);
    return <div className="text-red-500 text-center">Failed to load data</div>;
  }

  const result: DashboardResponse = await res.json();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="w-full max-w-[1500px] mx-auto px-4 xl:px-6 2xl:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Supplier Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Total Products */}
          <div
            className={`bg-gradient-to-r from-productStart to-productEnd ${cardStyle}`}
          >
            <div className={iconStyle}>
              <Boxes className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-sm">Total Products</h2>
              <p className="text-3xl font-bold">{result.data.total_products}</p>
            </div>
          </div>

          {/* Success Logs */}
          <div
            className={`bg-gradient-to-r from-successStart to-successEnd ${cardStyle}`}
          >
            <div className={iconStyle}>
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-sm">Success Logs</h2>
              <p className="text-3xl font-bold">{result.data.success_logs}</p>
            </div>
          </div>

          {/* Error Logs */}
          <div
            className={`bg-gradient-to-r from-errorStart to-errorEnd ${cardStyle}`}
          >
            <div className={iconStyle}>
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-sm">Error Logs</h2>
              <p className="text-3xl font-bold">{result.data.error_logs}</p>
            </div>
          </div>

          {/* Role */}
          <div
            className={`bg-gradient-to-r from-roleStart to-roleEnd ${cardStyle}`}
          >
            <div className={iconStyle}>
              <UserCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-sm">Role</h2>
              <p className="text-3xl font-bold capitalize">{result.role}</p>
            </div>
          </div>
        </div>

        {/* Latest Certifications */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Latest Certifications
          </h2>

          {result.data.latest_certifications.length === 0 ? (
            <div className="bg-white p-6 rounded-2xl text-center text-gray-400 border border-dashed border-gray-300">
              No certifications available.
            </div>
          ) : (
            <ul className="bg-white p-6 rounded-2xl divide-y">
              {result.data.latest_certifications.map((cert, index) => (
                <li key={index} className="py-2 text-gray-700">
                  {cert}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
