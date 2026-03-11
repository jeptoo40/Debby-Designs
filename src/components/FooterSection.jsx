import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding + About */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">Debby Designs</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
          all meticulously crafted to capture the essence of Italian manufacturing excellence. Whether you are seeking a bold statement piece to convey a non-verbal message or a timeless heirloom that holds a lifetime of memories, 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition-colors duration-200">Shop</a></li>
            <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Contact Us</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            +254 700 00 00 00<br />
            info@debbydesigns.co.ke<br />
            Westlands, Nairobi, KE
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-blue-500 transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition-colors duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://wa.me/254701442434" className="hover:text-green-500 transition-colors duration-200">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-white-500 text-sm">
        © {new Date().getFullYear()} Debby Designs. All rights reserved.
      </div>
    </footer>
  );
}