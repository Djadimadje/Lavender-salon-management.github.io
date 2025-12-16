import { FaHome, FaClipboardList, FaCalendarAlt, FaUser, FaGem, FaChartLine } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Stylist Routes
export const stylistRoutes = {
  dashboard: '/dashboard/stylist',
  schedule: '/dashboard/stylist/schedule',
  appointments: '/dashboard/stylist/appointments',
  clients: '/dashboard/stylist/clients',
  earnings: '/dashboard/stylist/earnings',
  performance: '/dashboard/stylist/performance',
} as const;

// Stylist Navigation Items
export const stylistNavItems: Array<{ label: string; href: string; icon: IconType; description: string }> = [
  { label: 'Dashboard', href: stylistRoutes.dashboard, icon: FaHome, description: 'My Overview' },
  { label: 'Schedule', href: stylistRoutes.schedule, icon: FaClipboardList, description: 'My Calendar' },
  { label: 'Appointments', href: stylistRoutes.appointments, icon: FaCalendarAlt, description: 'Today\'s Bookings' },
  { label: 'Clients', href: stylistRoutes.clients, icon: FaUser, description: 'Client List' },
  { label: 'Earnings', href: stylistRoutes.earnings, icon: FaGem, description: 'My Earnings' },
  { label: 'Performance Stats', href: stylistRoutes.performance, icon: FaChartLine, description: 'My Analytics' },
];

// Stylist Router Helper
export const StylistRouter = {
  routes: stylistRoutes,
  navItems: stylistNavItems,

  // Helper methods for stylist navigation
  goToDashboard: () => stylistRoutes.dashboard,
  goToSchedule: () => stylistRoutes.schedule,
  goToAppointments: () => stylistRoutes.appointments,
  goToClients: () => stylistRoutes.clients,
  goToEarnings: () => stylistRoutes.earnings,

  // Check if current path is stylist route
  isStylistRoute: (path: string) => {
    return path.startsWith('/dashboard/stylist');
  },

  // Get active route
  getActiveRoute: (currentPath: string) => {
    return stylistNavItems.find(item => item.href === currentPath);
  },
} as const;

export default StylistRouter;
