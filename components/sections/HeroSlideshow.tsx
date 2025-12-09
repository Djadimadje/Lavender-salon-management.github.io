'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    type: 'image',
    image: '/pictures/home.jpeg',
    alt: 'Lavender Salon Interior',
    title: 'Experience Luxury & Elegance',
    description: 'Transform your look with our premium beauty services'
  },
  {
    id: 2,
    type: 'image',
    image: '/pictures/salon-2.jpeg',
    alt: 'Professional Hair Styling',
    title: 'Expert Hair Styling',
    description: 'Professional stylists dedicated to your perfect look'
  },
  /* {
    id: 3,
    type: 'video',
    video: '/videos/salon-tour.mp4',
    alt: 'Salon Tour Video',
    title: 'Take a Virtual Tour',
    description: 'Explore our beautiful salon facilities'
  }, */
  {
    id: 4,
    type: 'image',
    image: '/pictures/salon-4.jpeg',
    alt: 'Modern Salon Space',
    title: 'Modern Salon Experience',
    description: 'State-of-the-art facilities for your comfort'
  },
  /* {
    id: 5,
    type: 'video',
    video: '/videos/services.mp4',
    alt: 'Services Showcase',
    title: 'Our Premium Services',
    description: 'Discover what makes us special'
  } */
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Slideshow Media (Images & Videos) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <Image
              src={slide.image!}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          ) : null
          /* : (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) */
          }
        </div>
      ))}

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 flex items-center justify-center'
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[0.2em] uppercase" style={{ 
                  fontFamily: 'Arial Black, sans-serif', 
                  letterSpacing: '0.15em',
                  WebkitTextStroke: '2px currentColor',
                  paintOrder: 'stroke fill'
                } as React.CSSProperties}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#c9a961] w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
