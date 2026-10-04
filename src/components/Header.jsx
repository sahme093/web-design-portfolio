import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { EMAIL, MAILTO } from '../constants.js';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="Salma Korashy Web Design, home">
        <Logo />
        <span className="brand__text">
          <span className="brand__name">SALMA KORASHY</span>
          <span className="brand__sub">WEB DESIGN</span>
        </span>
      </Link>

      <nav className="nav" aria-label="Main">
        {NAV.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className="nav__link">
            {label.toUpperCase()}
          </NavLink>
        ))}
        <a href={MAILTO} className="btn btn--ink btn--sm">EMAIL ME</a>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <span className="menu-toggle__long" />
        <span className="menu-toggle__short" />
      </button>

      {open && (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu__top">
            <Link to="/" className="brand brand--inverted" onClick={() => setOpen(false)}>
              <Logo inverted />
              <span className="brand__name">SALMA KORASHY</span>
            </Link>
            <button type="button" className="mobile-menu__close" aria-label="Close menu" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav className="mobile-menu__nav" aria-label="Mobile">
            {NAV.map(({ to, label, end }, i) => (
              <NavLink key={to} to={to} end={end} className="mobile-menu__link">
                <span>{label}</span>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              </NavLink>
            ))}
          </nav>
          <a href={MAILTO} className="mobile-menu__email">
            <span className="eyebrow-sm">EMAIL ME</span>
            <span>{EMAIL}</span>
          </a>
        </div>
      )}
    </header>
  );
}
