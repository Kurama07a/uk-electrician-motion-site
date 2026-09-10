import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, CircleCheck, MapPin, Menu, Palette, Phone, ShieldCheck, Star, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from './components/Logo';
import QuoteForm from './components/QuoteForm';
import { allServiceNames, areas, navigation, pageMeta, serviceDetails, services, siteConfig, testimonials } from './data/siteData';

const themes = [
  { id: 'amber', label: 'Safety amber', color: '#ffb000' },
  { id: 'blue', label: 'Electric blue', color: '#2864ff' },
  { id: 'lime', label: 'Signal lime', color: '#b7d70d' },
];

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const quoteHref = '/contact#quote';

function CallLink({ className = '' }) {
  const href = siteConfig.phoneHref ? `tel:${siteConfig.phoneHref}` : quoteHref;
  return <a className={className} href={href}><Phone size={17} /> Call {siteConfig.phoneDisplay}</a>;
}

function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('premier-theme') || 'amber');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('premier-theme', theme);
    const selected = themes.find((item) => item.id === theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', selected?.color || '#ffb000');
  }, [theme]);
  useEffect(() => { const close = (event) => event.key === 'Escape' && setOpen(false); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <div className="theme-picker">
    <button className="theme-picker__trigger" type="button" aria-label="Choose colour theme" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Palette size={17} /><span>Colour</span></button>
    <AnimatePresence>{open && <motion.div className="theme-picker__menu" role="menu" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
      <div className="theme-picker__title">Choose a finish</div>
      {themes.map((item) => <button key={item.id} type="button" role="menuitemradio" aria-checked={theme === item.id} onClick={() => { setTheme(item.id); setOpen(false); }}><span className="theme-swatch" style={{ '--swatch': item.color }} /><span>{item.label}</span>{theme === item.id && <Check size={16} />}</button>)}
    </motion.div>}</AnimatePresence>
  </div>;
}

function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menuOpen]);
  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="container site-header__inner"><Logo /><nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <a key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>{item.label}</a>)}</nav>
      <div className="header-actions"><ThemePicker /><CallLink className="header-phone" /><a className="button button--primary button--small desktop-quote" href={quoteHref}>Free quote <ArrowRight size={16} /></a><button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu /></button></div>
    </div>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="mobile-menu__panel" initial={reduceMotion ? false : { x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .3 }}><div className="mobile-menu__top"><Logo /><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button></div><nav aria-label="Mobile navigation">{navigation.map((item) => <a key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>{item.label}<ArrowRight size={18} /></a>)}</nav><div className="mobile-menu__contact"><span>Need help with an electrical job?</span><CallLink /></div></motion.div></motion.div>}</AnimatePresence>
  </header>;
}

function PageIntro({ title, children, action = true }) {
  const reduceMotion = useReducedMotion();
  return <section className="page-intro"><div className="container page-intro__grid"><motion.h1 initial={reduceMotion ? false : 'hidden'} animate="visible" variants={reveal} transition={{ duration: .55 }}>{title}</motion.h1><motion.div className="page-intro__copy" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={reveal} transition={{ duration: .55, delay: .08 }}>{children}{action && <a className="button button--primary" href={quoteHref}>Request a free quote <ArrowRight size={17} /></a>}</motion.div></div></section>;
}

function SectionTitle({ children, text }) {
  return <div className="section-title"><h2>{children}</h2>{text && <p>{text}</p>}</div>;
}

