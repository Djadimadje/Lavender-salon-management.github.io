'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { useSearchParams } from 'next/navigation';
import {FaPaintBrush, FaSpa, FaCut, FaHeart, FaCalendarAlt } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import AdminSidebar from '@/components/layout/sidebar/AdminSidebar';
import CashierSidebar from '@/components/layout/sidebar/Cashier';
import StylistSidebar from '@/components/layout/sidebar/StylistSidebar';
import CustomerSidebar from '@/components/layout/sidebar/Customer';
import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import { mockServices } from '@/lib/data/services';

function ServicesContent() {
  const { isAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const fromDashboard = searchParams.get('from') === 'dashboard';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Hair', 'Makeup', 'Nails', 'Spa', 'Beauty'];
  
  const filteredServices = selectedCategory === 'All' 
    ? mockServices 
    : mockServices.filter(service => service.category === selectedCategory);

  const stats = [
    { label: 'Total Services', value: mockServices.length.toString(), icon: FaScissors, color: 'bg-blue-500' },
    { label: 'Hair Services', value: mockServices.filter(s => s.category === 'Hair').length.toString(), icon: FaCut, color: 'bg-purple-500' },
    { label: 'Spa Treatments', value: mockServices.filter(s => s.category === 'Spa').length.toString(), icon: FaSpa, color: 'bg-green-500' },
    { label: 'Beauty Care', value: mockServices.filter(s => s.category === 'Beauty').length.toString(), icon: FaHeart, color: 'bg-pink-500' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hair':
        return <FaCut className="text-purple-500" />;
      case 'Makeup':
        return <FaPaintBrush className="text-pink-500" />;
      case 'Spa':
        return <FaSpa className="text-green-500" />;
      case 'Nails':
        return <FaScissors className="text-blue-500" />;
      case 'Beauty':
        return <FaHeart className="text-red-500" />;
      default:
        return <FaScissors className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header with Gradient */}
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">Our Services</h1>
        <p className="text-gray-600 text-center">Browse our wide range of professional salon services</p>
      </div>

      {/* Stats Grid 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Category Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
          </h2>
          <p className="text-gray-600">{filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Service Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-[#f5ebe0] to-[#c9a961]/20 flex items-center justify-center">
                <div className="text-6xl">
                  {getCategoryIcon(service.category || 'Beauty')}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                  <span className="text-xs px-2 py-1 bg-[#c9a961]/20 text-[#8b5e3c] rounded-full font-medium">
                    {service.category}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-[#8b5e3c]">${service.price}</p>
                    <p className="text-xs text-gray-500">{service.duration} minutes</p>
                  </div>
                </div>

                <Link
                  href={isAuthenticated && fromDashboard ? "/booking?from=dashboard" : "/booking"}
                  className="w-full flex items-center justify-center gap-2 bg-[#8b5e3c] text-white py-2 px-4 rounded-lg hover:bg-[#3d2817] transition-colors font-semibold"
                >
                  <FaCalendarAlt />
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { user, isAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const fromDashboard = searchParams.get('from') === 'dashboard';

  // Render sidebar based on user role
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

  // If authenticated AND came from dashboard, show with sidebar
  if (isAuthenticated && fromDashboard) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Role-specific Sidebar */}
        {renderSidebar()}

        {/* Main content area */}
        <main className="flex-1 p-8">
          <ServicesContent />
        </main>
      </div>
    );
  }

  // Otherwise, show standalone services page
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4">
          <ServicesContent />
        </div>
      </div>
      <Footer />
    </>
  );
}
