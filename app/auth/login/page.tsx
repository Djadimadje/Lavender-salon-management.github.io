'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { login, getDashboardRoute } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success && result.role) {
        // Redirect based on user role
        const dashboardRoute = getDashboardRoute(result.role);
        router.push(dashboardRoute);
      } else {
        setError(result.error || 'Login failed');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred during login');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        {/* Logo Link to Landing Page */}
        <Link href="/" className="flex items-center justify-center mb-8 group">
          <Image
            src="/pictures/logo.png"
            alt="Lavender Salon Logo"
            width={64}
            height={64}
            className="object-contain mix-blend-multiply transition-transform group-hover:scale-105"
          />
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c9a961] focus:border-[#c9a961]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c9a961] focus:border-[#c9a961]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-[#c9a961] focus:ring-[#c9a961] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <Link href="/auth/reset-password" className="text-sm text-[#8b5e3c] hover:text-[#c9a961]">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3d2817] hover:bg-[#8b5e3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c9a961] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="text-[#8b5e3c] hover:text-[#c9a961] font-medium">
              Sign up
            </Link>
          </p>
        </div>
        
        <div className="mt-4 p-4 bg-[#f5ebe0] rounded-lg">
          <p className="text-xs text-gray-600 font-semibold mb-2">Demo Accounts:</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• <strong>Admin:</strong> admin@gmail.com</li>
            <li>• <strong>Cashier:</strong> cashier@gmail.com</li>
            <li>• <strong>Stylist:</strong> stylist@gmail.com</li>
            <li>• <strong>Customer:</strong> customer@gmail.com</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2 italic">Use any password</p>
        </div>
      </div>
    </div>
  );
}
