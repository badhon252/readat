"use client";
import HeroSection from "@/components/Header/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Sports from "@/components/News/Sports/Sports";
import { useFetchNewsOnMount } from "@/components/News/useFetchNewsOnMount";
import Travel from "@/components/News/Travel/Travel";
export default function Home() {
  useFetchNewsOnMount();
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <Travel />
      <Sports />
      <Travel />
    </div>
  );
}
