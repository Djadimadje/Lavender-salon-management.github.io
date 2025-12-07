'use client';

import { useState } from 'react';
import { FaSearch, FaFilter, FaUserPlus, FaVenusMars } from 'react-icons/fa';
import UserTable from '@/components/users/UserTable';
import { getStylists, getFemalStylists, getMaleStylists, getActiveStylists } from '@/lib/data/stylists';

export default function StylistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const stylists = getStylists();

  const filteredStylists = stylists.filter((stylist) => {
    const matchesSearch = 
      searchTerm === '' ||
      stylist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stylist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stylist.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesGender = 
      genderFilter === 'all' || 
      stylist.gender === genderFilter;
    
    const matchesStatus = 
      filterStatus === 'all' || 
      stylist.status === filterStatus;
    
    return matchesSearch && matchesGender && matchesStatus;
  }).map(s => ({ ...s, role: 'stylist' }));

  const avgRating = stylists.reduce((sum, s) => sum + (s.rating || 0), 0) / stylists.length;
  const totalClients = stylists.reduce((sum, s) => sum + (s.totalClients || 0), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stylists</h1>
          <p className="text-gray-600 mt-1">Manage stylist staff and specialties</p>
        </div>
        <button className="flex items-center gap-2 bg-[#3d2817] text-white px-6 py-3 rounded-lg hover:bg-[#2a1a0f] transition-colors">
          <FaUserPlus />
          <span>Add Stylist</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Total Stylists</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stylists.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FaVenusMars className="text-pink-500" />
            <p className="text-gray-600 text-sm">Female</p>
          </div>
          <p className="text-2xl font-bold text-pink-600">{getFemalStylists().length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FaVenusMars className="text-blue-500" />
            <p className="text-gray-600 text-sm">Male</p>
          </div>
          <p className="text-2xl font-bold text-blue-600">{getMaleStylists().length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">Average Rating</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{avgRating.toFixed(1)} ⭐</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search stylists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            />
          </div>
          <div className="relative">
            <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value as any)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none"
            >
              <option value="all">All Genders</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stylists Table */}
      <div className="bg-white rounded-lg shadow-md">
        <UserTable users={filteredStylists} />
      </div>
    </div>
  );
}