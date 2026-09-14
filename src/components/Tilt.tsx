import type { HTMLAttributes, ReactNode } from 'react';
import { useTilt } from '../hooks/useTilt';

interface TiltProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

/** Wrapper that applies a 3D tilt-on-hover effect (adds the `tilt` class). */
export function Tilt({ children, className = '', ...rest }: TiltProps) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <div ref={ref} className={`tilt ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
