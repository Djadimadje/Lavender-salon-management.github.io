import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import { getProductById } from '@/lib/data/products';
import AddToCartButton from '@/components/cart/AddToCartButton';

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params as { id: string };
  const id = Number(resolvedParams.id);
  const product = getProductById(id);

  if (!product) return notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow">
              <Image src={product.image} alt={product.name} fill className="object-cover object-center" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-[#8b5e3c] mb-4">Rwf{product.price}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="flex items-center gap-4">
                {/* AddToCartButton is a client component that manages cart in localStorage */}
                <AddToCartButton product={product} />
                <a href="/shop" className="text-sm text-gray-600 underline">Back to shop</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
