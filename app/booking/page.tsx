'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useBookingFlow } from '@/lib/hooks/useBookingFlow';
import { createBooking } from '@/lib/api/booking';
import AdminSidebar from '@/components/layout/sidebar/AdminSidebar';
import CashierSidebar from '@/components/layout/sidebar/Cashier';
import StylistSidebar from '@/components/layout/sidebar/StylistSidebar';
import CustomerSidebar from '@/components/layout/sidebar/Customer';
import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer';
import BookingProgress from './components/BookingProgress';
import StepServiceSelection from './components/StepServiceSelection';
import StepDateTimeSelection from './components/StepDateTimeSelection';
import StepStylistSelection from './components/StepStylistSelection';
import StepReview from './components/StepReview';

function BookingContent() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  
  const booking = useBookingFlow({
    name: isAuthenticated ? `${user?.firstName || ''} ${user?.lastName || ''}`.trim() : '',
    email: isAuthenticated ? user?.email || '' : '',
    phone: isAuthenticated ? user?.phone || '' : '',
  });

  const handleConfirmBooking = async () => {
    console.log('handleConfirmBooking called');
    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);
    console.log('Booking state:', {
      service: booking.selectedService,
      stylist: booking.selectedStylist,
      date: booking.selectedDate,
      time: booking.selectedTime,
      contactInfo: booking.contactInfo,
    });

    if (!booking.selectedService || !booking.selectedStylist || !booking.selectedDate || !booking.selectedTime) {
      alert('Please complete all booking steps');
      return;
    }

    // For guest users, validate contact info
    if (!isAuthenticated) {
      if (!booking.contactInfo.name || !booking.contactInfo.email || !booking.contactInfo.phone) {
        alert('Please provide your contact information');
        return;
      }
    }

    try {
      const bookingData = {
        serviceId: booking.selectedService.id,
        stylistId: booking.selectedStylist.id,
        date: booking.selectedDate,
        time: booking.selectedTime,
        customerName: booking.contactInfo.name,
        customerEmail: booking.contactInfo.email,
        customerPhone: booking.contactInfo.phone,
        userId: isAuthenticated ? user?.user_id : undefined,
      };

      console.log('Creating booking with data:', bookingData);
      const result = await createBooking(bookingData);
      console.log('Booking created successfully:', result);
      
      // Show success message
      alert('✅ Booking Confirmed!\n\nYour appointment has been successfully scheduled.\nA confirmation email with receipt has been sent to ' + booking.contactInfo.email);
      
      // Redirect to success page with booking details
      router.push(`/booking/success?bookingId=${result.id}`);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('❌ Booking Failed\n\nUnable to create your appointment. Please try again or contact support.');
    }
  };

  const renderStep = () => {
    switch (booking.currentStep) {
      case 1:
        return (
          <StepServiceSelection
            selectedService={booking.selectedService}
            onSelectService={booking.setSelectedService}
            onNext={booking.goToNextStep}
          />
        );
      case 2:
        return (
          <StepDateTimeSelection
            selectedDate={booking.selectedDate}
            selectedTime={booking.selectedTime}
            availableTimeSlots={booking.availableTimeSlots}
            loadingSlots={booking.loadingSlots}
            onSelectDate={booking.setSelectedDate}
            onSelectTime={booking.setSelectedTime}
            onNext={booking.goToNextStep}
            onBack={booking.goToPreviousStep}
          />
        );
      case 3:
        return (
          <StepStylistSelection
            selectedStylist={booking.selectedStylist}
            availableStylists={booking.availableStylists}
            loadingStylists={booking.loadingStylists}
            onSelectStylist={booking.setSelectedStylist}
            onNext={booking.goToNextStep}
            onBack={booking.goToPreviousStep}
          />
        );
      case 4:
        return (
          <StepReview
            selectedService={booking.selectedService}
            selectedStylist={booking.selectedStylist}
            selectedDate={booking.selectedDate}
            selectedTime={booking.selectedTime}
            isAuthenticated={isAuthenticated}
            contactInfo={booking.contactInfo}
            onContactInfoChange={booking.setContactInfo}
            onConfirm={handleConfirmBooking}
            onBack={booking.goToPreviousStep}
            onEdit={() => booking.goToStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">Book an Appointment</h1>
        <p className="text-gray-600 text-center">Schedule your beauty service in just a few simple steps</p>
      </div>

      {/* Progress Indicator */}
      <BookingProgress currentStep={booking.currentStep} />

      {/* Main Booking Content */}
      <div className="bg-white rounded-lg shadow-md p-8">
        {renderStep()}
      </div>
    </div>
  );
}

export default function BookingPage() {
  const { user, isAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const fromDashboard = searchParams.get('from') === 'dashboard';

  // Render sidebar based on user role
  const renderSidebar = () => {
    if (!user) return null;

    switch (user.role) {
      case 'admin':
        return <AdminSidebar userEmail={user.email} />;
      case 'cashier':
        return <CashierSidebar userEmail={user.email} />;
      case 'stylist':
        return <StylistSidebar userEmail={user.email} />;
      case 'customer':
        return <CustomerSidebar userEmail={user.email} />;
      default:
        return null;
    }
  };

  // If authenticated AND came from dashboard, show with sidebar
  if (isAuthenticated && fromDashboard) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Role-specific Sidebar */}
        {renderSidebar()}

        {/* Main content area */}
        <main className="flex-1 p-8">
          <BookingContent />
        </main>
      </div>
    );
  }

  // Otherwise, show standalone booking page
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4">
          <BookingContent />
        </div>
      </div>
      <Footer />
    </>
  );
}
