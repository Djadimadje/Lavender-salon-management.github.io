'use client';

import React from 'react';
import { FaCashRegister, FaCreditCard, FaMobileAlt, FaMoneyBillWave, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import type { CashierActivity, DailyClosure } from '@/lib/types/reports';

interface CashierFinancialSectionProps {
  activities: CashierActivity[];
  closures: DailyClosure[];
}

export default function CashierFinancialSection({ activities, closures }: CashierFinancialSectionProps) {
  const totalCashIn = activities.reduce((sum, a) => sum + a.totalCashIn, 0);
  const totalVariance = activities.reduce((sum, a) => sum + a.variance, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Cashier Financial Activities</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Cash-In</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                RWF {(totalCashIn / 1000).toFixed(0)}k
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaCashRegister className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Card Payments</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                RWF {(activities.reduce((sum, a) => sum + a.cardPayments, 0) / 1000).toFixed(0)}k
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaCreditCard className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Mobile Payments</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                RWF {(activities.reduce((sum, a) => sum + a.mobilePayments, 0) / 1000).toFixed(0)}k
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FaMobileAlt className="text-purple-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Variance</p>
              <p className={`text-2xl font-bold mt-2 ${totalVariance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                RWF {totalVariance.toLocaleString()}
              </p>
            </div>
            <div className={`p-3 rounded-full ${totalVariance < 0 ? 'bg-red-100' : 'bg-green-100'}`}>
              {totalVariance < 0 ? 
                <FaExclamationTriangle className="text-red-500 text-2xl" /> :
                <FaCheckCircle className="text-green-500 text-2xl" />
              }
            </div>
          </div>
        </div>
      </div>

      {/* Cashier Performance Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Cashier Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transactions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Collected</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Variance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.cashierId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {activity.cashierName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {activity.transactionCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    RWF {activity.totalCollected.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    RWF {activity.expectedAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={activity.variance < 0 ? 'text-red-600 font-semibold' : 'text-green-600'}>
                      RWF {activity.variance.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Daily Closures */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Daily Closures</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opening</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Closing</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {closures.map((closure, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{closure.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{closure.cashierName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    RWF {closure.openingBalance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    RWF {closure.closingBalance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    RWF {closure.totalSales.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      closure.status === 'completed' ? 'bg-green-100 text-green-800' :
                      closure.status === 'discrepancy' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {closure.status}
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
