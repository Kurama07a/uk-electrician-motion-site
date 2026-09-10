import { motion, useReducedMotion } from 'framer-motion';
import { Check, ImagePlus, LoaderCircle, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { services, siteConfig } from '../data/siteData';

const initialForm = { name: '', phone: '', email: '', postcode: '', service: '', message: '', urgency: '' };

export default function QuoteForm() {
  const reduceMotion = useReducedMotion();
  const fileRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');
  const updateField = ({ target: { name, value } }) => setForm((current) => ({ ...current, [name]: value }));

  async function handleSubmit(event) {
    event.preventDefault(); setError('');
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim() || !form.urgency) { setError('Please add your name, phone number, job details and preferred timescale.'); return; }
    setState('loading');
    try {
      if (siteConfig.formEndpoint) { const response = await fetch(siteConfig.formEndpoint, { method: 'POST', body: new FormData(event.currentTarget) }); if (!response.ok) throw new Error('Your request could not be sent. Please try again or call us.'); }
      else await new Promise((resolve) => setTimeout(resolve, 700));
      setState('success'); setForm(initialForm); if (fileRef.current) fileRef.current.value = '';
    } catch (submitError) { setError(submitError.message || 'Your request could not be sent. Please try again or call us.'); setState('idle'); }
  }

  if (state === 'success') return <motion.div className="form-success" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><span><Check size={22} /></span><div><strong>Quote request ready</strong><p>{siteConfig.formEndpoint ? 'Thanks — we’ll get back to you about the next step.' : 'Demo mode is active. Add a form endpoint to send real enquiries.'}</p></div><button type="button" className="text-button" onClick={() => setState('idle')}>Send another request</button></motion.div>;

  return <form className="quote-form quote-form--full" onSubmit={handleSubmit} noValidate>
    <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" maxLength="100" value={form.name} onChange={updateField} placeholder="Your name" /></div>
    <div className="field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength="40" value={form.phone} onChange={updateField} placeholder="Phone number" /></div>
    <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" maxLength="120" value={form.email} onChange={updateField} placeholder="Email address" /></div>
    <div className="field"><label htmlFor="postcode">Postcode</label><input id="postcode" name="postcode" autoComplete="postal-code" maxLength="12" value={form.postcode} onChange={updateField} placeholder="e.g. SK8" /></div>
    <div className="field field--wide"><label htmlFor="service">Type of electrical work</label><select id="service" name="service" value={form.service} onChange={updateField}><option value="">Choose a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Something else</option></select></div>
    <div className="field field--wide"><label htmlFor="message">What electrical work do you need? *</label><textarea id="message" name="message" maxLength="2000" value={form.message} onChange={updateField} placeholder="Describe the work or electrical problem…" rows="5" /></div>
    <fieldset className="urgency field--wide"><legend>How soon do you need the work? *</legend><div>{['As soon as possible', 'Within the next week', 'Within the next month', 'Just getting quotes'].map((option) => <label key={option}><input type="radio" name="urgency" value={option} checked={form.urgency === option} onChange={updateField} /><span>{option}</span></label>)}</div></fieldset>
    <label className="file-field field--wide"><span><ImagePlus size={19} /> Upload photos <small>Optional · JPG, PNG or WEBP</small></span><input ref={fileRef} type="file" name="photos" accept="image/jpeg,image/png,image/webp" multiple /></label>
    <button className="button button--primary quote-form__submit" type="submit" disabled={state === 'loading'}>{state === 'loading' ? <LoaderCircle className="spin" size={18} /> : <Send size={17} />}{state === 'loading' ? 'Sending request…' : 'Request my quote'}</button>
    {error && <p className="form-error" role="alert">{error}</p>}
  </form>;
}
