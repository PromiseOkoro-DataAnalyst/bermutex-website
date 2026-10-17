import { Link } from '../router.jsx';
import { DIVISIONS } from '../data/content.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function DivisionRows() {
  return (
    <div className="division-rows">
      {DIVISIONS.map((d, i) => (
        <Reveal key={d.slug} delay={i * 70}>
          <Link to={`/divisions/${d.slug}`} className="division-row">
            <span className="dr-num">{d.number}</span>
            <span className="dr-icon"><Icon name={d.icon} size={24} /></span>
            <span className="dr-name">{d.shortName}</span>
            <span className="dr-text">{d.summary}</span>
            <span className="dr-arrow" aria-hidden="true"><Icon name="arrowRight" size={20} /></span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
