'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import AdminSidebar from '@/components/layout/sidebar/AdminSidebar';
import CashierSidebar from '@/components/layout/sidebar/Cashier';
import StylistSidebar from '@/components/layout/sidebar/StylistSidebar';
import CustomerSidebar from '@/components/layout/sidebar/Customer';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  // Show loading screen while checking auth
  if (loading) {
    return <LoadingScreen />;
  }

  // Render role-specific sidebar
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Role-specific Sidebar */}
      {renderSidebar()}

      {/* Main content area */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
