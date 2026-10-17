import { Link } from '../router.jsx';
import { waLink } from '../data/content.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function CtaBand({
  title = 'Have a project in mind? Let’s talk.',
  text = 'Send us a message on WhatsApp and our team will respond promptly.',
  message,
  secondary,
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal className="cta-card">
          <div className="blob blob-cta" aria-hidden="true" />
          <div className="cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-gold" href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> Chat on WhatsApp
            </a>
            {secondary && (
              <Link to={secondary.to} className="btn btn-outline-light">
                {secondary.label} <Icon name="arrowRight" size={18} />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
