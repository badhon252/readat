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
    <NavigationMenu className=" mx-auto my-4 fixed z-50 top-0 left-0 right-0 bg-white rounded-xl">
      {/* <NavigationMenuList className=" bg-gradient-to-t bg-white/10 filter blur-md fixed z-40 top-0 left-0 right-0 h-24 w-full" /> */}
      <NavigationMenuList className="flex justify-between items-center w-full">
        <div>
          {/* Aconews Logo */}
          <NavigationMenuItem className="text-6xl font-black font-sans me-12">
            <Link href="/">Aconews</Link>
          </NavigationMenuItem>
        </div>

        <div className="flex">
          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-6 w-6 ${isMenuOpen ? "rotate-90" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items (Desktop) */}
          <div
            className={`lg:flex lg:items-center lg:justify-end ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <NavigationMenuItem className="block  ">
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Explore />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="lg:block px-4">
              <Link href="/about" className="">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="lg:block">
              <SearchInput setIsModalOpen={setIsModalOpen} />
              <SearchResultsModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </NavigationMenuItem>
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
