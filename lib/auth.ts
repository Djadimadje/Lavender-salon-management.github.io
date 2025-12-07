import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  user_id: number;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  exp: number;
}

// Get token from localStorage
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

// Set token in localStorage
export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('token', token);
};

// Remove token from localStorage
export const removeToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
};

// Decode JWT token (or mock token)
export const decodeToken = (token: string): DecodedToken | null => {
  try {
    // Try to decode as JWT first
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    // If not a valid JWT, try to decode as base64 (for development mock tokens)
    try {
      const decoded = JSON.parse(atob(token));
      return decoded;
    } catch (e) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
};

// Check if token is expired
export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) return true;
  return decoded.exp * 1000 < Date.now();
};

// Get current user from token
export const getCurrentUser = (): DecodedToken | null => {
  const token = getToken();
  if (!token || isTokenExpired(token)) {
    removeToken();
    return null;
  }
  return decodeToken(token);
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

// Check if user has specific role
export const hasRole = (role: string): boolean => {
  const user = getCurrentUser();
  return user?.role === role;
};

// Login function
export const login = async (email: string, password: string): Promise<{ success: boolean; token?: string; role?: string; error?: string }> => {
  try {
    // For development: Mock authentication based on email
    // In production, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    // Mock token generation (in production, this comes from backend)
    const role = getUserRoleFromEmail(email);
    const mockToken = btoa(JSON.stringify({
      user_id: 1,
      email,
      role,
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '+1 (555) 123-4567',
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours from now
    }));
    
    setToken(mockToken);
    return { success: true, token: mockToken, role };
  } catch (error) {
    return { success: false, error: 'Login failed' };
  }
};

// Get user role from email (for development/demo purposes)
export const getUserRoleFromEmail = (email: string): string => {
  const emailLower = email.toLowerCase();
  
  if (emailLower.includes('admin')) return 'admin';
  if (emailLower.includes('cashier')) return 'cashier';
  if (emailLower.includes('stylist')) return 'stylist';
  return 'customer';
};

// Get dashboard route based on role
export const getDashboardRoute = (role: string): string => {
  switch (role) {
    case 'admin':
      return '/dashboard/admin';
    case 'cashier':
      return '/dashboard/cashier';
    case 'stylist':
      return '/dashboard/stylist';
    case 'customer':
      return '/dashboard/customer';
    default:
      return '/dashboard/customer';
  }
};
