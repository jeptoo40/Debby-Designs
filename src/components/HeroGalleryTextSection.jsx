import React from "react";

const galleryItems = [
  { src: "/images/shanga1.jpg", price: "KSh 500" },
  { src: "/images/shanga2.jpg", price: "KSh 700" },
  { src: "/images/shanga3.jpg", price: "KSh 850" },
  { src: "/images/shanga4.jpg", price: "KSh 600" },
  { src: "/images/shanga5.jpg", price: "KSh 900" },
  { src: "/images/shanga6.jpg", price: "KSh 550" },
  { src: "/images/shanga7.jpg", price: "KSh 650" },
  { src: "/images/shanga8.jpg", price: "KSh 750" },
  { src: "/images/shanga9.jpg", price: "KSh 800" },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>

      {/* Grid container */}
      <div className="grid grid-cols-5 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="border rounded overflow-hidden shadow">
            <img
              src={item.src}
              alt={`Item ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 text-center">
              <p className="text-red-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}