function Checks({ items }) {
  return <ul className="check-list check-list--stack">{items.map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>;
}

function CtaBand({ title = 'Need an electrician?', text = 'Tell us what electrical work you need and we’ll get back to you.' }) {
  return <section className="cta-band"><div className="container cta-band__grid"><div><h2>{title}</h2><p>{text}</p><span><MapPin size={15} /> Serving Cheadle, Cheadle Hulme, Stockport and surrounding areas.</span></div><div className="cta-band__actions"><CallLink className="button button--dark" /><a className="button button--light" href={quoteHref}>Request a free quote <ArrowRight size={17} /></a></div></div></section>;
}

function HomePage() {
  const reduceMotion = useReducedMotion();
  return <>
    <section className="home-hero"><div className="container home-hero__grid"><motion.div className="home-hero__copy" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={reveal} transition={{ duration: .6 }}><div className="location-chip"><CircleCheck size={15} /> Cheadle & Stockport</div><h1>Reliable local electricians for <span>homes & businesses.</span></h1><p>Professional electrical work across Cheadle, Stockport and the surrounding areas.</p><p>From small repairs and additional sockets to rewires, consumer units and electrical testing, Premier Electrics N W Ltd provides dependable electrical work with clear communication from start to finish.</p><div className="hero-actions"><CallLink className="button button--outline" /><a className="button button--primary" href={quoteHref}>Request a free quote <ArrowRight size={17} /></a></div></motion.div><div className="home-hero__media"><img src={siteConfig.heroImage} alt="Electrician inspecting a modern consumer unit in a home" /><div className="job-ticket"><span>Local service</span><strong>Electrical work done properly</strong><small><ShieldCheck size={14} /> Domestic & commercial</small></div></div></div></section>
    <section className="proof-strip"><div className="container">{['Established local business', 'Hundreds of customer reviews', 'Domestic & commercial', 'Free estimates'].map((item) => <span key={item}><Check size={15} /> {item}</span>)}</div></section>
    <section className="section section--soft"><div className="container editorial-split"><SectionTitle>Electrical work done <span className="accent-text">properly.</span></SectionTitle><div className="reading-copy"><p>When you need an electrician, you want someone who turns up when agreed, explains what needs doing and leaves the job safe and tidy.</p><p>Premier Electrics N W Ltd has been serving customers across the local area for years, completing electrical work in homes, rental properties and commercial premises.</p><p>Whether you have a small job that needs sorting or a larger electrical project, get in touch to discuss what you need.</p><a href="/about" className="text-link">About Premier Electrics <ArrowRight size={16} /></a></div></div></section>
    <section className="section" id="services"><div className="container"><div className="heading-row"><SectionTitle text="From everyday faults to complete installations, talk to us about the work your property needs.">Our electrical services</SectionTitle><a className="button button--outline" href="/services">View all services <ArrowRight size={17} /></a></div><div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><span className="service-card__icon"><Icon /></span><span className="service-card__tag">{service.tag}</span><h3>{service.title}</h3><p>{service.text}</p><a href="/contact">Get a quote <ArrowRight size={15} /></a></article>; })}</div></div></section>
    <section className="section section--soft"><div className="container why-grid"><div><img src={siteConfig.aboutImage} alt="Electrical installation being carefully tested" loading="lazy" /></div><div><SectionTitle>Why choose Premier Electrics?</SectionTitle><div className="reason-list">{[['Established local business','Serving Cheadle, Stockport and surrounding areas.'],['Highly rated','Hundreds of customer reviews across established trade platforms.'],['Clear communication','Straightforward advice about the work required and what it will involve.'],['Domestic & commercial','Electrical services for homeowners, landlords and businesses.'],['Free estimates','Discuss the work before you commit.']].map(([title,text]) => <div key={title}><Check /><p><strong>{title}</strong><span>{text}</span></p></div>)}</div></div></div></section>
    <section className="section reviews-section" id="reviews"><div className="container"><SectionTitle text="Our reputation has been built through reliable workmanship and recommendations from customers throughout the local area.">Hundreds of happy customers</SectionTitle><div className="review-wall">{testimonials.map((review) => <blockquote key={review.quote}><div className="stars" aria-label="Five stars"><Star /><Star /><Star /><Star /><Star /></div><p>“{review.quote}”</p></blockquote>)}</div><a className="text-link" href="#reviews">See more reviews <ArrowRight size={16} /></a></div></section>
    <CtaBand />
  </>;
}

