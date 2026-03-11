import React from "react";
import sampleImage from "/images/sample.jpg.jpeg"; 

export default function InfoSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-9">
        {/* Left: Text */}
        <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
  About Our Collection
</h2>
<p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto text-justify">
  At <span className="font-semibold text-blue-900">Debby Designs</span>, every piece of jewelry is handcrafted with love and precision.  
  Our collection blends <span className="italic text-gray-800">traditional techniques</span> with modern designs, creating pieces that stand out in elegance and style.  
  Discover the perfect accessory that complements your personality.  
  Elevate your everyday style or celebrate life's most precious milestones with <span className="font-semibold text-blue-800">"Debby designs"</span> that blends traditional skills with contemporary vision.  
  Visit Debby Designs to discover a world of authentic, sophisticated beauty designed to help you sparkle.
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