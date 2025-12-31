"use client";

import React, { useEffect, useState } from 'react';
import Footer from '@/components/layout/Footer';

type Order = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  items?: any[];
  total?: number;
};

export default function OrderDetailsClient({ id }: { id: string }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`order:${id}`);
      if (raw) setOrder(JSON.parse(raw));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!order) return <div className="p-6">Order not found.</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-4xl mx-auto py-12 px-4 w-full">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Thank you for your order</h1>
          <p className="mb-4">Order ID: <span className="font-mono">{order.id}</span></p>

          <div className="mb-4">
            <h2 className="font-semibold">Customer</h2>
            <div>{order.name}</div>
            <div className="text-sm text-gray-500">{order.email}</div>
            {order.phone && <div className="text-sm text-gray-500">{order.phone}</div>}
          </div>

          <div>
            <h2 className="font-semibold mb-2">Items</h2>
            <div className="space-y-3">
              {order.items && order.items.length ? (
                order.items.map((it: any) => (
                  <div key={it.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-sm text-gray-500">Rwf{it.price} × {it.qty}</div>
                    </div>
                    <div className="font-semibold">Rwf{(it.price || 0) * (it.qty || 0)}</div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No items recorded</div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">Placed</div>
            <div className="text-xl font-bold">Rwf{order.total}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
