import { FaPrint } from 'react-icons/fa';

export interface InvoiceData {
  transactionId: string;
  customer: string;
  service: string;
  amount: number;
  paymentMethod: string;
  date: string;
  time: string;
}

interface InvoiceDisplayProps {
  invoiceData: InvoiceData;
  onPrint: () => void;
  onNewPayment: () => void;
}

export default function InvoiceDisplay({ invoiceData, onPrint, onNewPayment }: InvoiceDisplayProps) {
  return (
    <div className="space-y-6">
      {/* Success Message */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-green-900">Payment Processed Successfully!</h3>
            <p className="text-sm text-green-700">Invoice generated and ready to print.</p>
          </div>
        </div>
      </div>

      {/* Invoice */}
      <div className="bg-white p-8 rounded-lg shadow-md print:shadow-none">
        {/* Invoice Header */}
        <div className="border-b-2 border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">INVOICE</h1>
          <p className="text-lg font-serif italic text-[#8b5e3c]">Lavender Beauty & Wellness</p>
          <p className="text-sm text-gray-600 mt-2">KN 5 Ave, Kigali, Rwanda</p>
          <p className="text-sm text-gray-600">Phone: +250 788 123 456</p>
        </div>

        {/* Transaction Details */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
            <p className="text-gray-700">{invoiceData.customer}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Transaction ID</p>
            <p className="font-semibold text-gray-900">{invoiceData.transactionId}</p>
            <p className="text-sm text-gray-600 mt-2">Date & Time</p>
            <p className="font-semibold text-gray-900">{invoiceData.date} {invoiceData.time}</p>
          </div>
        </div>

        {/* Service Details */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 text-gray-700">Service</th>
              <th className="text-right py-3 text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-4 text-gray-900">{invoiceData.service}</td>
              <td className="py-4 text-right font-semibold text-gray-900">
                ${invoiceData.amount.toFixed(2)}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-200">
              <td className="py-4 text-lg font-bold text-gray-900">Total</td>
              <td className="py-4 text-right text-lg font-bold text-gray-900">
                ${invoiceData.amount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* Payment Method */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">Payment Method</p>
          <p className="font-semibold text-gray-900 capitalize">
            {invoiceData.paymentMethod.replace('-', ' ')}
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm border-t pt-6">
          <p>Thank you for choosing Lavender Beauty & Wellness!</p>
          <p className="mt-1">For inquiries, contact us at info@lavender.com</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 print:hidden">
        <button
          onClick={onPrint}
          className="flex-1 bg-[#8b5e3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4a2f] transition-colors flex items-center justify-center gap-2"
        >
          <FaPrint />
          Print Invoice
        </button>
        <button
          onClick={onNewPayment}
          className="flex-1 bg-[#3d2817] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a1a0f] transition-colors"
        >
          New Payment
        </button>
      </div>
    </div>
  );
}
