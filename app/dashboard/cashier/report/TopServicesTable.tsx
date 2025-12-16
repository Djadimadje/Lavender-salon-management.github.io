interface TopService {
  service: string;
  count: number;
  revenue: number;
}

interface TopServicesTableProps {
  services: TopService[];
}

export default function TopServicesTable({ services }: TopServicesTableProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Top Services</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-600">Service</th>
              <th className="text-center py-3 text-sm font-medium text-gray-600">Count</th>
              <th className="text-right py-3 text-sm font-medium text-gray-600">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((service, index) => (
              <tr key={service.service} className="hover:bg-gray-50">
                <td className="py-3 text-sm text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8b5e3c] text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    {service.service}
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-600 text-center">{service.count}</td>
                <td className="py-3 text-sm font-semibold text-gray-900 text-right">
                  ${service.revenue.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
