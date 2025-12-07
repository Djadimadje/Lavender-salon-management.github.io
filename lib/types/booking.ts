// Booking-related TypeScript interfaces

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  image: string;
  category?: string;
}

export interface Stylist {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  rating: number;
  specialty: string;
  priceModifier?: number; // percentage adjustment (e.g., 10 for +10%)
  totalReviews?: number;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingData {
  serviceId: number;
  stylistId: number;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  userId?: number; // Only if authenticated
}

export interface Booking {
  id: number;
  service: Service;
  stylist: Stylist;
  date: string;
  time: string;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  createdAt: string;
}
