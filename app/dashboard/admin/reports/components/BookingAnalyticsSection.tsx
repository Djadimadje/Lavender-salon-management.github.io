'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaCheckCircle, FaClock, FaBan, FaUserTimes } from 'react-icons/fa';
import type { BookingAnalytics } from '@/lib/types/reports';

interface BookingAnalyticsSectionProps {
  data: BookingAnalytics;
}

const STATUS_COLORS = {
  completed: '#10b981',
  pending: '#f59e0b',
  cancelled: '#ef4444',
  noShows: '#6b7280',
};

export default function BookingAnalyticsSection({ data }: BookingAnalyticsSectionProps) {
  const chartData = [
    { name: 'Completed', value: data.completed, percentage: data.completedPercentage },
    { name: 'Pending', value: data.pending, percentage: data.pendingPercentage },
    { name: 'Cancelled', value: data.cancelled, percentage: data.cancelledPercentage },
    { name: 'No Shows', value: data.noShows, percentage: data.noShowPercentage },
  ];

  const COLORS = [STATUS_COLORS.completed, STATUS_COLORS.pending, STATUS_COLORS.cancelled, STATUS_COLORS.noShows];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Booking Analytics</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.completed}</p>
              <p className="text-sm text-green-600 mt-1">{data.completedPercentage.toFixed(1)}%</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.pending}</p>
              <p className="text-sm text-yellow-600 mt-1">{data.pendingPercentage.toFixed(1)}%</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaClock className="text-yellow-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Cancelled</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.cancelled}</p>
              <p className="text-sm text-red-600 mt-1">{data.cancelledPercentage.toFixed(1)}%</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaBan className="text-red-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">No Shows</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.noShows}</p>
              <p className="text-sm text-gray-600 mt-1">{data.noShowPercentage.toFixed(1)}%</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">
              <FaUserTimes className="text-gray-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} (${percent ? (percent * 100).toFixed(1) : 0}%)`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [value, 'Bookings']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
