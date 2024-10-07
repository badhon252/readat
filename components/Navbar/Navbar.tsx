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

  return (
    <NavigationMenu className="bg-lime-50 mx-auto my-4">
      <NavigationMenuList>
        <NavigationMenuItem className="text-xl font-black">
          Aconews
        </NavigationMenuItem>
        <NavigationMenuItem className="block lg:hidden">
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Explore />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-6">About</NavigationMenuItem>
        <NavigationMenuItem className="px-6">
          <SearchInput setIsModalOpen={setIsModalOpen} />
          <SearchResultsModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
