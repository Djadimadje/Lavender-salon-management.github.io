'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSearch, FiUser, FiCalendar, FiPhone } from 'react-icons/fi';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/pictures/logo.png"
                alt="Lavender Logo"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-lg font-medium transition-all group ${
                    isActive ? 'text-[#8b5e3c]' : 'text-gray-700 hover:text-[#8b5e3c]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className={`absolute inset-0 bg-[#f5ebe0] rounded-lg transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#8b5e3c] to-[#c9a961] transition-all ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`}></div>
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button 
            <button
              className="p-2.5 hover:bg-gray-100/80 rounded-full transition-all hover:scale-110"
              aria-label="Search"
            >
              <FiSearch className="w-4 h-4 text-gray-700" />
            </button> */}
          

            {/* Account Button */}
            <Link
              href="/auth/login"
              className="p-2.5 hover:bg-gray-100/80 rounded-full transition-all hover:scale-110 hidden sm:block"
              aria-label="Account"
            >
              <FiUser className="w-4 h-4 text-gray-700" />
            </Link>

            {/* Book Now Button */}
            <Link
              href="/booking"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#8b5e3c] to-[#6b4a2f] text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#8b5e3c]/30 transition-all hover:scale-105 text-sm font-medium ml-2"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 hover:bg-gray-100/80 rounded-lg transition-all ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-all rounded-lg ${
                    isActive 
                      ? 'bg-[#f5ebe0]/50 text-[#8b5e3c]' 
                      : 'text-gray-700 hover:bg-[#f5ebe0]/50 hover:text-[#8b5e3c]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 px-4">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#8b5e3c] to-[#6b4a2f] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all font-medium"
              >
                <FiCalendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}