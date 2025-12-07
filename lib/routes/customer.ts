import { publicRoutes } from './public';

// Customer Routes
export const customerRoutes = {
  dashboard: '/dashboard/customer',
  appointments: '/dashboard/customer/appointments',
  history: '/dashboard/customer/history',
  profile: '/dashboard/customer/profile',
  ratings: '/dashboard/customer/ratings',
} as const;

// Customer Navigation Items
export const customerNavItems = [
  { label: 'Dashboard', href: customerRoutes.dashboard, icon: '🏠', description: 'My Overview' },
  { label: 'Book Now', href: `${publicRoutes.booking}?from=dashboard`, icon: '➕', description: 'New Appointment' },
  { label: 'Appointments', href: customerRoutes.appointments, icon: '📅', description: 'Upcoming Bookings' },
  { label: 'History', href: customerRoutes.history, icon: '📜', description: 'Past Appointments' },
  { label: 'Services', href: `${publicRoutes.services}?from=dashboard`, icon: '✨', description: 'Browse Services' },
  { label: 'Profile', href: customerRoutes.profile, icon: '⚙️', description: 'Account Settings' },
  { label: 'My Ratings', href: customerRoutes.ratings, icon: '⭐', description: 'Rate Services' },
] as const;

// Customer Router Helper
export const CustomerRouter = {
  routes: customerRoutes,
  navItems: customerNavItems,

  // Helper methods for customer navigation
  goToDashboard: () => customerRoutes.dashboard,
  goToAppointments: () => customerRoutes.appointments,
  goToHistory: () => customerRoutes.history,
  goToProfile: () => customerRoutes.profile,
  goToRatings: () => customerRoutes.ratings,

  // Check if current path is customer route
  isCustomerRoute: (path: string) => {
    return path.startsWith('/dashboard/customer');
  },

  // Get active route
  getActiveRoute: (currentPath: string) => {
    return customerNavItems.find(item => item.href === currentPath);
  },
} as const;

export default CustomerRouter;
