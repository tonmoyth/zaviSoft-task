"use client";

import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full flex justify-center p-2 sm:px-6 lg:px-15 mt-4 sm:mt-6 lg:mt-8">
      <div className="w-[100%] p-4 sm:p-6 lg:p-8 flex items-center justify-between bg-[#FAFAFA] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
        {/* Left Menu - Hamburger Icon */}
        <div className="flex items-center ">
          <Menu
            strokeWidth={1.5}
            className="w-6 h-6 sm:w-7 lg:hidden sm:h-7 lg:w-8 lg:h-8 text-black cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-24 left-4 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50">
              <p className="cursor-pointer hover:opacity-70 text-sm sm:text-base">
                New Drops 🔥
              </p>
              <p className="cursor-pointer hover:opacity-70 text-sm sm:text-base">
                Men ▾
              </p>
              <p className="cursor-pointer hover:opacity-70 text-sm sm:text-base">
                Women ▾
              </p>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 ml-12 text-[14px] lg:text-[15px] font-medium">
            <p className="cursor-pointer hover:opacity-70">New Drops 🔥</p>
            <p className="cursor-pointer hover:opacity-70">Men ▾</p>
            <p className="cursor-pointer hover:opacity-70">Women ▾</p>
          </div>
        </div>

        <div className="sm:w-[20%] flex justify-center items-center">
          <Image
            className="cursor-pointer w-[80px] h-[auto] sm:w-[128px] sm:h-[32px]"
            src="/images/logo_header.svg"
            alt="Kicks - Ecommerce store"
            width={128}
            height={32}
            priority
            onClick={() => router.push("/")}
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-5 lg:gap-7">
          <Search
            strokeWidth={1.5}
            className="w-6 h-6 hidden lg:block sm:w-6 sm:h-6 lg:w-6 lg:h-6 text-black cursor-pointer"
          />

          <User
            strokeWidth={1.5}
            className="w-6 h-6 sm:w-6 sm:h-6 lg:w-6 lg:h-6 text-black cursor-pointer"
          />

          {/* Cart */}
          <div className="relative">
            <div className="h-7 w-7 sm:h-8 sm:w-8 lg:h-8 lg:w-8 rounded-full bg-[#FFA52F] flex justify-center items-center text-xs sm:text-sm font-semibold text-black">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
