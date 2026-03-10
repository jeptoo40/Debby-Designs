// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-yellow-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Masanaa Handmade Bracelets
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6">
          Unique, handcrafted bracelets for every occasion
        </p>
        <a
          href="https://wa.me/254113427101?text=Hi, I want to order a product"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}