'use client';

import { EarningsData } from './EarningsOverview';

interface EarningsChartProps {
  data: EarningsData;
  period: 'week' | 'month' | 'year';
}

export default function EarningsChart({ data, period }: EarningsChartProps) {
  const chartData = [
    { label: period === 'week' ? 'Mon' : period === 'month' ? 'Week 1' : 'Jan', value: 450 },
    { label: period === 'week' ? 'Tue' : period === 'month' ? 'Week 2' : 'Feb', value: 520 },
    { label: period === 'week' ? 'Wed' : period === 'month' ? 'Week 3' : 'Mar', value: 380 },
    { label: period === 'week' ? 'Thu' : period === 'month' ? 'Week 4' : 'Apr', value: 650 },
    { label: period === 'week' ? 'Fri' : period === 'month' ? 'Week 5' : 'May', value: 720 },
    { label: period === 'week' ? 'Sat' : 'Jun', value: 580 },
    { label: period === 'week' ? 'Sun' : 'Jul', value: 420 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings Trend</h2>
      
      <div className="h-64 flex items-end justify-between gap-2">
        {chartData.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs font-semibold text-gray-700">${item.value}</div>
              <div
                className="w-full bg-gradient-to-t from-[#8b5e3c] to-[#c9a961] rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-lg"
                style={{ height: `${Math.max(height, 15)}%` }}
              ></div>
              <div className="text-xs text-gray-600 font-medium">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
