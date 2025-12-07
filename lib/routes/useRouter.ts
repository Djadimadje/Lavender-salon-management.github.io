'use client';

import { usePathname, useRouter as useNextRouter } from 'next/navigation';
import { getCurrentUser } from '../auth';
import AdminRouter from './admin';
import CashierRouter from './cashier';
import StylistRouter from './stylist';
import CustomerRouter from './customer';
import PublicRouter from './public';
import AuthRouter from './auth';

type UserRole = 'admin' | 'cashier' | 'stylist' | 'customer';

export const useRouter = () => {
  const router = useNextRouter();
  const pathname = usePathname();
  const user = getCurrentUser();

  // Get role-specific router
  const getRoleRouter = (role?: UserRole) => {
    const userRole = role || user?.role;
    switch (userRole) {
      case 'admin':
        return AdminRouter;
      case 'cashier':
        return CashierRouter;
      case 'stylist':
        return StylistRouter;
      case 'customer':
        return CustomerRouter;
      default:
        return null;
    }
  };

  // Navigate to role-specific dashboard
  const goToRoleDashboard = (role?: UserRole) => {
    const roleRouter = getRoleRouter(role);
    if (roleRouter) {
      router.push(roleRouter.goToDashboard());
    }
  };

  // Navigate with role awareness
  const navigateTo = (path: string) => {
    router.push(path);
  };

  // Check if user can access a route
  const canAccessRoute = (path: string, role?: UserRole) => {
    const userRole = role || user?.role;
    
    // Public routes are accessible to everyone
    if (PublicRouter.isPublicRoute(path)) return true;
    
    // Auth routes are accessible to non-authenticated users
    if (AuthRouter.isAuthRoute(path)) return !user;
    
    // Check role-specific access
    switch (userRole) {
      case 'admin':
        return AdminRouter.isAdminRoute(path);
      case 'cashier':
        return CashierRouter.isCashierRoute(path);
      case 'stylist':
        return StylistRouter.isStylistRoute(path);
      case 'customer':
        return CustomerRouter.isCustomerRoute(path);
      default:
        return false;
    }
  };

  return {
    // Next.js router methods
    push: router.push,
    replace: router.replace,
    back: router.back,
    forward: router.forward,
    refresh: router.refresh,
    
    // Custom methods
    pathname,
    user,
    navigateTo,
    goToRoleDashboard,
    canAccessRoute,
    getRoleRouter,
    
    // Role-specific routers
    admin: AdminRouter,
    cashier: CashierRouter,
    stylist: StylistRouter,
    customer: CustomerRouter,
    public: PublicRouter,
    auth: AuthRouter,
  };
};

export default useRouter;
