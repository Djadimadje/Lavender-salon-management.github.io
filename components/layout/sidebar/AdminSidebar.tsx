'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { removeToken } from '@/lib/auth';
import { adminNavItems } from '@/lib/routes';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

interface AdminSidebarProps {
  userEmail?: string;
  userName?: string;
  userImage?: string;
}

export default function AdminSidebar({ userEmail, userName, userImage }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);

  // Get user initials for fallback
  const getInitials = (email: string) => {
    if (userName) {
      return userName
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return email.split('@')[0].slice(0, 2).toUpperCase();
  };

  const initials = getInitials(userEmail || 'admin@lavender.com');

  // Mock notifications for admin
  const notifications = [
    { id: 1, message: 'New booking request from Jane Doe', read: false, time: '30 min ago' },
    { id: 2, message: 'New user registration pending approval', read: false, time: '1 hour ago' },
    { id: 3, message: 'Monthly report is ready to view', read: true, time: '2 hours ago' },
    { id: 4, message: 'System update completed successfully', read: true, time: '1 day ago' },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    removeToken();
    router.push('/auth/login');
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-[#3d2817] to-[#2a1a0f] shadow-xl h-screen flex flex-col overflow-visible fixed left-0 top-0">
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
          {/* Profile Picture or Initials */}
          {userImage ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#c9a961]">
              <Image
                src={userImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#8b5e3c] rounded-full flex items-center justify-center ring-2 ring-[#c9a961]/50">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
          )}
          <div className="flex-1">
            <p className="font-semibold text-white">
              {userName || 'Admin Portal'}
            </p>
            <p className="text-xs text-white/60">
              {userEmail || 'admin@lavender.com'}
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
                    href="/dashboard/admin/notifications"
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
        {adminNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
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
              <Icon
                className={`text-xl ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                } transition-transform`}
              />
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
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}