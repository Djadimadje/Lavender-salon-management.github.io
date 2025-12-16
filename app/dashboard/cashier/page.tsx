'use client';

import Link from 'next/link';
import { FaMoneyBillWave, FaCreditCard, FaClock, FaCheckCircle } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

export default function CashierDashboardPage() {
  const stats = [
    { label: "Today's Revenue", value: '$2,450', icon: FaMoneyBillWave, color: 'bg-green-500' },
    { label: 'Total Transactions', value: '45', icon: FaCreditCard, color: 'bg-blue-500' },
    { label: 'Pending Payments', value: '8', icon: FaClock, color: 'bg-yellow-500' },
    { label: 'Completed Today', value: '37', icon: FaCheckCircle, color: 'bg-purple-500' },
  ];

  const quickActions = [
    { label: 'Process Payment', href: '/dashboard/cashier/process-payment', icon: FaMoneyBillWave, color: 'bg-[#3d2817]' },
    { label: 'View Transactions', href: '/dashboard/cashier/transactions', icon: FaCreditCard, color: 'bg-[#8b5e3c]' },
    { label: 'Pending Payments', href: '/dashboard/cashier/transactions?filter=pending', icon: FaClock, color: 'bg-[#c9a961]' },
    { label: 'Daily Report', href: '/dashboard/cashier/report', icon: FaCheckCircle, color: 'bg-[#3d2817]' },
  ];

  const recentTransactions = [
    { id: 1, customer: 'Sarah Johnson', service: 'Hair Styling', amount: '$85.00', method: 'Credit Card', status: 'Completed', time: '10:30 AM' },
    { id: 2, customer: 'Michael Brown', service: 'Spa Treatment', amount: '$150.00', method: 'Cash', status: 'Completed', time: '11:15 AM' },
    { id: 3, customer: 'Emily Davis', service: 'Nail Care', amount: '$45.00', method: 'Credit Card', status: 'Pending', time: '12:00 PM' },
    { id: 4, customer: 'James Wilson', service: 'Makeup', amount: '$120.00', method: 'Debit Card', status: 'Completed', time: '01:45 PM' },
    { id: 5, customer: 'Lisa Anderson', service: 'Hair Coloring', amount: '$200.00', method: 'Credit Card', status: 'Completed', time: '02:30 PM' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Header */}
      <PageHeader 
        title="Cashier Dashboard" 
        description="Manage payments and track transactions"
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

      {/* Recent Transactions */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Recent Transactions</h2>
          <Link
            href="/dashboard/cashier/transactions"
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
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
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
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {transaction.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {transaction.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {transaction.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {transaction.status}
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
