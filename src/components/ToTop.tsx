import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './icons';

export function ToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });

  return (
    <button
      className={`to-top${show ? ' show' : ''}`}
      onClick={goTop}
      aria-label="Back to top"
    >
      <ArrowUpIcon size={20} />
    </button>
  );
}
