// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Shanga Bracelet", price: 500, image: "/images/shanga1.jpg" },
  { id: 2, name: "Beaded Bracelet", price: 400, image: "/images/shanga2.jpg" },
  { id: 3, name: "Custom Bracelet", price: 600, image: "/images/shanga3.jpg" },
  { id: 4, name: "Friendship Bracelet", price: 300, image: "/images/shanga4.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}