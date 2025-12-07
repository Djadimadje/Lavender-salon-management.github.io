import React from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Beauty Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience premium salon services with our expert stylists
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
