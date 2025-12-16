'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { FaMoneyBillWave } from 'react-icons/fa';
import PaymentForm, { PaymentFormData } from './PaymentForm';
import InvoiceDisplay, { InvoiceData } from './InvoiceDisplay';

export default function ProcessPaymentPage() {
  const [formData, setFormData] = useState<PaymentFormData>({
    customer: '',
    service: '',
    amount: '',
    paymentMethod: 'cash',
    notes: '',
  });

  const [processing, setProcessing] = useState(false);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [showInvoice, setShowInvoice] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate invoice
    const now = new Date();
    const invoice: InvoiceData = {
      transactionId: `TXN${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      customer: formData.customer,
      service: formData.service,
      amount: parseFloat(formData.amount),
      paymentMethod: formData.paymentMethod,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    setInvoiceData(invoice);
    setShowInvoice(true);
    setProcessing(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    setFormData({
      customer: '',
      service: '',
      amount: '',
      paymentMethod: 'cash',
      notes: '',
    });
  };

  const handleNewPayment = () => {
    handleClear();
    setInvoiceData(null);
    setShowInvoice(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="print:hidden">
        <PageHeader 
          title="Process Payment" 
          description="Process payments and generate invoices" 
        />
      </div>

      {!showInvoice ? (
        <PaymentForm
          formData={formData}
          setFormData={setFormData}
          processing={processing}
          onSubmit={handleSubmit}
          onClear={handleClear}
        />
      ) : (
        invoiceData && (
          <InvoiceDisplay
            invoiceData={invoiceData}
            onPrint={handlePrint}
            onNewPayment={handleNewPayment}
          />
        )
      )}
    </div>
  );
}
