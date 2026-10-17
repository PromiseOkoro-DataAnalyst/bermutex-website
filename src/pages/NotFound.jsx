import { Link } from '../router.jsx';
import useTitle from '../useTitle.js';

export default function NotFound() {
  useTitle('Page not found | Bermutex Investment Limited');
  return (
    <section className="section not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="display-md">This page could not be found.</h1>
        <p className="lead">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
