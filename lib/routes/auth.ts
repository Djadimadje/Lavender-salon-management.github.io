// Auth Routes
export const authRoutes = {
  login: '/auth/login',
  register: '/auth/register',
  resetPassword: '/auth/reset-password',
} as const;

export const AuthRouter = {
  routes: authRoutes,

  // Helper methods for auth navigation
  goToLogin: () => authRoutes.login,
  goToRegister: () => authRoutes.register,
  goToResetPassword: () => authRoutes.resetPassword,

  // Check if current path is auth route
  isAuthRoute: (path: string) => {
    return path.startsWith('/auth');
  },
} as const;

export default AuthRouter;
