import React from "react";

export default function NewsSearch() {
  return <div>NewsSearch</div>;
}

// "use client";
// import { useNewsStore } from "@/store/useNewsStore";
// import React, { useState } from "react";

// const NewsSearch = () => {
//   const [query, setQuery] = useState("");
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const fetchedArticles = await useNewsStore((state) => state.news); // Pass the query from user input
//       setArticles(fetchedArticles); // Update state with the fetched articles
//     } catch (err) {
//       setError("Failed to fetch news articles.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-1">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for news..."
//       />
//       <button onClick={handleSearch}>Search</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <div>
//         {articles.map((article, index) => (
//           <div key={index}>
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsSearch;
