import { useEffect, useRef, useState } from 'react';

/**
 * Observes an element and reports (once) when it enters the viewport.
 * Combines IntersectionObserver with a scroll/resize fallback so elements
 * are never skipped during fast scrolling.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let obs: IntersectionObserver | null = null;

    const cleanup = () => {
      obs?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };

    const activate = () => {
      if (done) return;
      done = true;
      setInView(true);
      cleanup();
    };

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // top has entered the viewport (or already scrolled past it)
      if (r.top <= vh - 30) activate();
    };

    obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && activate()),
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px', ...options },
    );
    obs.observe(el);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll(); // handles reload mid-page

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
