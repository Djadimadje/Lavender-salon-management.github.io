import Image from 'next/image';
import Link from 'next/link';

export default function EleganceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#3d2817] mb-2">
            Elegance comes from being as
          </h2>
          <h3 className="text-4xl font-serif text-[#8b5e3c]">
            beautiful inside as outside
          </h3>
          <p className="text-gray-600 mt-4">Treat yourself to a day of pampering and self care</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/services/makeup.jpg"
                alt="Make up"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-2xl">💄</span>
                <h4 className="text-xl font-serif mt-2">Make up</h4>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/services/hair-care.jpg"
                alt="Hair care"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-2xl">💇</span>
                <h4 className="text-xl font-serif mt-2">Hair care</h4>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/services/nails.jpg"
                alt="Nails"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-2xl">💅</span>
                <h4 className="text-xl font-serif mt-2">Nails</h4>
              </div>
            </div>
          </Link>

          <Link href="/services" className="relative group cursor-pointer">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/services/spa.jpg"
                alt="Spa treatment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-2xl">🧖</span>
                <h4 className="text-xl font-serif mt-2">Spa treatment</h4>
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
