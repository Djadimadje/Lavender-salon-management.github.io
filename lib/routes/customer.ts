import { publicRoutes } from './public';
import { FaHome, FaPlus, FaCalendarAlt, FaHistory, FaSpa, FaCog, FaStar } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Customer Routes
export const customerRoutes = {
  dashboard: '/dashboard/customer',
  appointments: '/dashboard/customer/appointments',
  history: '/dashboard/customer/history',
  profile: '/dashboard/customer/profile',
  ratings: '/dashboard/customer/ratings',
} as const;

// Customer Navigation Items
export const customerNavItems: Array<{ label: string; href: string; icon: IconType; description: string }> = [
  { label: 'Dashboard', href: customerRoutes.dashboard, icon: FaHome, description: 'My Overview' },
  { label: 'Book Now', href: `${publicRoutes.booking}?from=dashboard`, icon: FaPlus, description: 'New Appointment' },
  { label: 'Appointments', href: customerRoutes.appointments, icon: FaCalendarAlt, description: 'Upcoming Bookings' },
  { label: 'History', href: customerRoutes.history, icon: FaHistory, description: 'Past Appointments' },
  { label: 'Services', href: `${publicRoutes.services}?from=dashboard`, icon: FaSpa, description: 'Browse Services' },
  { label: 'Profile', href: customerRoutes.profile, icon: FaCog, description: 'Account Settings' },
  { label: 'My Ratings', href: customerRoutes.ratings, icon: FaStar, description: 'Rate Services' },
];

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
