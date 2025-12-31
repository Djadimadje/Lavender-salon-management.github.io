
import React from 'react';
import { getOrder } from '@/lib/mockOrders';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Header/Navigation';
import OrderClient from '@/components/order/OrderClient';

type Props = { params: Promise<{ id: string }> };

export default async function OrderPage({ params }: Props) {
  const { id } = await params;
  const order = getOrder(id);

  // If server-side mock store has the order, render it server-side for better SEO.
  if (order) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 py-8 pt-24">
          <div className="container mx-auto px-4">
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
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // If server store doesn't have it (e.g. client-created order in localStorage),
  // render a client component that will try to read the order from localStorage.
  return (
    <>
      <Navigation />
      <OrderClient id={id} />
    </>
  );
}
