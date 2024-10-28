import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenuDemo } from "../Category/Component";
import { PopoverSearchWithModal } from "../PopoverSearchWithModal";

export default function NavComponent() {
  return (
    <div
      id="NavComponent"
      className="flex items-center justify-between px-4 bg-white dark:bg-gray-800 text-black container mx-auto py-8"
    >
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <NewsIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">READAT</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <DropdownMenuDemo />
        <Link
          href="/about"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-lg font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
        <PopoverSearchWithModal />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white text-black">
          {" "}
          {/* Apply styles here */}
          <div className="grid w-[200px] p-4">
            <DropdownMenuDemo />
            <Link
              href="/about"
              className="text-lg font-medium hover:underline underline-offset-4 my-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:underline underline-offset-4 my-2"
            >
              Contact
            </Link>
            <PopoverSearchWithModal />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function NewsIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-newspaper"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}
