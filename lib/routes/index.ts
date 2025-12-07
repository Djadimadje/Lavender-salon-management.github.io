// Main routes export file - import role-specific routes from their dedicated files
export { publicRoutes } from './public';
export { authRoutes } from './auth';
export { adminRoutes, adminNavItems } from './admin';
export { cashierRoutes, cashierNavItems } from './cashier';
export { stylistRoutes, stylistNavItems } from './stylist';
export { customerRoutes, customerNavItems } from './customer';

// Dashboard root route
export const dashboardRoutes = {
  root: '/dashboard',
} as const;
