"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="relative h-48 w-full rounded overflow-hidden mb-4">
        <Image src={product.image} alt={product.name} fill className="object-cover object-center" />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex-1">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold">Rwf{product.price}</div>
        <Link href={`/shop/product/${product.id}`} className="bg-[#8b5e3c] text-white px-4 py-2 rounded">View</Link>
      </div>
    </div>
  );
}
