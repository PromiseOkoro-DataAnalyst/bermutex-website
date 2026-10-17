import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LEADERS } from '../data/content.js';
import Icon from './Icon.jsx';

const FLIP_MS = 950;
const LightboxContext = createContext(() => {});
const BADGE_TONE = { CEO: 'navy', MD: 'outline', CFO: 'gold' };

function useMedia(query) {
  const get = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
  const [match, setMatch] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return match;
}

// Flatten every leader's spreads into one ordered list of spreads.
const SPREADS = LEADERS.flatMap((leader) =>
  leader.spreads.map((s, part) => ({ ...s, leader, part, total: leader.spreads.length }))
);

function Blocks({ blocks }) {
  const open = useContext(LightboxContext);
  return blocks.map((b, i) => {
    switch (b.type) {
      case 'eyebrow':
        return <span key={i} className="fb-eyebrow">{b.text}</span>;
      case 'title':
        return <h3 key={i} className="fb-title">{b.text}</h3>;
      case 'h':
        return <h4 key={i} className="fb-h">{b.text}</h4>;
      case 'p':
        return <p key={i} className="fb-p">{b.text}</p>;
      case 'list':
        return (
          <ul key={i} className="fb-list">
            {b.items.map((t) => (
              <li key={t}><Icon name="check" size={16} stroke={2.4} />{t}</li>
            ))}
          </ul>
        );
      case 'kv':
        return (
          <dl key={i} className="fb-kv">
            {b.items.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        );
      case 'gallery':
        return (
          <div key={i} className={`fb-gallery ${b.items.length > 4 ? 'three' : ''}`}>
            {b.items.map((g) => (
              <button key={g.src} type="button" className="fb-thumb" onClick={() => open(g)} aria-label={`View photo: ${g.alt}`}>
                <img src={g.src} alt="" loading="lazy" style={g.pos ? { objectPosition: g.pos } : undefined} />
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  });
}

function PhotoPage({ spread, pageNo }) {
  if (!spread) return <div className="fb-page fb-left fb-blank" />;
  const { leader } = spread;
  return (
    <div className="fb-page fb-left">
      <div className="fb-photo-frame">
        <img
          src={spread.photo}
          alt={spread.caption}
          className="fb-photo"
          style={{ objectPosition: spread.photoPos, transform: spread.photoZoom ? `scale(${spread.photoZoom})` : undefined, transformOrigin: spread.photoPos }}
          draggable="false"
        />
      </div>
      <div className="fb-nameblock">
        <span className={`fb-badge ${BADGE_TONE[leader.badge] || 'navy'}`}>{leader.badge}</span>
        <span className="fb-np-name">{leader.name}</span>
        <span className="fb-np-role">{leader.role}</span>
      </div>
      <span className="fb-pageno left">{pageNo}</span>
    </div>
  );
}

function TextPage({ spread, pageNo }) {
  if (!spread) return <div className="fb-page fb-right fb-blank" />;
  const { leader, part, total } = spread;
  return (
    <div className="fb-page fb-right">
      <div className="fb-text">
        {part > 0 && (
          <span className="fb-running">
            {leader.name} <span>· continued</span>
          </span>
        )}
        <Blocks blocks={spread.blocks} />
      </div>
      <div className="fb-foot">
        <span className="fb-progress" aria-hidden="true">
          {Array.from({ length: total }).map((_, i) => (
            <i key={i} className={i === part ? 'on' : ''} />
          ))}
        </span>
        <span className="fb-foot-note">
          {part < total - 1 ? 'Turn the page to continue' : 'End of profile'}
        </span>
        <span className="fb-pageno right">{pageNo}</span>
      </div>
    </div>
  );
}

// On phones each spread is one page: photo on top, write-up below.
function SinglePage({ spread, index }) {
  if (!spread) return <div className="fb-single fb-blank" />;
  return (
    <div className="fb-single">
      <PhotoPage spread={spread} pageNo={index * 2 + 1} />
      <TextPage spread={spread} pageNo={index * 2 + 2} />
    </div>
  );
}

export default function FlipBook() {
  const isMobile = useMedia('(max-width: 860px)');
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');
  const [cur, setCur] = useState(0);
  const [flip, setFlip] = useState(null); // { dir: 'next' | 'back', target }
  const timer = useRef(null);
  const touch = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onEsc = (e) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [lightbox]);

  const last = SPREADS.length - 1;

  const go = useCallback(
    (target) => {
      if (flip || target === cur || target < 0 || target > last) return;
      const dir = target > cur ? 'next' : 'back';
      if (reduceMotion) {
        setCur(target);
        return;
      }
      setFlip({ dir, target });
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setCur(target);
        setFlip(null);
      }, FLIP_MS);
    },
    [flip, cur, last, reduceMotion]
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touch.current = null;
  };

  const leaderStarts = useMemo(
    () => LEADERS.map((l) => ({ leader: l, start: SPREADS.findIndex((s) => s.leader.id === l.id) })),
    []
  );
  const activeLeader = SPREADS[flip ? flip.target : cur].leader.id;

  const t = flip?.target;
  const S = (i) => SPREADS[i];

  let stage;
  if (!isMobile) {
    // Two-page spread. While flipping forward, the right-hand leaf turns over
    // to the left, revealing the target spread underneath; flipping back is the mirror.
    const leftUnder = flip?.dir === 'back' ? t : cur;
    const rightUnder = flip?.dir === 'next' ? t : cur;
    stage = (
      <div className="fb-spread">
        <PhotoPage spread={S(leftUnder)} pageNo={leftUnder * 2 + 1} />
        <TextPage spread={S(rightUnder)} pageNo={rightUnder * 2 + 2} />
        <div className="fb-spine" aria-hidden="true" />
        {flip?.dir === 'next' && (
          <div className="fb-leaf leaf-next" aria-hidden="true">
            <div className="fb-face front"><TextPage spread={S(cur)} pageNo={cur * 2 + 2} /><span className="fb-sheen" /></div>
            <div className="fb-face back"><PhotoPage spread={S(t)} pageNo={t * 2 + 1} /><span className="fb-sheen" /></div>
          </div>
        )}
        {flip?.dir === 'back' && (
          <div className="fb-leaf leaf-back" aria-hidden="true">
            <div className="fb-face front"><PhotoPage spread={S(cur)} pageNo={cur * 2 + 1} /><span className="fb-sheen" /></div>
            <div className="fb-face back"><TextPage spread={S(t)} pageNo={t * 2 + 2} /><span className="fb-sheen" /></div>
          </div>
        )}
      </div>
    );
  } else {
    const under = flip?.dir === 'next' ? t : cur;
    stage = (
      <div className="fb-spread single">
        <SinglePage spread={S(under)} index={under} />
        {flip?.dir === 'next' && (
          <div className="fb-leaf leaf-single-out" aria-hidden="true">
            <div className="fb-face front"><SinglePage spread={S(cur)} index={cur} /><span className="fb-sheen" /></div>
            <div className="fb-face back fb-paper-back" />
          </div>
        )}
        {flip?.dir === 'back' && (
          <div className="fb-leaf leaf-single-in" aria-hidden="true">
            <div className="fb-face front"><SinglePage spread={S(t)} index={t} /><span className="fb-sheen" /></div>
            <div className="fb-face back fb-paper-back" />
          </div>
        )}
      </div>
    );
  }

  return (
    <LightboxContext.Provider value={setLightbox}>
    <div className="flipbook">
      <div className="fb-tabs" role="tablist" aria-label="Choose a leader">
        {leaderStarts.map(({ leader, start }) => (
          <button
            key={leader.id}
            type="button"
            role="tab"
            aria-selected={activeLeader === leader.id}
            className={`fb-tab ${activeLeader === leader.id ? 'active' : ''}`}
            onClick={() => go(start)}
          >
            <img src={leader.spreads[0].photo} alt="" />
            <span>
              <strong>{leader.name}</strong>
              <em>{leader.role}</em>
            </span>
            <span className="fb-tab-badge" aria-hidden="true">{leader.badge}</span>
          </button>
        ))}
      </div>

      <div
        className={`fb-book ${flip ? 'is-flipping' : ''}`}
        tabIndex={0}
        role="region"
        aria-roledescription="flip book"
        aria-label="Leadership profiles. Use the left and right arrow keys to turn pages."
        onKeyDown={onKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {stage}
        <button type="button" className="fb-side prev" onClick={prev} disabled={cur === 0 || !!flip} aria-label="Previous page">
          <Icon name="arrowLeft" size={22} />
        </button>
        <button type="button" className="fb-side next" onClick={next} disabled={cur === last || !!flip} aria-label="Next page">
          <Icon name="arrowRight" size={22} />
        </button>
      </div>

      <div className="fb-controls glass">
        <button type="button" className="fb-btn" onClick={prev} disabled={cur === 0 || !!flip} aria-label="Previous page">
          <Icon name="arrowLeft" size={20} /> <span>Previous</span>
        </button>
        <span className="fb-counter" aria-live="polite">
          Page {(flip ? t : cur) + 1} of {SPREADS.length}
        </span>
        <button type="button" className="fb-btn primary" onClick={next} disabled={cur === last || !!flip} aria-label="Next page">
          <span>Next page</span> <Icon name="arrowRight" size={20} />
        </button>
      </div>
      {lightbox && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}>
          <button type="button" className="lightbox-close" aria-label="Close photo" onClick={() => setLightbox(null)} ref={(el) => el && el.focus({ preventScroll: true })}>
            <Icon name="close" size={24} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>{lightbox.alt}</figcaption>
          </figure>
        </div>,
        document.body
      )}
    </div>
    </LightboxContext.Provider>
  );
}
