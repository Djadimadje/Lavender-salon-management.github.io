import Link from "next/link";

export default function TreatmentsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Treatment list */}
          <div className="bg-gradient-to-br from-[#8b5e3c] to-[#3d2817] text-white p-6 md:p-12 rounded-lg">
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-xs md:text-sm">
              <li>✓ Facials and skin care</li>
              <li>✓ Rejuvenating body treatments</li>
              <li>✓ Manicures and pedicures with organic polish options</li>
              <li>✓ Hair styling and treatments</li>
              <li>✓ Massages and aromatherapy</li>
              <li>✓ Premium natural ingredients for nourishing skin and hair</li>
              <li>✓ A tranquil ambiance with lavender-scented spaces</li>
            </ul>

            <div className="space-y-4 md:space-y-6">
              <div className="border-t border-[#c9a961] pt-3 md:pt-4">
                <h3 className="text-xl md:text-2xl font-serif text-[#c9a961] mb-2">QUICK FIXES</h3>
                <p className="text-xs md:text-sm">
                  For those with busy lifestyles, Lavender offers fast yet effective treatments like express facials
                </p>
              </div>

              <div className="border-t border-[#c9a961] pt-3 md:pt-4">
                <h3 className="text-xl md:text-2xl font-serif text-[#c9a961] mb-2">SIGNATURE</h3>
                <p className="text-xs md:text-sm">
                  Indulge in spa classics, including our signature Lavender Bliss Facial, designed
                </p>
              </div>

              <div className="border-t border-[#c9a961] pt-3 md:pt-4">
                <h3 className="text-xl md:text-2xl font-serif text-[#c9a961] mb-2">PEDICURE</h3>
                <p className="text-xs md:text-sm">
                  Unwind with a luxurious pedicure featuring exfoliating scrubs and moisturizing
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Pricing */}
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-[#3d2817] mb-4 md:mb-8">Treatments and prices</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              View pricing, offers and check availability for the treatment of your choice
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-200">
                <span className="text-base md:text-lg">Nail care</span>
                <span className="text-[#c9a961] font-semibold text-sm md:text-base">from 15$</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-200">
                <span className="text-base md:text-lg">Hair styling</span>
                <span className="text-[#c9a961] font-semibold text-sm md:text-base">from 25$</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-200">
                <span className="text-base md:text-lg">Massage</span>
                <span className="text-[#c9a961] font-semibold text-sm md:text-base">from 45$</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-200">
                <span className="text-base md:text-lg">Cosmetology</span>
                <span className="text-[#c9a961] font-semibold text-sm md:text-base">from 30$</span>
              </div>
              <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-200">
                <span className="text-base md:text-lg">Massage</span>
                <span className="text-[#c9a961] font-semibold text-sm md:text-base">from 45$</span>
              </div>
            </div>

            <Link href="/services" className="inline-block mt-6 md:mt-8 text-[#c9a961] font-semibold hover:underline text-sm md:text-base">
              View all →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
