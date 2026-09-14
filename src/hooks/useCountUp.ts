import { useEffect, useState } from 'react';

interface CountUpOptions {
  value: number;
  run: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Animated count-up that starts when `run` becomes true. */
export function useCountUp({
  value,
  run,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1900,
}: CountUpOptions) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value, duration]);

  const text =
    prefix +
    (decimals ? display.toFixed(decimals) : Math.round(display).toString()) +
    suffix;

  return text;
}
