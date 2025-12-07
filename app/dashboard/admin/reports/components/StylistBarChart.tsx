'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { StylistPerformance } from '@/lib/types/reports';

interface StylistBarChartProps {
  data: StylistPerformance[];
}

export default function StylistBarChart({ data }: StylistBarChartProps) {
  const chartData = data.slice(0, 5).map(stylist => ({
    name: stylist.name,
    revenue: stylist.totalRevenue,
    bookings: stylist.bookingCount,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Top 5 Stylists by Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            type="number" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            width={120}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            formatter={(value: number, name: string) => {
              if (name === 'revenue') return [`RWF ${value.toLocaleString()}`, 'Revenue'];
              return [value, 'Bookings'];
            }}
          />
          <Bar dataKey="revenue" fill="#8b5e3c" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
