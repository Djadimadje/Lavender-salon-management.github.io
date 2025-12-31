"use client";

import React, { useState, useRef, useEffect } from 'react';
import type { Product } from '@/lib/data/products';
import { addToCart } from '@/lib/cart';

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const [adding, setAdding] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAdd = () => {
    if (adding) return;
    setAdding(true);

    try {
      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
      // small debug log
      console.debug('AddToCart: added', product.id);
    } catch (err) {
      console.error('Add to cart failed', err);
    } finally {
      // always schedule clearing the adding state and ensure it is cleaned up
      timeoutRef.current = window.setTimeout(() => {
        setAdding(false);
        timeoutRef.current = null;
      }, 700);
    }
  };

  return (
    <button
      onClick={handleAdd}
      disabled={adding}
      className={`px-5 py-3 rounded-lg font-semibold text-white ${adding ? 'bg-gray-400' : 'bg-[#8b5e3c] hover:bg-[#3d2817]'}`}
      aria-pressed={adding}
    >
      {adding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
