'use client';

import React, { useState } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaBan, FaFilter, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

interface Booking {
  id: number;
  customer: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  price: number;
}

export default function AdminBookingsPage() {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock bookings data
  const allBookings: Booking[] = [
    { id: 1, customer: 'Sarah Johnson', service: 'Hair Styling', stylist: 'Sarah Martinez', date: '2025-12-08', time: '10:00 AM', status: 'Confirmed', price: 45 },
    { id: 2, customer: 'Michael Brown', service: 'Spa Treatment', stylist: 'Emily Chen', date: '2025-12-08', time: '2:00 PM', status: 'Pending', price: 120 },
    { id: 3, customer: 'Emily Davis', service: 'Nail Care', stylist: 'Jessica Lee', date: '2025-12-09', time: '11:30 AM', status: 'Confirmed', price: 35 },
    { id: 4, customer: 'James Wilson', service: 'Makeup', stylist: 'Maria Garcia', date: '2025-12-09', time: '3:00 PM', status: 'Completed', price: 60 },
    { id: 5, customer: 'Lisa Anderson', service: 'Hair Coloring', stylist: 'Sarah Martinez', date: '2025-12-10', time: '9:00 AM', status: 'Confirmed', price: 85 },
    { id: 6, customer: 'David Lee', service: 'Massage', stylist: 'Emily Chen', date: '2025-12-10', time: '1:00 PM', status: 'Cancelled', price: 75 },
    { id: 7, customer: 'Jennifer Kim', service: 'Facial', stylist: 'Maria Garcia', date: '2025-12-11', time: '10:30 AM', status: 'Pending', price: 55 },
    { id: 8, customer: 'Robert Taylor', service: 'Hair Cut', stylist: 'Sarah Martinez', date: '2025-12-11', time: '2:30 PM', status: 'Confirmed', price: 30 },
  ];

  const filteredBookings = allBookings
    .filter(booking => filterStatus === 'All' || booking.status === filterStatus)
    .filter(booking => 
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.stylist.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const stats = [
    { label: 'Total Bookings', value: allBookings.length.toString(), icon: FaCalendarAlt, color: 'bg-blue-500' },
    { label: 'Confirmed', value: allBookings.filter(b => b.status === 'Confirmed').length.toString(), icon: FaCheckCircle, color: 'bg-green-500' },
    { label: 'Pending', value: allBookings.filter(b => b.status === 'Pending').length.toString(), icon: FaClock, color: 'bg-yellow-500' },
    { label: 'Completed', value: allBookings.filter(b => b.status === 'Completed').length.toString(), icon: FaCheckCircle, color: 'bg-purple-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Manage Bookings</h1>
        <p className="text-sm md:text-base text-gray-200">View and manage all salon appointments</p>
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

      {/* Filters and Search */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-600" />
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Filter Bookings</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customer, service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap text-sm md:text-base ${
                    filterStatus === status
                      ? 'bg-[#8b5e3c] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            All Bookings ({filteredBookings.length})
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stylist
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    No bookings found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {booking.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {booking.stylist}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <div>{booking.date}</div>
                      <div className="text-gray-500">{booking.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${booking.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-3">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit booking"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Cancel booking"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
