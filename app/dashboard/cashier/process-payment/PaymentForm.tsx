import { FaCheck } from 'react-icons/fa';
import { services } from './serviceData';

interface PaymentFormData {
  customer: string;
  service: string;
  amount: string;
  paymentMethod: string;
  notes: string;
}

interface PaymentFormProps {
  formData: PaymentFormData;
  setFormData: (data: PaymentFormData) => void;
  processing: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
}

export default function PaymentForm({ 
  formData, 
  setFormData, 
  processing, 
  onSubmit,
  onClear 
}: PaymentFormProps) {
  const handleServiceChange = (serviceName: string) => {
    const selectedService = services.find(s => s.name === serviceName);
    setFormData({
      ...formData,
      service: serviceName,
      amount: selectedService ? selectedService.price.toString() : '',
    });
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Customer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer Name *
          </label>
          <input
            type="text"
            required
            value={formData.customer}
            onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            placeholder="Enter customer name"
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service *
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) => handleServiceChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount ($) *
          </label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            placeholder="Enter amount"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#8b5e3c] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="mr-3"
              />
              <span className="font-medium">Cash</span>
            </label>
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#8b5e3c] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={formData.paymentMethod === 'credit-card'}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="mr-3"
              />
              <span className="font-medium">Credit Card</span>
            </label>
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#8b5e3c] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="debit-card"
                checked={formData.paymentMethod === 'debit-card'}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="mr-3"
              />
              <span className="font-medium">Debit Card</span>
            </label>
            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#8b5e3c] transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="momo-pay"
                checked={formData.paymentMethod === 'momo-pay'}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="mr-3"
              />
              <span className="font-medium">MoMo Pay</span>
            </label>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            placeholder="Add any additional notes..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={processing}
            className="flex-1 bg-[#3d2817] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a1a0f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {processing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <FaCheck />
                Process Payment
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export type { PaymentFormData };
