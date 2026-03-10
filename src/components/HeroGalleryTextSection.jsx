import React from "react";

const galleryItems = [
  { src: "/images/shanga1.jpg", price: "KSh 500" },
  { src: "/images/shanga2.jpg", price: "KSh 650" },
  { src: "/images/shanga3.jpg.jpeg", price: "KSh 750" },
  { src: "/images/shanga4.jpg.jpeg", price: "KSh 600" },
  { src: "/images/shanga5.jpg.jpeg", price: "KSh 800" },
  { src: "/images/shanga6.jpg.jpeg", price: "KSh 700" },
];

export default function GalleryPage() {
  return (
    <section className="w-full min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <img
              src={item.src}
              alt={`Item ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <span className="text-lg font-semibold text-gray-800">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}