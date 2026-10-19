import { CAROUSEL } from '../data/content.js';
import Reveal from './Reveal.jsx';

// A continuous strip of photo cards that glides across the screen.
// The list is rendered twice so the loop is seamless; hovering or
// touching the strip pauses it.
// Mix the photos so the labels alternate (CEO, MD, DOF, STAFF, ...).
function interleave(list) {
  const groups = [];
  list.forEach((item) => {
    let g = groups.find((x) => x.label === item.label);
    if (!g) groups.push((g = { label: item.label, items: [] }));
    g.items.push(item);
  });
  const out = [];
  for (let i = 0; out.length < list.length; i += 1) {
    groups.forEach((g) => g.items[i] && out.push(g.items[i]));
  }
  return out;
}

const ORDERED = interleave(CAROUSEL);

export default function PhotoCarousel() {
  const cards = [...ORDERED, ...ORDERED];

  return (
    <section className="section carousel-section">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <span className="eyebrow">In Pictures</span>
            <h2 className="display-md">Bermutex at a glance</h2>
          </div>
          <p>Our leadership, our staff and our equipment at work.</p>
        </Reveal>
      </div>

      <div className="marquee" role="region" aria-label="Bermutex photos">
        <ul className="marquee-track" style={{ '--count': ORDERED.length }}>
          {cards.map((s, i) => (
            <li key={`${s.src}-${i}`} className="mq-card" aria-hidden={i >= ORDERED.length}>
              <img
                src={s.src}
                alt={i >= ORDERED.length ? '' : s.alt}
                loading="lazy"
                style={s.pos ? { objectPosition: s.pos } : undefined}
              />
              <span className="mq-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
