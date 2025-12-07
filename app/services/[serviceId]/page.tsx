import React from 'react';

interface ServiceDetailPageProps {
  params: {
    serviceId: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Service Details</h1>
      <p className="text-gray-600">Service ID: {params.serviceId}</p>
      {/* Service details and booking button will be displayed here */}
    </div>
  );
}
