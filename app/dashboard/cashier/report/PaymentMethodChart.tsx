import { PaymentMethodBreakdown } from './reportData';

interface PaymentMethodChartProps {
  methods: PaymentMethodBreakdown[];
}

export default function PaymentMethodChart({ methods }: PaymentMethodChartProps) {
  const maxAmount = Math.max(...methods.map(m => m.amount));
  
  const colors = [
    'bg-blue-600',
    'bg-green-600',
    'bg-orange-500',
    'bg-purple-600',
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Methods</h3>
      <div className="flex items-end justify-around gap-6 h-80 px-4">
        {methods.map((method, index) => {
          const heightPercentage = (method.amount / maxAmount) * 100;
          const minHeight = 20; // Minimum 20% height for visibility
          const actualHeight = Math.max(heightPercentage, minHeight);
          
          return (
            <div key={method.method} className="flex flex-col items-center flex-1">
              {/* Amount Label */}
              <div className="text-center mb-2">
                <p className="text-sm font-bold text-gray-900">${method.amount.toFixed(0)}</p>
                <p className="text-xs text-gray-500">{method.count} txn</p>
              </div>
              
              {/* Chart Area */}
              <div className="w-full flex items-end justify-center" style={{ height: '240px' }}>
                {/* Column Bar */}
                <div 
                  className={`w-20 ${colors[index]} rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-lg`}
                  style={{ height: `${actualHeight}%` }}
                />
              </div>
              
              {/* Method Label */}
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-gray-700 mb-1">{method.method}</p>
                <p className="text-xs font-semibold text-gray-900">{method.percentage}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
