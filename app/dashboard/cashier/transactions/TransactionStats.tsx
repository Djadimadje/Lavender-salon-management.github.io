interface TransactionStatsProps {
  totalAmount: number;
  completedCount: number;
  pendingCount: number;
}

export default function TransactionStats({ totalAmount, completedCount, pendingCount }: TransactionStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Total Amount</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Completed</p>
        <p className="text-2xl md:text-3xl font-bold text-green-600 mt-1">
          {completedCount}
        </p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-600 text-xs md:text-sm">Pending</p>
        <p className="text-2xl md:text-3xl font-bold text-yellow-600 mt-1">
          {pendingCount}
        </p>
      </div>
    </div>
  );
}
