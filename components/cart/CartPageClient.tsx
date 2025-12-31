"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  getCart,
  subscribeCart,
  removeFromCart,
  addToCart,
  saveCart,
  clearCart,
} from '@/lib/cart';

export default function CartPageClient() {
  const [cart, setCart] = useState(() => (typeof window !== 'undefined' ? getCart() : []));

  useEffect(() => {
    const unsub = subscribeCart((c) => setCart(c));
    // ensure initial
    setCart(getCart());
    return unsub;
  }, []);

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const handleInc = (id: number) => {
    const item = cart.find((c) => c.id === id);
    if (item) addToCart({ id: item.id, name: item.name, price: item.price, image: item.image }, 1);
  };

  const handleDec = (id: number) => {
    const item = cart.find((c) => c.id === id);
    if (!item) return;
    if (item.qty <= 1) {
      removeFromCart(id);
      return;
    }
    const updated = getCart().map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it));
    saveCart(updated);
  };

  const handleClear = () => {
    clearCart();
  };

  const subTotal = cart.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="min-h-[60vh] bg-gray-50 p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link href="/shop" className="inline-block bg-[#8b5e3c] text-white px-4 py-2 rounded">Continue shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow-sm">
                <div className="relative w-28 h-20 rounded overflow-hidden bg-gray-100">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover object-center" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-500">Rwf{item.price} &times; {item.qty}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">Rwf{item.price * item.qty}</div>
                      <button onClick={() => handleRemove(item.id)} className="text-sm text-red-500 mt-2">Remove</button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => handleDec(item.id)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                    <div className="px-3">{item.qty}</div>
                    <button onClick={() => handleInc(item.id)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <button onClick={handleClear} className="text-sm text-red-500">Clear cart</button>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Subtotal</div>
              <div className="text-xl font-bold">Rwf{subTotal}</div>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Link href="/shop/checkout" className="bg-[#8b5e3c] text-white px-4 py-2 rounded">Proceed to checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
