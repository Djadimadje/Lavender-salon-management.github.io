import Image from 'next/image';
import Link from 'next/link';

export default function LavenderHero() {
  return (
    <section className="relative bg-white">
      {/* Top Bar */}
      <div className="bg-[#3d2817] text-white text-center py-2 text-sm">
        🌸 LAVENDER BEAUTY & WELLNESS SPA 🌸
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-serif italic">LAVENDER</Link>
            <div className="hidden md:flex gap-6 text-sm">
              <Link href="/" className="hover:text-[#c9a961]">Home</Link>
              <Link href="/services" className="hover:text-[#c9a961]">Services</Link>
              <Link href="#about" className="hover:text-[#c9a961]">About Us</Link>
              <Link href="#contact" className="hover:text-[#c9a961]">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="hover:text-[#c9a961]">🔍</button>
            <Link href="/auth/login" className="hover:text-[#c9a961]">👤</Link>
            <Link href="/booking" className="hover:text-[#c9a961]">🛒</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-br from-[#8b5e3c] to-[#3d2817]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Logo and Text */}
            <div className="text-white space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-[#c9a961] rounded-full flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                </div>
                <div>
                  <h1 className="text-4xl font-serif italic">Lavender</h1>
                  <p className="text-sm uppercase tracking-wider">LUXE SKINCARE</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-serif">Brand Essence:</h2>
                <p className="text-lg leading-relaxed">
                  Lavender Luxe Skincare blends the calming power of lavender with premium natural ingredients to deliver wellness, beauty...
                </p>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/booking"
                    className="bg-[#c9a961] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b88d4f] transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side - Image with circular overlay */}
            <div className="relative">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/stylists/hero-treatment.jpg"
                  alt="Spa Treatment"
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Circular overlay */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src="/stylists/face-treatment.jpg"
                    alt="Face Treatment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
