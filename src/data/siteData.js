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
  phoneDisplay: '020 3880 2140',
  phoneHref: '+442038802140',
  email: 'hello@voltwise.co.uk',
  serviceArea: 'London & surrounding areas',
  formEndpoint: '', // Leave blank for demo success state; set to Formspree/API when going live.
  heroImage: '/voltwise-hero.webp',
  aboutImage: '/voltwise-testing.webp',
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
    text: 'Clear scopes, tidy installs, and safety checks explained before we leave.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully insured',
    text: 'Public liability cover and scheme-registered engineers on every job.',
  },
  {
    icon: Clock3,
    title: 'We show up',
    text: 'Sensible time windows, a heads-up before we arrive, and no runaround.',
  },
  {
    icon: HeartHandshake,
    title: 'Respect for your place',
    text: 'Homes, landlords, offices and sites — careful work and a clean handover.',
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
      'We cover London and surrounding areas. If you’re just outside our usual radius, call us — we’ll tell you straight away whether we can help.',
  },
  {
    question: 'Can I request a quote online?',
    answer:
      'Yes. Use the quote form on this page with a short description of the job and your postcode. We’ll get back to you with a clear scope and price — or call us if it’s urgent.',
  },
  {
    question: 'Are you qualified and insured?',
    answer:
      'Yes. Our electricians are fully qualified and we carry public liability insurance. Ask for scheme details when you get in touch and we’ll share what’s relevant to your job.',
  },
  {
    question: 'Do you do emergency call-outs?',
    answer:
      'Yes for urgent faults, loss of power and safety concerns. Call the number on this page and we’ll advise on timing and next steps.',
  },
  {
    question: 'Will you leave a tidy finish?',
    answer:
      'That’s part of the job. We protect floors and furniture, clear as we go, and explain testing and handover before we leave.',
  },
];

export const footerLinks = [
  { label: 'Domestic electrics', href: '#services' },
  { label: 'Commercial electrics', href: '#services' },
  { label: 'EICR & testing', href: '#services' },
  { label: 'EV chargers', href: '#services' },
];

export const decorativeIcons = [Bolt, Zap, Sparkles, Wrench, CheckCircle2, Factory];
