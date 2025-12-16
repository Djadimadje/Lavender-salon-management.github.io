'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import ClientList from './ClientList';
import ClientStats from './ClientStats';
import { mockClients } from './clientData';
import ClientFilters from './ClientFilters';


export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'visits' | 'recent'>('name');

  const filteredClients = mockClients
    .filter((client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'visits') return b.totalVisits - a.totalVisits;
      return new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime();
    });

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="My Clients" 
        description="Manage your client relationships"
      />

      {/* Stats */}
      <ClientStats clients={mockClients} />

      {/* Filters */}
      <ClientFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Client List */}
      <ClientList clients={filteredClients} />
    </div>
  );
}
