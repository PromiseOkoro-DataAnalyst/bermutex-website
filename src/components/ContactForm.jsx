import { useState } from 'react';
import { DIVISIONS, waLink } from '../data/content.js';
import Icon from './Icon.jsx';

// Builds a WhatsApp message from the form and opens WhatsApp with it ready to send.
export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, message: '' });
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please enter your name and a short message.');
      return;
    }
    setError('');
    const lines = [
      'Hello Bermutex Investment Limited,',
      '',
      `My name is ${form.name.trim()}.`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      form.service ? `Service of interest: ${form.service}` : null,
      '',
      form.message.trim(),
      '',
      'Sent from the Bermutex website.',
    ].filter((l) => l !== null);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="contact-form glass" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          Full name
          <input type="text" value={form.name} onChange={update('name')} placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input type="tel" value={form.phone} onChange={update('phone')} placeholder="080..." autoComplete="tel" />
        </label>
      </div>
      <label>
        Service needed
        <select value={form.service} onChange={update('service')}>
          <option value="">Select a division</option>
          {DIVISIONS.map((d) => (
            <option key={d.slug} value={d.name}>
              {d.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </label>
      <label>
        Message
        <textarea rows={5} value={form.message} onChange={update('message')} placeholder="Tell us about your project" required />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-whatsapp btn-block">
        <Icon name="whatsapp" size={20} /> Send via WhatsApp
      </button>
      <p className="form-note">This opens WhatsApp with your message ready to send.</p>
    </form>
  );
}
