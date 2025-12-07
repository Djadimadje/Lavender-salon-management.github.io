// Stylist Routes
export const stylistRoutes = {
  dashboard: '/dashboard/stylist',
  schedule: '/dashboard/stylist/schedule',
  appointments: '/dashboard/stylist/appointments',
  clients: '/dashboard/stylist/clients',
  earnings: '/dashboard/stylist/earnings',
} as const;

// Stylist Navigation Items
export const stylistNavItems = [
  { label: 'Dashboard', href: stylistRoutes.dashboard, icon: '🏠', description: 'My Overview' },
  { label: 'Schedule', href: stylistRoutes.schedule, icon: '📋', description: 'My Calendar' },
  { label: 'Appointments', href: stylistRoutes.appointments, icon: '📅', description: 'Today\'s Bookings' },
  { label: 'Clients', href: stylistRoutes.clients, icon: '👤', description: 'Client List' },
  { label: 'Earnings', href: stylistRoutes.earnings, icon: '💎', description: 'My Earnings' },
] as const;

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
