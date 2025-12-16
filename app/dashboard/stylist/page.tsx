'use client';

import Link from 'next/link';
import { FaCalendarCheck, FaCheckCircle, FaMoneyBillWave, FaStar, FaCalendarAlt, FaClock, FaUser, FaChartLine } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

export default function StylistDashboardPage() {
  const stats = [
    { label: "Today's Appointments", value: '8', icon: FaCalendarCheck, color: 'bg-blue-500' },
    { label: 'Completed Services', value: '5', icon: FaCheckCircle, color: 'bg-green-500' },
    { label: "Today's Earnings", value: '$625', icon: FaMoneyBillWave, color: 'bg-purple-500' },
    { label: 'Average Rating', value: '4.8', icon: FaStar, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { label: "Today's Schedule", href: '/dashboard/stylist/schedule', icon: FaCalendarAlt, color: 'bg-[#3d2817]' },
    { label: 'My Appointments', href: '/dashboard/stylist/appointments', icon: FaClock, color: 'bg-[#8b5e3c]' },
    { label: 'Client List', href: '/dashboard/stylist/clients', icon: FaUser, color: 'bg-[#c9a961]' },
    { label: 'Performance Stats', href: '/dashboard/stylist/performance', icon: FaChartLine, color: 'bg-[#3d2817]' },
  ];

  const todayAppointments = [
    { id: 1, client: 'Sarah Johnson', service: 'Hair Styling', time: '09:00 AM', duration: '60 min', status: 'Completed' },
    { id: 2, client: 'Michael Brown', service: 'Hair Coloring', time: '10:30 AM', duration: '90 min', status: 'Completed' },
    { id: 3, client: 'Emily Davis', service: 'Hair Cut', time: '12:30 PM', duration: '45 min', status: 'In Progress' },
    { id: 4, client: 'James Wilson', service: 'Hair Styling', time: '02:00 PM', duration: '60 min', status: 'Upcoming' },
    { id: 5, client: 'Lisa Anderson', service: 'Spa Treatment', time: '03:30 PM', duration: '120 min', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Header */}
      <PageHeader 
        title="Stylist Dashboard" 
        description="Manage your schedule and track your performance"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
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
                className={`${action.color} text-white p-4 md:p-6 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 md:gap-3 text-sm md:text-base`}
              >
                <Icon className="text-xl md:text-2xl" />
                <span className="font-semibold">{action.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Today's Appointments */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Today&apos;s Appointments</h2>
          <Link
            href="/dashboard/stylist/appointments"
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
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {todayAppointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {appointment.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {appointment.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {appointment.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {appointment.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : appointment.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
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
      </div>
    </div>
  );
}
