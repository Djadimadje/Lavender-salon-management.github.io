import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/layout/Header/Navigation';
import TrustBadges from '@/components/ui/TrustBadges';
import HeroSlideshow from '@/components/sections/HeroSlideshow';
import { FiPlay } from 'react-icons/fi';

export default function LavenderHero() {
  return (
    <section className="relative bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-[500px] lg:min-h-[700px] overflow-hidden">
        {/* Slideshow Background */}
        <HeroSlideshow />

        <div className="relative container mx-auto px-4 py-12 lg:py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-8">
              {/* Main Headline 
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Experience Luxury
                  <span className="block bg-gradient-to-r from-[#c9a961] to-[#f5ebe0] bg-clip-text text-transparent">
                    Wellness & Beauty
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                  Transform your self-care routine with premium spa treatments, expert stylists, and personalized wellness experiences.
                </p>
              </div>*/}

              {/* CTA Buttons 
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/booking"
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#c9a961] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b88d4f] transition-all hover:shadow-xl hover:shadow-[#c9a961]/20 text-base"
                >
                  <span>Book Your Experience</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 text-base">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <FiPlay className="w-4 h-4 ml-0.5" />
                  </div>
                  <span>Watch Video</span>
                </button>
              </div> */}

              {/* Trust Badges
              <div className="pt-6">
                <TrustBadges />
              </div>  */}
            </div>

            {/* Right Image Section */}
            {/* <div className="relative hidden lg:block">
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/stylists/hero-treatment.jpg"
                    alt="Luxury Spa Treatment"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8b5e3c] to-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">First Visit Special</p>
                      <p className="text-xs text-gray-600 mb-2">Get 20% off your first service</p>
                      <Link href="/booking" className="text-xs font-semibold text-[#8b5e3c] hover:text-[#6b4a2f] transition-colors">
                        Claim Offer →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#c9a961] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">20%</span>
                  <span className="text-xs uppercase">OFF</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
