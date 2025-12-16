import { FaHome, FaCreditCard, FaMoneyBillWave, FaChartLine, FaUserPlus } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Cashier Routes
export const cashierRoutes = {
  dashboard: '/dashboard/cashier',
  walkIn: '/dashboard/cashier/walk-in',
  transactions: '/dashboard/cashier/transactions',
  processPayment: '/dashboard/cashier/process-payment',
  report: '/dashboard/cashier/report',
} as const;

// Cashier Navigation Items
export const cashierNavItems: Array<{ label: string; href: string; icon: IconType; description: string }> = [
  { label: 'Dashboard', href: cashierRoutes.dashboard, icon: FaHome, description: 'Today\'s Summary' },
  { label: 'Walk-in Customers', href: cashierRoutes.walkIn, icon: FaUserPlus, description: 'Register Walk-ins' },
  { label: 'Transactions', href: cashierRoutes.transactions, icon: FaCreditCard, description: 'Payment History' },
  { label: 'Process Payment', href: cashierRoutes.processPayment, icon: FaMoneyBillWave, description: 'Process & Invoice' },
  { label: 'Daily Report', href: cashierRoutes.report, icon: FaChartLine, description: 'Sales Report' },
];

// Cashier Router Helper
export const CashierRouter = {
  routes: cashierRoutes,
  navItems: cashierNavItems,

  // Helper methods for cashier navigation
  goToDashboard: () => cashierRoutes.dashboard,
  goToTransactions: () => cashierRoutes.transactions,
  goToProcessPayment: () => cashierRoutes.processPayment,
  goToReport: () => cashierRoutes.report,

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
