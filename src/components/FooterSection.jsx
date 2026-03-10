import React from "react";

export default function FooterSection() {
  return (
<section className="text-gray-300 mt-16" style={{ backgroundColor: "#5a3e2b" }}>
      <div className="container mx-auto px-6 py-12 text-center space-y-4">

        <p className="text-sm">
          Phone: <a href="tel:+25400078889" className="hover:text-white">
          +25400078889
          </a>
        </p>

        <p className="text-sm">
          Collection Point: Nairobi, Kenya
        </p>

        <p className="text-sm">
          Email: <a href="mailto:debbydesigns.co.ke" className="hover:text-white">
            debbydesigns.co.ke
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4 text-lg">
          <a href="#" className="hover:text-white">IG</a>
          <a href="#" className="hover:text-white">FB</a>
        </div>

        <div className="text-xs text-gray-500 pt-6 border-t border-gray-700">
          Debby designs | © {new Date().getFullYear()} | All Rights Reserved
        </div>

      </div>
    </section>
  );
}