import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import HeroGallerySection from "../components/HeroGalleryTextSection";
import FeaturesGallerySection from "../components/FeaturesGallerySection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <HeroGallerySection/>
      <FeaturesGallerySection/>
      <FooterSection/>
    </div>
  );
}