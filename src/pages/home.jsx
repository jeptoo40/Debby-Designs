import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <FooterSection/>
    </div>
  );
}