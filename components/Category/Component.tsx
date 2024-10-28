import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-950 text-slate-50 font-semibold border-none"
        >
          Explore Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>ALL CATEGORIES</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/category/featured"> 📊 Trending News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/sports">🏅 Sports News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/politics"> 🎤 Politics News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/technology"> 🤖 Technology News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/business">💸 Business News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/health">👨‍⚕️ Health News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/entertainment">🕹 Entertainment News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/science">💡 Science News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/world"> 🗺 World News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/travel">⛰ Travel News</Link>
          </DropdownMenuItem>{" "}
          <DropdownMenuItem>
            <Link href="/category/nation">👬 National News</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
