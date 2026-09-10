import { Bolt, Building2, Cable, Fan, Gauge, Lightbulb, SearchCheck, ShowerHead, SlidersHorizontal } from 'lucide-react';

export const siteConfig = {
  brand: 'Premier Electrics', brandSuffix: 'N W Ltd', strapline: 'Electrical work done properly.',
  phoneDisplay: '[PHONE NUMBER]', phoneHref: '', email: '', serviceArea: 'Cheadle, Stockport & surrounding areas',
  companyNumber: '07458987', formEndpoint: '', heroImage: '/src/assets/voltwise-hero.webp', aboutImage: '/src/assets/voltwise-testing.webp',
};

export const navigation = [
  { label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'About', href: '/about' },
  { label: 'Areas', href: '/areas' }, { label: 'Contact', href: '/contact' },
];

export const pageMeta = {
  '/': { title: 'Premier Electrics N W Ltd | Electricians in Cheadle & Stockport', description: 'Reliable domestic and commercial electricians serving Cheadle, Stockport and surrounding areas. Electrical installations, repairs, testing, rewires and more. Get a free quote.' },
  '/services': { title: 'Electrical Services | Premier Electrics N W Ltd', description: 'Domestic and commercial electrical services in Cheadle and Stockport. Rewires, consumer units, sockets, lighting, electrical testing, repairs and installations.' },
  '/about': { title: 'About Premier Electrics N W Ltd | Local Electricians', description: 'Learn about Premier Electrics N W Ltd, an established electrical company serving Cheadle, Stockport and surrounding areas.' },
  '/areas': { title: 'Electricians in Cheadle, Stockport & Surrounding Areas', description: 'Premier Electrics N W Ltd provides electrical services across Cheadle, Cheadle Hulme, Stockport and surrounding areas. Contact us for a free estimate.' },
  '/contact': { title: 'Contact Premier Electrics N W Ltd | Get a Free Electrical Quote', description: 'Contact Premier Electrics N W Ltd for electrical work in Cheadle, Stockport and surrounding areas. Call us or request a free estimate online.' },
};

export const services = [
  { icon: Bolt, title: 'Electrical Repairs', text: 'Faults, damaged accessories, electrical problems and general repairs.', tag: 'Repairs' },
  { icon: SlidersHorizontal, title: 'Consumer Units', text: 'Consumer unit replacements and upgrades to improve the safety of your electrical installation.', tag: 'Safety' },
  { icon: Cable, title: 'Rewiring', text: 'Full and partial rewires for houses, renovations and other properties.', tag: 'Installation' },
  { icon: Lightbulb, title: 'Sockets & Lighting', text: 'New sockets, switches, indoor lighting, outdoor lighting and electrical alterations.', tag: 'Improvements' },
  { icon: Gauge, title: 'Electrical Testing', text: 'Electrical inspections and testing for homeowners, landlords and businesses.', tag: 'Testing' },
  { icon: Building2, title: 'Commercial Electrical Work', text: 'Reliable electrical installation, maintenance and repair work for local businesses.', tag: 'Commercial' },
];

export const serviceDetails = [
  { icon: SlidersHorizontal, title: 'Consumer Unit Replacements & Upgrades', paragraphs: ['Your consumer unit plays a central role in protecting your electrical installation.', 'We can inspect existing consumer units and carry out replacements or upgrades where required.'], lead: 'Contact us if:', items: ['Your consumer unit is old or outdated', 'You are renovating a property', 'You are experiencing recurring electrical problems', 'An inspection has recommended remedial work', 'You want your installation assessed'] },
  { icon: Cable, title: 'Full & Partial Rewires', paragraphs: ['Older electrical installations may eventually need significant upgrading or rewiring.', 'Every property is different, so contact us to arrange an assessment and quotation.'], lead: 'We undertake full and partial rewires for:', items: ['Houses', 'Flats', 'Renovations', 'Extensions', 'Rental properties', 'Commercial premises'] },
  { icon: Bolt, title: 'Sockets, Switches & Electrical Accessories', paragraphs: ['Need more sockets or want to replace older electrical accessories?'], lead: 'We can install and replace:', items: ['Standard sockets', 'USB sockets', 'Switches', 'Fused spurs', 'Outdoor sockets', 'Electrical accessories', 'Additional power points'] },
  { icon: Lightbulb, title: 'Indoor & Outdoor Lighting', paragraphs: ['Lighting can completely change the practicality and appearance of a property.'], lead: 'We install and replace:', items: ['Ceiling lights', 'Spotlights', 'LED lighting', 'Outdoor lighting', 'Security lighting', 'Garden lighting', 'Replacement fittings', 'Lighting controls'] },
  { icon: SearchCheck, title: 'Electrical Fault Finding & Repairs', paragraphs: ['Electrical faults can be frustrating and sometimes difficult to trace.', 'If you are concerned about an electrical problem, contact us and explain what is happening.'], lead: 'We can investigate problems such as:', items: ['Circuits tripping', 'Sockets not working', 'Lighting faults', 'Intermittent electrical problems', 'Damaged accessories', 'Electrical equipment causing faults'] },
  { icon: Gauge, title: 'Electrical Testing & Inspections', paragraphs: ['Electrical testing helps establish whether an installation is safe and identify areas requiring attention.', 'Ask us about the appropriate electrical inspection or certification for your situation.'], lead: 'Testing may be useful for:', items: ['Homeowners', 'Landlords', 'Property buyers', 'Property sellers', 'Businesses', 'Older electrical installations'] },
  { icon: Fan, title: 'Extractor Fans', paragraphs: ['We install and replace extractor fans for bathrooms, kitchens and other areas requiring improved ventilation.'] },
  { icon: ShowerHead, title: 'Electric Showers', paragraphs: ['Electrical work associated with the installation and replacement of suitable electric showers and shower circuits.'] },
  { icon: Building2, title: 'Commercial Electrical Services', paragraphs: ['We also undertake electrical work for local businesses and commercial properties.'], lead: 'Services can include:', items: ['Electrical repairs', 'Lighting installations', 'Additional sockets', 'Fault finding', 'Electrical alterations', 'Maintenance', 'Testing and inspection', 'Refurbishment electrical work'] },
];

export const testimonials = [
  { quote: 'Excellent work from start to finish. Professional, reliable and left everything clean and tidy.' },
  { quote: 'Quick response, explained everything clearly and completed the work exactly as agreed.' },
  { quote: 'Would definitely recommend. Friendly, knowledgeable and very professional.' },
];

export const areas = ['Cheadle', 'Cheadle Hulme', 'Stockport', 'Bramhall', 'Gatley', 'Heald Green', 'Handforth', 'Wilmslow', 'Didsbury', 'Hazel Grove', 'Poynton', 'Manchester', 'South Manchester'];
export const allServiceNames = ['Electrical repairs', 'Fault finding', 'Consumer unit replacements', 'Full and partial rewires', 'Electrical testing', 'Lighting', 'Additional sockets', 'Outdoor electrics', 'Extractor fans', 'Electric showers', 'Domestic electrical work', 'Commercial electrical work'];
