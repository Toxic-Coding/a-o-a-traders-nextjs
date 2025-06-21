"use client";

import { Skeleton } from "@/components/ui/skeleton";

const WidgetsSkeleton = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <Skeleton className="h-8 w-60 mb-8" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-gray-4 to-gray-5 p-6 rounded-2xl"
            >
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-10">
          <Skeleton className="h-6 w-56 mb-4" />
          <div className="bg-white p-6 rounded-2xl space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetsSkeleton;
