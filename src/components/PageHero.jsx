import { Link } from '../router.jsx';

export default function PageHero({ eyebrow, title, intro, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="container page-hero-inner">
        {crumbs.length > 0 && (
          <nav className="crumbs anim-up" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <span aria-hidden="true"> / </span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow anim-up d1">{eyebrow}</span>}
        <h1 className="display anim-up d2">{title}</h1>
        {intro && <p className="lead anim-up d3">{intro}</p>}
      </div>
    </section>
  );
}
