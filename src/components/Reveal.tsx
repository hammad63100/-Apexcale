import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'flip';

interface RevealProps {
  variant?: RevealVariant;
  /** delay in milliseconds */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Scroll-triggered reveal wrapper. Renders a div that fades/slides in
 * when scrolled into view (CSS handles the actual transition).
 */
export function Reveal({
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });

  const merged: CSSProperties = {
    ...style,
    '--d': `${delay / 1000}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal={variant}
      className={`${className}${inView ? ' in' : ''}`.trim()}
      style={merged}
    >
      {children}
    </div>
  );
}
