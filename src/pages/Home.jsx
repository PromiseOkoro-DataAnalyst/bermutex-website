import { Link } from '../router.jsx';
import { DIVISIONS, VALUES, LEADERS, ENGAGEMENT, CONSTRUCTION_FEATURE, waLink } from '../data/content.js';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import DivisionRows from '../components/DivisionRows.jsx';
import CtaBand from '../components/CtaBand.jsx';
import StaffSection from '../components/StaffSection.jsx';
import useTitle from '../useTitle.js';

export default function Home() {
  useTitle('Bermutex Investment Limited | Diversified Investment Group, Umuahia');

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="blob blob-a" aria-hidden="true" />
        <div className="blob blob-b" aria-hidden="true" />
        <div className="blob blob-c" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill anim-up">Umuahia, Abia State · Serving Nigeria</span>
            <h1 className="display hero-title anim-up d1">
              Investing in<br />places that <span className="gold-text">work.</span>
            </h1>
            <p className="lead anim-up d2">
              Property, environment, agriculture, marketing and energy. Bermutex Investment Limited brings five
              specialist divisions together under one dependable name.
            </p>
            <div className="btn-row anim-up d3">
              <a
                className="btn btn-primary"
                href={waLink('Hello Bermutex Investment Limited, I would like to request a quote.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Quote
              </a>
              <Link to="/divisions" className="btn btn-ghost">Our Divisions</Link>
            </div>
          </div>

          <div className="hero-visual anim-fade d2" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="hero-card glass">
              <img src="/images/mark.png" alt="" className="hero-mark" />
              <div className="hero-card-title">5 Divisions</div>
              <div className="hero-card-sub">One standard of delivery</div>
            </div>
            {DIVISIONS.map((d, i) => (
              <div key={d.slug} className={`float-chip glass chip-${i + 1}`}>
                <span className="chip-icon"><Icon name={d.icon} size={18} /></span>
                {d.shortName}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section className="about-band">
        <div className="container about-band-grid">
          <Reveal className="about-band-head">
            <span className="eyebrow light">About Bermutex</span>
            <h2>A diversified group with deep local roots.</h2>
            <Link to="/about" className="text-link light">Learn more about us <Icon name="arrowRight" size={18} /></Link>
          </Reveal>
          <Reveal delay={80} className="mvv glass-dark">
            <h3>Our Mission</h3>
            <p>To deliver dependable services that build stronger communities, cleaner cities and lasting value for our clients.</p>
          </Reveal>
          <Reveal delay={160} className="mvv glass-dark">
            <h3>Our Vision</h3>
            <p>To be one of Nigeria&rsquo;s most trusted diversified groups, known for integrity and work done right.</p>
          </Reveal>
          <Reveal delay={240} className="mvv glass-dark">
            <h3>Our Values</h3>
            <p>{VALUES.map((v) => v.title).join(', ').replace(/, ([^,]*)$/, ' and $1')} in every division.</p>
          </Reveal>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head split">
            <h2 className="display-md">What we do</h2>
            <p>Choose a division to see its full range of services.</p>
          </Reveal>
          <DivisionRows />
        </div>
      </section>

      {/* CONSTRUCTION HIGHLIGHT */}
      <section className="section engagement-section construction-feature">
        <div className="container">
          <Reveal className="engagement">
            <figure className="engagement-media">
              <img src={CONSTRUCTION_FEATURE.photo} alt={CONSTRUCTION_FEATURE.alt} loading="lazy" />
            </figure>
            <div className="engagement-copy glass">
              <span className="eyebrow">{CONSTRUCTION_FEATURE.eyebrow}</span>
              <h2>{CONSTRUCTION_FEATURE.title}</h2>
              <p className="engagement-caption">{CONSTRUCTION_FEATURE.text}</p>
              <Link to={CONSTRUCTION_FEATURE.to} className="text-link">{CONSTRUCTION_FEATURE.linkLabel} <Icon name="arrowRight" size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why">
        <div className="blob blob-why" aria-hidden="true" />
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why Bermutex</span>
            <h2 className="display-md">Built on trust, delivered with care</h2>
          </Reveal>
          <div className="why-grid">
            {[
              { icon: 'layers', title: 'One partner, many services', text: 'Handle property, environmental, agro and business needs through a single trusted company.' },
              { icon: 'shield', title: 'Integrity first', text: 'Transparent pricing, honest timelines and leadership with strong ethical standing.' },
              { icon: 'users', title: 'Experienced leadership', text: 'Guided by proven experience in public administration, environmental management and corporate finance.' },
              { icon: 'clock', title: 'Responsive service', text: 'Reach us directly on WhatsApp and get a fast, personal response.' },
            ].map((w, i) => (
              <Reveal key={w.title} delay={i * 90} className="why-card glass">
                <span className="why-icon"><Icon name={w.icon} size={24} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="section leadership-section">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <span className="eyebrow">Our Leadership</span>
              <h2 className="display-md">The people behind Bermutex</h2>
            </div>
            <Link to="/leadership" className="text-link">Meet our leadership <Icon name="arrowRight" size={18} /></Link>
          </Reveal>
          <div className="leader-teasers">
            {LEADERS.map((l, i) => (
              <Reveal key={l.id} delay={i * 110}>
                <Link to="/leadership" className="leader-teaser glass">
                  <img src={l.spreads[0].photo} alt={l.name} style={{ objectPosition: l.spreads[0].photoPos }} />
                  <span className="lt-body">
                    <span className={`fb-badge ${{ CEO: 'navy', MD: 'outline', CFO: 'gold' }[l.badge] || 'navy'}`}>{l.badge}</span>
                    <strong>{l.name}</strong>
                    <em>{l.role}</em>
                    <span className="lt-more">Read profile <Icon name="arrowRight" size={16} /></span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF */}
      <StaffSection />

      {/* ENGAGEMENT HIGHLIGHT */}
      <section className="section engagement-section">
        <div className="container">
          <Reveal className="engagement">
            <figure className="engagement-media">
              <img src={ENGAGEMENT.photo} alt={ENGAGEMENT.caption} loading="lazy" />
            </figure>
            <div className="engagement-copy glass">
              <span className="eyebrow">Partnerships &amp; Engagements</span>
              <h2>Building relationships beyond our borders</h2>
              <p className="engagement-caption">{ENGAGEMENT.caption}.</p>
              <Link to="/about" className="text-link">More about Bermutex <Icon name="arrowRight" size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Start your project today"
        text="Tell us what you need and our team will respond promptly."
        secondary={{ to: '/contact', label: 'Contact page' }}
      />
    </>
  );
}
