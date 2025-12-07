'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { publicRoutes, authRoutes } from '@/lib/routes';

export default function Header() {
  const { user, isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={publicRoutes.home}>
          <h1 className="text-2xl font-bold text-purple-600">Lavender Salon</h1>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href={publicRoutes.services} className="text-gray-700 hover:text-purple-600 font-medium">
            Services
          </Link>
          <Link href={publicRoutes.booking} className="text-gray-700 hover:text-purple-600 font-medium">
            Book Now
          </Link>
          
          {isAuthenticated && user ? (
            <Link
              href={`/dashboard/${user.role === 'admin' ? 'admin/bookings' : user.role}`}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link href={authRoutes.login} className="text-gray-700 hover:text-purple-600 font-medium">
                Sign In
              </Link>
              <Link href={authRoutes.register} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
