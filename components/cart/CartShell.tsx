"use client";

import React from 'react';
import Navigation from '@/components/layout/Header/Navigation';
import CartPageClient from '@/components/cart/CartPageClient';

export default function CartShell() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <CartPageClient />
        </div>
      </main>
    </>
  );
}
