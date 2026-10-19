import { MANAGEMENT } from '../data/content.js';
import Reveal from './Reveal.jsx';

const initials = (name) =>
  name
    .replace(/^(Engr|Mrs|Mr|Dr|Catechist)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

// The full management team, shown as a list under the leadership photos.
export default function ManagementTeam() {
  return (
    <div className="mgmt">
      <Reveal className="mgmt-head">
        <span className="eyebrow">Management Team</span>
        <h3>The team that runs Bermutex</h3>
      </Reveal>
      <ul className="mgmt-list">
        {MANAGEMENT.map((m, i) => (
          <Reveal as="li" key={m.name} delay={(i % 4) * 70} className="mgmt-card glass">
            {m.photo ? (
              <img src={m.photo} alt="" className="mgmt-avatar" style={m.pos ? { objectPosition: m.pos } : undefined} />
            ) : (
              <span className="mgmt-avatar mgmt-initials" aria-hidden="true">{initials(m.name)}</span>
            )}
            <span className="mgmt-text">
              <strong>{m.name}</strong>
              <em>{m.role}</em>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
