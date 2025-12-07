import React from 'react';

export default function ServicesSection() {
  const services = [
    { icon: '💇', title: 'Haircuts', description: 'Professional styling for all hair types' },
    { icon: '🎨', title: 'Coloring', description: 'Expert color treatments and highlights' },
    { icon: '💅', title: 'Nail Care', description: 'Manicures and pedicures' },
    { icon: '✨', title: 'Spa', description: 'Relaxing treatments and facials' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Discover our range of professional beauty services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
