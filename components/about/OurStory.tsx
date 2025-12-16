'use client';

import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/pictures/salon-4.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#8b5e3c] mb-6"></div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2010, Lavender Salon was born from a simple yet powerful vision: 
                to create a sanctuary where beauty, wellness, and exceptional service converge. 
                What started as a small boutique salon has blossomed into a premier destination 
                for those seeking transformative beauty experiences.
              </p>
              
              <p>
                Our founder, Sarah Johnson, recognized the need for a salon that goes beyond 
                traditional beauty services. She envisioned a space where clients could escape 
                the hustle of daily life and emerge feeling refreshed, confident, and beautiful.
              </p>
              
              <p>
                Today, Lavender Salon stands as a testament to that vision. With a team of 
                highly skilled professionals, state-of-the-art facilities, and a commitment 
                to using only premium products, we continue to set new standards in the beauty 
                and wellness industry.
              </p>

              <p className="text-[#8b5e3c] font-semibold italic">
                "Beauty is not just about appearance—it's about how you feel. We're here to 
                help you discover your most confident, radiant self."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8b5e3c]">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8b5e3c]">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8b5e3c]">50+</div>
                <div className="text-sm text-gray-600 mt-1">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
