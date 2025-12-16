'use client';

import { salonValues } from '@/lib/data/team';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5ebe0] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lavender Salon
          </h2>
          <div className="w-20 h-1 bg-[#8b5e3c] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing an unparalleled experience that goes beyond beauty
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonValues.map((value) => (
            <div
              key={value.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Premium Products
                </h4>
                <p className="text-gray-600">
                  We use only the finest, professional-grade products from trusted international brands.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Team
                </h4>
                <p className="text-gray-600">
                  Our stylists are continuously trained in the latest techniques and trends.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Hygiene Standards
                </h4>
                <p className="text-gray-600">
                  We maintain the highest hygiene and sanitation standards for your safety.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Relaxing Atmosphere
                </h4>
                <p className="text-gray-600">
                  Enjoy a serene environment designed for your comfort and relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
