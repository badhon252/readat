import Link from "next/link";

export default function CategoriesLink({ title }: { title: string }) {
  return (
    <Link
      href={`/category/${encodeURIComponent(title.toLowerCase())}`} // Dynamic category link
      className=" text-red-600 text-md flex-wrap hover:underline"
    >
      See All
    </Link>
  );
}
