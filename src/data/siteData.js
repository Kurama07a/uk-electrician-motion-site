import {
  BadgeCheck,
  BatteryCharging,
  Bolt,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Factory,
  Gauge,
  HeartHandshake,
  Home,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

export const siteConfig = {
  brand: 'Voltwise',
  brandSuffix: 'Electrical',
  strapline: 'Reliable power. Properly done.',
  phoneDisplay: '020 7946 0123',
  phoneHref: '+442079460123',
  email: 'hello@yourcompany.co.uk',
  serviceArea: 'London & surrounding areas',
  formEndpoint: '', // Add Formspree / custom API endpoint to enable live submissions.
  heroImage: '/src/assets/voltwise-hero.webp',
  aboutImage: '/src/assets/voltwise-testing.webp',
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const valueProps = [
  {
    icon: BadgeCheck,
    title: 'Qualified electricians',
    text: 'Clear scopes of work, tidy installations and safety-led workmanship.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully insured',
    text: 'Built to present your real insurance and scheme credentials with confidence.',
  },
  {
    icon: Clock3,
    title: 'Reliable attendance',
    text: 'Simple booking, arrival updates and practical time windows for customers.',
  },
  {
    icon: HeartHandshake,
    title: 'Workmanship focused',
    text: 'Respectful service for homes, landlords, offices and commercial sites.',
  },
];

export const services = [
  {
    icon: Home,
    title: 'Domestic electrical work',
    text: 'Sockets, lighting, fault finding, consumer unit upgrades and home improvements.',
    tag: 'Homes',
  },
  {
    icon: Building2,
    title: 'Commercial electrics',
    text: 'Reliable installations and maintenance for offices, retail and managed properties.',
    tag: 'Business',
  },
  {
    icon: Gauge,
    title: 'EICR & testing',
    text: 'Electrical inspections, condition reporting and remedial work for safer properties.',
    tag: 'Compliance',
  },
  {
    icon: BatteryCharging,
    title: 'EV charger installation',
    text: 'Smart EV charging solutions for driveways, workplaces and managed car parks.',
    tag: 'EV',
  },
  {
    icon: Lightbulb,
    title: 'Lighting upgrades',
    text: 'Efficient indoor, outdoor, security and feature lighting with modern controls.',
    tag: 'Lighting',
  },
  {
    icon: CalendarClock,
    title: 'Emergency call-outs',
    text: 'Fast response for urgent electrical faults, loss of power and safety concerns.',
    tag: 'Urgent',
  },
];

export const process = [
  {
    number: '01',
    title: 'Tell us what you need',
    text: 'Share the issue, property type and postcode. Photos help us scope faster.',
  },
  {
    number: '02',
    title: 'Get a clear quote',
    text: 'We outline the work, likely timescale and pricing before anything starts.',
  },
  {
    number: '03',
    title: 'Book a convenient slot',
    text: 'Choose a suitable visit window and receive confirmation before arrival.',
  },
  {
    number: '04',
    title: 'Work completed & checked',
    text: 'The installation is tested, the area is left tidy and next steps are explained.',
  },
];

export const stats = [
  { value: 12, suffix: '+', label: 'Years combined experience' },
  { value: 2500, suffix: '+', label: 'Jobs completed' },
  { value: 4.9, decimals: 1, suffix: '/5', label: 'Average customer rating' },
  { value: 24, suffix: 'h', label: 'Priority response option' },
];

export const testimonials = [
  {
    quote:
      'Clear communication from the first call, arrived when promised and left the job spotless. The quote matched the final invoice.',
    name: 'Sophie M.',
    meta: 'Homeowner · London',
  },
  {
    quote:
      'We use them for ongoing maintenance across several managed properties. Professional paperwork, sensible advice and dependable scheduling.',
    name: 'Daniel R.',
    meta: 'Property manager · Greater London',
  },
  {
    quote:
      'Our new lighting and EV charger were installed with minimal disruption. Everything was explained in plain English before handover.',
    name: 'Amelia T.',
    meta: 'Small business owner · London',
  },
];

export const faqs = [
  {
    question: 'What areas do you cover?',
    answer:
      'This demo is configured for London and surrounding areas. Change the serviceArea value in src/data/siteData.js to your actual town, county or service radius.',
  },
  {
    question: 'Can customers request a quote online?',
    answer:
      'Yes. The quote form includes validation and a demo success state. Add your form or API endpoint to siteConfig.formEndpoint to make submissions live.',
  },
  {
    question: 'Can I add NICEIC, NAPIT or other accreditation details?',
    answer:
      'Yes. Replace the generic trust messaging with the schemes and registration numbers your business actually holds. Do not display credentials you cannot substantiate.',
  },
  {
    question: 'Is the website mobile friendly?',
    answer:
      'Yes. The layout, navigation, forms, cards, typography and tap targets are responsive, including a mobile call-to-action for fast enquiries.',
  },
  {
    question: 'Does it support reduced motion?',
    answer:
      'Yes. Framer Motion animations respect the user’s reduced-motion preference, and the CSS disables non-essential transitions where appropriate.',
  },
];

export const footerLinks = [
  { label: 'Domestic electrics', href: '#services' },
  { label: 'Commercial electrics', href: '#services' },
  { label: 'EICR & testing', href: '#services' },
  { label: 'EV chargers', href: '#services' },
];

export const decorativeIcons = [Bolt, Zap, Sparkles, Wrench, CheckCircle2, Factory];
