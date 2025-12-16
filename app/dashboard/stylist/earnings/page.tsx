'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import EarningsOverview from './EarningsOverview';
import EarningsChart from './EarningsChart';
import EarningsBreakdown from './EarningsBreakdown';
import { mockEarningsData } from './earningsData';

export default function EarningsPage() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('week');

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="My Earnings" 
        description="Track your income and commissions"
      />

      {/* Period Selector */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex gap-2">
          {(['week', 'month', 'year'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                period === p
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Earnings Overview */}
      <EarningsOverview data={mockEarningsData[period]} />

      {/* Earnings Chart */}
      <EarningsChart data={mockEarningsData[period]} period={period} />

      {/* Earnings Breakdown */}
      <EarningsBreakdown data={mockEarningsData[period]} />
    </div>
  );
}
