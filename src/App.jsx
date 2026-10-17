import { Router, useRouter } from './router.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Divisions from './pages/Divisions.jsx';
import DivisionDetail from './pages/DivisionDetail.jsx';
import Leadership from './pages/Leadership.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function Routes() {
  const { path } = useRouter();
  const clean = path.replace(/\/+$/, '') || '/';

  let page;
  if (clean === '/') page = <Home />;
  else if (clean === '/about') page = <About />;
  else if (clean === '/divisions') page = <Divisions />;
  else if (clean.startsWith('/divisions/')) page = <DivisionDetail slug={clean.split('/')[2]} />;
  else if (clean === '/leadership') page = <Leadership />;
  else if (clean === '/contact') page = <Contact />;
  else page = <NotFound />;

  // Keyed by path so each page plays its entrance animation.
  return (
    <main key={clean} className="page-enter">
      {page}
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}
