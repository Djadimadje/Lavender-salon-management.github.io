# Router Module Documentation

## Overview
Centralized routing system with role-based navigation for Lavender Salon.

## Structure

```
lib/routes/
├── index.ts           # All routes and navigation items
├── admin.ts           # Admin router module
├── cashier.ts         # Cashier router module
├── stylist.ts         # Stylist router module
├── customer.ts        # Customer router module
├── public.ts          # Public router module
├── auth.ts            # Auth router module
├── useRouter.ts       # Custom router hook
└── useRouteGuard.ts   # Route protection hook
```

## Usage Examples

### 1. Basic Navigation

```tsx
import { publicRoutes, authRoutes } from '@/lib/routes';

// Navigate to services
<Link href={publicRoutes.services}>Services</Link>

// Navigate to login
<Link href={authRoutes.login}>Login</Link>

// Navigate to service detail
<Link href={publicRoutes.serviceDetail('123')}>View Service</Link>
```

### 2. Using Custom Router Hook

```tsx
'use client';

import { useRouter } from '@/lib/routes/useRouter';

export default function MyComponent() {
  const router = useRouter();
  
  // Navigate to role-specific dashboard
  const goToDashboard = () => {
    router.goToRoleDashboard();
  };
  
  // Navigate using role-specific router
  const goToBookings = () => {
    router.push(router.admin.routes.bookings);
  };
  
  // Check access
  const canAccess = router.canAccessRoute('/dashboard/admin/users');
  
  return (
    <button onClick={goToDashboard}>
      Go to My Dashboard
    </button>
  );
}
```

### 3. Role-Specific Navigation

```tsx
import AdminRouter from '@/lib/routes/admin';
import CustomerRouter from '@/lib/routes/customer';

// Admin navigation
const handleAdminNav = () => {
  router.push(AdminRouter.routes.bookings);
};

// Customer navigation  
const handleCustomerNav = () => {
  router.push(CustomerRouter.routes.dashboard);
};

// Get navigation items for sidebar
const navItems = AdminRouter.navItems;
```

### 4. Route Protection

```tsx
'use client';

import { useRouteGuard } from '@/lib/routes/useRouteGuard';

export default function ProtectedPage() {
  // Automatically redirects unauthorized users
  useRouteGuard();
  
  return <div>Protected Content</div>;
}
```

### 5. Dynamic Sidebar with Routes

```tsx
'use client';

import { useAuth } from '@/lib/hooks/useAuth';
import { adminNavItems, customerNavItems } from '@/lib/routes';

export default function Sidebar() {
  const { user } = useAuth();
  
  const navItems = user?.role === 'admin' 
    ? adminNavItems 
    : customerNavItems;
  
  return (
    <nav>
      {navItems.map(item => (
        <Link key={item.href} href={item.href}>
          {item.icon} {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

## Available Routers

### AdminRouter
- `routes.bookings` - Bookings management
- `routes.reports` - Reports & analytics
- `routes.users` - User management
- `routes.dashboard` - Admin dashboard

### CashierRouter
- `routes.dashboard` - Cashier dashboard

### StylistRouter
- `routes.dashboard` - Stylist schedule

### CustomerRouter
- `routes.dashboard` - Customer appointments

### PublicRouter
- `routes.home` - Homepage
- `routes.services` - Services listing
- `routes.serviceDetail(id)` - Service detail
- `routes.booking` - Booking flow
- `routes.bookingSuccess` - Booking confirmation

### AuthRouter
- `routes.login` - Login page
- `routes.register` - Registration page
- `routes.resetPassword` - Password reset

## Benefits

✅ **Centralized** - All routes in one place
✅ **Type-Safe** - TypeScript ensures correct paths
✅ **Role-Based** - Automatic access control
✅ **Maintainable** - Easy to update routes
✅ **Reusable** - Use across components
✅ **Protected** - Built-in route guards
