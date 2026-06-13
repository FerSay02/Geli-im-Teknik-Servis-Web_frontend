import { company, faqs, serviceAreas, services } from '../data/siteData.js';
import { absoluteUrl, canonicalPath, serviceRouteMap, siteUrl } from '../data/seoConfig.js';

function SeoSchema() {
  const path = canonicalPath(window.location.pathname);
  const canonicalUrl = absoluteUrl(path);
  const logoUrl = absoluteUrl('/site-logo.png');

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  const areaServed = serviceAreas.map((area) => ({
    '@type': 'Place',
    name: `${area.district}, Ä°zmir`,
  }));

  const serviceSchemas = services.map((service) => {
    const servicePath = serviceRouteMap[service.title] || '/';

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absoluteUrl(servicePath)}#service`,
      name: service.title,
      description: service.description,
      url: absoluteUrl(servicePath),
      provider: {
        '@id': `${siteUrl}/#localbusiness`,
      },
      areaServed,
    };
  });

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: company.name,
      image: logoUrl,
      logo: logoUrl,
      telephone: company.phone,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4076 Sokak No: 51 YeÅŸilova',
        addressLocality: 'Bornova',
        addressRegion: 'Ä°zmir',
        addressCountry: 'TR',
      },
      areaServed,
      openingHours: 'Mo-Sa 09:00-19:00',
      url: siteUrl,
      sameAs: [company.whatsappHref],
      makesOffer: services.map((service) => {
        const servicePath = serviceRouteMap[service.title] || '/';

        return {
          '@type': 'Offer',
          url: absoluteUrl(servicePath),
          itemOffered: {
            '@id': `${absoluteUrl(servicePath)}#service`,
          },
        };
      }),
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
    ...serviceSchemas,
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default SeoSchema;
