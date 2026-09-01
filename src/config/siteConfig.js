/**
 * Site Configuration
 * Centralized production origin and canonical domain configuration.
 * Current production deployment is hosted on Render static site.
 */
export const SITE_URL = 'https://buildmydream-6q5x.onrender.com';

export const SITE_METADATA = {
  name: 'Build My Dream',
  legalName: 'Build My Dream Residential Construction & Architecture',
  tagline: 'From Vision to Reality.',
  phone: '+91 63857 40155',
  phoneClean: '+916385740155',
  email: 'hidayathullahbajar@gmail.com',
  address: {
    city: 'Ramanathapuram',
    state: 'Tamil Nadu',
    postalCode: '623501',
    country: 'IN'
  },
  defaultOgImage: `${SITE_URL}/logo.png`,
  logoUrl: `${SITE_URL}/logo.png`
};
