import { marqueeItems } from '../data/content';

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={`${item}-${i}`}>
            {item} <i />
          </span>
        ))}
      </div>
    </div>
  );
}
