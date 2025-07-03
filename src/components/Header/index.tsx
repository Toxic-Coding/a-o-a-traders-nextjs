"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CustomSelect from "./CustomSelect";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import Image from "next/image";
import Topbar from "./Topbar";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Bell,
  Heart,
  MenuIcon,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { useAuth } from "@/app/context/authProvider";
import Spinner from "../Common/spinner";
import SearchBar from "./Search";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { openCartModal } = useCartModalContext();
  const { ref, inView } = useInView({ threshold: 1 });
  const controls = useAnimation();
  const product = useAppSelector((state) => state.wishlist.items);
  const cartProducts = useAppSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const { isLoading, user } = useAuth();
  const pathname = usePathname();
  const isCurrentRoute = (path: string): boolean => {
    return pathname === path;
  };

  const handleOpenCartModal = () => {
    openCartModal();
  };

  // Sticky menu
  useEffect(() => {
    const handleStickyMenu = () => {
      if (!inView && window.scrollY > 0) {
        setStickyMenu(true);
        controls.start({
          top: 0,
          position: "sticky",
          zIndex: 10,
          transition: { duration: 0.3, ease: "linear" },
        });
      } else {
        setStickyMenu(false);
        controls.start({ top: 0, position: "relative" });
      }
    };

    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, [controls]);

  const options = [
    { label: "All Categories", value: "0" },
    { label: "Desktop", value: "1" },
    { label: "Laptop", value: "2" },
    { label: "Monitor", value: "3" },
    { label: "Phone", value: "4" },
    { label: "Watch", value: "5" },
    { label: "Mouse", value: "6" },
    { label: "Tablet", value: "7" },
  ];

  return (
    <>
      <header
        className={` left-0 top-0 w-full z-50 bg-white transition-all ease-in-out duration-300 px-[20px] ${
          stickyMenu && "shadow"
        }`}
      >
        <Topbar />
        <div className="max-w-[1500px] mx-auto">
          {/* <!-- header top start --> */}
          <div
            className={`flex flex-col md:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 ${
              stickyMenu ? "py-2" : "py-4"
            }`}
          >
            {/* <!-- header top left --> */}
            <div className="flex items-center justify-between gap-7.5 flex-1 md:w-auto w-full">
              <button
                id="Toggle"
                aria-label="Toggler"
                className="xl:hidden block"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <span className="block relative cursor-pointer w-5.5 h-5.5">
                  <span className="du-block absolute right-0 w-full h-full">
                    <span
                      className={`block relative top-0 left-0 bg-app_text rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                        !navigationOpen && "!w-full delay-300"
                      }`}
                    ></span>
                    <span
                      className={`block relative top-0 left-0 bg-app_text rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                        !navigationOpen && "!w-full delay-400"
                      }`}
                    ></span>
                    <span
                      className={`block relative top-0 left-0 bg-app_text rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                        !navigationOpen && "!w-full delay-500"
                      }`}
                    ></span>
                  </span>

                  <span className="block absolute right-0 w-full h-full rotate-45">
                    <span
                      className={`block bg-app_text rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                        !navigationOpen && "!h-0 delay-[0] "
                      }`}
                    ></span>
                    <span
                      className={`block bg-app_text rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                        !navigationOpen && "!h-0 dealy-200"
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
              <Link className="flex-shrink-0" href="/">
                <Image src="/logo.avif" alt="Logo" width={120} height={40} />
              </Link>
              <div className=" w-full md:block hidden">
                {/* <CustomSelect options={options} /> */}

                <SearchBar />
              </div>
              <div className="flex items-center gap-5">
                {isLoading ? (
                  <div className="flex items-center">
                    <Spinner size="medium" color="orange" />
                  </div>
                ) : (
                  <Link
                    href={
                      user
                        ? user.user_role === "admin"
                          ? "/admin"
                          : "/"
                        : "/signin"
                    }
                    className="flex items-center gap-3"
                  >
                    <UserRound
                      width={24}
                      height={24}
                      className="text-app_blue"
                    />

                    <div className="hidden md:block">
                      <span className="block text-2xs text-app_text uppercase">
                        {user
                          ? user.user_role === "admin" && "Admin"
                          : "account"}
                      </span>
                      {!user && (
                        <p className="font-medium text-custom-sm text-app_text">
                          Sign In
                        </p>
                      )}
                    </div>
                  </Link>
                )}
                <Link href={"/wishlist"}>
                  <button className="hidden xl:flex items-center gap-3">
                    <span className="inline-block relative">
                      <Heart width={24} height={24} className="text-app_blue" />

                      <span className="flex items-center justify-center font-medium text-2xs absolute -right-2 -top-2.5 bg-orange w-4.5 h-4.5 rounded-full text-white">
                        {product.length}
                      </span>
                    </span>

                    <div>
                      <span className="block text-2xs text-app_text uppercase">
                        Favorite
                      </span>
                      <p className="font-medium text-custom-sm text-app_text">
                        My Wishlist
                      </p>
                    </div>
                  </button>
                </Link>

                <button
                  onClick={handleOpenCartModal}
                  className="flex items-center gap-3"
                >
                  <span className="inline-block relative">
                    <ShoppingCart
                      width={24}
                      height={24}
                      className="text-app_blue"
                    />

                    <span className="flex items-center justify-center font-medium text-2xs absolute -right-2 -top-2.5 bg-orange w-4.5 h-4.5 rounded-full text-white">
                      {cartProducts.length}
                    </span>
                  </span>

                  <div>
                    <span className="block text-2xs text-app_text uppercase">
                      cart
                    </span>
                    <p className="font-medium text-custom-sm text-app_text">
                      ${totalPrice}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* <!-- header top right --> */}
            {/* <!-- Hamburger Toggle BTN --> */}
            <div className=" w-full md:hidden">
              <SearchBar />
            </div>
            {/* //   <!-- Hamburger Toggle BTN --> */}
          </div>
        </div>
        {/* <!-- header top end --> */}
      </header>
      <motion.div
        ref={ref}
        initial={{ top: 0, position: "relative" }}
        animate={controls}
        className="border-t border-gray-3 bg-app_blue text-white"
      >
        <div className="max-w-[1500px] mx-auto sm:px-7.5 xl:px-0 px-[20px]">
          <div className="flex items-center justify-between">
            {/* <!--=== Main Nav Start ===--> */}
            <div
              className={`w-[288px] absolute z-99 right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${
                navigationOpen &&
                `!visible bg-white shadow-lg border border-gray-3 !h-auto max-h-[400px] overflow-y-scroll rounded-md p-5`
              }`}
            >
              {/* <!-- Main Nav Start --> */}
              <nav className="flex items-center justify-between gap-5">
                <div className="w-[300px] vertical-menu bg-orange cursor-pointer hidden xl:flex items-center justify-start p-[20px]">
                  <MenuIcon className="mr-[20px]" />
                  <span className="text-[13px] font-medium">
                    SHOP BY DEPARTMENT
                  </span>
                </div>
                <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6 uppercase">
                  {menuData.map((menuItem, i) =>
                    menuItem.submenu ? (
                      <Dropdown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={stickyMenu}
                      />
                    ) : (
                      <li
                        key={i}
                        className={`"group relative before:w-0 before:h-[3px] before:bg-orange before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full ${
                          isCurrentRoute(menuItem.path) && "before:w-full"
                        } `}
                      >
                        <Link
                          href={menuItem.path}
                          className={` text-app_text xl:text-white hover:text-orange ${
                            isCurrentRoute(menuItem.path) && "text-orange"
                          }  text-custom-sm font-medium  flex ${
                            stickyMenu ? "xl:py-2" : "xl:py-4"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              {/* //   <!-- Main Nav End --> */}
            </div>
            {/* // <!--=== Main Nav End ===--> */}

            {/* // <!--=== Nav Right Start ===--> */}
            <ul className="flex items-center gap-5.5 xl:block">
              <li className="flex items-center gap-1.5 font-medium text-custom-sm py-4">
                <Bell width={16} height={16} />
                Hotline: 760-590-4250
              </li>
            </ul>
            {/* <!--=== Nav Right End ===--> */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
