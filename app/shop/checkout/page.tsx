import React from 'react';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Header/Navigation';

export const metadata = {
  title: 'Checkout - Lavender',
};

export default function CheckoutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4">
          <main className="max-w-4xl mx-auto py-12 px-4 w-full">
            <CheckoutForm />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
