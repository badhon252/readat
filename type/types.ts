// Define types for the API response
type Article = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NewsResponse = {
  map(arg0: (article: any) => React.JSX.Element): React.ReactNode;
  totalArticles: number;
  articles: Article[];
};
