import { Link } from '../router.jsx';
import { DIVISIONS, waLink } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Icon from '../components/Icon.jsx';
import NotFound from './NotFound.jsx';
import useTitle from '../useTitle.js';

export default function DivisionDetail({ slug }) {
  const index = DIVISIONS.findIndex((d) => d.slug === slug);
  const d = DIVISIONS[index];
  useTitle(d ? `${d.name} | Bermutex Investment Limited` : 'Page not found | Bermutex', d?.intro);
  if (!d) return <NotFound />;

  const prev = DIVISIONS[(index - 1 + DIVISIONS.length) % DIVISIONS.length];
  const next = DIVISIONS[(index + 1) % DIVISIONS.length];
  const enquiry = `Hello Bermutex Investment Limited, I would like to make an enquiry about your ${d.name} services.`;

  return (
    <>
      <PageHero
        eyebrow={`Division ${d.number}`}
        title={d.name}
        intro={d.tagline}
        crumbs={[{ label: 'Divisions', to: '/divisions' }, { label: d.shortName }]}
      />

      <section className="section">
        <div className="container two-col">
          <Reveal>
            <span className="why-icon lg"><Icon name={d.icon} size={30} /></span>
            <h2 className="display-md" style={{ marginTop: 20 }}>Overview</h2>
          </Reveal>
          <Reveal delay={100} className="prose">
            <p>{d.intro}</p>
            <a className="btn btn-whatsapp" href={waLink(enquiry)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> Enquire on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section why">
        <div className="blob blob-why" aria-hidden="true" />
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Services</span>
            <h2 className="display-md">What this division offers</h2>
          </Reveal>
          <div className="service-grid">
            {d.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} className="service-card glass">
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {d.gallery && (
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Gallery</span>
              <h2 className="display-md">{d.galleryTitle}</h2>
              {d.galleryIntro && <p className="gallery-intro">{d.galleryIntro}</p>}
            </Reveal>
            <div className="photo-gallery">
              {d.gallery.map((g, i) => (
                <Reveal key={g.src} delay={(i % 3) * 90} className="photo-tile">
                  <img src={g.src} alt={g.alt} loading="lazy" width="640" height="480" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section pager-section">
        <div className="container div-pager">
          <Link to={`/divisions/${prev.slug}`} className="pager-link glass">
            <Icon name="arrowLeft" size={20} />
            <span><em>Previous division</em>{prev.shortName}</span>
          </Link>
          <Link to={`/divisions/${next.slug}`} className="pager-link glass right">
            <span><em>Next division</em>{next.shortName}</span>
            <Icon name="arrowRight" size={20} />
          </Link>
        </div>
      </section>

      <CtaBand title={`Need ${d.shortName.toLowerCase()} services?`} message={enquiry} />
    </>
  );
}
