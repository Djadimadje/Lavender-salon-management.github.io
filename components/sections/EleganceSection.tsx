import Image from 'next/image';
import Link from 'next/link';

export default function EleganceSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-[#3d2817] mb-2">
            Elegance comes from being as
          </h2>
          <h3 className="text-2xl md:text-4xl font-serif text-[#8b5e3c]">
            beautiful inside as outside
          </h3>
          <p className="text-sm md:text-base text-gray-600 mt-4">Treat yourself to a day of pampering and self care</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/pictures/makeup.jpeg"
                alt="Make up"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">💄</span>
                  <h4 className="text-base md:text-xl font-serif">Make up</h4>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/pictures/hair-care.jpeg"
                alt="Hair care"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">💇</span>
                  <h4 className="text-base md:text-xl font-serif">Hair care</h4>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/pictures/nails.jpeg"
                alt="Nails"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">💅</span>
                  <h4 className="text-base md:text-xl font-serif">Nails</h4>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="/pictures/spa.jpeg"
                alt="Spa treatment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🧖</span>
                  <h4 className="text-base md:text-xl font-serif">Spa treatment</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-block bg-[#3d2817] text-white px-8 py-3 rounded-lg hover:bg-[#8b5e3c] transition-colors font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
