import React from "react";
import sampleImage from "/images/sample.jpg"; // replace with your image path

export default function InfoSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About Our Collection
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Debby Designs, every piece of jewelry is handcrafted with love 
            and precision. Our collection blends traditional techniques with 
            modern designs, creating pieces that stand out in elegance and style.
            Discover the perfect accessory that complements your personality and 
            shines in every occasion.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={sampleImage}
            alt="Jewelry showcase"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}