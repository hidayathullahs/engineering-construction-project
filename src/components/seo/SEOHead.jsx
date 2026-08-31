import React, { useEffect } from 'react';

/**
 * SEOHead Component
 * Dynamically updates the document title, meta tags, canonical link,
 * and injects JSON-LD structured data for Google and local search crawlers.
 */
export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://buildmydream.in/frames/ezgif-frame-300.jpg',
  schema
}) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or create meta tag
    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Set standard SEO meta
    if (description) {
      setMetaTag('description', description);
      setMetaTag('og:description', description, true);
      setMetaTag('twitter:description', description);
    }

    if (title) {
      setMetaTag('og:title', title, true);
      setMetaTag('twitter:title', title);
    }

    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:card', 'summary_large_image');

    const currentUrl = canonicalUrl || window.location.href;
    setMetaTag('og:url', currentUrl, true);

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 5. Default LocalBusiness Schema if not customized
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
      name: 'Build My Dream',
      alternateName: 'Build My Dream Home Builders',
      url: 'https://buildmydream.in',
      logo: 'https://buildmydream.in/favicon.svg',
      image: ogImage,
      description: 'Premier residential construction, architectural design, structural engineering, and turnkey home construction in Ramanathapuram, Tamil Nadu.',
      telephone: '+91-6385740155',
      email: 'hidayathullahbajar@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ramanathapuram',
        addressRegion: 'Tamil Nadu',
        postalCode: '623501',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '9.3716',
        longitude: '78.8307'
      },
      areaServed: [
        { '@type': 'City', name: 'Ramanathapuram' },
        { '@type': 'City', name: 'Kilakarai' },
        { '@type': 'City', name: 'Paramakudi' },
        { '@type': 'City', name: 'Rameswaram' },
        { '@type': 'City', name: 'Mandapam' },
        { '@type': 'City', name: 'Mudukulathur' }
      ],
      priceRange: '₹₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00'
        }
      ],
      sameAs: [
        'https://github.com/hidayathullahs/engineering-construction-project'
      ]
    };

    const targetSchema = schema || defaultSchema;

    let scriptTag = document.querySelector('script#schema-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(targetSchema);

  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
