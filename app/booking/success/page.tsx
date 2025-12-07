'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaCheckCircle, FaCalendarAlt, FaHome, FaDownload, FaPrint, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '@/lib/hooks/useAuth';

export default function BookingSuccessPage() {
  const { isAuthenticated, user } = useAuth();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');
  
  const [showReceipt, setShowReceipt] = useState(false);

  // Mock booking details (in production, fetch from API using bookingId)
  const bookingDetails = {
    id: bookingId || '#12345',
    service: 'Hair Styling',
    price: 45,
    stylist: 'Sarah Martinez',
    date: 'December 10, 2025',
    time: '10:00 AM',
    duration: '60 minutes',
    customerName: user?.firstName ? `${user.firstName} ${user.lastName}` : 'Guest Customer',
    customerEmail: user?.email || 'customer@example.com',
    confirmationDate: new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleDownloadReceipt = () => {
    // In production, this would generate a PDF
    alert('Receipt download functionality will be implemented with backend integration');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-6">
              <FaCheckCircle className="text-6xl text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Your appointment has been successfully scheduled.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Confirmation sent to <span className="font-medium text-gray-700">{bookingDetails.customerEmail}</span>
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-gradient-to-r from-[#f5ebe0] to-[#c9a961]/20 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">What's Next?</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>A confirmation email with receipt has been sent to your email address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>You'll receive a reminder 24 hours before your appointment</span>
              </li>
              {isAuthenticated && (
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>You can view and manage your appointment from your dashboard</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Please arrive 10 minutes early for your appointment</span>
              </li>
            </ul>
          </div>

          {/* Receipt Toggle Button */}
          <div className="text-center mb-6">
            <button
              onClick={() => setShowReceipt(!showReceipt)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a961] text-white rounded-lg hover:bg-[#8b5e3c] transition-colors font-semibold"
            >
              <FaEnvelope />
              {showReceipt ? 'Hide Receipt' : 'View Electronic Receipt'}
            </button>
          </div>

          {/* Electronic Receipt */}
          {showReceipt && (
            <div className="border-2 border-gray-300 rounded-lg p-6 mb-6 bg-white print:border-0">
              <div className="text-center border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Lavender Salon</h2>
                <p className="text-sm text-gray-600">Electronic Receipt</p>
                <p className="text-xs text-gray-500 mt-1">Booking ID: {bookingDetails.id}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Customer:</span>
                  <span className="text-gray-900">{bookingDetails.customerName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="text-gray-900">{bookingDetails.customerEmail}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Service:</span>
                  <span className="text-gray-900">{bookingDetails.service}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Stylist:</span>
                  <span className="text-gray-900">{bookingDetails.stylist}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Date:</span>
                  <span className="text-gray-900">{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Time:</span>
                  <span className="text-gray-900">{bookingDetails.time}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-900">{bookingDetails.duration}</span>
                </div>
                <div className="flex justify-between py-3 bg-gray-50 px-3 rounded">
                  <span className="font-bold text-gray-900">Total Amount:</span>
                  <span className="font-bold text-xl text-[#8b5e3c]">${bookingDetails.price}</span>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 pt-4 border-t">
                <p>Confirmed on {bookingDetails.confirmationDate}</p>
                <p className="mt-2">Thank you for choosing Lavender Salon!</p>
              </div>

              {/* Receipt Actions */}
              <div className="flex gap-3 mt-6 print:hidden">
                <button
                  onClick={handlePrintReceipt}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#8b5e3c] text-[#8b5e3c] rounded-lg hover:bg-[#8b5e3c] hover:text-white transition-colors"
                >
                  <FaPrint />
                  Print Receipt
                </button>
                <button
                  onClick={handleDownloadReceipt}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#8b5e3c] text-[#8b5e3c] rounded-lg hover:bg-[#8b5e3c] hover:text-white transition-colors"
                >
                  <FaDownload />
                  Download PDF
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard/customer/appointments"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#3d2817] transition-colors font-semibold"
                >
                  <FaCalendarAlt />
                  View My Appointments
                </Link>
                <Link
                  href="/dashboard/customer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  <FaHome />
                  Go to Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/booking"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#3d2817] transition-colors font-semibold"
                >
                  <FaCalendarAlt />
                  Book Another Appointment
                </Link>
                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  <FaHome />
                  Return Home
                </Link>
              </>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>
              Need to reschedule or cancel?{' '}
              {isAuthenticated ? (
                <Link href="/dashboard/customer/appointments" className="text-[#8b5e3c] hover:underline font-medium">
                  Manage your appointments
                </Link>
              ) : (
                <span>
                  Please contact us at{' '}
                  <a href="tel:+1234567890" className="text-[#8b5e3c] hover:underline font-medium">
                    (123) 456-7890
                  </a>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:border-0,
          .print\\:border-0 * {
            visibility: visible;
          }
          .print\\:border-0 {
            position: absolute;
            left: 0;
            top: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
