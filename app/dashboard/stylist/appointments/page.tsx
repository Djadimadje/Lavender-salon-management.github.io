'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import AppointmentFilters from './AppointmentFilters';
import { mockAppointments } from './appointmentData';
import AppointmentList from './AppointmentList';

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');

  const filteredAppointments = mockAppointments.filter((apt) => {
    const matchesSearch = apt.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    const matchesDate = dateFilter === 'all' || apt.date === dateFilter;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="My Appointments" 
        description="View and manage all your bookings"
      />

      {/* Filters */}
      <AppointmentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      {/* Appointment List */}
      <AppointmentList appointments={filteredAppointments} />
    </div>
  );
}
