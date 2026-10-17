import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// A small dependency-free router (History API). Vercel rewrites every path to
// index.html (see vercel.json), so deep links like /divisions/real-estate work.
// Hash mode is only used for the in-chat preview build.
const USE_HASH = typeof __HASH_ROUTER__ !== 'undefined' && __HASH_ROUTER__;

const readPath = () =>
  USE_HASH ? window.location.hash.replace(/^#/, '') || '/' : window.location.pathname;

const RouterContext = createContext({ path: '/', navigate: () => {} });

export function Router({ children }) {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener(USE_HASH ? 'hashchange' : 'popstate', onChange);
    return () => window.removeEventListener(USE_HASH ? 'hashchange' : 'popstate', onChange);
  }, []);

  const navigate = useCallback((to) => {
    if (to === readPath()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (USE_HASH) window.location.hash = to;
    else window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo(0, 0);
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

export function Link({ to, children, onClick, ...rest }) {
  const { navigate } = useRouter();
  const href = USE_HASH ? `#${to}` : to;
  const handle = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };
  return (
    <a href={href} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
