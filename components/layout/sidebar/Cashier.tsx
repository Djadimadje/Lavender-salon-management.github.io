'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { removeToken } from '@/lib/auth';
import { cashierNavItems } from '@/lib/routes';
import { FaBell } from 'react-icons/fa';

interface CashierSidebarProps {
  userEmail?: string;
}

export default function CashierSidebar({ userEmail }: CashierSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock notifications for cashier
  const notifications = [
    { id: 1, message: 'New payment received: $150.00', read: false, time: '15 min ago' },
    { id: 2, message: 'Daily sales report available', read: false, time: '2 hours ago' },
    { id: 3, message: 'Refund request for booking #1234', read: true, time: '3 hours ago' },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    removeToken();
    router.push('/auth/login');
  };

  return (
    <aside className="w-72 bg-gradient-to-b from-[#3d2817] to-[#2a1a0f] shadow-xl min-h-screen flex flex-col overflow-visible">
      {/* Header 
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            🌿
          </div>
          <div>
            <h2 className="text-2xl font-serif italic text-white">
              Lavender
            </h2>
            <p className="text-xs text-white/70">
              Beauty & Wellness
            </p>
          </div>
        </Link>
      </div> */}

      {/* User Info */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">💰</span>
          <div className="flex-1">
            <p className="font-semibold text-white">
              Cashier Portal
            </p>
            <p className="text-xs text-white/60">
              {userEmail || 'cashier@lavender.com'}
            </p>
          </div>
          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <FaBell className="text-xl" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="fixed left-72 top-20 w-80 bg-white rounded-lg shadow-2xl z-[9999] max-h-96 overflow-y-auto border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-xs text-gray-500">{unreadCount} unread</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${
                        !notif.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <p className={`text-sm ${
                        !notif.read ? 'font-semibold text-gray-900' : 'text-gray-700'
                      }`}>
                        {notif.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-200 text-center space-y-2">
                  <button className="text-sm text-[#8b5e3c] hover:underline font-medium block w-full">
                    Mark all as read
                  </button>
                  <Link
                    href="/dashboard/cashier/notifications"
                    className="text-sm text-white bg-[#8b5e3c] hover:bg-[#3d2817] font-medium block w-full py-2 rounded transition-colors"
                    onClick={() => setShowNotifications(false)}
                  >
                    View All Notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        {cashierNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-start gap-4 px-6 py-3 mb-1 transition-all group
                ${
                  isActive
                    ? 'bg-[#c9a961] text-white shadow-lg'
                    : 'text-white/80 hover:bg-[#8b5e3c]/20'
                }
                ${isActive ? 'border-l-4 border-white' : 'border-l-4 border-transparent'}
              `}
            >
              <span
                className={`text-2xl ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                } transition-transform`}
              >
                {item.icon}
              </span>
              <div className="flex-1">
                <div className={`font-semibold ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </div>
                <div
                  className={`text-xs ${
                    isActive
                      ? 'text-white/90'
                      : 'text-white/50 group-hover:text-white/70'
                  }`}
                >
                  {item.description}
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer with Logout */}
      <div className="p-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 font-semibold transition-colors"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}