import React from 'react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
        <p className="text-xl mb-8">Book your appointment today and experience luxury</p>
        <Link
          href="/booking"
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
