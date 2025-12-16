'use client';

import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';
import TransactionStats from './TransactionStats';
import TransactionFilters, { TransactionStatus, PaymentMethod } from './TransactionFilters';
import TransactionTable from './TransactionTable';
import { mockTransactions } from './transactionData';

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<TransactionStatus>('all');
  const [methodFilter, setMethodFilter] = useState<PaymentMethod>('all');

  // Filter transactions
  const filteredTransactions = mockTransactions.filter((transaction) => {
    const matchesSearch = 
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || transaction.status.toLowerCase() === statusFilter;
    const matchesMethod = methodFilter === 'all' || transaction.method.toLowerCase().replace(' ', '-') === methodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  // Calculate stats
  const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
  const completedCount = filteredTransactions.filter(t => t.status === 'Completed').length;
  const pendingCount = filteredTransactions.filter(t => t.status === 'Pending').length;

  const handleExport = () => {
    // Export functionality placeholder
    console.log('Exporting transactions...');
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <PageHeader 
        title="Transaction History" 
        description="View and manage all payment transactions"
      />

      {/* Stats Summary */}
      <TransactionStats 
        totalAmount={totalAmount}
        completedCount={completedCount}
        pendingCount={pendingCount}
      />

      {/* Filters and Search */}
      <TransactionFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        methodFilter={methodFilter}
        setMethodFilter={setMethodFilter}
        onExport={handleExport}
      />

      {/* Transactions Table */}
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}
