import { useAuth } from "@/app/context/authProvider";
import { LogOut, LogOutIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Spinner from "../Common/spinner";

const Topbar: React.FC = () => {
  const { logout, user, isLoading } = useAuth();
  return (
    <div className=" sticky bg-gray-100 text-sm text-gray-700 py-2 border-b border-app_border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>Express Delivery</div>
        <div className="flex items-center space-x-4">
          <Link href="/faqs" className="hover:text-orange">
            FAQ&apos;s
          </Link>
          <span className="border-l border-gray-300 h-4"></span>
          <a href="#" className="hover:text-orange">
            Order Tracking
          </a>
          {user &&
            (isLoading ? (
              <Spinner color="orange" size="small" />
            ) : (
              <LogOutIcon
                size={20}
                className="hover:text-app_orange cursor-pointer"
                onClick={logout}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
