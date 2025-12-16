'use client';

import PageHeader from '@/components/shared/PageHeader';
import PerformanceOverview from './PerformanceOverview';
import RatingsChart from './RatingsChart';
import ServiceStats from './ServiceStats';
import ClientFeedback from './ClientFeedback';

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="Performance Analytics" 
        description="Track your performance metrics and client satisfaction"
      />

      {/* Performance Overview */}
      <PerformanceOverview />

      {/* Ratings Chart */}
      <RatingsChart />

      {/* Service Stats */}
      <ServiceStats />

      {/* Client Feedback */}
      <ClientFeedback />
    </div>
  );
}
