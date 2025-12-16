import { DailyRevenue } from './reportData';

interface WeeklyRevenueChartProps {
  data: DailyRevenue[];
}

export default function WeeklyRevenueChart({ data }: WeeklyRevenueChartProps) {
  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Weekly Revenue</h3>
      <div className="flex items-end justify-around gap-4 h-80 px-4">
        {data.map((item, index) => {
          const heightPercentage = (item.revenue / maxRevenue) * 100;
          const minHeight = 15;
          const actualHeight = Math.max(heightPercentage, minHeight);
          
          return (
            <div key={item.day} className="flex flex-col items-center flex-1">
              {/* Revenue Label */}
              <div className="text-center mb-2">
                <p className="text-sm font-bold text-gray-900">${item.revenue.toFixed(0)}</p>
                <p className="text-xs text-gray-500">{item.transactions} txn</p>
              </div>
              
              {/* Chart Area */}
              <div className="w-full flex items-end justify-center" style={{ height: '240px' }}>
                {/* Column Bar */}
                <div 
                  className="w-full max-w-[70px] bg-gradient-to-t from-[#8b5e3c] to-[#c9a961] rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-lg"
                  style={{ height: `${actualHeight}%` }}
                />
              </div>
              
              {/* Day Label */}
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-gray-700">{item.day}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
