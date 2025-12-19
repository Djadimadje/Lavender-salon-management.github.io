import Image from 'next/image';

export default function TestimonialsLavender() {
  const testimonials = [
    {
      name: 'Michaela Hayden',
      time: '2 days ago',
      text: 'We are other and about hotels and services was heights: Professional! Spacious! Romantic! It contains fresh artistic and beautiful in the pool service',
      avatar: '/pictures/witness.jpg',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f5ebe0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-serif text-[#3d2817] text-center mb-2 md:mb-4">Testimonials</h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12">
          Retrieve confidence, grace, and the best of beauty style never fades
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="text-5xl md:text-8xl text-[#c9a961] opacity-30">"</div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="hidden md:flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex-1">
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <h4 className="font-semibold text-base md:text-lg">{testimonials[0].name}</h4>
                  <span className="text-gray-500 text-xs md:text-sm">{testimonials[0].time}</span>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{testimonials[0].text}</p>
              </div>
            </div>
          </div>

          <div className="text-5xl md:text-8xl text-[#c9a961] opacity-30 text-right">"</div>
        </div>
      </div>
    </section>
  );
}
