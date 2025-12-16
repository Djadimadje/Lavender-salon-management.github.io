import { EarningsData } from './EarningsOverview';

export const mockEarningsData: Record<'week' | 'month' | 'year', EarningsData> = {
  week: {
    total: 3720,
    commission: 2790,
    tips: 930,
    services: 38,
    growth: 12.5,
  },
  month: {
    total: 15680,
    commission: 11760,
    tips: 3920,
    services: 156,
    growth: 8.3,
  },
  year: {
    total: 182400,
    commission: 136800,
    tips: 45600,
    services: 1824,
    growth: 15.7,
  },
};
