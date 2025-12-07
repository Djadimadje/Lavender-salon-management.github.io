'use client';

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaStar } from 'react-icons/fa';

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const appointmentHistory = [
    {
      id: 1,
      service: 'Hair Styling',
      stylist: 'Sarah Martinez',
      date: '2025-11-25',
      time: '2:00 PM',
      duration: '1 hour',
      price: '$65',
      rating: 5,
      status: 'Completed',
    },
    {
      id: 2,
      service: 'Spa Treatment',
      stylist: 'Emily Chen',
      date: '2025-11-20',
      time: '10:00 AM',
      duration: '90 mins',
      price: '$120',
      rating: 5,
      status: 'Completed',
    },
    {
      id: 3,
      service: 'Nail Care',
      stylist: 'Jessica Lee',
      date: '2025-11-15',
      time: '3:30 PM',
      duration: '45 mins',
      price: '$45',
      rating: 4,
      status: 'Completed',
    },
    {
      id: 4,
      service: 'Makeup Session',
      stylist: 'Rachel Adams',
      date: '2025-11-10',
      time: '1:00 PM',
      duration: '1 hour',
      price: '$80',
      rating: 5,
      status: 'Completed',
    },
    {
      id: 5,
      service: 'Hair Coloring',
      stylist: 'Sarah Martinez',
      date: '2025-11-05',
      time: '11:00 AM',
      duration: '2 hours',
      price: '$150',
      rating: 5,
      status: 'Completed',
    },
  ];

  const filteredHistory = appointmentHistory.filter(
    (appointment) =>
      appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.stylist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSpent = appointmentHistory.reduce(
    (sum, apt) => sum + parseFloat(apt.price.replace('$', '')),
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">Service History</h1>
        <p className="text-gray-200">View your past appointments and services</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Total Visits</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{appointmentHistory.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Total Spent</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">${totalSpent.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Average Rating</p>
          <p className="text-3xl font-bold text-gray-900 mt-2 flex items-center gap-2">
            5.0 <FaStar className="text-yellow-500 text-xl" />
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by service or stylist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
          />
        </div>

        {/* History Table */}
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
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredHistory.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {appointment.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-[#8b5e3c]" />
                      {appointment.stylist}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#8b5e3c]" />
                      {appointment.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#8b5e3c]" />
                      {appointment.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {appointment.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < appointment.rating ? 'text-yellow-500' : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredHistory.length === 0 && (
          <p className="text-gray-500 text-center py-8">No appointments found</p>
        )}
      </div>
    </div>
  );
}
