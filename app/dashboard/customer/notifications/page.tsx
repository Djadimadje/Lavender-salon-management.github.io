'use client';

import React, { useState } from 'react';
import { FaBell, FaCheck, FaTrash, FaEnvelopeOpen, FaCalendarAlt, FaClock } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'appointment' | 'reminder' | 'confirmation' | 'general';
  read: boolean;
  time: string;
  date: string;
}

export default function CustomerNotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  
  // Mock notifications data (in production, fetch from API)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Appointment Confirmed',
      message: 'Your appointment for Hair Styling on Dec 10, 2025 at 10:00 AM has been confirmed.',
      type: 'confirmation',
      read: false,
      time: '2 hours ago',
      date: '2025-12-07',
    },
    {
      id: 2,
      title: 'Reminder: Upcoming Appointment',
      message: 'You have an appointment tomorrow at 10:00 AM with Sarah Martinez.',
      type: 'reminder',
      read: false,
      time: '1 day ago',
      date: '2025-12-06',
    },
    {
      id: 3,
      title: 'Booking Confirmed',
      message: 'Your booking for Manicure service has been successfully confirmed.',
      type: 'confirmation',
      read: true,
      time: '3 days ago',
      date: '2025-12-04',
    },
    {
      id: 4,
      title: 'New Promotion Available',
      message: 'Get 20% off on your next spa treatment. Limited time offer!',
      type: 'general',
      read: true,
      time: '5 days ago',
      date: '2025-12-02',
    },
    {
      id: 5,
      title: 'Appointment Reminder',
      message: 'Don\'t forget your appointment on Dec 15, 2025 at 2:00 PM.',
      type: 'reminder',
      read: false,
      time: '1 week ago',
      date: '2025-11-30',
    },
  ]);

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <FaCalendarAlt className="text-blue-500" />;
      case 'reminder':
        return <FaClock className="text-orange-500" />;
      case 'confirmation':
        return <FaCheck className="text-green-500" />;
      default:
        return <FaBell className="text-purple-500" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Stats for display
  const stats = [
    { label: 'Total Notifications', value: notifications.length, icon: FaBell, color: 'bg-blue-500' },
    { label: 'Unread', value: unreadCount, icon: FaEnvelopeOpen, color: 'bg-orange-500' },
    { label: 'This Week', value: notifications.filter(n => new Date(n.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length, icon: FaCalendarAlt, color: 'bg-purple-500' },
    { label: 'Read', value: notifications.length - unreadCount, icon: FaCheck, color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <PageHeader 
        title="Notifications" 
        description="Stay updated with your appointments and important messages" 
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-2 md:p-3 rounded-full`}>
                  <Icon className="text-white text-xl md:text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Actions */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">All Notifications</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base ${
                filter === 'all'
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base ${
                filter === 'unread'
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="hidden sm:inline">Unread ({unreadCount})</span>
              <span className="sm:hidden">({unreadCount})</span>
            </button>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="px-3 md:px-4 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <FaCheck />
                <span className="hidden sm:inline">Mark All as Read</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      {filteredNotifications.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-12 text-center">
          <FaBell className="text-4xl md:text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">No notifications</h3>
          <p className="text-gray-500 text-sm md:text-base">
            {filter === 'unread' 
              ? "You're all caught up! No unread notifications."
              : "You don't have any notifications yet."}
          </p>
        </div>
      ) : (
        <div className="-mx-4 md:mx-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredNotifications.map((notification) => (
                  <tr 
                    key={notification.id} 
                    className={`hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-semibold ${
                        !notification.read ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`text-sm max-w-md ${
                        !notification.read ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        {notification.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {notification.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          !notification.read
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {!notification.read ? 'Unread' : 'Read'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-green-600 hover:text-green-900"
                            title="Mark as read"
                          >
                            <FaCheck />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
