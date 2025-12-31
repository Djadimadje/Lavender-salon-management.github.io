"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { getCartCount, subscribeCart } from '@/lib/cart';

export default function CartBadge() {
  const [count, setCount] = useState<number>(() => {
    try {
      return getCartCount();
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const unsubscribe = subscribeCart((cart) => {
      setCount(cart.reduce((s, it) => s + (it.qty || 0), 0));
    });
    // also poll initial count in case subscribe fired earlier
    setCount(getCartCount());
    return unsubscribe;
  }, []);

  return (
    <Link href="/shop/cart" className="relative p-2.5 hover:bg-gray-100/80 rounded-full transition-all hidden sm:inline-flex" aria-label="View cart">
      <FiShoppingCart className="w-5 h-5 text-gray-700" />
      <span
        suppressHydrationWarning
        className={
          "absolute -top-1 -right-1 min-w-[18px] h-4 rounded-full bg-[#8b5e3c] text-white text-xs flex items-center justify-center px-1 " +
          (count > 0 ? '' : 'opacity-0 pointer-events-none')
        }
      >
        {count > 0 ? count : ''}
      </span>
    </Link>
  );
}
