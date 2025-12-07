import { TimeSlot, BookingData, Booking } from '../types/booking';
import { stylists, Stylist } from '../data/stylists';

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get available time slots for a specific date and service
 * In production, this would call the backend API
 */
export const getAvailableTimeSlots = async (
  date: string,
  serviceId: number
): Promise<TimeSlot[]> => {
  await delay(500); // Simulate API call

  // Mock time slots (9 AM to 6 PM, 30-minute intervals)
  const allSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
  ];

  // Randomly mark some slots as unavailable (simulate bookings)
  return allSlots.map((time) => ({
    time,
    available: Math.random() > 0.3, // 70% availability
  }));
};

/**
 * Get available stylists for a specific service, date, and time
 * In production, this would call the backend API
 */
export const getAvailableStylists = async (
  serviceId: number,
  date: string,
  time: string
): Promise<Stylist[]> => {
  await delay(500); // Simulate API call

  // Filter stylists (mock logic - in production, backend does this)
  // For now, return 3-5 random stylists from the mock data
  const availableCount = Math.floor(Math.random() * 3) + 3; // 3-5 stylists
  const shuffled = [...stylists].sort(() => 0.5 - Math.random());
  const available = shuffled.slice(0, availableCount);

  // Sort by rating (highest first)
  return available.sort((a, b) => (b.rating || 0) - (a.rating || 0));
};

/**
 * Get the suggested stylist (highest rated among available)
 */
export const getSuggestedStylist = (stylists: Stylist[]): Stylist | null => {
  if (stylists.length === 0) return null;
  return stylists.reduce((prev, current) =>
    (prev.rating || 0) > (current.rating || 0) ? prev : current
  );
};

/**
 * Create a new booking
 * In production, this would POST to the backend API
 */
export const createBooking = async (bookingData: BookingData): Promise<Booking> => {
  await delay(1000); // Simulate API call

  console.log('Creating booking:', bookingData);

  // Mock response
  const mockBooking: Booking = {
    id: Math.floor(Math.random() * 10000),
    service: {
      id: bookingData.serviceId,
      name: 'Mock Service',
      description: '',
      price: 0,
      duration: 60,
      image: '',
    },
    stylist: {
      id: bookingData.stylistId,
      name: 'Mock Stylist',
      email: '',
      phone: '',
      photo: '',
      rating: 5,
      specialty: '',
    },
    date: bookingData.date,
    time: bookingData.time,
    duration: 60,
    status: 'confirmed',
    customerName: bookingData.customerName,
    customerEmail: bookingData.customerEmail,
    customerPhone: bookingData.customerPhone,
    createdAt: new Date().toISOString(),
  };

  return mockBooking;
};
