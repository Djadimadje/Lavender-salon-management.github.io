interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}

interface Service {
  name: string;
  description: string;
  price: number;
  duration: number;
}

// Generate Organization Schema
export const generateOrganizationSchema = (org: Organization) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    ...(org.address && {
      address: {
        '@type': 'PostalAddress',
        ...org.address,
      },
    }),
    ...(org.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        ...org.contactPoint,
      },
    }),
  };
};

// Generate Service Schema
export const generateServiceSchema = (service: Service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    },
    duration: `PT${service.duration}M`,
  };
};

// Generate Breadcrumb Schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
