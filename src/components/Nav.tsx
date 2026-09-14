import { useEffect, useState } from 'react';
import { mobileLinks, navLinks } from '../data/content';
import { useRouter } from '../context/RouterContext';
import { ArrowRightIcon, LogoIcon } from './icons';

export function Nav() {
  const { navigate, isHome, serviceSlug } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // highlight the section currently in view when on home page
  useEffect(() => {
    if (!isHome) {
      setActive(serviceSlug ? '#services' : '');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [isHome, serviceSlug]);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a
            href="#hero"
            className="logo"
            aria-label="Apexcale — home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
          >
            <span className="logo-mark">
              <LogoIcon size={38} />
            </span>
            <span>
              Apex<b>cale</b>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href ? 'active' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a
              href="#cta"
              className="btn btn-primary btn-sm"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#cta');
              }}
            >
              Schedule a Free Call
            </a>
            <button
              className={`nav-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        {mobileLinks.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="m-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(l.href);
            }}
          >
            <small>0{i + 1}</small> {l.label}
          </a>
        ))}
        <a
          href="#cta"
          className="btn btn-primary btn-lg m-cta"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#cta');
          }}
        >
          Schedule a Free Call <ArrowRightIcon size={18} />
        </a>
      </div>
    </>
  );
}
