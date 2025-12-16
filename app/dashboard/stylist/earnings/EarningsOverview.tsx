'use client';

import { FaMoneyBillWave, FaChartLine, FaPercentage, FaCalendarCheck } from 'react-icons/fa';

export interface EarningsData {
  total: number;
  commission: number;
  tips: number;
  services: number;
  growth: number;
}

interface EarningsOverviewProps {
  data: EarningsData;
}

export default function EarningsOverview({ data }: EarningsOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Earnings</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${data.total}</p>
          </div>
          <div className="bg-green-500 p-3 rounded-full">
            <FaMoneyBillWave className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Commission</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${data.commission}</p>
          </div>
          <div className="bg-purple-500 p-3 rounded-full">
            <FaPercentage className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Tips Received</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${data.tips}</p>
          </div>
          <div className="bg-orange-500 p-3 rounded-full">
            <FaMoneyBillWave className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Services Done</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{data.services}</p>
          </div>
          <div className="bg-blue-500 p-3 rounded-full">
            <FaCalendarCheck className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
