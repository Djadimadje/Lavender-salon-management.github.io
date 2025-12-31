"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getCart, subscribeCart, clearCart } from '@/lib/cart';

export default function CheckoutForm() {
  const [cart, setCart] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = subscribeCart((c) => setCart(c));
    // Load cart on client after mount to avoid SSR/client hydration mismatch
    setCart(getCart());
    return unsub;
  }, []);

  const subtotal = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cart.length) {
      alert('Your cart is empty');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, items: cart, total: subtotal }),
      });
      if (!res.ok) throw new Error('Order creation failed');
      const data = await res.json();
      try {
        const stored = { id: data.id, name, email, phone, items: cart, total: subtotal };
        localStorage.setItem(`order:${data.id}`, JSON.stringify(stored));
      } catch (e) {
        /* ignore localStorage failures */
      }
      clearCart();
      router.push(`/order/${data.id}`);
    } catch (err) {
      console.error(err);
      alert('Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="text-sm text-gray-600">Subtotal</div>
                <div className="text-xl font-bold">Rwf{subtotal}</div>
              </div>
              <button type="submit" disabled={submitting} className="bg-[#8b5e3c] text-white px-6 py-2 rounded-lg">
                {submitting ? 'Placing order...' : 'Place order'}
              </button>
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
          <div className="space-y-3">
            {cart.length === 0 && <div className="text-gray-500">No items in cart</div>}
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded">
                <div className="relative w-20 h-16 rounded overflow-hidden bg-white">
                  {item.image ? <Image src={item.image} alt={item.name} fill className="object-cover" /> : null}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">Rwf{item.price} × {item.qty}</div>
                </div>
                <div className="font-semibold">Rwf{item.price * item.qty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
