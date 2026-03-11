import React from "react";

const galleryItems = [
  { src: "/images/shanga1.jpg", price: "KSh 500" },
  { src: "/images/shanga2.jpg", price: "KSh 700" },
  { src: "/images/shanga3.jpg.jpeg", price: "KSh 850" },
  { src: "/images/shanga4.jpg.jpeg", price: "KSh 600" },
  { src: "/images/shanga5.jpg.jpeg", price: "KSh 900" },
  { src: "/images/shanga6.jpg.jpeg", price: "KSh 550" },
  { src: "/images/shanga7.jpg.jpeg", price: "KSh 650" },
  { src: "/images/shanga8.jpg.jpeg", price: "KSh 750" },
  { src: "/images/shanga9.jpg.jpeg", price: "KSh 800" },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-9 py-12">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.src}
              alt={`Item ${index + 1}`}
              className="w-full h-72 object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-4 text-center bg-white">
              <p className="text-red-600 font-semibold text-lg">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}