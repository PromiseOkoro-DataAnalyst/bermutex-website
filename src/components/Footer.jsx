import { Link } from '../router.jsx';
import { COMPANY, DIVISIONS, waLink, mailLink } from '../data/content.js';
import Icon from './Icon.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <img src="/images/mark-white.png" alt="" className="brand-mark" />
            <span className="brand-text">
              <span className="brand-name">BERMUTEX</span>
              <span className="brand-sub">INVESTMENT LIMITED</span>
            </span>
          </div>
          <p>
            A diversified Nigerian investment group delivering across property, environment, agriculture,
            marketing and energy.
          </p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h3>Divisions</h3>
          {DIVISIONS.map((d) => (
            <Link key={d.slug} to={`/divisions/${d.slug}`}>
              {d.shortName}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Get in touch</h3>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="footer-contact">
            <Icon name="whatsapp" size={18} /> {COMPANY.phoneDisplay}
          </a>
          <a href={mailLink()} className="footer-contact">
            <Icon name="mail" size={18} /> {COMPANY.email}
          </a>
          <span className="footer-contact">
            <Icon name="pin" size={18} /> {COMPANY.location}
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
