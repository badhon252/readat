import HeroSection from "@/components/Header/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { Sports } from "@/components/Sports/Sports";
import Travel from "@/components/Travel/Travel";
export default function Home() {
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
