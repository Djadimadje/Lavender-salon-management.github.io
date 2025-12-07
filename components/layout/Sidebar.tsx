'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import AdminSidebar from './sidebar/AdminSidebar';
import CashierSidebar from './sidebar/Cashier';
import StylistSidebar from './sidebar/StylistSidebar';
import CustomerSidebar from './sidebar/Customer';

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null;

  // Render role-specific sidebar
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
}
