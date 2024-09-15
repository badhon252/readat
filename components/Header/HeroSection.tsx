import React from "react";
import { CarouselPlugin } from "./Featured";

export default function HeroSection() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-6">Featured</h1>
      <CarouselPlugin />
    </div>
  );
}
