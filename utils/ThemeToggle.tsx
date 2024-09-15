"use client";
// components/ThemeToggle.tsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem("theme") === "dark"
  );
  const [mounted, setMounted] = useState(false); // Track whether component has mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true on client-side rendering
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  if (!mounted) return null; // Render nothing until component has mounted

  return (
    <button
      onClick={() => setIsDarkMode((prevMode) => !prevMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 size-10"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
