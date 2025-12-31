"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { useSearchParams } from 'next/navigation';
import AdminSidebar from '@/components/layout/sidebar/AdminSidebar';
import CashierSidebar from '@/components/layout/sidebar/Cashier';
import StylistSidebar from '@/components/layout/sidebar/StylistSidebar';
import CustomerSidebar from '@/components/layout/sidebar/Customer';
import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/lib/data/products';

function ShopContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Our Shop</h1>
        <p className="text-gray-600 mt-3 italic">Elegance is not about being noticed, its about being remembered</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  const { user, isAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const fromDashboard = searchParams.get('from') === 'dashboard';

  const renderSidebar = () => {
    if (!user) return null;

    switch (user.role) {
      case 'admin':
        return <AdminSidebar userEmail={user.email} />;
      case 'cashier':
        return <CashierSidebar userEmail={user.email} />;
      case 'stylist':
        return <StylistSidebar userEmail={user.email} />;
      case 'customer':
        return <CustomerSidebar userEmail={user.email} />;
      default:
        return null;
    }
  };

  if (isAuthenticated && fromDashboard) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {renderSidebar()}
        <main className="flex-1 p-8 ml-64">
          <ShopContent />
        </main>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4">
          <ShopContent />
        </div>
      </div>
      <Footer />
    </>
  );
}
