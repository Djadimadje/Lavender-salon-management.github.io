import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f5ebe0] text-[#3d2817] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <h3 className="text-2xl font-serif italic">LAVENDER</h3>
            </div>
            <p className="text-sm text-gray-600">
              Natural Lavender Luxe, where BHA and AHA in beauty your skin deserves the finest botanical care
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-[#c9a961]">Home</a></li>
              <li><a href="/services" className="hover:text-[#c9a961]">Services</a></li>
              <li><a href="/booking" className="hover:text-[#c9a961]">Book Appointment</a></li>
              <li><a href="/about" className="hover:text-[#c9a961]">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Facials</li>
              <li>Hair Care</li>
              <li>Nail Care</li>
              <li>Massage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 info@lavenderspa.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Wellness St, Beauty City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c9a961]/30 pt-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="w-8 h-8 bg-[#3d2817] text-white rounded-full flex items-center justify-center hover:bg-[#c9a961]">f</a>
            <a href="#" className="w-8 h-8 bg-[#3d2817] text-white rounded-full flex items-center justify-center hover:bg-[#c9a961]">t</a>
            <a href="#" className="w-8 h-8 bg-[#3d2817] text-white rounded-full flex items-center justify-center hover:bg-[#c9a961]">in</a>
            <a href="#" className="w-8 h-8 bg-[#3d2817] text-white rounded-full flex items-center justify-center hover:bg-[#c9a961]">p</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2025 Lavender Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
