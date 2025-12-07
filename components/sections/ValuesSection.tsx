export default function ValuesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-16 h-16 mx-auto mb-4 text-4xl">🏆</div>
            <h3 className="text-xl font-serif text-[#3d2817] mb-3">Professional Care</h3>
            <p className="text-gray-600">
              Elevate your experience with our highly skilled specialists and premium products
            </p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto mb-4 text-4xl">💎</div>
            <h3 className="text-xl font-serif text-[#3d2817] mb-3">Premium brands</h3>
            <p className="text-gray-600">
              We only use luxury, cruelty-free, professional brands that are safe and sustainable
            </p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto mb-4 text-4xl">🌿</div>
            <h3 className="text-xl font-serif text-[#3d2817] mb-3">Natural cosmetic</h3>
            <p className="text-gray-600">
              All products feature sustainably sourced premium natural ingredients for healthier skin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
