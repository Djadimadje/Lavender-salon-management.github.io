// Report TypeScript Interfaces

export interface RevenueReport {
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
  totalSales: number;
  avgBookingPrice: number;
  growthPercentage: number;
}

export interface RevenueChartData {
  date: string;
  revenue: number;
  bookings: number;
}

export interface ServicePerformance {
  id: number;
  serviceName: string;
  category: string;
  revenue: number;
  bookingCount: number;
  avgDuration: number; // in minutes
  profitMargin: number;
  rank: number;
}

export interface StylistPerformance {
  id: number;
  name: string;
  avatar: string;
  totalRevenue: number;
  avgRating: number;
  bookingCount: number;
  cancelledCount: number;
  completedCount: number;
  specialties: string[];
  rank: number;
}

export interface BookingAnalytics {
  total: number;
  completed: number;
  pending: number;
  cancelled: number;
  noShows: number;
  completedPercentage: number;
  pendingPercentage: number;
  cancelledPercentage: number;
  noShowPercentage: number;
}

export interface CustomerInsight {
  totalCustomers: number;
  newCustomers: number;
  returningCustomers: number;
  vipCustomers: number;
  satisfactionScore: number;
  churnRate: number;
  avgLifetimeValue: number;
}

export interface CashierActivity {
  cashierId: number;
  cashierName: string;
  totalCashIn: number;
  manualPayments: number;
  cardPayments: number;
  mobilePayments: number;
  totalCollected: number;
  expectedAmount: number;
  variance: number;
  transactionCount: number;
}

export interface ReportFilters {
  startDate: string;
  endDate: string;
  stylistId?: number;
  serviceId?: number;
  category?: string;
  paymentMethod?: string;
  revenueType?: string;
}

export interface DailyClosure {
  date: string;
  cashierId: number;
  cashierName: string;
  openingBalance: number;
  closingBalance: number;
  totalSales: number;
  totalExpenses: number;
  variance: number;
  status: 'completed' | 'pending' | 'discrepancy';
}
