'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import WalkInForm from './WalkInForm';
import RecentWalkIns from './RecentWalkIns';
import { WalkInCustomer } from './types';

export default function WalkInPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCustomerAdded = (customer: WalkInCustomer) => {
    // Trigger refresh of recent walk-ins list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Walk-in Customer Registration" 
        description="Register customers who arrive without prior booking" 
      />

      {/* Registration Form */}
      <WalkInForm onCustomerAdded={handleCustomerAdded} />

      {/* Recent Walk-ins */}
      <RecentWalkIns refreshTrigger={refreshTrigger} />
    </div>
  );
}
