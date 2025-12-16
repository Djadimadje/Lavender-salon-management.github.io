import { DailySummary } from './reportData';

interface ReportSummaryProps {
  summary: DailySummary;
}

export default function ReportSummary({ summary }: ReportSummaryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Total Revenue</p>
        <p className="text-2xl md:text-3xl font-bold text-green-600 mt-1">
          ${summary.totalRevenue.toFixed(2)}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Transactions</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          {summary.totalTransactions}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Cash Payments</p>
        <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-1">
          ${summary.cashPayments.toFixed(2)}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Card Payments</p>
        <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-1">
          ${summary.cardPayments.toFixed(2)}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Avg Transaction</p>
        <p className="text-2xl md:text-3xl font-bold text-orange-600 mt-1">
          ${summary.averageTransaction.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
