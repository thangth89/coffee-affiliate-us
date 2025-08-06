export const SITE_CONFIG = {
  name: 'AeroPress Clone',
  description: 'The ultimate coffee brewing experience',
  url: 'https://aeropress-clone.vercel.app',
  ogImage: '/og-image.jpg',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const FEATURES = [
  {
    title: 'Patented 3-in-1 Technology',
    description: 'Combines the best of espresso, drip, and French press brewing methods',
    icon: 'coffee',
  },
  {
    title: 'Durable, BPA-Free Materials',
    description: 'Built to last with safe, high-quality materials',
    icon: 'shield',
  },
  {
    title: 'Designed for Hot & Cold Brews',
    description: 'Perfect for any season and brewing preference',
    icon: 'thermometer',
  },
  {
    title: 'Eco-Friendly Paper Filters',
    description: 'Biodegradable filters for environmentally conscious brewing',
    icon: 'leaf',
  },

] as const;
