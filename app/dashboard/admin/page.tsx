'use client';

import Link from 'next/link';
import { FaUsers, FaCalendarAlt, FaChartLine, FaEdit } from 'react-icons/fa';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: FaUsers, color: 'bg-blue-500' },
    { label: 'Total Bookings', value: '856', icon: FaCalendarAlt, color: 'bg-green-500' },
    { label: 'Revenue', value: '$45,678', icon: FaChartLine, color: 'bg-purple-500' },
    { label: 'Active Stylists', value: '28', icon: FaUsers, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { label: 'Manage Users', href: '/dashboard/admin/users', icon: FaUsers, color: 'bg-[#3d2817]' },
    { label: 'View Bookings', href: '/dashboard/admin/bookings', icon: FaCalendarAlt, color: 'bg-[#8b5e3c]' },
    { label: 'View Reports', href: '/dashboard/admin/reports', icon: FaChartLine, color: 'bg-[#c9a961]' },
    { label: 'Edit Content', href: '/dashboard/admin/content', icon: FaEdit, color: 'bg-[#3d2817]' },
  ];

  const recentBookings = [
    { id: 1, customer: 'Sarah Johnson', service: 'Hair Styling', date: '2025-11-24', status: 'Confirmed' },
    { id: 2, customer: 'Michael Brown', service: 'Spa Treatment', date: '2025-11-24', status: 'Pending' },
    { id: 3, customer: 'Emily Davis', service: 'Nail Care', date: '2025-11-25', status: 'Confirmed' },
    { id: 4, customer: 'James Wilson', service: 'Makeup', date: '2025-11-25', status: 'Confirmed' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome, Admin!</h1>
        <p className="text-sm md:text-base text-gray-200">Here&apos;s an overview of your salon business</p>
      </div>

      {/* Stats Grid */}
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

      {/* Quick Actions */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                href={action.href}
                className={`${action.color} text-white p-6 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-3`}
              >
                <Icon className="text-2xl" />
                <span className="font-semibold">{action.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Recent Bookings</h2>
          <Link
            href="/dashboard/admin/bookings"
            className="text-[#8b5e3c] hover:text-[#c9a961] font-semibold text-xs md:text-sm"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {booking.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {booking.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
