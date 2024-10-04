import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useFetchNewsOnMount, useNewsStore } from "@/store/useNewsStore";
// import NewsSearch from "@/lib/NewsSearch";

export default function Navbar() {
  const data = useNewsStore((state) => state.featuredNews);
  console.log(data);
  useFetchNewsOnMount();

  return (
    <NavigationMenu className="bg-lime-50 mx-auto my-4">
      <NavigationMenuList>
        <NavigationMenuItem className="hidden lg:block">
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex h-96 overflow-hidden">
              <div className="flex flex-col w-64 bg-lime-50 px-4 sticky top-0">
                <ul className="grid gap-3 p-4 row-span-3">
                  {data?.map((post) => (
                    <li key={post.title}>
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            trending
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {post.title}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 overflow-y-auto px-4">
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
              </div>
            </div>
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
