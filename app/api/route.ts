import axios from "axios";

const API_KEY = "your_api_key"; // Replace this with your actual API key
const BASE_URL = "https://gnews.io/api/v4";

const fetchNewsArticles = async (
  query = "example",
  lang = "en",
  country = "us",
  max = 10
) => {
  try {
    // Build the URL with query parameters
    const url = `${BASE_URL}/search?q=${encodeURIComponent(
      query
    )}&lang=${lang}&country=${country}&max=${max}&apikey=${API_KEY}`;

    // Send GET request using Axios
    const response = await axios.get(url);

    // Extract data from the response
    const articles = response.data.articles;

    // Optionally handle articles (log them or pass them to your frontend component)
    articles.forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (article: { title: any; description: any }, index: number) => {
        console.log(`Title ${index + 1}: ${article.title}`);
        console.log(`Description ${index + 1}: ${article.description}`);
      }
    );

    // Return the articles for further use
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return [];
  }
};

// Example usage
fetchNewsArticles("technology")
  .then((articles) => {
    // Handle the fetched articles
    console.log("Fetched articles: 2", articles);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
