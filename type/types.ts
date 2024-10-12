// types.ts

// Type for a single news article
type Article = {
  [x: string]: any;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string; // Assuming this is a date string
  source: {
    name: string;
    url: string;
  };
};

// Type for the API response (adjust based on your API)
type NewsResponse = {
  totalArticles: number;
  articles: Article[];
};

// Type for news data used in your components
type NewsData = Article[];

//  Type for a news card
type NewsCardProps = {
  title: string;
  description: string;
  content?: string;
  footer?: React.ReactNode;
};

// Type for the CardGrid component
type CardGridProps = {
  items: NewsData; // Or a more specific type if needed
  itemRenderer: (item: Article) => React.ReactNode; // Function to render each item
  itemsToShow?: number;
  linkHref: string;
};

// Type for the News component
type NewsProps = {
  news: NewsData;
};

export type {
  Article,
  NewsResponse,
  NewsData,
  NewsCardProps,
  CardGridProps,
  NewsProps,
};
