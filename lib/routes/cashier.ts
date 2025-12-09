import { FaHome, FaCreditCard, FaMoneyBillWave, FaFileInvoice } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Cashier Routes
export const cashierRoutes = {
  dashboard: '/dashboard/cashier',
  transactions: '/dashboard/cashier/transactions',
  payments: '/dashboard/cashier/payments',
  invoices: '/dashboard/cashier/invoices',
} as const;

// Cashier Navigation Items
export const cashierNavItems: Array<{ label: string; href: string; icon: IconType; description: string }> = [
  { label: 'Dashboard', href: cashierRoutes.dashboard, icon: FaHome, description: 'Today\'s Summary' },
  { label: 'Transactions', href: cashierRoutes.transactions, icon: FaCreditCard, description: 'Payment Records' },
  { label: 'Payments', href: cashierRoutes.payments, icon: FaMoneyBillWave, description: 'Process Payments' },
  { label: 'Invoices', href: cashierRoutes.invoices, icon: FaFileInvoice, description: 'Generate Invoices' },
];

// Cashier Router Helper
export const CashierRouter = {
  routes: cashierRoutes,
  navItems: cashierNavItems,

  // Helper methods for cashier navigation
  goToDashboard: () => cashierRoutes.dashboard,
  goToTransactions: () => cashierRoutes.transactions,
  goToPayments: () => cashierRoutes.payments,
  goToInvoices: () => cashierRoutes.invoices,

  // Check if current path is cashier route
  isCashierRoute: (path: string) => {
    return path.startsWith('/dashboard/cashier');
  },

  // Get active route
  getActiveRoute: (currentPath: string) => {
    return cashierNavItems.find(item => item.href === currentPath);
  },
} as const;

export default CashierRouter;
