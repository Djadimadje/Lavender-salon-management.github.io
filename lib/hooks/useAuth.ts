'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, isAuthenticated } from '../auth';

interface User {
  user_id: number;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  return { user, loading, isAuthenticated: !!user };
};
