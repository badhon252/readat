import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useFetchNewsOnMount, useNewsStore } from "@/store/useNewsStore";
import Explore from "./Explore";

export default function Navbar() {
  const data = useNewsStore((state) => state.featuredNews) || [];
  console.log(data);
  useFetchNewsOnMount();

  return (
    <NavigationMenu className="bg-lime-50 mx-auto my-4">
      <NavigationMenuList>
        <NavigationMenuItem className="hidden lg:block">
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Explore />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="block lg:hidden">
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] ">
              {data?.map((post) => (
                <>
                  <ListItem href="/docs" title={post.title}>
                    {post.description.slice(0, 10)}
                  </ListItem>
                  <ListItem href="/docs" title={post.title}>
                    {post.description.slice(0, 10)}
                  </ListItem>{" "}
                  <ListItem href="/docs" title={post.title}>
                    {post.description.slice(0, 10)}
                  </ListItem>
                </>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-xl font-black">
          Aconews
        </NavigationMenuItem>{" "}
        <NavigationMenuItem className="px-6">About</NavigationMenuItem>
        <NavigationMenuItem className="px-6">Search</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ href, title, children }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link href="#" legacyBehavior passHref>
        <a
          ref={ref}
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        >
          <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
          <p className="text-sm leading-tight text-muted-foreground">
            {children}
          </p>
        </a>
      </Link>
    </NavigationMenuLink>
  </li>
));
