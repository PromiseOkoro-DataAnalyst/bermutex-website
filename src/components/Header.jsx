import { useEffect, useState } from 'react';
import { Link, useRouter } from '../router.jsx';
import { waLink } from '../data/content.js';
import Icon from './Icon.jsx';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/divisions', label: 'Divisions' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const isActive = (to) => (to === '/' ? path === '/' : path.startsWith(to));

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Bermutex Investment Limited, home">
          <img src="/images/mark.png" alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">BERMUTEX</span>
            <span className="brand-sub">INVESTMENT LIMITED</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className={isActive(item.to) ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="btn btn-primary btn-sm header-cta"
          href={waLink('Hello Bermutex Investment Limited, I would like to request a quote.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Quote
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <div className="mobile-nav" hidden={!open}>
        {NAV.map((item) => (
          <Link key={item.to} to={item.to} className={isActive(item.to) ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
        <a
          className="btn btn-primary"
          href={waLink('Hello Bermutex Investment Limited, I would like to request a quote.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}
