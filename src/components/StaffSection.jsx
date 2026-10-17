import { STAFF } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function StaffSection() {
  return (
    <section className="section staff-section">
      <div className="blob blob-staff" aria-hidden="true" />
      <div className="container staff-grid">
        <Reveal className="staff-copy">
          <span className="eyebrow">{STAFF.eyebrow}</span>
          <h2 className="display-md">{STAFF.title}</h2>
          <p className="lead">{STAFF.text}</p>
        </Reveal>
        <div className="staff-mosaic">
          {STAFF.photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 90} className={`staff-photo sp-${i + 1}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
