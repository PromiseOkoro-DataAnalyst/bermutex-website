import { Link } from '../router.jsx';
import { DIVISIONS, VALUES, ENGAGEMENT } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import StaffSection from '../components/StaffSection.jsx';
import Icon from '../components/Icon.jsx';
import useTitle from '../useTitle.js';

export default function About() {
  useTitle('About Us | Bermutex Investment Limited');

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="One trusted group. Many ways to deliver."
        intro="Bermutex Investment Limited is a diversified Nigerian company with interests across the built environment, the natural environment and the wider economy."
        crumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="display-md">Serving communities and businesses from Umuahia</h2>
          </Reveal>
          <Reveal delay={100} className="prose">
            <p>
              We develop and manage property, keep communities clean and safe, bring agricultural produce to market,
              help businesses grow and support the energy sector. Each of our five divisions is run by people who know
              their field, and all of them share the same commitment to quality.
            </p>
            <p>
              Clients choose Bermutex because they can rely on one accountable partner for a wide range of needs, from
              a single cleaning contract to a full property development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section engagement-section tight">
        <div className="container">
          <Reveal className="engagement">
            <figure className="engagement-media">
              <img src={ENGAGEMENT.photo} alt={ENGAGEMENT.caption} loading="lazy" />
            </figure>
            <div className="engagement-copy glass">
              <span className="eyebrow">Partnerships &amp; Engagements</span>
              <h2>Building relationships beyond our borders</h2>
              <p className="engagement-caption">{ENGAGEMENT.caption}.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-band">
        <div className="container about-band-grid three">
          <Reveal className="mvv glass-dark">
            <h3>Our Mission</h3>
            <p>To deliver dependable services that build stronger communities, cleaner cities and lasting value for our clients.</p>
          </Reveal>
          <Reveal delay={90} className="mvv glass-dark">
            <h3>Our Vision</h3>
            <p>To be one of Nigeria&rsquo;s most trusted diversified groups, known for integrity and work done right.</p>
          </Reveal>
          <Reveal delay={180} className="mvv glass-dark">
            <h3>Our Promise</h3>
            <p>Clear communication, fair pricing and work completed properly the first time.</p>
          </Reveal>
        </div>
      </section>

      <section className="section why">
        <div className="blob blob-why" aria-hidden="true" />
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Core values</span>
            <h2 className="display-md">What guides our work</h2>
          </Reveal>
          <div className="why-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="why-card glass">
                <span className="why-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head split">
            <h2 className="display-md">Our five divisions</h2>
            <Link to="/divisions" className="text-link">View all divisions <Icon name="arrowRight" size={18} /></Link>
          </Reveal>
          <div className="mini-div-grid">
            {DIVISIONS.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <Link to={`/divisions/${d.slug}`} className="mini-div glass">
                  <span className="why-icon"><Icon name={d.icon} size={22} /></span>
                  <span>{d.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StaffSection />

      <CtaBand />
    </>
  );
}
