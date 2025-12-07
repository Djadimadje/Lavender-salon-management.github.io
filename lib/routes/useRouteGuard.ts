'use client';

import { useEffect } from 'react';
import { usePathname, useRouter as useNextRouter } from 'next/navigation';
import { getCurrentUser, isAuthenticated } from '../auth';
import { publicRoutes, authRoutes } from './index';

/**
 * Route guard hook to protect routes based on authentication and roles
 */
export const useRouteGuard = () => {
  const pathname = usePathname();
  const router = useNextRouter();

  useEffect(() => {
    const checkAccess = () => {
      const authenticated = isAuthenticated();
      const user = getCurrentUser();

      // Allow public routes
      const publicPaths = [
        publicRoutes.home,
        publicRoutes.services,
        publicRoutes.booking,
      ];
      
      if (publicPaths.some(path => pathname.startsWith(path)) || pathname.startsWith('/services/')) {
        return;
      }

      // Redirect authenticated users away from auth pages
      if (pathname.startsWith('/auth') && authenticated) {
        const role = user?.role;
        switch (role) {
          case 'admin':
            router.replace('/dashboard/admin/bookings');
            break;
          case 'cashier':
            router.replace('/dashboard/cashier');
            break;
          case 'stylist':
            router.replace('/dashboard/stylist');
            break;
          case 'customer':
            router.replace('/dashboard/customer');
            break;
          default:
            router.replace('/');
        }
        return;
      }

      // Protect dashboard routes
      if (pathname.startsWith('/dashboard')) {
        if (!authenticated) {
          router.replace(authRoutes.login);
          return;
        }

        const role = user?.role;

        // Check role-specific access
        if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
          router.replace('/dashboard');
        } else if (pathname.startsWith('/dashboard/cashier') && role !== 'cashier') {
          router.replace('/dashboard');
        } else if (pathname.startsWith('/dashboard/stylist') && role !== 'stylist') {
          router.replace('/dashboard');
        } else if (pathname.startsWith('/dashboard/customer') && role !== 'customer') {
          router.replace('/dashboard');
        }
      }
    };

    checkAccess();
  }, [pathname, router]);
};

export default useRouteGuard;
