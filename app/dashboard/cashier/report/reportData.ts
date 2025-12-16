export interface DailySummary {
  totalRevenue: number;
  totalTransactions: number;
  cashPayments: number;
  cardPayments: number;
  averageTransaction: number;
}

export interface PaymentMethodBreakdown {
  method: string;
  count: number;
  amount: number;
  percentage: number;
}

export interface DailyRevenue {
  day: string;
  revenue: number;
  transactions: number;
}

export const mockDailySummary: DailySummary = {
  totalRevenue: 2450.00,
  totalTransactions: 45,
  cashPayments: 850.00,
  cardPayments: 1600.00,
  averageTransaction: 54.44,
};

export const mockPaymentMethods: PaymentMethodBreakdown[] = [
  { method: 'Credit Card', count: 20, amount: 1000.00, percentage: 41 },
  { method: 'Cash', count: 12, amount: 850.00, percentage: 35 },
  { method: 'MoMo Pay', count: 8, amount: 400.00, percentage: 16 },
  { method: 'Debit Card', count: 5, amount: 200.00, percentage: 8 },
];

export const mockDailyRevenue: DailyRevenue[] = [
  { day: 'Mon', revenue: 2100.00, transactions: 38 },
  { day: 'Tue', revenue: 2450.00, transactions: 45 },
  { day: 'Wed', revenue: 1950.00, transactions: 35 },
  { day: 'Thu', revenue: 2650.00, transactions: 52 },
  { day: 'Fri', revenue: 3200.00, transactions: 61 },
  { day: 'Sat', revenue: 2800.00, transactions: 48 },
  { day: 'Sun', revenue: 1600.00, transactions: 28 },
];

export const mockTopServices = [
  { service: 'Hair Coloring', count: 8, revenue: 1600.00 },
  { service: 'Spa Treatment', count: 6, revenue: 900.00 },
  { service: 'Makeup', count: 5, revenue: 600.00 },
  { service: 'Hair Styling', count: 7, revenue: 595.00 },
  { service: 'Massage', count: 4, revenue: 520.00 },
];
