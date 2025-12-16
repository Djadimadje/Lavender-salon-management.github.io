import { Transaction } from './TransactionTable';

export const mockTransactions: Transaction[] = [
  { id: 'TXN001', customer: 'Sarah Johnson', service: 'Hair Styling', amount: 85.00, method: 'Credit Card', status: 'Completed', date: '2025-12-14', time: '10:30 AM' },
  { id: 'TXN002', customer: 'Michael Brown', service: 'Spa Treatment', amount: 150.00, method: 'Cash', status: 'Completed', date: '2025-12-14', time: '11:15 AM' },
  { id: 'TXN003', customer: 'Emily Davis', service: 'Nail Care', amount: 45.00, method: 'Credit Card', status: 'Pending', date: '2025-12-14', time: '12:00 PM' },
  { id: 'TXN004', customer: 'James Wilson', service: 'Makeup', amount: 120.00, method: 'Debit Card', status: 'Completed', date: '2025-12-14', time: '01:45 PM' },
  { id: 'TXN005', customer: 'Lisa Anderson', service: 'Hair Coloring', amount: 200.00, method: 'Credit Card', status: 'Completed', date: '2025-12-14', time: '02:30 PM' },
  { id: 'TXN006', customer: 'David Martinez', service: 'Facial Treatment', amount: 95.00, method: 'Cash', status: 'Completed', date: '2025-12-13', time: '03:15 PM' },
  { id: 'TXN007', customer: 'Jennifer Lee', service: 'Manicure & Pedicure', amount: 75.00, method: 'Credit Card', status: 'Refunded', date: '2025-12-13', time: '04:00 PM' },
  { id: 'TXN008', customer: 'Robert Taylor', service: 'Hair Cut', amount: 50.00, method: 'Debit Card', status: 'Completed', date: '2025-12-13', time: '10:00 AM' },
  { id: 'TXN009', customer: 'Maria Garcia', service: 'Waxing', amount: 60.00, method: 'Cash', status: 'Pending', date: '2025-12-13', time: '11:30 AM' },
  { id: 'TXN010', customer: 'William Chen', service: 'Massage', amount: 130.00, method: 'Credit Card', status: 'Completed', date: '2025-12-12', time: '02:00 PM' },
];
