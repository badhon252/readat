// lib/api.ts
import axios from "axios";
import { cache } from "react";

const api = axios.create({
  baseURL: "https://gnews.io/api/v4",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchNewsData = cache(async (category?: string) => {
  try {
    const url = `/top-headlines?token=${process.env.API_KEY}&lang=en${
      category ? `&category=${category}` : ""
    }`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category || "featured"} news:`, error);
    return null;
  }
});
