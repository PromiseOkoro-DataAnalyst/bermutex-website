import { Link } from '../router.jsx';
import { DIVISIONS } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Icon from '../components/Icon.jsx';
import useTitle from '../useTitle.js';

export default function Divisions() {
  useTitle('Our Divisions | Bermutex Investment Limited');

  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        title="Five divisions. One standard of delivery."
        intro="Explore the full range of services Bermutex Investment Limited offers across property, environment, agriculture, marketing and energy."
        crumbs={[{ label: 'Divisions' }]}
      />

      <section className="section">
        <div className="container division-cards">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 90} className="division-card glass">
              <div className="dc-top">
                <span className="why-icon lg"><Icon name={d.icon} size={28} /></span>
                <span className="dc-num">{d.number}</span>
              </div>
              <h2>{d.name}</h2>
              <p className="dc-tag">{d.tagline}</p>
              <ul className="dc-list">
                {d.services.slice(0, 5).map((s) => (
                  <li key={s.title}><Icon name="check" size={16} stroke={2.4} />{s.title}</li>
                ))}
              </ul>
              <Link to={`/divisions/${d.slug}`} className="btn btn-primary btn-sm">
                Explore division <Icon name="arrowRight" size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure which division you need?" text="Tell us about your project and we will connect you with the right team." />
    </>
  );
}
