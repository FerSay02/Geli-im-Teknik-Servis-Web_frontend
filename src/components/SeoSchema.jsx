import { company, faqs, serviceAreas, services } from '../data/siteData.js';

function SeoSchema() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: company.name,
      image: `${window.location.origin}/site-logo.png`,
      telephone: company.phone,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4076 Sokak No: 51 Yeşilova',
        addressLocality: 'Bornova',
        addressRegion: 'İzmir',
        addressCountry: 'TR',
      },
      areaServed: serviceAreas.map((area) => ({
        '@type': 'Place',
        name: `${area.district}, İzmir`,
      })),
      openingHours: 'Mo-Sa 09:00-19:00',
      url: window.location.origin,
      sameAs: [company.whatsappHref],
      makesOffer: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          areaServed: 'İzmir',
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default SeoSchema;
