'use client';

import React from 'react';
import { FaUsers, FaUserPlus, FaRedoAlt, FaCrown, FaStar, FaDollarSign } from 'react-icons/fa';
import type { CustomerInsight } from '@/lib/types/reports';

interface CustomerInsightsSectionProps {
  data: CustomerInsight;
}

export default function CustomerInsightsSection({ data }: CustomerInsightsSectionProps) {
  const returningRate = ((data.returningCustomers / data.totalCustomers) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Customer Insights</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {data.totalCustomers.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaUsers className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">New Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.newCustomers}</p>
              <p className="text-sm text-gray-500 mt-1">This month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaUserPlus className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Returning Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.returningCustomers}</p>
              <p className="text-sm text-green-600 mt-1">{returningRate}% rate</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FaRedoAlt className="text-purple-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">VIP Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.vipCustomers}</p>
              <p className="text-sm text-gray-500 mt-1">High spenders</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaCrown className="text-yellow-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Satisfaction Score</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.satisfactionScore}</p>
              <p className="text-sm text-gray-500 mt-1">Out of 5.0</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FaStar className="text-orange-500 text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Lifetime Value</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                RWF {(data.avgLifetimeValue / 1000).toFixed(0)}k
              </p>
              <p className="text-sm text-gray-500 mt-1">Per customer</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaDollarSign className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Insights Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Insights</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <div className="text-blue-600 text-xl">💡</div>
            <div>
              <p className="font-semibold text-gray-900">High Retention Rate</p>
              <p className="text-sm text-gray-600">
                {returningRate}% of customers return for repeat services, indicating strong customer satisfaction.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
            <div className="text-yellow-600 text-xl">⭐</div>
            <div>
              <p className="font-semibold text-gray-900">VIP Customer Base</p>
              <p className="text-sm text-gray-600">
                {data.vipCustomers} customers have spent over RWF 500,000, representing your most valuable segment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-600 text-xl">📈</div>
            <div>
              <p className="font-semibold text-gray-900">Growing Customer Base</p>
              <p className="text-sm text-gray-600">
                {data.newCustomers} new customers acquired this month shows healthy business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
