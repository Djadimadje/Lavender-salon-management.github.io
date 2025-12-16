import { FaSearch, FaFilter, FaDownload } from 'react-icons/fa';

type TransactionStatus = 'all' | 'completed' | 'pending' | 'refunded';
type PaymentMethod = 'all' | 'cash' | 'credit-card' | 'debit-card' | 'momo-pay';

interface TransactionFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  statusFilter: TransactionStatus;
  setStatusFilter: (value: TransactionStatus) => void;
  methodFilter: PaymentMethod;
  setMethodFilter: (value: PaymentMethod) => void;
  onExport: () => void;
}

export default function TransactionFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  methodFilter,
  setMethodFilter,
  onExport,
}: TransactionFiltersProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, ID, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as TransactionStatus)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>

        {/* Method Filter */}
        <div>
          <select
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value as PaymentMethod)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
          >
            <option value="all">All Methods</option>
            <option value="cash">Cash</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="momo-pay">MoMo Pay</option>
          </select>
        </div>

        {/* Export Button */}
        <button 
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#6b4a2f] transition-colors"
        >
          <FaDownload />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </div>
  );
}

export type { TransactionStatus, PaymentMethod };
