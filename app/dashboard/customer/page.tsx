'use client';

import Link from 'next/link';
import { FaCalendarAlt, FaHistory, FaStar, FaUser } from 'react-icons/fa';

export default function CustomerDashboard() {
  const stats = [
    { label: 'Upcoming Bookings', value: '3', icon: FaCalendarAlt, color: 'bg-blue-500' },
    { label: 'Completed Services', value: '12', icon: FaHistory, color: 'bg-green-500' },
    { label: 'Loyalty Points', value: '450', icon: FaStar, color: 'bg-purple-500' },
    { label: 'Favorite Stylist', value: 'Sarah M.', icon: FaUser, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { label: 'Book Appointment', href: '/booking?from=dashboard', icon: FaCalendarAlt, color: 'bg-[#3d2817]' },
    { label: 'My Appointments', href: '/dashboard/customer/appointments', icon: FaCalendarAlt, color: 'bg-[#8b5e3c]' },
    { label: 'My Profile', href: '/dashboard/customer/profile', icon: FaUser, color: 'bg-[#c9a961]' },
    { label: 'Service History', href: '/dashboard/customer/history', icon: FaHistory, color: 'bg-[#3d2817]' },
  ];

  const upcomingAppointments = [
    { id: 1, service: 'Hair Styling', stylist: 'Sarah Martinez', date: '2025-12-08', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, service: 'Spa Treatment', stylist: 'Emily Chen', date: '2025-12-10', time: '2:00 PM', status: 'Confirmed' },
    { id: 3, service: 'Nail Care', stylist: 'Jessica Lee', date: '2025-12-12', time: '11:30 AM', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-200">Here&apos;s an overview of your beauty journey</p>
      </div>

      {/* Stats Grid */}
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
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Upcoming Appointments */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
          <Link
            href="/booking?from=dashboard"
            className="text-[#8b5e3c] hover:text-[#c9a961] font-semibold text-sm"
          >
            Book New →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stylist
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {appointment.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {appointment.stylist}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {appointment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {appointment.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
