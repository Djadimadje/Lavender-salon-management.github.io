import Image from 'next/image';

export default function InstagramSection() {
  const images = [
    '/instagram/img1.jpg',
    '/instagram/img2.jpg',
    '/instagram/img3.jpg',
    '/instagram/img4.jpg',
    '/instagram/img5.jpg',
    '/instagram/img6.jpg',
    '/instagram/img7.jpg',
    '/instagram/img8.jpg',
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-[#3d2817] mb-2 md:mb-4">Follow our Instagram</h2>
          <p className="text-sm md:text-base text-gray-600">
            Love beauty, follow the journey! Join us by using the #lavender
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-40 md:h-64 group overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={image}
                alt={`Instagram ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl md:text-2xl">
                  📷
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