function ServicesPage() {
  return <><PageIntro title={<>Electrical <span className="accent-text">services.</span></>}><p>From everyday electrical jobs to larger installations, Premier Electrics N W Ltd provides professional electrical services across Cheadle, Stockport and nearby areas.</p><p>If you aren&apos;t sure exactly what work is required, tell us what problem you&apos;re having and we can advise on the next step.</p></PageIntro><div className="service-directory container">{serviceDetails.map((service) => { const Icon = service.icon; return <section className="service-detail" key={service.title}><div className="service-detail__title"><span><Icon /></span><h2>{service.title}</h2></div><div className="service-detail__body">{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{service.lead && <strong>{service.lead}</strong>}{service.items && <Checks items={service.items} />}</div></section>; })}</div><CtaBand title="Have a job that isn’t listed?" text="This isn’t an exhaustive list. If you need electrical work and aren’t sure whether we cover it, just get in touch." /></>;
}

function AboutPage() {
  const steps = [['Understand the job','We find out what electrical work you need and what problem you’re trying to solve.'],['Explain the options','Where there are different ways to approach a job, we’ll explain them clearly.'],['Complete the work','We carry out the agreed electrical work professionally and safely.'],['Leave things tidy','We respect your home or workplace and aim to minimise disruption.']];
  return <><PageIntro title={<>About Premier <span className="accent-text">Electrics.</span></>}><p>Premier Electrics N W Ltd is an established electrical company providing domestic and commercial electrical services throughout Cheadle, Stockport and surrounding areas.</p><p>The business is led by <strong>Louis Salter</strong> and has built a strong local reputation through years of electrical work and customer recommendations.</p></PageIntro><section className="section section--soft"><div className="container approach-grid"><SectionTitle text="We believe choosing an electrician shouldn’t be complicated.">A straightforward approach to electrical work</SectionTitle><div className="approach-steps">{steps.map(([title,text], index) => <article key={title}><span>{String(index + 1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section><section className="section"><div className="container media-story"><img src={siteConfig.aboutImage} alt="An electrical installation being tested" loading="lazy" /><div><SectionTitle>Built on customer recommendations</SectionTitle><p>A large proportion of our reputation comes from customers taking the time to recommend our work.</p><p>Premier Electrics N W Ltd has accumulated hundreds of reviews across established trade platforms, with customers regularly commenting on reliability, professionalism, workmanship and communication.</p><p>For us, maintaining that reputation matters on every job — whether we’re replacing a single socket or carrying out a much larger electrical installation.</p></div></div></section><section className="section section--soft"><div className="container two-column-copy"><article><h2>Domestic electrical work</h2><p>We work with homeowners, landlords and property owners on electrical repairs, improvements and larger projects.</p><Checks items={['Rewires','Consumer units','Lighting','Additional sockets','Fault finding','Electrical testing','Property improvements']} /></article><article><h2>Commercial electrical work</h2><p>We also support businesses and commercial properties with electrical installations, maintenance, repairs and testing.</p><p>We understand that electrical work in a business needs to be carried out efficiently and with minimal unnecessary disruption.</p></article></div></section><CtaBand title="Local, established & easy to contact" text="If you’d like advice on an electrical job or would like us to provide an estimate, simply get in touch." /></>;
}

function AreasPage() {
  const primary = [['Cheadle','We undertake electrical repairs, installations, rewires, consumer unit work, sockets, lighting, testing and other electrical work throughout Cheadle.'],['Cheadle Hulme','Whether you’re improving your home, dealing with an electrical fault or planning a larger project, contact us to discuss the work.'],['Stockport','Premier Electrics N W Ltd provides a wide range of electrical services for homes, landlords and businesses throughout Stockport.']];
  return <><PageIntro title={<>Local electricians serving <span className="accent-text">Cheadle & Stockport.</span></>}><p>Premier Electrics N W Ltd provides electrical services throughout Cheadle, Stockport and surrounding parts of Greater Manchester and Cheshire.</p><p>Being locally based means we can provide a responsive service for homeowners, landlords and businesses throughout the area.</p></PageIntro><section className="section"><div className="container area-feature-list">{primary.map(([name,text]) => <article key={name}><div><MapPin /><h2>Electrician in {name}</h2></div><p>{text}</p><a href={quoteHref}>Get a quote in {name} <ArrowRight size={16} /></a></article>)}</div></section><section className="section section--soft"><div className="container editorial-split"><SectionTitle text="If your location isn’t listed, contact us with your postcode and we’ll let you know whether we cover your area.">Surrounding areas</SectionTitle><div className="area-cloud">{areas.slice(3).map((area) => <span key={area}>{area}</span>)}</div></div></section><section className="section"><div className="container editorial-split"><SectionTitle>Electrical services near you</SectionTitle><Checks items={allServiceNames} /></div></section><CtaBand title="Check availability in your area" text="Tell us where you’re located and what electrical work you need." /></>;
}

function ContactPage() {
  return <><PageIntro title={<>Get a free electrical <span className="accent-text">quote.</span></>} action={false}><p>Need electrical work completed? Tell us what you need and we’ll get back to you about the next step.</p><p>For faster enquiries, call us directly.</p><CallLink className="button button--outline" /></PageIntro><section className="section section--soft" id="quote"><div className="container contact-layout"><div><SectionTitle text="Share a few details about the work. Photos can help us understand what may be required.">Request a quote</SectionTitle><div className="contact-note"><Phone /><div><strong>Prefer to call?</strong><p>Call <b>{siteConfig.phoneDisplay}</b>. If we’re working on a job and can’t answer immediately, leave your details and we’ll get back to you as soon as possible.</p></div></div></div><div className="contact-form-card"><QuoteForm /></div></div></section><section className="section"><div className="container two-column-copy"><article><h2>What helps us quote your job?</h2><Checks items={['Your postcode','A brief description of the work','Any electrical problems you’re experiencing','Photos where relevant','How urgently you need the work completed']} /><p>The more information you provide, the easier it is for us to understand what’s required.</p></article><article><h2>Areas we cover</h2><div className="compact-area-list">{areas.filter((area) => area !== 'Didsbury' && area !== 'Hazel Grove' && area !== 'Poynton' && area !== 'Manchester').map((area) => <span key={area}>{area}</span>)}<span>and surrounding areas</span></div></article></div></section><CtaBand />
  </>;
}

function NotFoundPage() {
  return <PageIntro title="Page not found." action={false}><p>The page you requested isn’t available. Return home or tell us about the electrical work you need.</p><div className="hero-actions"><a className="button button--outline" href="/">Back home</a><a className="button button--primary" href={quoteHref}>Request a quote</a></div></PageIntro>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Logo light /><p>Electrical services for homes and businesses across Cheadle, Stockport and surrounding areas.</p><CallLink /></div><div><h3>Explore</h3>{navigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div><div><h3>Services</h3>{services.slice(0,4).map((service) => <a key={service.title} href="/services">{service.title}</a>)}</div><div><h3>Company</h3><p>Premier Electrics N W Ltd</p><p>Company No. {siteConfig.companyNumber}</p><p>{siteConfig.serviceArea}</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Premier Electrics N W Ltd. All rights reserved.</span><span>Company No. {siteConfig.companyNumber}</span></div></footer>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = { '/': HomePage, '/services': ServicesPage, '/about': AboutPage, '/areas': AreasPage, '/contact': ContactPage }[path] || NotFoundPage;
  useEffect(() => { const meta = pageMeta[path] || { title: 'Premier Electrics N W Ltd', description: 'Local electrical services in Cheadle and Stockport.' }; document.title = meta.title; document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description); window.scrollTo(0, 0); }, [path]);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header path={path} /><main id="main-content"><Page /></main><Footer />{path !== '/contact' && <a className="mobile-call" href={quoteHref}><Phone size={18} /> Request a quote</a>}</>;
}
