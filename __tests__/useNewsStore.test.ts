// __tests__/useNewsStore.test.ts
import { renderHook, act } from "@testing-library/react-hooks";
import { useNewsStore } from "@/store/useNewsStore";
import { Article } from "@/type/types";

// Mock data
const generateArticles = (count: number): Article[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Article ${i + 1}`,
    description: `Description for article ${i + 1}`,
    url: `https://example.com/article${i + 1}`,
    content: `Content for article ${i + 1}`,
    image: `https://example.com/image${i + 1}.jpg`, // Add image property
    publishedAt: new Date().toISOString(), // Add publishedAt property
    source: {
      // Add source property
      name: "Example Source",
      url: `https://example.com/source${i + 1}`, // Add url property
    },
  }));

describe("useNewsStore", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useNewsStore());
    act(() => {
      result.current.setAllNews([]); // Clear allNews before each test
    });
  });

  it("should add unique articles to allNews without duplicates", () => {
    const { result } = renderHook(() => useNewsStore());
    const newArticles = generateArticles(3);

    act(() => {
      result.current.setAllNews(newArticles);
      result.current.setAllNews(newArticles); // Try to add duplicates
    });

    expect(result.current.allNews).toHaveLength(3); // Verify no duplicates
  });

  it("should enforce the maximum cache limit on allNews", () => {
    const { result } = renderHook(() => useNewsStore());
    const maxArticles = 200;
    const extraArticles = 10;

    act(() => {
      result.current.setAllNews(generateArticles(maxArticles));
      result.current.setAllNews(generateArticles(extraArticles)); // Add more to exceed limit
    });

    expect(result.current.allNews).toHaveLength(maxArticles); // Should retain only latest 200
  });

  it("should retain only the latest articles within the cache limit", () => {
    const { result } = renderHook(() => useNewsStore());
    const maxArticles = 200;
    const extraArticles = generateArticles(10, 201);

    act(() => {
      result.current.setAllNews(generateArticles(maxArticles));
      result.current.setAllNews(extraArticles); // Adding newer articles
    });

    const latestArticles = result.current.allNews.slice(
      0,
      extraArticles.length
    );
    const containsLatest = extraArticles.every((article) =>
      latestArticles.some((latestArticle) => latestArticle.url === article.url)
    );

    expect(result.current.allNews).toHaveLength(maxArticles);
    expect(containsLatest).toBe(true); // Ensure newest articles are in cache
  });
});
