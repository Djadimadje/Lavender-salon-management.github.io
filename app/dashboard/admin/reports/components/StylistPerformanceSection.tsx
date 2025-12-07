'use client';

import React from 'react';
import { FaStar, FaCalendarAlt, FaDollarSign, FaBan } from 'react-icons/fa';
import type { StylistPerformance } from '@/lib/types/reports';
import StylistBarChart from './StylistBarChart';

interface StylistPerformanceSectionProps {
  data: StylistPerformance[];
}

export default function StylistPerformanceSection({ data }: StylistPerformanceSectionProps) {
  const mostBooked = data.reduce((prev, current) => 
    prev.bookingCount > current.bookingCount ? prev : current
  );
  const highestRevenue = data.reduce((prev, current) => 
    prev.totalRevenue > current.totalRevenue ? prev : current
  );
  const highestRated = data.reduce((prev, current) => 
    prev.avgRating > current.avgRating ? prev : current
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Stylist Performance</h2>

      {/* Top Performer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Most Booked</p>
              <p className="text-xl font-bold text-gray-900 mt-2">{mostBooked.name}</p>
              <p className="text-sm text-gray-500 mt-1">{mostBooked.bookingCount} bookings</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaCalendarAlt className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Highest Revenue</p>
              <p className="text-xl font-bold text-gray-900 mt-2">{highestRevenue.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                RWF {highestRevenue.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaDollarSign className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Highest Rated</p>
              <p className="text-xl font-bold text-gray-900 mt-2">{highestRated.name}</p>
              <p className="text-sm text-gray-500 mt-1">{highestRated.avgRating} ⭐</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaStar className="text-yellow-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StylistBarChart data={data} />

        {/* Detailed Performance Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Detailed Performance</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Stylist</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Rating</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Cancelled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((stylist) => (
                  <tr key={stylist.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{stylist.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {stylist.avgRating} ⭐
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{stylist.cancelledCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
