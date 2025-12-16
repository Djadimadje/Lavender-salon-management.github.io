'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaFilter, FaUserPlus, FaUsers, FaUserTie, FaCashRegister, FaUserShield } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import UserTable from '@/components/users/UserTable';
import { getCustomers } from '@/lib/data/customers';
import { getStylists } from '@/lib/data/stylists';
import { getCashiers } from '@/lib/data/cashiers';
import { getAdmins } from '@/lib/data/admins';

export default function AdminUsersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  // Combine all users from different sources
  const allUsers = useMemo(() => {
    const customers = getCustomers().map(c => ({ ...c, role: 'customer' }));
    const stylists = getStylists().map(s => ({ ...s, role: 'stylist' }));
    const cashiers = getCashiers().map(c => ({ ...c, role: 'cashier' }));
    const admins = getAdmins().map(a => ({ ...a, role: 'admin' }));
    
    return [...customers, ...stylists, ...cashiers, ...admins];
  }, []);

  // Stats calculation
  const stats = useMemo(() => [
    { label: 'Total Users', value: allUsers.length, icon: FaUsers, color: 'bg-blue-500' },
    { label: 'Customers', value: getCustomers().length, icon: FaUsers, color: 'bg-green-500' },
    { label: 'Stylists', value: getStylists().length, icon: FaUserTie, color: 'bg-purple-500' },
    { label: 'Staff', value: getCashiers().length + getAdmins().length, icon: FaUserShield, color: 'bg-orange-500' },
  ], [allUsers.length]);

  // Filter users based on active tab, search, status, and gender
  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      // Tab filter
      const matchesTab = activeTab === 'all' || user.role === activeTab;
      
      // Search filter
      const matchesSearch = 
        searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Status filter
      const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
      
      // Specialty filter (only for stylists)
      const matchesSpecialty = 
        activeTab !== 'stylist' || 
        specialtyFilter === 'all' || 
        ('specialty' in user && Array.isArray(user.specialty) && user.specialty.includes(specialtyFilter));
      
      return matchesTab && matchesSearch && matchesStatus && matchesSpecialty;
    });
  }, [allUsers, activeTab, searchTerm, filterStatus, specialtyFilter]);

  const handleEditUser = (userId: number) => {
    // Find the user to determine their role
    const user = allUsers.find(u => u.id === userId);
    if (user) {
      router.push(`/dashboard/admin/users/edit/${user.role}/${userId}`);
    }
  };

  const handleDeleteUser = (userId: number) => {
    const user = allUsers.find(u => u.id === userId);
    if (user && window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      console.log('Deleting user:', userId);
      // TODO: Implement API call to delete user
      // After successful deletion, you would refresh the user list
      // For now, just show confirmation
      alert(`User ${user.name} has been deleted (Demo mode - not actually deleted)`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#3d2817] text-white p-4 md:p-6 lg:p-8 mb-4 md:mb-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">User Management</h1>
            <p className="text-sm md:text-base text-gray-200">Manage customers, stylists, cashiers, and admins</p>
          </div>
          <button 
            onClick={() => router.push('/dashboard/admin/users/add')}
            className="bg-white text-[#3d2817] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 text-sm md:text-base"
          >
            <FaUserPlus />
            <span>Add New User</span>
          </button>
        </div>
      </div>

      <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <Icon className="text-white text-xl md:text-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs and Filters */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex px-4 md:px-6 min-w-max md:min-w-0">
              {[
                { id: 'all', label: 'All Users' },
                { id: 'customer', label: 'Customers' },
                { id: 'stylist', label: 'Stylists' },
                { id: 'cashier', label: 'Cashiers' },
                { id: 'admin', label: 'Admins' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSpecialtyFilter('all'); // Reset specialty filter when changing tabs
                  }}
                  className={`py-3 md:py-4 px-4 md:px-6 border-b-2 font-medium transition-colors text-sm md:text-base whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#c9a961] text-[#3d2817]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filter */}
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className={`grid grid-cols-1 ${activeTab === 'stylist' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-3 md:gap-4`}>
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] text-sm md:text-base"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none text-sm md:text-base"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Specialty Filter - Only show for stylists */}
            {activeTab === 'stylist' && (
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={specialtyFilter}
                  onChange={(e) => setSpecialtyFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961] appearance-none text-sm md:text-base"
                >
                  <option value="all">All Specialties</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Facial">Facial</option>
                    <option value="Massage">Massage</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Users Table */}
          <UserTable 
            users={filteredUsers} 
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>
    </div>
  );
}
