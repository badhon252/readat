// components/news/ServerNews.tsx
import { fetchNewsData } from "@/lib/api";
import { ClientNewsWrapper } from "./ClientNewsWrapper";

export async function ServerNews({ category }: { category?: string }) {
  const data = await fetchNewsData(category);

  return (
    <ClientNewsWrapper
      initialData={data?.articles || []}
      category={category || "featured"}
    />
  );
}
