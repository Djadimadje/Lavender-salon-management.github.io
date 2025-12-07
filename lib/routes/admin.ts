// Admin Routes
export const adminRoutes = {
  dashboard: '/dashboard/admin',
  bookings: '/dashboard/admin/bookings',
  reports: '/dashboard/admin/reports',
  users: '/dashboard/admin/users',
  content: '/dashboard/admin/content',
  transactions: '/dashboard/admin/transactions',
  ratings: '/dashboard/admin/ratings',
} as const;

// Admin Navigation Items
export const adminNavItems = [
  { label: 'Dashboard', href: adminRoutes.dashboard, icon: '🏠', description: 'Overview & Analytics' },
  { label: 'Bookings', href: adminRoutes.bookings, icon: '📅', description: 'Manage Appointments' },
  { label: 'Users', href: adminRoutes.users, icon: '👥', description: 'Staff & Customers' },
  { label: 'Reports', href: adminRoutes.reports, icon: '📈', description: 'Business Reports' },
  { label: 'Content', href: adminRoutes.content, icon: '🖼️', description: 'Website Content' },
  { label: 'Transactions', href: adminRoutes.transactions, icon: '💳', description: 'Manage Payments' },
  { label: 'Ratings', href: adminRoutes.ratings, icon: '⭐', description: 'Customer Feedback' },
] as const;

// Admin Router Helper
export const AdminRouter = {
  routes: adminRoutes,
  navItems: adminNavItems,

  // Helper methods for admin navigation
  goToBookings: () => adminRoutes.bookings,
  goToReports: () => adminRoutes.reports,
  goToUsers: () => adminRoutes.users,
  goToDashboard: () => adminRoutes.dashboard,
  goToContent: () => adminRoutes.content,
  goToTransactions: () => adminRoutes.transactions,
  goToRatings: () => adminRoutes.ratings,

  // Check if current path is admin route
  isAdminRoute: (path: string) => {
    return path.startsWith('/dashboard/admin');
  },

  // Get active route
  getActiveRoute: (currentPath: string) => {
    return adminNavItems.find(item => item.href === currentPath);
  },
} as const;

export default AdminRouter;
