'use client';

import React from 'react';
import { FaCut, FaClock, FaChartLine } from 'react-icons/fa';
import type { ServicePerformance } from '@/lib/types/reports';
import ServicePieChart from './ServicePieChart';

interface ServicePerformanceSectionProps {
  data: ServicePerformance[];
}

export default function ServicePerformanceSection({ data }: ServicePerformanceSectionProps) {
  const topService = data[0];
  const mostRequested = data.reduce((prev, current) => 
    prev.bookingCount > current.bookingCount ? prev : current
  );
  const mostProfitable = data.reduce((prev, current) => 
    prev.profitMargin > current.profitMargin ? prev : current
  );

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Service Performance</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs md:text-sm">Most Requested</p>
              <p className="text-lg md:text-xl font-bold text-gray-900 mt-2">{mostRequested.serviceName}</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{mostRequested.bookingCount} bookings</p>
            </div>
            <div className="bg-blue-100 p-2 md:p-3 rounded-full">
              <FaCut className="text-blue-500 text-xl md:text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs md:text-sm">Most Profitable</p>
              <p className="text-lg md:text-xl font-bold text-gray-900 mt-2">{mostProfitable.serviceName}</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{mostProfitable.profitMargin}% margin</p>
            </div>
            <div className="bg-green-100 p-2 md:p-3 rounded-full">
              <FaChartLine className="text-green-500 text-xl md:text-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs md:text-sm">Most Time-Consuming</p>
              <p className="text-lg md:text-xl font-bold text-gray-900 mt-2">
                {data.reduce((prev, current) => prev.avgDuration > current.avgDuration ? prev : current).serviceName}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {data.reduce((prev, current) => prev.avgDuration > current.avgDuration ? prev : current).avgDuration} mins
              </p>
            </div>
            <div className="bg-orange-100 p-2 md:p-3 rounded-full">
              <FaClock className="text-orange-500 text-xl md:text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <ServicePieChart data={data} />

        {/* Service Ranking Table */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Service Revenue Ranking</h3>
          <div className="space-y-2 md:space-y-3">
            {data.map((service, index) => (
              <div key={service.id} className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  <span className="text-lg md:text-2xl font-bold text-gray-400">#{index + 1}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{service.serviceName}</p>
                    <p className="text-xs md:text-sm text-gray-500">{service.bookingCount} bookings</p>
                  </div>
                </div>
                <p className="text-sm md:text-lg font-bold text-[#8b5e3c] whitespace-nowrap ml-2">
                  RWF {service.revenue.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
