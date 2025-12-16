'use client';

export default function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f5ebe0]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Us Here
          </h2>
          <div className="w-20 h-1 bg-[#8b5e3c] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Visit our salon and experience beauty like never before
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.56634842598!2d30.0619!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe9f47c0d9f0e8c!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lavender Salon Location"
            ></iframe>
          </div>

          {/* Directions Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📍 Address
              </h3>
              <p className="text-gray-600">
                KN 5 Ave, Kigali, Rwanda<br />
                Near City Center, 2nd Floor
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🚗 Parking
              </h3>
              <p className="text-gray-600">
                Free parking available<br />
                Underground parking entrance on the left
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
