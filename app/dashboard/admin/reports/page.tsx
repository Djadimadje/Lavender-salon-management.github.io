'use client';

import React from 'react';
import { FaChartLine, FaCalendarAlt, FaUsers, FaCut, FaDollarSign, FaArrowUp, FaPercentage, FaDownload } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import RevenueLineChart from './components/RevenueLineChart';
import RevenueBarChart from './components/RevenueBarChart';
import ServicePerformanceSection from './components/ServicePerformanceSection';
import StylistPerformanceSection from './components/StylistPerformanceSection';
import BookingAnalyticsSection from './components/BookingAnalyticsSection';
import CustomerInsightsSection from './components/CustomerInsightsSection';
import CashierFinancialSection from './components/CashierFinancialSection';
import {
  mockRevenueChartData,
  mockServicePerformance,
  mockStylistPerformance,
  mockBookingAnalytics,
  mockCustomerInsight,
  mockCashierActivities,
  mockDailyClosures,
} from '@/lib/data/mockReports';

export default function AdminReportsPage() {
  // Revenue stats
  const stats = [
    { label: 'Total Revenue', value: 'RWF 1.62M', icon: FaDollarSign, color: 'bg-green-500' },
    { label: 'Total Bookings', value: '856', icon: FaCalendarAlt, color: 'bg-blue-500' },
    { label: 'Active Customers', value: '1,234', icon: FaUsers, color: 'bg-purple-500' },
    { label: 'Services Offered', value: '24', icon: FaCut, color: 'bg-orange-500' },
  ];

  const monthlyStats = [
    { label: 'Monthly Revenue', value: 'RWF 450K', icon: FaArrowUp, color: 'bg-green-500' },
    { label: 'Monthly Bookings', value: '142', icon: FaCalendarAlt, color: 'bg-blue-500' },
    { label: 'Growth Rate', value: '+12.5%', icon: FaPercentage, color: 'bg-purple-500' },
    { label: 'Avg. Booking Value', value: 'RWF 3,169', icon: FaDollarSign, color: 'bg-orange-500' },
  ];

  // Monthly revenue data for bar chart
  const monthlyRevenueData = [
    { month: 'Jul', revenue: 1200000 },
    { month: 'Aug', revenue: 1350000 },
    { month: 'Sep', revenue: 1450000 },
    { month: 'Oct', revenue: 1520000 },
    { month: 'Nov', revenue: 1600000 },
    { month: 'Dec', revenue: 1620000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#3d2817] text-white p-4 md:p-6 lg:p-8 mb-4 md:mb-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-sm md:text-base text-gray-200">Comprehensive business insights and performance metrics</p>
          </div>
          <button className="bg-white text-[#3d2817] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
            <FaDownload />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 lg:p-8 space-y-8 md:space-y-10 lg:space-y-12">
        {/* 1. Revenue Reports Section */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Revenue Reports</h2>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
          </div>

          {/* Monthly Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {monthlyStats.map((stat, index) => {
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
          </div>

          {/* Revenue Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <RevenueLineChart data={mockRevenueChartData} />
            <RevenueBarChart data={monthlyRevenueData} />
          </div>
        </div>

        {/* 2. Service Performance Section */}
        <ServicePerformanceSection data={mockServicePerformance} />

        {/* 3. Stylist Performance Section */}
        <StylistPerformanceSection data={mockStylistPerformance} />

        {/* 4. Booking Analytics Section */}
        <BookingAnalyticsSection data={mockBookingAnalytics} />

        {/* 5. Customer Insights Section */}
        <CustomerInsightsSection data={mockCustomerInsight} />

        {/* 6. Cashier Financial Activities Section */}
        <CashierFinancialSection 
          activities={mockCashierActivities}
          closures={mockDailyClosures}
        />
      </div>
    </div>
  );
}
