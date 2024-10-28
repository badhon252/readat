"use client";
import HeroSection from "@/components/Header/HeroSection";
import LoadingScreen from "@/components/loading-screen";
import Entertainment from "@/components/News/Entertainment/Entertainment";
import HelthNews from "@/components/News/Helth/HelthNews";
import LatestNews from "@/components/News/latest-news/LatestNews";
import NationNews from "@/components/News/nationNews/NationNews";
import Politics from "@/components/News/Politics/Politics";
import ScienceNews from "@/components/News/scienceNews/ScienceNews";
import Sports from "@/components/News/Sports/Sports";
import Travel from "@/components/News/Travel/Travel";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="container mx-auto border">
      {/* Featured  */}
      <HeroSection />
      {/* Categories  */}
      <LatestNews />
      <Sports />
      <ScienceNews />

      {/* slider  */}
      <Politics />
      <Travel />
      <NationNews />
      <Entertainment />
      <HelthNews />
      {/* Footer  */}
      <div className="text-center p-8">
        Made with 💙 by{" "}
        <Link
          href="https://badhon.vercel.app"
          target="_blank"
          className="text-blue-700 underline"
        >
          KHB
        </Link>
      </div>
    </div>
  );
}
