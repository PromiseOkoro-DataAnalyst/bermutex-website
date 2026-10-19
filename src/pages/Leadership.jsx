import PageHero from '../components/PageHero.jsx';
import FlipBook from '../components/FlipBook.jsx';
import CtaBand from '../components/CtaBand.jsx';
import ManagementTeam from '../components/ManagementTeam.jsx';
import useTitle from '../useTitle.js';

export default function Leadership() {
  useTitle('Leadership | Bermutex Investment Limited');

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people behind Bermutex"
        intro="Experienced leaders in public administration, environmental management and corporate finance. Turn the pages to read each profile."
        crumbs={[{ label: 'Leadership' }]}
      />
      <section className="section leadership-section">
        <div className="container">
          <FlipBook />
          <ManagementTeam />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
