import { COMPANY, waLink, mailLink } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Icon from '../components/Icon.jsx';
import useTitle from '../useTitle.js';

export default function Contact() {
  useTitle('Contact Us | Bermutex Investment Limited');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        intro="Send us a message and it opens straight in WhatsApp, ready to send."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-copy">
            <div className="contact-cards">
              <a className="contact-card glass" href={waLink()} target="_blank" rel="noopener noreferrer">
                <span className="why-icon"><Icon name="whatsapp" size={22} /></span>
                <span><em>WhatsApp &amp; Calls</em><strong>{COMPANY.phoneDisplay}</strong></span>
              </a>
              <a className="contact-card glass" href={mailLink()}>
                <span className="why-icon"><Icon name="mail" size={22} /></span>
                <span><em>Email</em><strong className="contact-email">{COMPANY.email}</strong></span>
              </a>
              <div className="contact-card glass">
                <span className="why-icon"><Icon name="pin" size={22} /></span>
                <span><em>Location</em><strong>{COMPANY.location}</strong></span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
