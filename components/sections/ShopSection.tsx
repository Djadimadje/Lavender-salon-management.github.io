import Image from 'next/image';
import Link from 'next/link';

export default function ShopSection() {
  const products = [
    { name: 'Face toner', price: '$45', discount: '-20%', image: '/products/toner.jpg' },
    { name: 'Night cream', price: '$65', discount: '-15%', image: '/products/cream.jpg' },
    { name: 'Makeup base', price: '$35', image: '/products/base.jpg' },
    { name: 'Make up brush', price: '$25', image: '/products/brush.jpg' },
  ];

  return (
    <section className="py-16 bg-[#f5ebe0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#3d2817] mb-4">Our shop</h2>
          <p className="text-gray-600">
            Elegance is not about being noticed, its about being remembered
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-[#c9a961] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg text-[#3d2817] mb-2">{product.name}</h3>
                <p className="text-[#c9a961] font-semibold text-xl">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/shop"
            className="inline-block bg-[#3d2817] text-white px-8 py-3 rounded-lg hover:bg-[#8b5e3c] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
