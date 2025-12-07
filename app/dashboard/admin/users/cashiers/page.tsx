'use client';

import { useState } from 'react';
import { FaSearch, FaUserPlus, FaClock } from 'react-icons/fa';
import UserTable from '@/components/users/UserTable';
import { getCashiers, getCashiersByShift } from '@/lib/data/cashiers';

export default function CashiersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [shiftFilter, setShiftFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const cashiers = getCashiers();

  const filteredCashiers = cashiers.filter((cashier) => {
    const matchesSearch = 
      searchTerm === '' ||
      cashier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cashier.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesShift = 
      shiftFilter === 'all' || 
      cashier.shift === shiftFilter;
    
    return matchesSearch && matchesShift;
  }).map(c => ({ ...c, role: 'cashier' }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cashiers</h1>
          <p className="text-gray-600 mt-1">Manage cashier staff and shifts</p>
        </div>
        <button className="flex items-center gap-2 bg-[#3d2817] text-white px-6 py-3 rounded-lg hover:bg-[#2a1a0f] transition-colors">
          <FaUserPlus />
          <span>Add Cashier</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Total Cashiers</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{cashiers.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-500" />
            <p className="text-gray-600 text-sm">Morning Shift</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{getCashiersByShift('morning').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-orange-500" />
            <p className="text-gray-600 text-sm">Afternoon Shift</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{getCashiersByShift('afternoon').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-purple-500" />
            <p className="text-gray-600 text-sm">Evening Shift</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{getCashiersByShift('evening').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cashiers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            />
          </div>
          <div className="relative">
            <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={shiftFilter}
              onChange={(e) => setShiftFilter(e.target.value as any)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none"
            >
              <option value="all">All Shifts</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cashiers Table */}
      <div className="bg-white rounded-lg shadow-md">
        <UserTable users={filteredCashiers} />
      </div>
    </div>
  );
}