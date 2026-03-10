import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import HeroGalleryTextSection from "../components/HeroGalleryTextSection"; // ✅ correct import

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <HeroGalleryTextSection />  
      
    </div>
  );
}