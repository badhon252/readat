"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useFetchNewsOnMount } from "@/store/useNewsStore";
import Explore from "./Explore";
import SearchInput from "./SearchBar";
import SearchResultsModal from "./SearchModal";

export default function Navbar() {
  useFetchNewsOnMount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavigationMenu className="bg-slate-200 fixed z-50 top-0 left-0 right-0 mx-auto min-w-full">
      {/* Navigation Menu Container */}
      <div className=" mx-auto px-4 my-4">
        <NavigationMenuList className="flex justify-between items-center">
          {/* Aconews Logo */}
          <NavigationMenuItem className="text-4xl lg:text-6xl font-black">
            <Link href="/">Aconews</Link>
          </NavigationMenuItem>

          {/* Navigation Items (Desktop) */}
          <div className="flex items-center">
            {/* Hamburger Menu Button (Mobile Only) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-md p-2 focus:outline-none transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`h-6 w-6 ${
                    isMenuOpen ? "rotate-90" : ""
                  } transition-transform duration-200`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items (Mobile and Desktop) */}
            <div
              className={`lg:flex lg:items-center lg:space-x-6 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Explore />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about">About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <SearchInput setIsModalOpen={setIsModalOpen} />
                <SearchResultsModal
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
