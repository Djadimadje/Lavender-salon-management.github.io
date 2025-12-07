// Public Routes (accessible without authentication)
export const publicRoutes = {
  home: '/',
  services: '/services',
  serviceDetail: (id: string) => `/services/${id}`,
  booking: '/booking',
  bookingSuccess: '/booking/success',
} as const;

export const PublicRouter = {
  routes: publicRoutes,

  // Helper methods for public navigation
  goToHome: () => publicRoutes.home,
  goToServices: () => publicRoutes.services,
  goToServiceDetail: (id: string) => publicRoutes.serviceDetail(id),
  goToBooking: () => publicRoutes.booking,
  goToBookingSuccess: () => publicRoutes.bookingSuccess,

  // Check if current path is public route
  isPublicRoute: (path: string) => {
    const publicPaths = [
      publicRoutes.home,
      publicRoutes.services,
      publicRoutes.booking,
      publicRoutes.bookingSuccess,
    ];
    return publicPaths.some(route => path.startsWith(route)) || path.startsWith('/services/');
  },
} as const;

export default PublicRouter;
