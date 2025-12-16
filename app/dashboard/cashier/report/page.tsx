'use client';

import { useState } from 'react';
import { FaChartLine, FaCalendarAlt, FaDownload, FaPrint } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import ReportSummary from './ReportSummary';
import PaymentMethodChart from './PaymentMethodChart';
import WeeklyRevenueChart from './HourlyRevenueChart';
import TopServicesTable from './TopServicesTable';
import { mockDailySummary, mockPaymentMethods, mockDailyRevenue, mockTopServices } from './reportData';

export default function ReportPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    console.log('Exporting report...');
    // Export functionality placeholder
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="print:hidden">
        <PageHeader 
          title="Daily Report" 
          description="View daily sales and transaction reports" 
        />
      </div>

      {/* Date Selector and Actions */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md print:hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#6b4a2f] transition-colors"
            >
              <FaPrint />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-[#3d2817] text-white rounded-lg hover:bg-[#2a1a0f] transition-colors"
            >
              <FaDownload />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Print Header - Only visible when printing */}
      <div className="hidden print:block mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Lavender Beauty & Wellness</h1>
        <p className="text-gray-600">Daily Sales Report - {selectedDate}</p>
      </div>

      {/* Summary Stats */}
      <ReportSummary summary={mockDailySummary} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <PaymentMethodChart methods={mockPaymentMethods} />
        <TopServicesTable services={mockTopServices} />
      </div>

      {/* Weekly Revenue Chart */}
      <WeeklyRevenueChart data={mockDailyRevenue} />

      {/* Additional Info */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Report Notes</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Best day: Friday with highest revenue of $3,200.00 (61 transactions)</p>
          <p>• Most popular service: Hair Coloring (8 bookings, $1,600 revenue)</p>
          <p>• Credit card is the most used payment method (41% of transactions)</p>
          <p>• Average transaction value: ${mockDailySummary.averageTransaction.toFixed(2)}</p>
        </div>
      </div>

      {/* Footer - Print only */}
      <div className="hidden print:block text-center text-sm text-gray-500 mt-8 pt-4 border-t">
        <p>Generated on {new Date().toLocaleString()}</p>
        <p>© 2025 Lavender Beauty & Wellness. All rights reserved.</p>
      </div>
    </div>
  );
}
