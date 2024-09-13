// pages/api/news.ts
import axios from "axios";

const GNEWS_API = "https://gnews.io/api/v4";
const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

export default async function handler(req, res) {
  const { query, page = 1 } = req.query;

  try {
    const response = await axios.get(`${GNEWS_API}/search`, {
      params: {
        q: query || "latest",
        token: API_KEY,
        lang: "en",
        page: page,
        max: 10,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
}
