# Lavender Salon Management System

A comprehensive salon management system built with Next.js 15, TypeScript, and Tailwind CSS. This application enables remote business monitoring and management for a Rwanda-based salon from anywhere in the world.

## 🌟 Features

### Customer Features
- 🏠 **Landing Page** - Beautiful hero banner, services overview, and testimonials
- 📅 **Online Booking System** - 4-step booking flow with service selection, stylist selection, date/time picker, and review
- 🔍 **Service Browsing** - Browse and filter services by category (Hair, Makeup, Nails, Spa, Beauty)
- 📋 **Appointment Management** - View and manage upcoming and past appointments
- 📊 **Booking History** - Track all previous bookings and services
- 🔔 **Notifications** - Real-time notifications for booking confirmations and updates
- 👤 **User Profile** - Manage personal information and preferences
- ⭐ **Ratings & Reviews** - Rate services and stylists after appointments

### Admin Features
- 📊 **Comprehensive Dashboard** - Real-time business overview with key metrics
- 👥 **User Management** - Manage customers, stylists, cashiers, and admins
- 📅 **Booking Management** - View and manage all bookings with status tracking
- 📈 **Advanced Reports & Analytics**
  - Revenue Reports (Daily/Weekly/Monthly/Yearly with interactive charts)
  - Service Performance Analysis (Rankings, profitability, time metrics)
  - Stylist Performance Tracking (Revenue, ratings, bookings, cancellations)
  - Booking Analytics (Status distribution, trends)
  - Customer Insights (New vs returning, VIP customers, satisfaction scores)
  - Cashier Financial Activities (Cash tracking, payment methods, daily closures)
- 📝 **Content Management** - Manage services, pricing, and descriptions
- 💰 **Transaction Monitoring** - Track all financial transactions
- 📥 **Export Functionality** - Download reports in PDF/CSV/Excel formats

### Stylist Features
- 📅 **Schedule Management** - View and manage daily appointments
- 👥 **Client Information** - Access customer details and preferences
- 📊 **Performance Metrics** - Track personal revenue and ratings
- 🔔 **Notifications** - Get notified of new bookings and changes

### Cashier Features
- 💳 **Transaction Processing** - Handle payments (Cash, Card, Mobile)
- 📊 **Daily Closure** - End-of-day balance reconciliation
- 💰 **Payment Tracking** - Monitor all payment activities
- 🧾 **Receipt Generation** - Generate electronic receipts for customers

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Authentication:** JWT-based auth system
- **State Management:** React Context + Custom Hooks

## Project Structure

```
lavender-frontend/
├── app/                      # Next.js App Router pages
│   ├── auth/                # Authentication pages
│   ├── booking/             # Booking flow
│   ├── dashboard/           # Role-based dashboards
│   └── services/            # Service pages
├── components/              # Reusable components
│   ├── layout/             # Header, Footer, Sidebar
│   ├── ui/                 # Button, Input, Modal, etc.
│   ├── cards/              # ServiceCard, StylistCard, BookingCard
│   └── sections/           # HeroBanner, Testimonials, etc.
├── lib/                     # Utilities and helpers
│   ├── hooks/              # Custom React hooks
│   ├── seo/                # SEO utilities
│   ├── api.ts              # Axios instance
│   ├── auth.ts             # Auth helpers
│   └── utils.ts            # Utility functions
└── styles/                 # CSS variables
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Implementation Status

- ✅ Project structure
- ✅ Authentication pages
- ✅ Booking flow components
- ✅ Dashboard layouts
- ✅ Reusable UI components
- ✅ API integration setup
- ✅ SEO utilities
- ⏳ Backend API integration (pending)
- ⏳ Payment processing (pending)
- ⏳ Real-time notifications (pending)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Contributing

This is a private project for Lavender Salon.

## License

Proprietary - All rights reserved
