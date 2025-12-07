'use client';

import React, { useState } from 'react';
import { FaBell, FaCheck, FaTrash, FaEnvelopeOpen } from 'react-icons/fa';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'booking' | 'rating' | 'schedule' | 'reminder' | 'general';
  read: boolean;
  time: string;
  date: string;
}

export default function StylistNotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New Booking',
      message: 'You have a new booking for Hair Styling at 2:00 PM today.',
      type: 'booking',
      read: false,
      time: '20 min ago',
      date: '2025-12-07',
    },
    {
      id: 2,
      title: 'Customer Review',
      message: 'Jane Doe rated you 5 stars! "Amazing service and very professional!"',
      type: 'rating',
      read: false,
      time: '1 hour ago',
      date: '2025-12-07',
    },
    {
      id: 3,
      title: 'Appointment Reminder',
      message: 'Reminder: You have an appointment in 30 minutes with John Smith.',
      type: 'reminder',
      read: false,
      time: '2 hours ago',
      date: '2025-12-07',
    },
    {
      id: 4,
      title: 'Schedule Update',
      message: 'Your schedule for tomorrow has been updated.',
      type: 'schedule',
      read: true,
      time: '5 hours ago',
      date: '2025-12-07',
    },
  ]);

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return '📅';
      case 'rating':
        return '⭐';
      case 'schedule':
        return '📋';
      case 'reminder':
        return '⏰';
      default:
        return '📢';
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <FaBell className="text-3xl text-[#8b5e3c]" />
          <h1 className="text-4xl font-bold text-gray-900">My Notifications</h1>
        </div>
        <p className="text-gray-600">Stay updated with your bookings, reviews, and schedule changes</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-6">
            <div>
              <p className="text-sm text-gray-600">Total Notifications</p>
              <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-[#8b5e3c]">{unreadCount}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'unread'
                  ? 'bg-[#8b5e3c] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Unread ({unreadCount})
            </button>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <FaCheck />
                Mark All as Read
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <FaBell className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications</h3>
            <p className="text-gray-500">
              {filter === 'unread' 
                ? "You're all caught up! No unread notifications."
                : "You don't have any notifications yet."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg ${
                !notification.read ? 'border-l-4 border-[#8b5e3c] bg-blue-50/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className={`text-lg font-semibold ${
                      !notification.read ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className={`mb-3 ${
                    !notification.read ? 'text-gray-800' : 'text-gray-600'
                  }`}>
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{notification.time}</p>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                        >
                          <FaEnvelopeOpen />
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
