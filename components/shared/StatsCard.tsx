import { IconType } from 'react-icons';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: IconType;
  color: string;
}

export default function StatsCard({ label, value, icon: Icon, color }: StatsCardProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-xs md:text-sm">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`${color} p-2 md:p-3 rounded-full`}>
          <Icon className="text-white text-xl md:text-2xl" />
        </div>
      </div>
    </div>
  );
}
