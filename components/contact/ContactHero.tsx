'use client';

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#8b5e3c] via-[#6b4a2f] to-[#3d2817]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          We'd love to hear from you. Reach out to us today!
        </p>
        <div className="w-24 h-1 bg-[#c9a961] mx-auto"></div>
      </div>
    </section>
  );
}
