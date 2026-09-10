import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  MapPin,
  Menu,
  Palette,
  Phone,
  ShieldCheck,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatedCounter from './components/AnimatedCounter';
import Logo from './components/Logo';
import QuoteForm from './components/QuoteForm';
import SectionHeading from './components/SectionHeading';
import {
  faqs,
  footerLinks,
  navigation,
  process,
  services,
  siteConfig,
  stats,
  testimonials,
  valueProps,
} from './data/siteData';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const themes = [
  { id: 'amber', label: 'Safety amber', color: '#ffb000' },
  { id: 'blue', label: 'Electric blue', color: '#2864ff' },
  { id: 'lime', label: 'Signal lime', color: '#b7d70d' },
];

function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('voltwise-theme') || 'amber');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('voltwise-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    const selected = themes.find((item) => item.id === theme);
    if (meta && selected) meta.setAttribute('content', selected.color);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="theme-picker">
      <button className="theme-picker__trigger" type="button" aria-label="Choose colour theme" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
        <Palette size={17} /> <span>Colour</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="theme-picker__menu" role="menu" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
            <div className="theme-picker__title">Choose a finish</div>
            {themes.map((item) => (
              <button key={item.id} type="button" role="menuitemradio" aria-checked={theme === item.id} onClick={() => { setTheme(item.id); setOpen(false); }}>
                <span className="theme-swatch" style={{ '--swatch': item.color }} />
                <span>{item.label}</span>
                {theme === item.id && <Check size={16} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemePicker />
          <a className="header-phone" href={`tel:${siteConfig.phoneHref}`}>
            <span><Phone size={17} /></span>
            <div><small>Call now</small><strong>{siteConfig.phoneDisplay}</strong></div>
          </a>
          <a className="button button--primary button--small desktop-quote" href="#contact">Get a quote <ArrowRight size={16} /></a>
          <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <Menu size={23} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="mobile-menu__panel" initial={reduceMotion ? false : { x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mobile-menu__top"><Logo /><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X /></button></div>
              <nav aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <motion.a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} initial={reduceMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>{item.label}<ArrowRight size={18} /></motion.a>
                ))}
              </nav>
              <div className="mobile-menu__contact">
                <span>Need help today?</span>
                <a href={`tel:${siteConfig.phoneHref}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="home">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div className="hero__content" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={reveal} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero__badge"><CircleCheck size={16} /> London & surrounding areas</div>
          <h1>Expert electrical work for <span>homes</span> & businesses.</h1>
          <p className="hero__lead">Qualified electricians for installations, repairs, testing and upgrades — with clear communication from quote to completion.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">Get a free quote <ArrowRight size={17} /></a>
            <a className="button button--ghost" href={`tel:${siteConfig.phoneHref}`}><Phone size={17} /> Call {siteConfig.phoneDisplay}</a>
          </div>
          <div className="hero__proof">
            <div className="proof-score">4.9</div>
            <div><div className="stars" aria-label="5 star rating"><Star /><Star /><Star /><Star /><Star /></div><small>Average customer rating</small></div>
          </div>
        </motion.div>

        <div className="hero__visual">
          <img src={siteConfig.heroImage} alt="Electrician working safely on an electrical panel" />
          <div className="hero__visual-shade" />
          <div className="job-ticket"><span>On site</span><strong>Inspection & testing</strong><small><ShieldCheck size={14} /> Safe. Checked. Documented.</small></div>
        </div>
      </div>

      <motion.div className="container hero-form-wrap" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <div className="hero-form-card">
          <div className="hero-form-card__label"><Zap size={19} /><div><strong>Quick consultation</strong><span>Tell us about your job</span></div></div>
          <QuoteForm compact />
        </div>
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Service assurances">
      <div className="container trust-strip__inner">
        {['Clear pricing', 'Qualified engineers', 'Fully insured', 'Tidy workmanship', 'Friendly support'].map((item) => (
          <div key={item}><Check size={16} /> {item}</div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section values-section">
      <div className="container">
        <SectionHeading eyebrow="Why choose us" title={<>A commitment to <span className="accent-text">excellent work.</span></>} text="A straightforward service designed around safety, reliability and a better customer experience." />
        <motion.div className="value-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }}>
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article className="value-card" key={item.title} variants={reduceMotion ? undefined : reveal}>
                <span className="icon-box"><Icon size={24} /></span><h3>{item.title}</h3><p>{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section section--soft" id="about">
      <div className="container about-grid">
        <motion.div className="about-media" initial={reduceMotion ? false : { opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
          <img src={siteConfig.aboutImage} alt="Electrician installing electrical equipment" />
          <div className="about-media__mini"><strong>12+</strong><span>years combined<br />experience</span></div>
          <div className="about-media__bolt"><Zap /></div>
        </motion.div>
        <div className="about-copy">
          <SectionHeading eyebrow="About our company" align="left" title={<>Reliable electrical solutions, <span className="accent-text">without the runaround.</span></>} text="From one-off repairs to planned upgrades, the process stays clear: sensible advice, transparent scope, safe installation and a tidy finish." />
          <div className="check-list">
            {['Domestic and commercial experience', 'Plain-English recommendations', 'Testing and handover explained', 'Flexible appointments and call-outs'].map((item) => <div key={item}><span><Check size={15} /></span>{item}</div>)}
          </div>
          <div className="about-actions"><a className="button button--primary" href="#contact">Request a quote <ArrowRight size={17} /></a><div className="signature"><strong>{siteConfig.brand} team</strong><span>{siteConfig.strapline}</span></div></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-heading-row">
          <SectionHeading eyebrow="Our services" align="left" title={<>Electrical services built around <span className="accent-text">your property.</span></>} text="From planned upgrades to urgent faults, get practical advice and a clear scope before work starts." />
          <a className="button button--outline" href="#contact">Discuss your job <ArrowRight size={17} /></a>
        </div>
        <motion.div className="service-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } } }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article className="service-card" key={service.title} variants={reduceMotion ? undefined : reveal} whileHover={reduceMotion ? undefined : { y: -7 }}>
                <div className="service-card__top"><span className="service-card__icon"><Icon /></span></div>
                <span className="service-card__tag">{service.tag}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Get a quote <ArrowRight size={16} /></a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading eyebrow="How it works" title={<>From first enquiry to <span className="accent-text">finished job.</span></>} text="A simple process that keeps customers informed and reduces friction at every stage." />
        <div className="process-grid">
          {process.map((step, index) => (
            <motion.article className="process-card" key={step.number} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: reduceMotion ? 0 : index * 0.08 }}>
              <span className="process-card__number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>{index < process.length - 1 && <span className="process-card__line" aria-hidden="true" />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">{stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}</div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function move(direction) {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container review-grid">
        <div className="review-copy">
          <SectionHeading eyebrow="Customer feedback" align="left" title={<>Trusted for the jobs that <span className="accent-text">matter.</span></>} text="Clear communication, careful work and a tidy handover — in our customers’ own words." />
          <div className="review-summary"><strong>4.9</strong><div><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><span>Average customer rating</span></div></div>
          <div className="review-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous review"><ChevronLeft /></button><button type="button" onClick={() => move(1)} aria-label="Next review"><ChevronRight /></button></div>
        </div>
        <div className="testimonial-stage" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.article key={active} className="testimonial-card" initial={reduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <div className="quote-mark">“</div><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>{testimonials[active].quote}</blockquote><footer><div className="review-avatar">{testimonials[active].name[0]}</div><div><strong>{testimonials[active].name}</strong><span>{testimonials[active].meta}</span></div></footer>
            </motion.article>
          </AnimatePresence>
          <div className="review-dots">{testimonials.map((item, index) => <button key={item.name} type="button" aria-label={`Show review ${index + 1}`} aria-current={active === index} onClick={() => setActive(index)} />)}</div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const reduceMotion = useReducedMotion();
  return (
    <section className="section section--soft" id="faqs">
      <div className="container faq-grid">
        <div className="faq-intro"><SectionHeading eyebrow="Common questions" align="left" title={<>Everything customers usually <span className="accent-text">ask first.</span></>} text="The FAQ content is data-driven, so it can double as practical local SEO content once tailored to your business." /><a className="button button--outline" href="#contact">Ask a question <ArrowRight size={17} /></a></div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={faq.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}><span>{faq.question}</span><motion.span animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} /></motion.span></button>
                <AnimatePresence initial={false}>{isOpen && <motion.div className="faq-answer" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.28 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2>Tell us what needs doing. We’ll take it from there.</h2>
          <p>Use the form for non-emergency enquiries or call directly if you need urgent help.</p>
          <div className="contact-details">
            <a href={`tel:${siteConfig.phoneHref}`}><span><Phone /></span><div><small>Call us</small><strong>{siteConfig.phoneDisplay}</strong></div></a>
            <div><span><MapPin /></span><div><small>Service area</small><strong>{siteConfig.serviceArea}</strong></div></div>
          </div>
        </div>
        <div className="contact-form-card"><QuoteForm /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo light /><p>A flexible UK electrician website starter for domestic and commercial electrical contractors.</p><a href={`tel:${siteConfig.phoneHref}`}><Phone size={17} /> {siteConfig.phoneDisplay}</a></div>
        <div><h3>Services</h3>{footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</div>
        <div><h3>Company</h3>{navigation.slice(1).map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</div>
        <div><h3>Coverage</h3><p>{siteConfig.serviceArea}</p><p>Mon–Fri: 08:00–18:00<br />Priority call-outs available</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand} {siteConfig.brandSuffix}. All rights reserved.</span><span>Template: replace demo claims, credentials and contact details before launch.</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Values />
        <About />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-call" href={`tel:${siteConfig.phoneHref}`} aria-label={`Call ${siteConfig.phoneDisplay}`}><Phone size={18} /><span>Call now</span></a>
    </>
  );
}
