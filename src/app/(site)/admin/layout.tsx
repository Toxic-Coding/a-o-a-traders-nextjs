import { AuthGuard } from "@/components/Auth/auth-guird";
import React from "react";

// /D:/projects/e-commerce-templates/nextjs-ecommerce-template/src/app/admin/layout.tsx

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
}
