import { motion, useReducedMotion } from 'framer-motion';
import { Check, LoaderCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { services, siteConfig } from '../data/siteData';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  postcode: '',
  service: '',
  message: '',
};

export default function QuoteForm({ compact = false }) {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError('Please add your name, phone number and required service.');
      return;
    }

    setState('loading');

    try {
      if (siteConfig.formEndpoint) {
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error('Could not submit your request.');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setState('success');
      setForm(initialForm);
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong. Please call us instead.');
      setState('idle');
    }
  }

  if (state === 'success') {
    return (
      <motion.div
        className={`form-success ${compact ? 'form-success--compact' : ''}`}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      >
        <span><Check size={22} /></span>
        <div>
          <strong>Request received</strong>
          <p>{siteConfig.formEndpoint ? 'We’ll be in touch shortly.' : 'Demo mode is active. Add a form endpoint to send real enquiries.'}</p>
        </div>
        <button type="button" className="text-button" onClick={() => setState('idle')}>Send another</button>
      </motion.div>
    );
  }

  return (
    <form className={`quote-form ${compact ? 'quote-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor={`${compact ? 'compact-' : ''}name`}>Name *</label>
        <input id={`${compact ? 'compact-' : ''}name`} name="name" autoComplete="name" value={form.name} onChange={updateField} placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor={`${compact ? 'compact-' : ''}phone`}>Phone *</label>
        <input id={`${compact ? 'compact-' : ''}phone`} name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} placeholder="Phone number" />
      </div>
      {!compact && (
        <>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} placeholder="Email address" />
          </div>
          <div className="field">
            <label htmlFor="postcode">Postcode</label>
            <input id="postcode" name="postcode" autoComplete="postal-code" value={form.postcode} onChange={updateField} placeholder="e.g. SW1A 1AA" />
          </div>
        </>
      )}
      <div className="field">
        <label htmlFor={`${compact ? 'compact-' : ''}service`}>Service *</label>
        <select id={`${compact ? 'compact-' : ''}service`} name="service" value={form.service} onChange={updateField}>
          <option value="">Choose a service</option>
          {services.map((service) => <option key={service.title}>{service.title}</option>)}
        </select>
      </div>
      <div className="field field--message">
        <label htmlFor={`${compact ? 'compact-' : ''}message`}>Job details</label>
        <textarea id={`${compact ? 'compact-' : ''}message`} name="message" value={form.message} onChange={updateField} placeholder="Tell us what needs doing…" rows={compact ? 1 : 4} />
      </div>
      <button className="button button--primary quote-form__submit" type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? <LoaderCircle className="spin" size={18} /> : <Send size={17} />}
        {state === 'loading' ? 'Sending…' : 'Get my quote'}
      </button>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
    </form>
  );
}
