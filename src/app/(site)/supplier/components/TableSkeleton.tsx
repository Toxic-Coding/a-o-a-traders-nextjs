'use client';

import { Skeleton } from '@/components/ui/skeleton';

const TableSkeleton = () => {
  return (
    <div className="p-6">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-8 w-40" /> {/* Customize Columns */}
        <Skeleton className="h-10 w-40 rounded-md" /> {/* Upload Button */}
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-muted rounded-t-md text-sm font-medium text-muted-foreground">
        <div className="col-span-1"><Skeleton className="h-4 w-4" /></div>
        <div className="col-span-5"><Skeleton className="h-4 w-32" /></div>
        <div className="col-span-2"><Skeleton className="h-4 w-16" /></div>
        <div className="col-span-2"><Skeleton className="h-4 w-16" /></div>
        <div className="col-span-2"><Skeleton className="h-4 w-16" /></div>
      </div>

      {/* Table Body Rows */}
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-12 gap-4 items-center px-4 py-3 border-b"
        >
          <div className="col-span-1">
            <Skeleton className="h-4 w-4 rounded" />
          </div>
          <div className="col-span-5">
            <Skeleton className="h-4 w-52" />
          </div>
          <div className="col-span-2">
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="col-span-2">
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <div className="col-span-2 flex justify-end">
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      ))}

      {/* Footer (pagination) */}
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-4 w-48" /> {/* "0 of 10 rows selected" */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24" /> {/* Rows per page */}
          <Skeleton className="h-8 w-16" /> {/* Page number */}
          <Skeleton className="h-8 w-8 rounded-md" /> {/* Prev */}
          <Skeleton className="h-8 w-8 rounded-md" /> {/* Next */}
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
